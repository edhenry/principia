/**
 * General Domain Templates
 *
 * Base templates that all domains inherit from.
 * These provide the structural foundation that domain-specific templates extend.
 */

import type { DomainTemplates, Template } from '../../types.js';

/**
 * Protocol template - experiment design (BEFORE execution)
 */
const protocolTemplate: Template = {
  type: 'protocol',
  extension: 'md',
  description: 'Experimental design template - complete before execution',
  content: `# E{M}.{N} {Experiment Name} - Protocol

**ID:** E{M}.{N}_{experiment_name}
**Date:** {YYYY-MM-DD}
**Status:** PLANNED
**Milestone:** {milestone_letter} - {milestone_description}
**Parent:** {parent_experiment_id or "None"}

---

## Research Question

{What specific question does this experiment answer?}

---

## Hypotheses

**H1 (Alternative):** {What you expect to find - the effect you're testing for}

**H0 (Null):** {The default assumption - no effect / no difference}

---

## Methodology

### Subject/System
- **Description:** {What is being tested}
- **Version/Configuration:** {Specific version or configuration}

### Conditions
| Condition | Description | Purpose |
|-----------|-------------|---------|
| {condition_1} | {description} | {why included} |
| {condition_2} | {description} | {why included} |
| {baseline} | {description} | Reference comparison |

### Metrics

**Primary Metrics:**
| Metric | Definition | Why Chosen |
|--------|------------|------------|
| {metric_1} | {how computed} | {justification} |

**Secondary Metrics:**
| Metric | Purpose |
|--------|---------|
| {metric_a} | {why measuring} |

### Procedure
1. {Step 1}
2. {Step 2}
3. {Step 3}
...

---

## Statistical Analysis Plan

### Sample Size
- **Runs:** {N} (seeds: [{seed1}, {seed2}, {seed3}])
- **Justification:** {Power analysis or resource constraint}

### Tests
| Test | Purpose | Assumptions |
|------|---------|-------------|
| {test_1} | {what it tests} | {required assumptions} |

### Effect Size
- **Measure:** {Cohen's d, eta-squared, etc.}
- **Thresholds:** Small: {X}, Medium: {Y}, Large: {Z}

### Multiple Comparisons
- **Correction:** {Bonferroni, FDR, none}
- **Adjusted α:** {value}

---

## Pass/Fail Criteria

### PASS if ALL of:
1. [ ] {Primary metric} > {threshold} (justification: {why this threshold})
2. [ ] p < {alpha} vs baseline
3. [ ] Effect size > {threshold} ({interpretation})
4. [ ] {Reproducibility criterion}

### FAIL if ANY of:
- [ ] {Primary metric} ≤ {lower_threshold}
- [ ] {Execution failure condition}
- [ ] {Reproducibility failure}

### INCONCLUSIVE if:
- [ ] {Borderline conditions requiring follow-up}

---

## Reproducibility

### Environment
- **Hardware:** {specs}
- **Software:** {versions}
- **Dependencies:** See requirements.txt

### Seeds
- **Execution:** [{seed1}, {seed2}, {seed3}]
- **Fixed seed for:** {any deterministic components}

### Code
- **Script:** {path/to/main_script}
- **Config:** {path/to/config}
- **Commit:** {to be filled after freeze}

---

## Effort Estimate

| Phase | Time | Resources |
|-------|------|-----------|
| Setup | {time} | {resources} |
| Execution | {time} | {resources} |
| Analysis | {time} | {resources} |
| **Total** | **{total}** | |

---

## Deliverables

1. [ ] \`config.yaml\` - Frozen configuration
2. [ ] \`results/seed*/\` - Raw outputs per seed
3. [ ] \`analysis/statistical_report.md\` - Full analysis
4. [ ] \`SUMMARY.md\` - Key findings

---

**Protocol Prepared by:** {name/agent}
**Review Requested from:** Popper (methodology), Newton (feasibility)
**Approval Status:** DRAFT
`,
};

/**
 * Summary template - results summary (AFTER execution)
 */
