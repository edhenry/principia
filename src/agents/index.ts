/**
 * Agents Module Exports for Principia
 *
 * Research-focused multi-agent system for CS/ML/AI research workflows.
 * Named after famous scientists who embody their specialized capabilities.
 */

// Types
export * from './types.js';

// Utilities
export {
  createAgentToolRestrictions,
  mergeAgentConfig,
  buildDelegationTable,
  buildUseAvoidSection,
  createEnvContext,
  getAvailableAgents,
  buildKeyTriggersSection,
  validateAgentConfig,
  deepMerge
} from './utils.js';

// Individual agent exports (research team)
export { archimedesAgent, ARCHIMEDES_PROMPT_METADATA } from './archimedes.js';
export { aristotleAgent, ARISTOTLE_PROMPT_METADATA } from './aristotle.js';
export { darwinAgent, DARWIN_PROMPT_METADATA } from './darwin.js';
export { newtonAgent, NEWTON_PROMPT_METADATA } from './newton.js';
export { galileoAgent, GALILEO_PROMPT_METADATA } from './galileo.js';
export { turingAgent, TURING_PROMPT_METADATA } from './turing.js';
export { curieAgent, CURIE_PROMPT_METADATA } from './curie.js';
export { feynmanAgent, FEYNMAN_PROMPT_METADATA } from './feynman.js';
export { popperAgent, POPPER_PROMPT_METADATA } from './popper.js';
export { eulerAgent, EULER_PROMPT_METADATA } from './euler.js';
export { lovelaceAgent, LOVELACE_PROMPT_METADATA } from './lovelace.js';

// Core exports
export {
  getAgentDefinitions,
  lovelaceSystemPrompt,
  sisyphusSystemPrompt  // Legacy alias
} from './definitions.js';

// Agent name constants
export { SCIENTIST_AGENTS } from './types.js';
