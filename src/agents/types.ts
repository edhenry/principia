/**
 * Agent Types for Principia
 *
 * Defines types for agent configuration and metadata used in dynamic prompt generation.
 * Research-focused multi-agent orchestration for CS/ML/AI research workflows.
 */

export type ModelType = 'sonnet' | 'opus' | 'haiku' | 'inherit';

/**
 * Cost tier for agent usage
 * Used to guide when to invoke expensive vs cheap agents
 */
export type AgentCost = 'FREE' | 'CHEAP' | 'EXPENSIVE';

/**
 * Agent category for routing and grouping
 * Research-focused categories mapped to scientific method phases
 */
export type AgentCategory =
  | 'discovery'       // Literature review, prior work, knowledge gathering (Archimedes)
  | 'theory'          // Theoretical foundations, proofs, formal analysis (Aristotle)
  | 'hypothesis'      // Research question generation, hypothesis formation (Darwin)
  | 'execution'       // Experiment implementation, ML code, data analysis (Turing, Galileo, Curie)
  | 'communication'   // Writing, explaining, visualization (Feynman)
  | 'critique'        // Review, falsification, methodological rigor (Popper)
  | 'coordination'    // Research workflow orchestration (Lovelace)
  | 'advisor';        // Scoping, feasibility, hidden requirements (Newton)

/**
 * Research domain specialization
 */
export type ResearchDomain =
  | 'general'         // Cross-domain research
  | 'ml'              // Machine learning
  | 'nlp'             // Natural language processing
  | 'cv'              // Computer vision
  | 'rl'              // Reinforcement learning
  | 'theory'          // Theoretical CS
  | 'systems'         // Systems and infrastructure
  | 'hci';            // Human-computer interaction

/**
 * Trigger condition for delegation
 */
export interface DelegationTrigger {
  /** Domain or area this trigger applies to */
  domain: string;
  /** Condition that triggers delegation */
  trigger: string;
}

/**
 * Metadata about an agent for dynamic prompt generation
 * This enables Lovelace to build delegation tables automatically
 */
export interface AgentPromptMetadata {
  /** Agent category */
  category: AgentCategory;
  /** Cost tier */
  cost: AgentCost;
  /** Short alias for prompts */
  promptAlias?: string;
  /** Conditions that trigger delegation to this agent */
  triggers: DelegationTrigger[];
  /** When to use this agent */
  useWhen?: string[];
  /** When NOT to use this agent */
  avoidWhen?: string[];
  /** Description for dynamic prompt building */
  promptDescription?: string;
  /** Research domains this agent specializes in */
  researchDomains?: ResearchDomain[];
}

/**
 * Base agent configuration
 */
export interface AgentConfig {
  /** Agent name/identifier */
  name: string;
  /** Short description for agent selection */
  description: string;
  /** System prompt for the agent */
  prompt: string;
  /** Tools the agent can use */
  tools: string[];
  /** Model to use (defaults to sonnet) */
  model?: ModelType;
  /** Optional metadata for dynamic prompt generation */
  metadata?: AgentPromptMetadata;
}

/**
 * Extended agent config with all optional fields
 */
export interface FullAgentConfig extends AgentConfig {
  /** Temperature setting */
  temperature?: number;
  /** Max tokens */
  maxTokens?: number;
  /** Thinking configuration (for Claude models) */
  thinking?: {
    type: 'enabled' | 'disabled';
    budgetTokens?: number;
  };
  /** Tool restrictions */
  toolRestrictions?: string[];
}

/**
 * Agent override configuration for customization
 */
export interface AgentOverrideConfig {
  /** Override model */
  model?: string;
  /** Enable/disable agent */
  enabled?: boolean;
  /** Append to prompt */
  prompt_append?: string;
  /** Override temperature */
  temperature?: number;
}

/**
 * Map of agent overrides
 */
export type AgentOverrides = Partial<Record<string, AgentOverrideConfig>>;

/**
 * Factory function signature for creating agents
 */
export type AgentFactory = (model?: string) => AgentConfig;

/**
 * Available agent descriptor for Lovelace prompt building
 */
export interface AvailableAgent {
  name: string;
  description: string;
  metadata: AgentPromptMetadata;
}

/**
 * Check if a model ID is a GPT model
 */
export function isGptModel(modelId: string): boolean {
  return modelId.toLowerCase().includes('gpt');
}

/**
 * Check if a model ID is a Claude model
 */
export function isClaudeModel(modelId: string): boolean {
  return modelId.toLowerCase().includes('claude');
}

/**
 * Get default model for a category
 * Research agents have different cost/quality tradeoffs
 */
export function getDefaultModelForCategory(category: AgentCategory): ModelType {
  switch (category) {
    case 'discovery':
      return 'sonnet';    // Balanced for literature search
    case 'theory':
      return 'opus';      // High quality for proofs and formal reasoning
    case 'hypothesis':
      return 'opus';      // High quality for creative hypothesis generation
    case 'execution':
      return 'sonnet';    // Balanced for implementation
    case 'communication':
      return 'sonnet';    // Balanced for writing
    case 'critique':
      return 'opus';      // High quality for rigorous review
    case 'coordination':
      return 'sonnet';    // Balanced for orchestration
    case 'advisor':
      return 'opus';      // High quality for strategic advice
    default:
      return 'sonnet';
  }
}

/**
 * Famous scientist names used as agent identifiers
 */
export const SCIENTIST_AGENTS = {
  ARCHIMEDES: 'archimedes',   // Literature & knowledge discovery
  ARISTOTLE: 'aristotle',     // Theoretical foundations & proofs
  GALILEO: 'galileo',         // Experiment designer
  DARWIN: 'darwin',           // Hypothesis generator
  CURIE: 'curie',             // Data scientist & analyst
  TURING: 'turing',           // ML implementation specialist
  FEYNMAN: 'feynman',         // Explainer & communicator
  POPPER: 'popper',           // Critical reviewer
  EULER: 'euler',             // Fast math & computation
  LOVELACE: 'lovelace',       // Research orchestrator
  NEWTON: 'newton',           // Pre-research consultant
} as const;

export type ScientistAgent = typeof SCIENTIST_AGENTS[keyof typeof SCIENTIST_AGENTS];
