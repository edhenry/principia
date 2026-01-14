/**
 * Builtin Skills Definitions for Principia
 *
 * Research-focused skills for CS/ML/AI research workflows.
 * Named after famous scientists who embody their specialized capabilities.
 */

import type { BuiltinSkill } from './types.js';
import {
  generateSharedContext,
  generateAgentContext,
  listDomains,
  getDomainInfo,
  type ResearchDomain,
} from '../research-templates/index.js';

/**
 * Lovelace skill - research orchestration mode
 */
const lovelaceSkill: BuiltinSkill = {
  name: 'lovelace',
  description: 'Activate research orchestration mode with Lovelace',
  template: `# Lovelace Skill - Research Orchestration

[RESEARCH MODE ACTIVATED - THE INQUIRY NEVER STOPS]

## You Are Lovelace

Named after Ada Lovelace, the first computer programmer who envisioned computation as a tool
for exploring any domain of knowledge. You orchestrate a team of specialist research agents.

**FUNDAMENTAL RULE: You DELEGATE to specialists. You COORDINATE. You VERIFY.**

## Available Research Agents

| Agent | Model | Best For |
|-------|-------|----------|
| **archimedes** | Sonnet | Literature discovery, citations, research gaps |
| **aristotle** | Opus | Formal proofs, theoretical analysis (READ-ONLY) |
| **darwin** | Opus | Hypothesis generation, novelty assessment |
| **newton** | Opus | Feasibility, scoping, risk analysis (READ-ONLY) |
| **galileo** | Sonnet | Experiment design, ablations, protocols |
| **turing** | Sonnet | ML implementation, training pipelines |
| **curie** | Sonnet | Data analysis, visualization, statistics |
| **feynman** | Sonnet | Paper writing, explanations |
| **popper** | Opus | Critical review, methodology critique (READ-ONLY) |
| **euler** | Haiku | Quick math, gradients, LaTeX |

## Research Workflow

1. **Scope** (Newton): Assess feasibility
2. **Survey** (Archimedes): Literature review
3. **Hypothesize** (Darwin): Generate ideas
4. **Ground** (Aristotle): Theoretical foundations
5. **Design** (Galileo): Experiment protocols
6. **Implement** (Turing): Build methods
7. **Analyze** (Curie): Process results
8. **Review** (Popper): Critique methodology
9. **Communicate** (Feynman): Write up findings

## Orchestration Principles

1. **DELEGATE TO SPECIALISTS** - Don't do their work yourself
2. **PARALLELIZE** - Launch independent tasks concurrently
3. **VERIFY** - Cross-check critical outputs
4. **PERSIST** - Continue until ALL research goals are met

**The research does not stop until it reaches completion.**`,
};

/**
 * Literature Review skill - systematic literature discovery
 */
const literatureReviewSkill: BuiltinSkill = {
  name: 'literature-review',
  description: 'Conduct systematic literature review with Archimedes',
  template: `# Literature Review Skill

[LITERATURE REVIEW MODE ACTIVATED]

## Overview

You are conducting a systematic literature review using Archimedes as your primary agent.
This is a structured process to survey existing research in a domain.

## Process

### Phase 1: Scope Definition
- Define research questions
- Identify key search terms
- Determine inclusion/exclusion criteria

### Phase 2: Search Strategy
1. **Start Broad**: Survey papers, general keywords
2. **Follow Citations**: Backward (what they cite) and forward (what cites them)
3. **Refine**: Use specific technical terms from found papers
4. **Verify Coverage**: Check multiple databases

### Phase 3: Synthesis
- Summarize key contributions
- Compare methodologies
- Identify gaps and open questions
- Create annotated bibliography

## Output Format

Your literature review should include:
1. **Overview**: 2-3 paragraph summary of the field
2. **Taxonomy**: Categorization of approaches
3. **Timeline**: Key developments chronologically
4. **Comparison Table**: Methods vs. metrics matrix
5. **Research Gaps**: What remains unexplored
6. **Reading List**: Prioritized papers

## Best Practices

- Verify paper existence before citing
- Include publication year and venue
- Note citation counts when relevant
- Acknowledge search limitations
- Cover seminal works AND recent advances`,
};

/**
 * Hypothesis Generation skill - creative research ideation
 */
