#!/usr/bin/env node

/**
 * Principia CLI
 *
 * Command-line interface for the Principia multi-agent research system.
 *
 * Commands:
 * - run: Start an interactive session
 * - init: Initialize configuration in current directory
 * - config: Show or edit configuration
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  loadConfig,
  getConfigPaths,
  generateConfigSchema
} from '../config/loader.js';
import { createPrincipiaSession } from '../index.js';
import {
  checkForUpdates,
  performUpdate,
  formatUpdateNotification,
  getInstalledVersion
} from '../features/auto-update.js';
import {
  install as installPrincipia,
  isInstalled,
  getInstallInfo
} from '../installer/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Try to load package.json for version
let version = '1.0.0';
try {
  const pkgPath = join(__dirname, '../../package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  version = pkg.version;
} catch {
  // Use default version
}

const program = new Command();

program
  .name('principia')
  .description('Multi-agent research orchestration system for CS/ML/AI')
  .version(version);

/**
 * Init command - Initialize configuration
 */
program
  .command('init')
  .description('Initialize Principia configuration in the current directory')
  .option('-g, --global', 'Initialize global user configuration')
  .option('-f, --force', 'Overwrite existing configuration')
  .action(async (options) => {
    const paths = getConfigPaths();
    const targetPath = options.global ? paths.user : paths.project;
    const targetDir = dirname(targetPath);

    console.log(chalk.blue('Principia Research System Configuration Setup\n'));

    // Check if config already exists
    if (existsSync(targetPath) && !options.force) {
      console.log(chalk.yellow(`Configuration already exists at ${targetPath}`));
      console.log(chalk.gray('Use --force to overwrite'));
      return;
    }

    // Create directory if needed
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
      console.log(chalk.green(`Created directory: ${targetDir}`));
    }

    // Generate config content
    const configContent = `// Principia Research System Configuration
// See: https://github.com/edhenry/principia for documentation
{
  "$schema": "./principia-schema.json",

  // Agent model configurations (named after famous scientists)
  "agents": {
    "lovelace": {
      // Main orchestrator - coordinates all research agents
      "model": "claude-sonnet-4-5-20250514"
    },
    "archimedes": {
      // Literature discovery and prior work
      "model": "claude-sonnet-4-5-20250514",
      "enabled": true
    },
    "aristotle": {
      // Theoretical foundations and proofs
      "model": "claude-opus-4-5-20251101",
      "enabled": true
    },
    "darwin": {
      // Hypothesis generation
      "model": "claude-opus-4-5-20251101",
      "enabled": true
    },
    "galileo": {
      // Experiment design
      "model": "claude-sonnet-4-5-20250514",
      "enabled": true
    },
    "curie": {
      // Data analysis
      "model": "claude-sonnet-4-5-20250514",
      "enabled": true
    },
    "turing": {
      // ML implementation
      "model": "claude-sonnet-4-5-20250514",
      "enabled": true
    },
    "feynman": {
      // Scientific communication
      "model": "claude-sonnet-4-5-20250514",
      "enabled": true
    },
    "popper": {
      // Critical review
      "model": "claude-opus-4-5-20251101",
      "enabled": true
    },
    "euler": {
      // Fast math - uses fastest model
      "model": "claude-3-5-haiku-20241022",
      "enabled": true
    },
    "newton": {
      // Pre-research advisor
      "model": "claude-opus-4-5-20251101",
      "enabled": true
    }
  },

  // Feature toggles
  "features": {
    "parallelExecution": true,
    "lspTools": true,
    "astTools": true,
    "continuationEnforcement": true,
    "autoContextInjection": true
  },

  // MCP server integrations for research
  "mcpServers": {
    "semantic-scholar": {
      "enabled": true
    },
    "arxiv": {
      "enabled": true
    },
    "huggingface": {
      "enabled": true
    },
    "jupyter": {
      "enabled": true
    }
  },

  // Permission settings
  "permissions": {
    "allowBash": true,
    "allowEdit": true,
    "allowWrite": true,
    "maxBackgroundTasks": 5
  },

  // Magic keyword triggers (customize if desired)
  "magicKeywords": {
    "research": ["research", "study", "investigate"],
    "literature": ["literature", "papers", "survey"],
    "experiment": ["experiment", "test", "validate"]
  }
}
`;

    writeFileSync(targetPath, configContent);
    console.log(chalk.green(`Created configuration: ${targetPath}`));

    // Also create the JSON schema for editor support
    const schemaPath = join(targetDir, 'principia-schema.json');
    writeFileSync(schemaPath, JSON.stringify(generateConfigSchema(), null, 2));
    console.log(chalk.green(`Created JSON schema: ${schemaPath}`));

    console.log(chalk.blue('\nSetup complete!'));
    console.log(chalk.gray('Edit the configuration file to customize your setup.'));

    // Create AGENTS.md template if it doesn't exist
    const agentsMdPath = join(process.cwd(), 'AGENTS.md');
    if (!existsSync(agentsMdPath) && !options.global) {
      const agentsMdContent = `# Project Agents Configuration

This file provides context and instructions to AI agents working on this project.

## Project Overview

<!-- Describe your project here -->

## Architecture

<!-- Describe the architecture and key components -->

## Conventions

<!-- List coding conventions, naming patterns, etc. -->

## Important Files

<!-- List key files agents should know about -->

## Common Tasks

<!-- Describe common development tasks and how to perform them -->
`;
      writeFileSync(agentsMdPath, agentsMdContent);
      console.log(chalk.green(`Created AGENTS.md template`));
    }
  });