const summaryTemplate: Template = {
  type: 'summary',
  extension: 'md',
  description: 'Results summary template - complete after analysis',
  content: `# E{M}.{N} {Experiment Name} - Results Summary

**ID:** E{M}.{N}_{experiment_name}
**Date Completed:** {YYYY-MM-DD}
**Status:** {COMPLETE | FAILED | INCONCLUSIVE}
**Verdict:** {PASS | FAIL | NEEDS FOLLOW-UP}

---

## Executive Summary

{2-3 sentence summary of what was done and what was found}

---

## Results

### Primary Metrics

| Condition | {Metric 1} | 95% CI | vs Baseline |
|-----------|------------|--------|-------------|
| {condition_1} | {mean} ± {std} | [{lower}, {upper}] | {+/-X, p=Y} |
| {condition_2} | {mean} ± {std} | [{lower}, {upper}] | {+/-X, p=Y} |
| {baseline} | {mean} ± {std} | [{lower}, {upper}] | - |

### Statistical Tests

**{Test Name}:**
- Test statistic: {value}
- p-value: {value}
- Effect size: {measure} = {value} ({interpretation})
- 95% CI for difference: [{lower}, {upper}]

### Secondary Metrics

| Metric | {Condition 1} | {Condition 2} | Notes |
|--------|---------------|---------------|-------|
| {metric_a} | {value} | {value} | {observation} |

---

## Pass/Fail Assessment

| Criterion | Result | Notes |
|-----------|--------|-------|
| {criterion_1} | ✓ PASS / ✗ FAIL | {details} |
| {criterion_2} | ✓ PASS / ✗ FAIL | {details} |
| {criterion_3} | ✓ PASS / ✗ FAIL | {details} |

**Overall Verdict:** {PASS | FAIL | INCONCLUSIVE}

---

## Interpretation

### Key Findings
1. {Finding 1}
2. {Finding 2}
3. {Finding 3}

### Unexpected Observations
- {Observation that wasn't predicted}

### Limitations
- {Limitation 1}
- {Limitation 2}

---

## Decision & Rationale

**Decision:** {What we conclude and what action to take}

**Rationale:** {Why this decision follows from the results}

---

## Implications

### For This Milestone
- {Implication for current work}

### For Future Work
- {Broader implications}

---

## Follow-Ups

{If needed, list follow-up experiments}

| ID | Purpose | Priority |
|----|---------|----------|
| E{M}.{N}F1_{name} | {validation goal} | {HIGH/MEDIUM/LOW} |
| E{M}.{N}F2_{name} | {robustness test} | {HIGH/MEDIUM/LOW} |

---

## Artifacts

- \`config.yaml\` - Frozen configuration
- \`results/\` - Raw outputs ({N} seeds)
- \`analysis/statistical_report.md\` - Full statistical analysis
- \`analysis/plots/\` - Visualizations

---

**Summary Prepared by:** {name/agent}
**Reviewed by:** Popper
`,
};

/**
 * Config template - frozen configuration
 */
const configTemplate: Template = {
  type: 'config',
  extension: 'yaml',
  description: 'Configuration template - freeze after execution starts',
  content: `# E{M}.{N} {Experiment Name} - Configuration
# WARNING: This file is FROZEN after execution starts. DO NOT MODIFY.
# To change parameters, create a new experiment or follow-up.

experiment:
  id: "E{M}.{N}_{experiment_name}"
  name: "{Human-readable experiment name}"
  date: "{YYYY-MM-DD}"
  status: "running"  # planned | running | complete | failed

  # Version control
  git_commit: "{commit_hash}"
  git_branch: "{branch_name}"

# Execution settings
execution:
  seeds: [42, 123, 456]
  # Add domain-specific execution parameters here

# Evaluation settings
evaluation:
  metrics:
    primary: ["{metric_1}"]
    secondary: ["{metric_2}", "{metric_3}"]
  # Add domain-specific evaluation parameters here

# Reproducibility
reproducibility:
  random_seed_strategy: "per-run"  # per-run | fixed | none
  deterministic: true

  environment:
    python_version: "{X.Y.Z}"
    # Add other environment details

  hardware:
    # Add hardware specs

# Frozen timestamp
frozen_at: "{ISO-8601 timestamp}"
frozen_by: "{agent or human}"
`,
};

