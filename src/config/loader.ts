/**
 * Configuration Loader
 *
 * Handles loading and merging configuration from multiple sources:
 * - User config: ~/.config/principia/config.jsonc
 * - Project config: .claude/principia.jsonc
 * - Environment variables
 */

import { readFileSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join, dirname } from 'path';
import * as jsonc from 'jsonc-parser';
import type { PluginConfig } from '../shared/types.js';

/**
 * Default configuration
 */
export const DEFAULT_CONFIG: PluginConfig = {
  agents: {
    // Principia scientist agents
    archimedes: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    aristotle: { model: 'claude-opus-4-5-20251101', enabled: true },
    darwin: { model: 'claude-opus-4-5-20251101', enabled: true },
    galileo: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    curie: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    turing: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    feynman: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    popper: { model: 'claude-opus-4-5-20251101', enabled: true },
    euler: { model: 'claude-haiku-4-5-20251001', enabled: true },
    lovelace: { model: 'claude-sonnet-4-5-20250929', enabled: true },
    newton: { model: 'claude-opus-4-5-20251101', enabled: true }
  },
  features: {
    parallelExecution: true,
    lspTools: true,   // Real LSP integration with language servers
    astTools: true,   // Real AST tools using ast-grep
    continuationEnforcement: true,
    autoContextInjection: true
  },
  mcpServers: {
    exa: { enabled: true },
    context7: { enabled: true },
    grepApp: { enabled: true }
  },
  permissions: {
    allowBash: true,
    allowEdit: true,
    allowWrite: true,
    maxBackgroundTasks: 5
  },
  magicKeywords: {
    ultrawork: ['ultrawork', 'ulw', 'uw'],
    search: ['search', 'find', 'locate'],
    analyze: ['analyze', 'investigate', 'examine'],
    ultrathink: ['ultrathink', 'think', 'reason', 'ponder']
  }
};

/**
 * Configuration file locations
 */
export function getConfigPaths(): { user: string; project: string } {
  const userConfigDir = process.env.XDG_CONFIG_HOME ?? join(homedir(), '.config');

  return {
    user: join(userConfigDir, 'principia', 'config.jsonc'),
    project: join(process.cwd(), '.claude', 'principia.jsonc')
  };
}

/**
 * Load and parse a JSONC file
 */
export function loadJsoncFile(path: string): PluginConfig | null {
  if (!existsSync(path)) {
    return null;
  }

  try {
    const content = readFileSync(path, 'utf-8');
    const errors: jsonc.ParseError[] = [];
    const result = jsonc.parse(content, errors, {
      allowTrailingComma: true,
      allowEmptyContent: true
    });

    if (errors.length > 0) {
      console.warn(`Warning: Parse errors in ${path}:`, errors);
    }

    return result as PluginConfig;
  } catch (error) {
    console.error(`Error loading config from ${path}:`, error);
    return null;
  }
}

/**
 * Deep merge two objects
 */
export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target };

  for (const key of Object.keys(source) as (keyof T)[]) {
    const sourceValue = source[key];
    const targetValue = result[key];

    if (
      sourceValue !== undefined &&
      typeof sourceValue === 'object' &&
      sourceValue !== null &&
      !Array.isArray(sourceValue) &&
      typeof targetValue === 'object' &&
      targetValue !== null &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      ) as T[keyof T];
    } else if (sourceValue !== undefined) {
      result[key] = sourceValue as T[keyof T];
    }
  }

  return result;
}

/**
 * Load configuration from environment variables
 */
export function loadEnvConfig(): Partial<PluginConfig> {
  const config: Partial<PluginConfig> = {};

  // MCP API keys
  if (process.env.EXA_API_KEY) {
    config.mcpServers = {
      ...config.mcpServers,
      exa: { enabled: true, apiKey: process.env.EXA_API_KEY }
    };
  }

  // Feature flags from environment
  if (process.env.PRINCIPIA_PARALLEL_EXECUTION !== undefined) {
    config.features = {
      ...config.features,
      parallelExecution: process.env.PRINCIPIA_PARALLEL_EXECUTION === 'true'
    };
  }

  if (process.env.PRINCIPIA_LSP_TOOLS !== undefined) {
    config.features = {
      ...config.features,
      lspTools: process.env.PRINCIPIA_LSP_TOOLS === 'true'
    };
  }

  if (process.env.PRINCIPIA_MAX_BACKGROUND_TASKS) {
    const maxTasks = parseInt(process.env.PRINCIPIA_MAX_BACKGROUND_TASKS, 10);
    if (!isNaN(maxTasks)) {
      config.permissions = {
        ...config.permissions,
        maxBackgroundTasks: maxTasks
      };
    }
  }

  return config;
}

/**
 * Load and merge all configuration sources
 */