/**
 * Config command - Show or validate configuration
 */
program
  .command('config')
  .description('Show current configuration')
  .option('-v, --validate', 'Validate configuration')
  .option('-p, --paths', 'Show configuration file paths')
  .action(async (options) => {
    if (options.paths) {
      const paths = getConfigPaths();
      console.log(chalk.blue('Configuration file paths:'));
      console.log(`  User:    ${paths.user}`);
      console.log(`  Project: ${paths.project}`);

      console.log(chalk.blue('\nFile status:'));
      console.log(`  User:    ${existsSync(paths.user) ? chalk.green('exists') : chalk.gray('not found')}`);
      console.log(`  Project: ${existsSync(paths.project) ? chalk.green('exists') : chalk.gray('not found')}`);
      return;
    }

    const config = loadConfig();

    if (options.validate) {
      console.log(chalk.blue('Validating configuration...\n'));

      // Check for required fields
      const warnings: string[] = [];
      const errors: string[] = [];

      if (!process.env.ANTHROPIC_API_KEY) {
        warnings.push('ANTHROPIC_API_KEY environment variable not set');
      }

      if (config.mcpServers?.exa?.enabled && !process.env.EXA_API_KEY && !config.mcpServers.exa.apiKey) {
        warnings.push('Exa is enabled but EXA_API_KEY is not set');
      }

      if (errors.length > 0) {
        console.log(chalk.red('Errors:'));
        errors.forEach(e => console.log(chalk.red(`  - ${e}`)));
      }

      if (warnings.length > 0) {
        console.log(chalk.yellow('Warnings:'));
        warnings.forEach(w => console.log(chalk.yellow(`  - ${w}`)));
      }

      if (errors.length === 0 && warnings.length === 0) {
        console.log(chalk.green('Configuration is valid!'));
      }

      return;
    }

    console.log(chalk.blue('Current configuration:\n'));
    console.log(JSON.stringify(config, null, 2));
  });

/**
 * Info command - Show system information
 */
program
  .command('info')
  .description('Show system and agent information')
  .action(async () => {
    const session = createPrincipiaSession();

    console.log(chalk.blue.bold('\nPrincipia Research System Information\n'));
    console.log(chalk.gray('━'.repeat(50)));

    console.log(chalk.blue('\nAvailable Agents:'));
    const agents = session.queryOptions.options.agents;
    for (const [name, agent] of Object.entries(agents)) {
      console.log(`  ${chalk.green(name)}`);
      console.log(`    ${chalk.gray(agent.description.split('\n')[0])}`);
    }

    console.log(chalk.blue('\nEnabled Features:'));
    const features = session.config.features;
    if (features) {
      console.log(`  Parallel Execution:      ${features.parallelExecution ? chalk.green('enabled') : chalk.gray('disabled')}`);
      console.log(`  LSP Tools:               ${features.lspTools ? chalk.green('enabled') : chalk.gray('disabled')}`);
      console.log(`  AST Tools:               ${features.astTools ? chalk.green('enabled') : chalk.gray('disabled')}`);
      console.log(`  Continuation Enforcement:${features.continuationEnforcement ? chalk.green('enabled') : chalk.gray('disabled')}`);
      console.log(`  Auto Context Injection:  ${features.autoContextInjection ? chalk.green('enabled') : chalk.gray('disabled')}`);
    }

    console.log(chalk.blue('\nMCP Servers:'));
    const mcpServers = session.queryOptions.options.mcpServers;
    for (const name of Object.keys(mcpServers)) {
      console.log(`  ${chalk.green(name)}`);
    }

    console.log(chalk.blue('\nMagic Keywords:'));
    console.log(`  Ultrawork: ${chalk.cyan(session.config.magicKeywords?.ultrawork?.join(', ') ?? 'ultrawork, ulw, uw')}`);
    console.log(`  Search:    ${chalk.cyan(session.config.magicKeywords?.search?.join(', ') ?? 'search, find, locate')}`);
    console.log(`  Analyze:   ${chalk.cyan(session.config.magicKeywords?.analyze?.join(', ') ?? 'analyze, investigate, examine')}`);

    console.log(chalk.gray('\n━'.repeat(50)));
    console.log(chalk.gray(`Version: ${version}`));
  });

