/**
 * Research Templates - Type Definitions
 *
 * Types for the domain-based research template system.
 */

/**
 * Supported research domains
 */
export type ResearchDomain = 'ml' | 'systems' | 'theory' | 'general';

/**
 * Template types available in each domain
 */
export type TemplateType =
  | 'protocol'           // Experiment design template
  | 'summary'            // Results summary template
  | 'config'             // Configuration template
  | 'analysis'           // Statistical analysis template
  | 'notes'              // Human observations template
  | 'milestone_readme'   // Milestone overview template
  | 'experiments_readme'; // Experiments index template

/**
 * A single template definition
 */
export interface Template {
  /** Template type */
  type: TemplateType;
  /** Template content (markdown or yaml) */
  content: string;
  /** File extension */
  extension: 'md' | 'yaml' | 'json';
  /** Description of the template */
  description: string;
}

/**
 * A complete domain template set
 */
export interface DomainTemplates {
  /** Domain identifier */
  domain: ResearchDomain;
  /** Human-readable domain name */
  name: string;
  /** Domain description */
  description: string;
  /** Templates for this domain */
  templates: Record<TemplateType, Template>;
  /** Domain-specific statistical requirements */
  statisticalRequirements: StatisticalRequirements;
  /** Domain-specific terminology */
  terminology: DomainTerminology;
}

/**
 * Statistical requirements for a domain
 */
export interface StatisticalRequirements {
  /** Minimum number of runs/seeds */
  minRuns: number;
  /** Recommended seeds */
  defaultSeeds: number[];
  /** Default significance level */
  alpha: number;
  /** Required effect size measure */
  effectSizeMeasure: string;
  /** Required statistical tests */
  requiredTests: string[];
  /** Confidence interval level */
  confidenceLevel: number;
}

/**
 * Domain-specific terminology mapping
 */
export interface DomainTerminology {
  /** What a "run" is called (trial, seed, replicate, etc.) */
  runName: string;
  /** What "training" is called (execution, running, etc.) */
  executionName: string;
  /** What "metrics" are called (performance, results, etc.) */
  metricsName: string;
  /** What "model" is called (system, method, approach, etc.) */
  subjectName: string;
  /** Primary output type */
  primaryOutput: string;
}

/**
 * Research configuration for a project
 */
export interface ResearchConfig {
  /** Active domain */
  domain: ResearchDomain;
  /** Experiments directory (relative to project root) */
  experimentsDir: string;
  /** Current milestone */
  currentMilestone?: string;
  /** Custom statistical requirements (overrides domain defaults) */
  statisticalOverrides?: Partial<StatisticalRequirements>;
}

/**
 * The shared context injected into all agents when research mode is active
 */
export interface ResearchContext {
  /** Whether research mode is active */
  active: boolean;
  /** Current domain */
  domain: ResearchDomain;
  /** Domain templates */
  templates: DomainTemplates;
  /** Project research config */
  config: ResearchConfig;
  /** The context string to inject into agent prompts */
  contextString: string;
}

/**
 * Default research configuration
 */
export const DEFAULT_RESEARCH_CONFIG: ResearchConfig = {
  domain: 'ml',
  experimentsDir: './experiments',
  currentMilestone: 'milestone_a',
};

/**
 * Default statistical requirements (can be overridden per domain)
 */
export const DEFAULT_STATISTICAL_REQUIREMENTS: StatisticalRequirements = {
  minRuns: 3,
  defaultSeeds: [42, 123, 456],
  alpha: 0.05,
  effectSizeMeasure: "Cohen's d",
  requiredTests: ['t-test', 'confidence interval'],
  confidenceLevel: 0.95,
};