export function loadConfig(): PluginConfig {
  const paths = getConfigPaths();

  // Start with defaults
  let config = { ...DEFAULT_CONFIG };

  // Merge user config
  const userConfig = loadJsoncFile(paths.user);
  if (userConfig) {
    config = deepMerge(config, userConfig);
  }

  // Merge project config (takes precedence over user)
  const projectConfig = loadJsoncFile(paths.project);
  if (projectConfig) {
    config = deepMerge(config, projectConfig);
  }

  // Merge environment variables (highest precedence)
  const envConfig = loadEnvConfig();
  config = deepMerge(config, envConfig);

  return config;
}

/**
 * Find and load AGENTS.md or CLAUDE.md files for context injection
 */
export function findContextFiles(startDir?: string): string[] {
  const files: string[] = [];
  const searchDir = startDir ?? process.cwd();

  // Files to look for
  const contextFileNames = [
    'AGENTS.md',
    'CLAUDE.md',
    '.claude/CLAUDE.md',
    '.claude/AGENTS.md'
  ];

  // Search in current directory and parent directories
  let currentDir = searchDir;
  const searchedDirs = new Set<string>();

  while (currentDir && !searchedDirs.has(currentDir)) {
    searchedDirs.add(currentDir);

    for (const fileName of contextFileNames) {
      const filePath = join(currentDir, fileName);
      if (existsSync(filePath) && !files.includes(filePath)) {
        files.push(filePath);
      }
    }

    const parentDir = dirname(currentDir);
    if (parentDir === currentDir) break;
    currentDir = parentDir;
  }

  return files;
}

/**
 * Load context from AGENTS.md/CLAUDE.md files
 */
export function loadContextFromFiles(files: string[]): string {
  const contexts: string[] = [];

  for (const file of files) {
    try {
      const content = readFileSync(file, 'utf-8');
      contexts.push(`## Context from ${file}\n\n${content}`);
    } catch (error) {
      console.warn(`Warning: Could not read context file ${file}:`, error);
    }
  }

  return contexts.join('\n\n---\n\n');
}

/**
 * Generate JSON Schema for configuration (for editor autocomplete)
 */
export function generateConfigSchema(): object {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Principia Research System Configuration',
    type: 'object',
    properties: {
      agents: {
        type: 'object',
        description: 'Research agent model and feature configuration',
        properties: {
          archimedes: {
            type: 'object',
            description: 'Literature discovery agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          aristotle: {
            type: 'object',
            description: 'Theoretical foundations agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          darwin: {
            type: 'object',
            description: 'Hypothesis generation agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          galileo: {
            type: 'object',
            description: 'Experiment design agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          curie: {
            type: 'object',
            description: 'Data analysis agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          turing: {
            type: 'object',
            description: 'ML/AI implementation agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          feynman: {
            type: 'object',
            description: 'Scientific writing agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          popper: {
            type: 'object',
            description: 'Critical review agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          euler: {
            type: 'object',
            description: 'Fast math agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          lovelace: {
            type: 'object',
            description: 'Research orchestration agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          },
          newton: {
            type: 'object',
            description: 'Pre-research advisor agent',
            properties: {
              model: { type: 'string' },
              enabled: { type: 'boolean' }
            }
          }
        }
      },
      features: {
        type: 'object',
        description: 'Feature toggles',
        properties: {
          parallelExecution: { type: 'boolean', default: true },
          lspTools: { type: 'boolean', default: true },
          astTools: { type: 'boolean', default: true },
          continuationEnforcement: { type: 'boolean', default: true },
          autoContextInjection: { type: 'boolean', default: true }
        }
      },
      mcpServers: {
        type: 'object',
        description: 'MCP server configurations',
        properties: {
          exa: {
            type: 'object',
            properties: {
              enabled: { type: 'boolean' },
              apiKey: { type: 'string' }
            }
          },
          context7: {
            type: 'object',
            properties: { enabled: { type: 'boolean' } }
          },
          grepApp: {
            type: 'object',
            properties: { enabled: { type: 'boolean' } }
          }
        }
      },
      permissions: {
        type: 'object',
        description: 'Permission settings',
        properties: {
          allowBash: { type: 'boolean', default: true },
          allowEdit: { type: 'boolean', default: true },
          allowWrite: { type: 'boolean', default: true },
          maxBackgroundTasks: { type: 'integer', default: 5, minimum: 1, maximum: 20 }
        }
      },
      magicKeywords: {
        type: 'object',
        description: 'Magic keyword triggers',
        properties: {
          ultrawork: { type: 'array', items: { type: 'string' } },
          search: { type: 'array', items: { type: 'string' } },
          analyze: { type: 'array', items: { type: 'string' } },
          ultrathink: { type: 'array', items: { type: 'string' } }
        }
      }
    }
  };
}