/**
 * Test command - Test prompt enhancement
 */
program
  .command('test-prompt <prompt>')
  .description('Test how a prompt would be enhanced')
  .action(async (prompt: string) => {
    const session = createPrincipiaSession();

    console.log(chalk.blue('Original prompt:'));
    console.log(chalk.gray(prompt));

    const keywords = session.detectKeywords(prompt);
    if (keywords.length > 0) {
      console.log(chalk.blue('\nDetected magic keywords:'));
      console.log(chalk.yellow(keywords.join(', ')));
    }

    console.log(chalk.blue('\nEnhanced prompt:'));
    console.log(chalk.green(session.processPrompt(prompt)));
  });

/**
 * Update command - Check for and install updates
 */
program
  .command('update')
  .description('Check for and install updates')
  .option('-c, --check', 'Only check for updates, do not install')
  .option('-f, --force', 'Force reinstall even if up to date')
  .option('-q, --quiet', 'Suppress output except for errors')
  .action(async (options) => {
    if (!options.quiet) {
      console.log(chalk.blue('Principia Research System Update\n'));
    }

    try {
      // Show current version
      const installed = getInstalledVersion();
      if (!options.quiet) {
        console.log(chalk.gray(`Current version: ${installed?.version ?? 'unknown'}`));
        console.log(chalk.gray(`Install method: ${installed?.installMethod ?? 'unknown'}`));
        console.log('');
      }

      // Check for updates
      if (!options.quiet) {
        console.log('Checking for updates...');
      }

      const checkResult = await checkForUpdates();

      if (!checkResult.updateAvailable && !options.force) {
        if (!options.quiet) {
          console.log(chalk.green(`\n✓ You are running the latest version (${checkResult.currentVersion})`));
        }
        return;
      }

      if (!options.quiet) {
        console.log(formatUpdateNotification(checkResult));
      }

      // If check-only mode, stop here
      if (options.check) {
        if (checkResult.updateAvailable) {
          console.log(chalk.yellow('\nRun without --check to install the update.'));
        }
        return;
      }

      // Perform the update
      if (!options.quiet) {
        console.log(chalk.blue('\nStarting update...\n'));
      }

      const result = await performUpdate({ verbose: !options.quiet });

      if (result.success) {
        if (!options.quiet) {
          console.log(chalk.green(`\n✓ ${result.message}`));
          console.log(chalk.gray('\nPlease restart your Claude Code session to use the new version.'));
        }
      } else {
        console.error(chalk.red(`\n✗ ${result.message}`));
        if (result.errors) {
          result.errors.forEach(err => console.error(chalk.red(`  - ${err}`)));
        }
        process.exit(1);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(chalk.red(`Update failed: ${message}`));
      process.exit(1);
    }
  });

/**
 * Version command - Show version information
 */
program
  .command('version')
  .description('Show detailed version information')
  .action(async () => {
    const installed = getInstalledVersion();

    console.log(chalk.blue.bold('\nPrincipia Research System Version Information\n'));
    console.log(chalk.gray('━'.repeat(50)));

    console.log(`\n  Package version:   ${chalk.green(version)}`);

    if (installed) {
      console.log(`  Installed version: ${chalk.green(installed.version)}`);
      console.log(`  Install method:    ${chalk.cyan(installed.installMethod)}`);
      console.log(`  Installed at:      ${chalk.gray(installed.installedAt)}`);
      if (installed.lastCheckAt) {
        console.log(`  Last update check: ${chalk.gray(installed.lastCheckAt)}`);
      }
      if (installed.commitHash) {
        console.log(`  Commit hash:       ${chalk.gray(installed.commitHash)}`);
      }
    } else {
      console.log(chalk.yellow('  No installation metadata found'));
      console.log(chalk.gray('  (Run the install script to create version metadata)'));
    }

    console.log(chalk.gray('\n━'.repeat(50)));
    console.log(chalk.gray('\nTo check for updates, run: principia update --check'));
  });

/**
 * Install command - Install agents and commands to ~/.claude/
 */
program
  .command('install')
  .description('Install Principia research agents and commands to Claude Code config (~/.claude/)')
  .option('-f, --force', 'Overwrite existing files')
  .option('-q, --quiet', 'Suppress output except for errors')
  .option('--skip-claude-check', 'Skip checking if Claude Code is installed')
  .action(async (options) => {
    if (!options.quiet) {
      console.log(chalk.blue('╔═══════════════════════════════════════════════════════════╗'));
      console.log(chalk.blue('║              Principia Research System                    ║'));
      console.log(chalk.blue('║   Multi-Agent Research Orchestration for Claude Code     ║'));
      console.log(chalk.blue('╚═══════════════════════════════════════════════════════════╝'));
      console.log('');
    }

    // Check if already installed
    if (isInstalled() && !options.force) {
      const info = getInstallInfo();
      if (!options.quiet) {
        console.log(chalk.yellow('Principia is already installed.'));
        if (info) {
          console.log(chalk.gray(`  Version: ${info.version}`));
          console.log(chalk.gray(`  Installed: ${info.installedAt}`));
        }
        console.log(chalk.gray('\nUse --force to reinstall.'));
      }
      return;
    }

    // Run installation
    const result = installPrincipia({
      force: options.force,
      verbose: !options.quiet,
      skipClaudeCheck: options.skipClaudeCheck
    });

    if (result.success) {
      if (!options.quiet) {
        console.log('');
        console.log(chalk.green('╔═══════════════════════════════════════════════════════════╗'));
        console.log(chalk.green('║              Installation Complete!                       ║'));
        console.log(chalk.green('╚═══════════════════════════════════════════════════════════╝'));
        console.log('');
        console.log(chalk.gray(`Installed to: ~/.claude/`));
        console.log('');
        console.log(chalk.yellow('Usage:'));
        console.log('  claude                        # Start Claude Code normally');
        console.log('');
        console.log(chalk.yellow('Slash Commands:'));
        console.log('  /lovelace <task>              # Activate Principia orchestration mode');
        console.log('  /lovelace-default             # Set Principia as default behavior');
        console.log('  /literature <query>           # Literature review with Archimedes');
        console.log('  /hypothesis <topic>           # Hypothesis generation with Darwin');
        console.log('  /experiment <design>          # Experiment design with Galileo');
        console.log('  /plan <description>           # Strategic planning with Newton');
        console.log('  /review [plan-path]           # Critical review with Popper');
        console.log('');
        console.log(chalk.yellow('Available Research Agents (via Task tool):'));
        console.log('  archimedes          - Literature discovery & prior work (Sonnet)');
        console.log('  aristotle           - Theoretical foundations & proofs (Opus)');
        console.log('  darwin              - Hypothesis generation (Opus)');
        console.log('  galileo             - Experiment design (Sonnet)');
        console.log('  curie               - Data analysis & statistics (Sonnet)');
        console.log('  turing              - ML/AI implementation (Sonnet)');
        console.log('  feynman             - Scientific communication & writing (Sonnet)');
        console.log('  popper              - Critical review & falsification (Opus)');
        console.log('  euler               - Fast mathematical computation (Haiku)');
        console.log('  lovelace            - Research orchestration (Sonnet)');
        console.log('  newton              - Pre-research advisor & scoping (Opus)');
        console.log('');
        console.log(chalk.blue('Quick Start:'));
        console.log('  1. Run \'claude\' to start Claude Code');
        console.log('  2. Type \'/lovelace-default\' to enable Principia permanently');
        console.log('  3. Or use \'/lovelace <task>\' for one-time activation');
      }
    } else {
      console.error(chalk.red(`Installation failed: ${result.message}`));
      if (result.errors.length > 0) {
        result.errors.forEach(err => console.error(chalk.red(`  - ${err}`)));
      }
      process.exit(1);
    }
  });

/**
 * Postinstall command - Silent install for npm postinstall hook
 */
program
  .command('postinstall', { hidden: true })
  .description('Run post-install setup (called automatically by npm)')
  .action(async () => {
    // Silent install - only show errors
    const result = installPrincipia({
      force: false,
      verbose: false,
      skipClaudeCheck: true
    });

    if (result.success) {
      console.log(chalk.green('✓ Principia Research System installed successfully!'));
      console.log(chalk.gray('  Run "principia info" to see available research agents.'));
    } else {
      // Don't fail the npm install, just warn
      console.warn(chalk.yellow('⚠ Could not complete Principia setup:'), result.message);
      console.warn(chalk.gray('  Run "principia install" manually to complete setup.'));
    }
  });

// Parse arguments
program.parse();
