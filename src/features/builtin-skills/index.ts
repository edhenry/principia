/**
 * Builtin Skills Feature
 *
 * Provides bundled skills for Principia multi-agent research system.
 *
 * Adapted from oh-my-opencode's builtin-skills feature.
 */

export * from './types.js';
export {
  createBuiltinSkills,
  getBuiltinSkill,
  listBuiltinSkillNames,
  generateProtocolTemplate,
  generateAgentResearchTemplate,
} from './skills.js';