/**
 * Analysis template - statistical report
 */
const analysisTemplate: Template = {
  type: 'analysis',
  extension: 'md',
  description: 'Statistical analysis report template',
  content: `# E{M}.{N} {Experiment Name} - Statistical Analysis

**Analyst:** Curie
**Date:** {YYYY-MM-DD}

---

## Data Summary

### Sample Sizes
| Condition | N (runs) | N (observations) |
|-----------|----------|------------------|
| {condition_1} | {n_runs} | {n_obs} |
| {condition_2} | {n_runs} | {n_obs} |

### Missing Data
- **Missing values:** {count or "None"}
- **Handling:** {how addressed}

---

## Descriptive Statistics

### {Primary Metric}

| Condition | Mean | Std | Median | Min | Max | 95% CI |
|-----------|------|-----|--------|-----|-----|--------|
| {cond_1} | {val} | {val} | {val} | {val} | {val} | [{l}, {u}] |
| {cond_2} | {val} | {val} | {val} | {val} | {val} | [{l}, {u}] |

### Distribution Assessment
- **Normality test:** {test name}, {statistic} = {value}, p = {value}
- **Interpretation:** {normal / non-normal / borderline}

---

## Hypothesis Tests

### Test 1: {Test Name}

**Purpose:** {What this test evaluates}

**Assumptions:**
- [ ] {Assumption 1}: {SATISFIED / VIOLATED}
- [ ] {Assumption 2}: {SATISFIED / VIOLATED}

**Results:**
- Test statistic: {name} = {value}
- Degrees of freedom: {df}
- p-value: {value} ({one-tailed / two-tailed})
- **Interpretation:** {Reject H0 / Fail to reject H0}

### Effect Size

- **Measure:** {Cohen's d / eta-squared / etc.}
- **Value:** {value}
- **95% CI:** [{lower}, {upper}]
- **Interpretation:** {negligible / small / medium / large}

---

## Pairwise Comparisons

{If applicable}

| Comparison | Δ | p (raw) | p (adjusted) | d | Significant? |
|------------|---|---------|--------------|---|--------------|
| A vs B | {diff} | {p} | {p_adj} | {d} | {Yes/No} |
| A vs C | {diff} | {p} | {p_adj} | {d} | {Yes/No} |

**Correction method:** {Bonferroni / Holm / FDR / none}

---

## Visualization Summary

1. **{Plot 1 name}** - {what it shows}
2. **{Plot 2 name}** - {what it shows}

See \`plots/\` directory for figures.

---

## Conclusions

### Statistical Conclusions
1. {Conclusion about H1/H0}
2. {Conclusion about effect size}
3. {Conclusion about practical significance}

### Limitations
- {Statistical limitation 1}
- {Statistical limitation 2}

### Recommendations
- {Recommendation for interpretation}
- {Recommendation for follow-up}

---

**Analysis Complete**
`,
};

/**
 * Notes template - human observations
 */
const notesTemplate: Template = {
  type: 'notes',
  extension: 'md',
  description: 'Human observations and notes template',
  content: `# E{M}.{N} {Experiment Name} - Notes

Human observations, decisions, and insights during this experiment.

---

## Session Log

### {YYYY-MM-DD}

**Context:** {What prompted this session}

**Observations:**
- {Observation 1}
- {Observation 2}

**Decisions Made:**
- {Decision 1}: {rationale}

**Questions/Ideas:**
- {Question or idea for follow-up}

**Next Actions:**
- [ ] {Action item 1}
- [ ] {Action item 2}

---

### {YYYY-MM-DD}

{Continue adding dated entries...}

---

## Key Insights

{Summarize the most important observations across all sessions}

1. {Insight 1}
2. {Insight 2}

---

## Anomalies & Surprises

{Document anything unexpected}

| Date | Observation | Investigated? | Resolution |
|------|-------------|---------------|------------|
| {date} | {what happened} | {Yes/No} | {outcome} |

---

## Ideas for Future Work

{Capture ideas that emerge during this experiment}

- {Idea 1}
- {Idea 2}
`,
};

