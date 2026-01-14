/**
 * Research Templates Module
 *
 * Provides domain-based research templates and context injection
 * for the Principia multi-agent research system.
 *
 * Usage:
 *   import { getDomainTemplates, generateAgentContext } from './research-templates';
 *
 *   // Get templates for ML domain
 *   const templates = getDomainTemplates('ml');
 *
 *   // Generate context for an agent
 *   const context = generateAgentContext('galileo', 'ml');
 */

// Type exports
export type {
  ResearchDomain,
  TemplateType,
  Template,
  DomainTemplates,
  StatisticalRequirements,
  DomainTerminology,
  ResearchConfig,
  ResearchContext,
} from './types.js';

export {
  DEFAULT_RESEARCH_CONFIG,
  DEFAULT_STATISTICAL_REQUIREMENTS,
} from './types.js';

// Domain template exports
export { generalDomainTemplates } from './domains/general/index.js';
export { mlDomainTemplates } from './domains/ml/index.js';

// Context generation exports
export {
  generateSharedContext,
  generateAgentContext,
  createResearchContext,
} from './context.js';

// Import for internal use
import type { ResearchDomain, DomainTemplates, TemplateType, Template } from './types.js';
import { generalDomainTemplates } from './domains/general/index.js';
import { mlDomainTemplates } from './domains/ml/index.js';

/**
 * Domain registry - maps domain names to their templates
 */
const domainRegistry: Record<ResearchDomain, DomainTemplates> = {
  general: generalDomainTemplates,
  ml: mlDomainTemplates,
  // Placeholder for future domains - inherit from general for now
  systems: generalDomainTemplates,
  theory: generalDomainTemplates,
};

/**
 * Get templates for a specific domain
 */
export function getDomainTemplates(domain: ResearchDomain): DomainTemplates {
  return domainRegistry[domain] || generalDomainTemplates;
}

/**
 * Get a specific template from a domain
 */
export function getTemplate(
  domain: ResearchDomain,
  templateType: TemplateType
): Template {
  const templates = getDomainTemplates(domain);
  return templates.templates[templateType];
}

/**
 * Get template content ready for use (with placeholders)
 */
export function getTemplateContent(
  domain: ResearchDomain,
  templateType: TemplateType
): string {
  const template = getTemplate(domain, templateType);
  return template.content;
}

/**
 * List all available domains
 */
export function listDomains(): ResearchDomain[] {
  return Object.keys(domainRegistry) as ResearchDomain[];
}

/**
 * List all template types available
 */
export function listTemplateTypes(): TemplateType[] {
  return [
    'protocol',
    'summary',
    'config',
    'analysis',
    'notes',
    'milestone_readme',
    'experiments_readme',
  ];
}

/**
 * Check if a domain is available
 */
export function isDomainAvailable(domain: string): domain is ResearchDomain {
  return domain in domainRegistry;
}

/**
 * Get domain metadata (name, description)
 */
export function getDomainInfo(domain: ResearchDomain): {
  name: string;
  description: string;
} {
  const templates = getDomainTemplates(domain);
  return {
    name: templates.name,
    description: templates.description,
  };
}

/**
 * Render a template with provided values
 *
 * Replaces placeholders like {experiment_name}, {M}, {N}, etc.
 */
export function renderTemplate(
  domain: ResearchDomain,
  templateType: TemplateType,
  values: Record<string, string>
): string {
  let content = getTemplateContent(domain, templateType);

  // Replace all placeholders
  for (const [key, value] of Object.entries(values)) {
    const placeholder = new RegExp(`\\{${key}\\}`, 'g');
    content = content.replace(placeholder, value);
  }

  return content;
}

/**
 * Get the file extension for a template type
 */
export function getTemplateExtension(
  domain: ResearchDomain,
  templateType: TemplateType
): string {
  const template = getTemplate(domain, templateType);
  return template.extension;
}

/**
 * Get the default filename for a template type
 */
export function getTemplateFilename(templateType: TemplateType): string {
  const filenames: Record<TemplateType, string> = {
    protocol: 'protocol.md',
    summary: 'SUMMARY.md',
    config: 'config.yaml',
    analysis: 'statistical_report.md',
    notes: 'NOTES.md',
    milestone_readme: 'README.md',
    experiments_readme: 'README.md',
  };
  return filenames[templateType];
}