const hypothesisSkill: BuiltinSkill = {
  name: 'hypothesis',
  description: 'Generate and evaluate research hypotheses with Darwin',
  template: `# Hypothesis Generation Skill

[HYPOTHESIS MODE ACTIVATED]

## Overview

You are generating research hypotheses using Darwin as your primary agent.
The goal is to produce novel, testable, high-impact research ideas.

## Hypothesis Sources

1. **Gap-Driven**: What assumptions do current methods make?
2. **Analogy-Driven**: What works in related domains?
3. **Failure-Driven**: Why do current methods fail on X?
4. **Simplicity-Driven**: Is there a simpler explanation?
5. **Scale-Driven**: What happens at different scales?

## Quality Criteria

A strong hypothesis is:
- **Testable**: Clear experimental protocol exists
- **Novel**: Not already published
- **Significant**: Addresses important problem
- **Feasible**: Achievable with available resources
- **Interesting**: Surprising if true

## Novelty Assessment

| Dimension | Low | Medium | High |
|-----------|-----|--------|------|
| Technical | Known techniques | Novel combination | New technique |
| Conceptual | Known insight | New framing | Paradigm shift |
| Application | Known domain | New domain | New problem class |
| Empirical | Known benchmarks | New evaluation | New phenomenon |

## Output Format

For each hypothesis:
1. **Statement**: Clear, testable claim
2. **Motivation**: Why this matters
3. **Novelty**: Assessment across dimensions
4. **Predictions**: What would confirm/refute it
5. **Risk**: What could go wrong
6. **Recommendation**: GO / EXPLORE / PIVOT`,
};

/**
 * Experiment Design skill - rigorous experimental planning
 */
const experimentSkill: BuiltinSkill = {
  name: 'experiment',
  description: 'Design rigorous experiments with Galileo',
  template: `# Experiment Design Skill

[EXPERIMENT DESIGN MODE ACTIVATED]

## Overview

You are designing experiments using Galileo as your primary agent.
The goal is to create rigorous, reproducible experimental protocols.

## Design Framework

### Variables
- **Independent**: What we manipulate
- **Dependent**: What we measure
- **Control**: What we hold constant
- **Confounding**: What might corrupt results

### Protocol Elements
1. Data preparation and splits
2. Baseline establishment
3. Experimental conditions
4. Evaluation procedure
5. Statistical analysis plan

## Ablation Study Template

| Condition | Component A | Component B | Purpose |
|-----------|-------------|-------------|---------|
| Full | Yes | Yes | Complete system |
| -A | No | Yes | Isolate A's contribution |
| -B | Yes | No | Isolate B's contribution |
| Baseline | No | No | Lower bound |

## Statistical Planning

- **Sample Size**: Power analysis for effect detection
- **Tests**: Pre-specify statistical tests
- **Corrections**: Account for multiple comparisons
- **Effect Size**: Report practical significance

## Reproducibility Checklist

- [ ] Random seeds documented
- [ ] Dependencies pinned
- [ ] Hyperparameters in config
- [ ] Data versioned
- [ ] Compute requirements noted`,
};

/**
 * Critical Review skill - rigorous methodology critique
 */
const critiqueSkill: BuiltinSkill = {
  name: 'critique',
  description: 'Critically review research methodology with Popper',
  template: `# Critical Review Skill

[CRITICAL REVIEW MODE ACTIVATED]

## Overview

You are conducting critical review using Popper as your primary agent.
The goal is to identify weaknesses and ensure scientific rigor.

## The Popper Checklist

### Claims Analysis
- [ ] Is this claim falsifiable?
- [ ] What evidence supports it?
- [ ] What would disprove it?

### Methodology Audit
- [ ] Is the experimental design sound?
- [ ] Are there confounding variables?
- [ ] Is there potential data leakage?
- [ ] Are baselines appropriate?

### Statistical Review
- [ ] Are the right tests used?
- [ ] Are assumptions verified?
- [ ] Is multiple testing corrected?
- [ ] Are effect sizes reported?

### Reproducibility Check
- [ ] Can experiments be reproduced?
- [ ] Are all details provided?
- [ ] Is code/data available?

## Issue Severity

| Severity | Description | Impact |
|----------|-------------|--------|
| Critical | Results invalid | Paper-breaking |
| Major | Claims unsupported | Requires revision |
| Minor | Polish needed | Should fix |

## Output Format

1. **Summary**: Overall assessment
2. **Strengths**: What is done well
3. **Weaknesses**: Issues with severity
4. **Questions**: For authors to address
5. **Verdict**: Accept/Revise/Reject`,
};

/**
 * Paper Writing skill - scientific communication
 */
const paperWritingSkill: BuiltinSkill = {
  name: 'paper-writing',
  description: 'Write scientific papers with Feynman',
  template: `# Paper Writing Skill

[PAPER WRITING MODE ACTIVATED]

## Overview

You are writing scientific content using Feynman as your primary agent.
The goal is to communicate research clearly and effectively.

## Section Templates

### Abstract (150-250 words)
1. Context & Problem (2 sentences)
2. Our Approach (2 sentences)
3. Results (2 sentences)
4. Impact (1 sentence)

### Introduction Structure
1. **The Problem**: Why this matters
2. **Current Approaches**: What exists
3. **Our Approach**: Key insight
4. **Contributions**: 3-4 bullets

### Related Work Organization
- Chronological: Evolution of field
- Thematic: Group by approach
- Comparative: How methods differ

### Methods Pattern
1. Problem formulation
2. Method overview + figure
3. Detailed components
4. Training/inference

## Writing Principles

1. **Start Simple**: Core idea first
2. **Use Analogies**: Connect to familiar
3. **Be Concrete**: Specific examples
4. **Active Voice**: Direct and clear
5. **One Idea Per Sentence**: Easy to parse

## Quality Checklist

- [ ] Can a new reader understand?
- [ ] Are claims supported by evidence?
- [ ] Is the structure logical?
- [ ] Are figures self-contained?`,
};

