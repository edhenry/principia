/**
 * Shared types for Principia Research System
 */

export type ModelType = 'sonnet' | 'opus' | 'haiku' | 'inherit';

export interface AgentConfig {
  name: string;
  description: string;
  prompt: string;
  tools: string[];
  model?: ModelType;
}

export interface PluginConfig {
  // Agent model overrides - Principia scientist agents
  agents?: {
    // Discovery & Literature
    archimedes?: { model?: string; enabled?: boolean };
    // Theory & Foundations
    aristotle?: { model?: string; enabled?: boolean };
    // Hypothesis Generation
    darwin?: { model?: string; enabled?: boolean };
    // Experiment Design
    galileo?: { model?: string; enabled?: boolean };
    // Data Analysis
    curie?: { model?: string; enabled?: boolean };
    // ML/AI Implementation
    turing?: { model?: string; enabled?: boolean };
    // Scientific Writing
    feynman?: { model?: string; enabled?: boolean };
    // Critical Review
    popper?: { model?: string; enabled?: boolean };
    // Fast Math
    euler?: { model?: string; enabled?: boolean };
    // Orchestration
    lovelace?: { model?: string; enabled?: boolean };
    // Pre-research Advisor
    newton?: { model?: string; enabled?: boolean };
  };

  // Feature toggles
  features?: {
    parallelExecution?: boolean;
    lspTools?: boolean;
    astTools?: boolean;
    continuationEnforcement?: boolean;
    autoContextInjection?: boolean;
  };

  // MCP server configurations
  mcpServers?: {
    exa?: { enabled?: boolean; apiKey?: string };
    context7?: { enabled?: boolean };
    grepApp?: { enabled?: boolean };
  };

  // Permission settings
  permissions?: {
    allowBash?: boolean;
    allowEdit?: boolean;
    allowWrite?: boolean;
    maxBackgroundTasks?: number;
  };

  // Magic keyword customization
  magicKeywords?: {
    ultrawork?: string[];
    search?: string[];
    analyze?: string[];
    ultrathink?: string[];
  };
}

export interface SessionState {
  sessionId?: string;
  activeAgents: Map<string, AgentState>;
  backgroundTasks: BackgroundTask[];
  contextFiles: string[];
}

export interface AgentState {
  name: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  lastMessage?: string;
  startTime?: number;
}

export interface BackgroundTask {
  id: string;
  agentName: string;
  prompt: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  result?: string;
  error?: string;
}

export interface MagicKeyword {
  triggers: string[];
  action: (prompt: string) => string;
  description: string;
}

export interface HookDefinition {
  event: 'PreToolUse' | 'PostToolUse' | 'Stop' | 'SessionStart' | 'SessionEnd' | 'UserPromptSubmit';
  matcher?: string;
  command?: string;
  handler?: (context: HookContext) => Promise<HookResult>;
}

export interface HookContext {
  toolName?: string;
  toolInput?: unknown;
  toolOutput?: unknown;
  sessionId?: string;
}

export interface HookResult {
  continue: boolean;
  message?: string;
  modifiedInput?: unknown;
}