/**
 * Milestone README template
 */
const milestoneReadmeTemplate: Template = {
  type: 'milestone_readme',
  extension: 'md',
  description: 'Milestone overview and status template',
  content: `# Milestone {X}: {Milestone Name}

**Status:** {IN PROGRESS | COMPLETE | BLOCKED}
**Started:** {YYYY-MM-DD}
**Target Completion:** {YYYY-MM-DD}

---

## Goal

{What this milestone aims to achieve - 2-3 sentences}

---

## Success Criteria

- [ ] {Criterion 1}
- [ ] {Criterion 2}
- [ ] {Criterion 3}

---

## Experiments

| ID | Name | Status | Verdict | Key Finding |
|----|------|--------|---------|-------------|
| E{M}.1 | {name} | {status} | {verdict} | {1-line summary} |
| E{M}.2 | {name} | {status} | {verdict} | {1-line summary} |
| E{M}.3 | {name} | {status} | {verdict} | {1-line summary} |

---

## Progress Summary

### Completed
- {What has been accomplished}

### In Progress
- {Current work}

### Blocked/Waiting
- {Any blockers}

---

## Key Learnings

1. {Learning 1}
2. {Learning 2}

---

## Next Steps

1. {Next experiment or action}
2. {Following step}

---

## Dependencies

- **Requires from previous:** {What this milestone needs from earlier work}
- **Enables for next:** {What this milestone enables for future work}
`,
};

/**
 * Experiments index README template
 */
const experimentsReadmeTemplate: Template = {
  type: 'experiments_readme',
  extension: 'md',
  description: 'Top-level experiments directory index',
  content: `# Experiments

Research experiments organized by milestone.

---

## Milestones

| Milestone | Name | Status | Experiments | Key Outcome |
|-----------|------|--------|-------------|-------------|
| A | {name} | {status} | {count} | {summary} |
| B | {name} | {status} | {count} | {summary} |
| C | {name} | {status} | {count} | {summary} |

---

## Quick Links

- [Milestone A](./milestone_a/README.md)
- [Milestone B](./milestone_b/README.md)
- [Cross-Milestone Analyses](./cross_milestone/README.md)

---

## Naming Convention

- **Experiments:** \`E{M}.{N}_{name}\` where M=milestone, N=experiment number
- **Follow-ups:** \`E{M}.{N}F{F}_{name}\` where F=follow-up number
- **Examples:** E1.1_baseline, E2.3_ablation, E2.3F1_validation

---

## File Structure

Each experiment contains:
\`\`\`
E{M}.{N}_{name}/
├── protocol.md      # Design (BEFORE)
├── config.yaml      # Frozen config (DURING)
├── results/         # Outputs (DURING)
├── analysis/        # Statistical analysis (AFTER)
├── SUMMARY.md       # Key findings (AFTER)
└── NOTES.md         # Human observations (optional)
\`\`\`

---

## Status Key

- **PLANNED** - Protocol written, not started
- **IN PROGRESS** - Currently running
- **COMPLETE** - Finished and documented
- **FAILED** - Did not meet criteria
- **ABANDONED** - Stopped, no longer relevant
`,
};

/**
 * General domain templates (base for all domains)
 */
export const generalDomainTemplates: DomainTemplates = {
  domain: 'general',
  name: 'General Research',
  description: 'Base templates for any research domain',
  templates: {
    protocol: protocolTemplate,
    summary: summaryTemplate,
    config: configTemplate,
    analysis: analysisTemplate,
    notes: notesTemplate,
    milestone_readme: milestoneReadmeTemplate,
    experiments_readme: experimentsReadmeTemplate,
  },
  statisticalRequirements: {
    minRuns: 3,
    defaultSeeds: [42, 123, 456],
    alpha: 0.05,
    effectSizeMeasure: "Cohen's d",
    requiredTests: ['t-test', 'confidence interval'],
    confidenceLevel: 0.95,
  },
  terminology: {
    runName: 'run',
    executionName: 'execution',
    metricsName: 'metrics',
    subjectName: 'method',
    primaryOutput: 'results',
  },
};
