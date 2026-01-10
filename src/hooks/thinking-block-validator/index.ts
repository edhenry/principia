/**
 * Proactive Thinking Block Validator Hook
 *
 * Prevents "Expected thinking/redacted_thinking but found tool_use" errors
 * by validating and fixing message structure BEFORE sending to Anthropic API.
 *
 * This hook runs on the "experimental.chat.messages.transform" hook point,
 * which is called before messages are converted to ModelMessage format and
 * sent to the API.
 *
 * Key differences from session-recovery hook:
 * - PROACTIVE (prevents error) vs REACTIVE (fixes after error)
 * - Runs BEFORE API call vs AFTER API error
 * - User never sees the error vs User sees error then recovery
 *
 * Ported from oh-my-opencode's thinking-block-validator hook.
 */

import type {
  MessagePart,
  MessageWithParts,
  MessagesTransformHook,
  ValidationResult
} from './types.js';

import {
  CONTENT_PART_TYPES,
  THINKING_PART_TYPES,
  THINKING_MODEL_PATTERNS,
  DEFAULT_THINKING_CONTENT,
  SYNTHETIC_THINKING_ID_PREFIX,
  HOOK_NAME
} from './constants.js';

// Re-export types and constants
export * from './types.js';
export * from './constants.js';

/**
 * Check if a model has extended thinking enabled
 * Uses patterns from think-mode/switcher.ts for consistency
 */
export function isExtendedThinkingModel(modelID: string): boolean {
  if (!modelID) return false;
  const lower = modelID.toLowerCase();

  // Check for explicit thinking/high variants (always enabled)
  if (lower.includes("thinking") || lower.endsWith("-high")) {
    return true;
  }

  // Check for thinking-capable models (claude-4 family, claude-3)
  // Aligns with THINKING_CAPABLE_MODELS in think-mode/switcher.ts
  return (
    lower.includes("claude-sonnet-4") ||
    lower.includes("claude-opus-4") ||
    lower.includes("claude-3")
  );
}

/**
 * Check if a message has any content parts (tool_use, text, or other non-thinking content)
 */
export function hasContentParts(parts: MessagePart[]): boolean {
  if (!parts || parts.length === 0) return false;

  return parts.some((part: MessagePart) => {
    const type = part.type;
    // Include tool parts and text parts (anything that's not thinking/reasoning)
    return CONTENT_PART_TYPES.includes(type as any);
  });
}

/**
 * Check if a message starts with a thinking/reasoning block
 */
export function startsWithThinkingBlock(parts: MessagePart[]): boolean {
  if (!parts || parts.length === 0) return false;

  const firstPart = parts[0];
  const type = firstPart.type;
  return THINKING_PART_TYPES.includes(type as any);
}

/**
 * Find the most recent thinking content from previous assistant messages
 */
export function findPreviousThinkingContent(
  messages: MessageWithParts[],
  currentIndex: number
): string {
  // Search backwards from current message
  for (let i = currentIndex - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.info.role !== "assistant") continue;

    // Look for thinking parts
    if (!msg.parts) continue;
    for (const part of msg.parts) {
      const type = part.type;
      if (THINKING_PART_TYPES.includes(type as any)) {
        const thinking = part.thinking || part.text;
        if (thinking && typeof thinking === "string" && thinking.trim().length > 0) {
          return thinking;
        }
      }
    }
  }

  return "";
}

/**
 * Prepend a thinking block to a message's parts array
 */
export function prependThinkingBlock(
  message: MessageWithParts,
  thinkingContent: string
): void {
  if (!message.parts) {
    message.parts = [];
  }

  // Create synthetic thinking part
  const thinkingPart: MessagePart = {
    type: "thinking",
    id: SYNTHETIC_THINKING_ID_PREFIX,
    sessionID: message.info.sessionID || "",
    messageID: message.info.id,
    thinking: thinkingContent,
    synthetic: true,
  };

  // Prepend to parts array
  message.parts.unshift(thinkingPart);
}

/**
 * Validate a single assistant message
 * Returns validation result with details
 */
export function validateMessage(
  message: MessageWithParts,
  messages: MessageWithParts[],
  index: number,
  modelID: string
): ValidationResult {
  // Only validate assistant messages
  if (message.info.role !== "assistant") {
    return { valid: true, fixed: false };
  }

  // Only validate if extended thinking might be enabled
  if (!isExtendedThinkingModel(modelID)) {
    return { valid: true, fixed: false };
  }

  // Check if message has content parts but doesn't start with thinking
  if (hasContentParts(message.parts) && !startsWithThinkingBlock(message.parts)) {
    // Find thinking content from previous turns
    const previousThinking = findPreviousThinkingContent(messages, index);

    // Prepend thinking block with content from previous turn or placeholder
    const thinkingContent = previousThinking || DEFAULT_THINKING_CONTENT;

    prependThinkingBlock(message, thinkingContent);

    return {
      valid: false,
      fixed: true,
      issue: "Assistant message has content but no thinking block",
      action: `Prepended synthetic thinking block: "${thinkingContent.substring(0, 50)}..."`
    };
  }

  return { valid: true, fixed: false };
}

/**
 * Validate and fix assistant messages that have tool_use but no thinking block
 * This is the main hook function
 */
export function createThinkingBlockValidatorHook(): MessagesTransformHook {
  return {
    "experimental.chat.messages.transform": async (_input, output) => {
      const { messages } = output;

      if (!messages || messages.length === 0) {
        return;
      }

      // Get the model info from the last user message
      let lastUserMessage: MessageWithParts | undefined;
      for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].info.role === "user") {
          lastUserMessage = messages[i];
          break;
        }
      }
      const modelID = lastUserMessage?.info?.modelID || "";

      // Only process if extended thinking might be enabled
      if (!isExtendedThinkingModel(modelID)) {
        return;
      }

      // Process all assistant messages
      let fixedCount = 0;
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i];

        // Only check assistant messages
        if (msg.info.role !== "assistant") continue;

        // Check if message has content parts but doesn't start with thinking
        if (hasContentParts(msg.parts) && !startsWithThinkingBlock(msg.parts)) {
          // Find thinking content from previous turns
          const previousThinking = findPreviousThinkingContent(messages, i);

          // Prepend thinking block with content from previous turn or placeholder
          const thinkingContent = previousThinking || DEFAULT_THINKING_CONTENT;

          prependThinkingBlock(msg, thinkingContent);
          fixedCount++;
        }
      }

      // Optional: Log validation results in development
      if (fixedCount > 0 && process.env.DEBUG_THINKING_VALIDATOR) {
        console.log(`[${HOOK_NAME}] Fixed ${fixedCount} message(s) by prepending thinking blocks`);
      }
    },
  };
}

/**
 * Validate all messages in a conversation
 * Returns array of validation results
 */
export function validateMessages(
  messages: MessageWithParts[],
  modelID: string
): ValidationResult[] {
  const results: ValidationResult[] = [];

  for (let i = 0; i < messages.length; i++) {
    const result = validateMessage(messages[i], messages, i, modelID);
    results.push(result);
  }

  return results;
}

/**
 * Get statistics about validation results
 */
export function getValidationStats(results: ValidationResult[]): {
  total: number;
  valid: number;
  fixed: number;
  issues: number;
} {
  return {
    total: results.length,
    valid: results.filter(r => r.valid && !r.fixed).length,
    fixed: results.filter(r => r.fixed).length,
    issues: results.filter(r => !r.valid).length
  };
}