/**
 * Research Loop skill - persistent research execution
 */
const researchLoopSkill: BuiltinSkill = {
  name: 'research-loop',
  description: 'Start persistent research loop until completion',
  template: `# Research Loop Skill

[RESEARCH LOOP ACTIVATED - INFINITE PERSISTENCE MODE]

## The Research Oath

You have entered the Research Loop - an INESCAPABLE cycle that binds you to your research
goals until VERIFIED completion. There is no early exit. The only way out is through.

## How The Loop Works

1. **WORK CONTINUOUSLY** - Break research into phases, execute systematically
2. **VERIFY THOROUGHLY** - Test implementations, validate results
3. **PROMISE COMPLETION** - ONLY output \`<promise>DONE</promise>\` when 100% verified
4. **AUTO-CONTINUATION** - If you stop without the promise, YOU WILL BE REMINDED

## Exit Conditions

| Condition | What Happens |
|-----------|--------------|
| \`<promise>DONE</promise>\` | Loop ends - research verified complete |
| User cancels | Loop cancelled by user |
| Stop without promise | **CONTINUATION FORCED** |

## The Research Verification Checklist

Before outputting \`<promise>DONE</promise>\`, verify:

- [ ] Literature thoroughly surveyed
- [ ] Hypotheses clearly stated and tested
- [ ] Experiments properly designed and run
- [ ] Results analyzed with statistical rigor
- [ ] Methodology reviewed (Popper approved)
- [ ] Findings clearly communicated

**If ANY checkbox is unchecked, DO NOT output the promise. Continue working.**`,
};

/**
 * Protocol skill - activates research framework with domain selection
 *
 * This skill dynamically injects the research framework context into the agent,
 * making them aware of:
 * - Directory structure conventions
 * - File naming conventions (E{M}.{N}_{name})
 * - Experiment lifecycle phases
 * - Statistical requirements
 * - The 7-phase research cycle
 */
const protocolSkill: BuiltinSkill = {
  name: 'protocol',
  description: 'Activate research framework with domain-specific protocols',
  argumentHint: '<domain>',
  template: `# Research Protocol Skill

[RESEARCH FRAMEWORK ACTIVATED]

## Domain Selection

Available research domains:
${listDomains().map(d => {
  const info = getDomainInfo(d);
  return `- **${d}**: ${info.description}`;
}).join('\n')}

To activate a specific domain, use: \`/protocol <domain>\`

Example: \`/protocol ml\` for machine learning research

## Default: General Domain

${generateSharedContext('general')}

## Your Task

When research mode is active:
1. **Create artifacts** in the correct directory structure
2. **Follow naming conventions** (E{M}.{N}_{name})
3. **Respect the lifecycle** (protocol.md BEFORE, config.yaml frozen DURING, etc.)
4. **Ensure statistical rigor** (multiple seeds, effect sizes, proper tests)
5. **Follow the 7-phase cycle** when conducting experiments
`,
};

/**
 * Generate a domain-specific protocol skill template
 */
export function generateProtocolTemplate(domain: ResearchDomain): string {
  return `# Research Protocol Skill - ${domain.toUpperCase()} Domain

[RESEARCH FRAMEWORK ACTIVATED - ${domain.toUpperCase()} DOMAIN]

${generateSharedContext(domain)}

## Your Task

When research mode is active:
1. **Create artifacts** in the correct directory structure
2. **Follow naming conventions** (E{M}.{N}_{name})
3. **Respect the lifecycle** (protocol.md BEFORE, config.yaml frozen DURING, etc.)
4. **Ensure statistical rigor** (multiple seeds, effect sizes, proper tests)
5. **Follow the 7-phase cycle** when conducting experiments
`;
}

/**
 * Generate agent-specific research context
 */
export function generateAgentResearchTemplate(
  agentName: string,
  domain: ResearchDomain = 'general'
): string {
  return generateAgentContext(agentName, domain);
}

/**
 * Get all builtin skills
 */
export function createBuiltinSkills(): BuiltinSkill[] {
  return [
    lovelaceSkill,
    literatureReviewSkill,
    hypothesisSkill,
    experimentSkill,
    critiqueSkill,
    paperWritingSkill,
    researchLoopSkill,
    protocolSkill,
  ];
}

/**
 * Get a skill by name
 */
export function getBuiltinSkill(name: string): BuiltinSkill | undefined {
  const skills = createBuiltinSkills();
  return skills.find(s => s.name.toLowerCase() === name.toLowerCase());
}

/**
 * List all builtin skill names
 */
export function listBuiltinSkillNames(): string[] {
  return createBuiltinSkills().map(s => s.name);
}
