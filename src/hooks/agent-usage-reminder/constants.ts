/**
 * Agent Usage Reminder Constants
 *
 * Constants for tracking tool usage and encouraging agent delegation.
 *
 * Ported from oh-my-opencode's agent-usage-reminder hook.
 */

import { join } from 'path';
import { homedir } from 'os';

/** Storage directory for agent usage reminder state */
export const SISYPHUS_STORAGE_DIR = join(homedir(), '.principia');
export const AGENT_USAGE_REMINDER_STORAGE = join(
  SISYPHUS_STORAGE_DIR,
  'agent-usage-reminder',
);

/** All tool names normalized to lowercase for case-insensitive matching */
export const TARGET_TOOLS = new Set([
  'grep',
  'safe_grep',
  'glob',
  'safe_glob',
  'webfetch',
  'context7_resolve-library-id',
  'context7_query-docs',
  'websearch_web_search_exa',
  'context7_get-library-docs',
  'grep_app_searchgithub',
]);

/** Agent tools that indicate agent usage */
export const AGENT_TOOLS = new Set([
  'task',
  'call_omo_agent',
  'sisyphus_task',
]);

/** Reminder message shown to users */
export const REMINDER_MESSAGE = `
[Agent Usage Reminder]

You called a search/fetch tool directly without leveraging specialized research agents.

RECOMMENDED: Use Task tool with Principia research agents for better results:

\`\`\`
// Parallel research - fire multiple agents simultaneously
Task(agent="archimedes", prompt="Find prior work and literature on X")
Task(agent="euler", prompt="Quick calculation for Y")
Task(agent="turing", prompt="Implement ML model for Z")

// Then continue your work while they run in background
// System will notify you when each completes
\`\`\`

WHY:
- Specialized research agents have domain expertise
- Background tasks run in parallel, saving time
- Archimedes for literature, Turing for ML, Curie for data analysis
- Reduces context window usage in main session

ALWAYS prefer: Multiple parallel Task calls > Direct tool calls
`;
