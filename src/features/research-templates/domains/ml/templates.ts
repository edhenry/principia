/**
 * Machine Learning Domain Templates
 *
 * Specialized templates for ML/AI research experiments.
 * Extends general templates with ML-specific terminology and structure.
 */

import type { DomainTemplates, Template } from '../../types.js';

/**
 * ML Protocol template - experiment design for ML research
 */
const mlProtocolTemplate: Template = {
  type: 'protocol',
  extension: 'md',
  description: 'ML experiment design template - complete before training',
  content: `# E{M}.{N} {Experiment Name} - Protocol

**ID:** E{M}.{N}_{experiment_name}
**Date:** {YYYY-MM-DD}
**Status:** PLANNED
**Milestone:** {milestone_letter} - {milestone_description}
**Parent:** {parent_experiment_id or "None"}

---

## Research Question

{What specific question does this experiment answer about the model/method?}

---

## Hypotheses

**H1 (Alternative):** {What you expect - e.g., "Method X achieves higher accuracy than baseline Y"}

**H0 (Null):** {No effect - e.g., "Method X performs equivalently to baseline Y"}

---

## Methodology

### Dataset

| Property | Value |
|----------|-------|
| **Name** | {dataset name} |
| **Task** | {classification, generation, regression, etc.} |
| **Size** | {N samples} |
| **Split** | Train: {%} / Val: {%} / Test: {%} |
| **Classes/Labels** | {number and description} |
| **Sequence Length** | {if applicable} |

**Preprocessing:**
- {Step 1}
- {Step 2}

### Model Architecture

| Component | Configuration |
|-----------|---------------|
| **Architecture** | {model type} |
| **Parameters** | {approximate count} |
| **Key Hyperparameters** | {list important ones} |

### Training Configuration

| Parameter | Value | Justification |
|-----------|-------|---------------|
| **Epochs** | {N} | {why this number} |
| **Batch Size** | {N} | {memory/performance tradeoff} |
| **Learning Rate** | {value} | {based on prior experiments} |
| **Optimizer** | {name} | {why chosen} |
| **Scheduler** | {type} | {if applicable} |

### Baselines

| Baseline | Description | Expected Performance |
|----------|-------------|---------------------|
| **Random** | {random performance} | {value} |
| **Prior Work** | {best known method} | {value} |
| **Ablation** | {simplified version} | {value} |

### Evaluation Metrics

**Primary Metrics:**
| Metric | Definition | Why Chosen |
|--------|------------|------------|
| **Accuracy** | {how computed} | {justification} |
| **{Other}** | {how computed} | {justification} |

**Secondary Metrics:**
| Metric | Purpose |
|--------|---------|
| **Loss** | Training dynamics |
| **Perplexity** | {if applicable} |
| **{Domain-specific}** | {purpose} |

---

## Training Protocol

### Phase 1: Setup
1. Initialize model with seed
2. Load and preprocess dataset
3. Configure optimizer and scheduler
4. Set up logging (metrics per epoch)

### Phase 2: Training Loop
\`\`\`
for epoch in range(num_epochs):
    train_loss = train_one_epoch(model, train_loader)
    val_loss, val_metrics = evaluate(model, val_loader)
    log_metrics(epoch, train_loss, val_loss, val_metrics)

    if val_loss < best_val_loss:
        save_checkpoint(model, "best.pt")

    if early_stopping_triggered:
        break

save_checkpoint(model, "final.pt")
\`\`\`

### Phase 3: Evaluation
1. Load best checkpoint
2. Evaluate on held-out test set
3. Generate samples (if applicable)
4. Compute all metrics

**Total runs:** {N seeds} × {M conditions} = **{Total} runs**
**Estimated time:** {hours per run} × {total runs} = **{total GPU hours}**

---

## Statistical Analysis Plan

### Sample Size
- **Seeds:** [42, 123, 456] (minimum 3 for t-tests)
- **Power Analysis:** {if computed, otherwise "Standard 3-seed protocol"}

### Tests
| Test | Purpose | Assumptions |
|------|---------|-------------|
| Paired t-test | Compare to baseline | Normal differences, paired by seed |
| One-way ANOVA | Compare multiple conditions | Normal, equal variance |

### Effect Size
- **Measure:** Cohen's d
- **Thresholds:** Small: 0.2, Medium: 0.5, Large: 0.8

### Multiple Comparisons
- **Correction:** Bonferroni (α / n_comparisons)
- **Adjusted α:** {value}

---

## Pass/Fail Criteria

### PASS if ALL of:
1. [ ] Test accuracy > {threshold}% (baseline + {margin}, justification: {X})
2. [ ] p < 0.05 vs baseline (statistically significant)
3. [ ] Cohen's d > 0.5 (medium effect size)
4. [ ] CV < 10% across seeds (reproducible)
5. [ ] Training converged (no NaN/Inf losses)

### FAIL if ANY of:
- [ ] Test accuracy ≤ {lower_threshold}%
- [ ] Training diverges (NaN loss)
- [ ] OOM errors on target hardware
- [ ] Cannot reproduce across seeds (CV > 30%)

### INCONCLUSIVE if:
- [ ] 0.01 < p < 0.05 (borderline significance)
- [ ] Small effect (0.2 < d < 0.5) - may need more seeds

---

## Reproducibility

### Environment
\`\`\`bash
# Python environment
python --version  # 3.10+
pip freeze > requirements.txt

# Key packages
torch==X.Y.Z
transformers==X.Y.Z
# ... other dependencies
\`\`\`

### Hardware
- **GPU:** {type, e.g., NVIDIA A100 40GB}
- **VRAM Required:** {estimated GB}
- **Training Time:** {hours per seed}

### Seeds
- **Training seeds:** [42, 123, 456]
- **Data shuffle seed:** Same as training seed
- **Model init seed:** Same as training seed

### Code
- **Training script:** \`train.py\`
- **Evaluation script:** \`evaluate.py\`
- **Config file:** \`config.yaml\`
- **Git commit:** {to be filled after freeze}

---

## Checkpointing Strategy

| Checkpoint | When Saved | Purpose |
|------------|------------|---------|
| \`best.pt\` | Best val loss | Primary evaluation |
| \`final.pt\` | End of training | Backup/comparison |
| \`epoch_{N}.pt\` | Every {N} epochs | Optional recovery |

---

## Deliverables

1. [ ] \`config.yaml\` - Frozen configuration
2. [ ] \`results/seed{N}/\` - Per-seed outputs
   - \`metrics.jsonl\` - Training metrics
   - \`best.pt\` - Best checkpoint
   - \`samples/\` - Generated outputs (if applicable)
3. [ ] \`analysis/statistical_report.md\` - Full analysis
4. [ ] \`analysis/plots/\` - Learning curves, comparisons
5. [ ] \`SUMMARY.md\` - Key findings

---

**Protocol Prepared by:** Galileo
**Review Requested from:** Popper (methodology), Newton (feasibility)
**Approval Status:** DRAFT
`,
};

/**
 * ML Summary template
 */
const mlSummaryTemplate: Template = {
  type: 'summary',
  extension: 'md',
  description: 'ML results summary template',
  content: `# E{M}.{N} {Experiment Name} - Results Summary

**ID:** E{M}.{N}_{experiment_name}
**Date Completed:** {YYYY-MM-DD}
**Status:** {COMPLETE | FAILED | INCONCLUSIVE}
**Verdict:** {PASS | FAIL | NEEDS FOLLOW-UP}

---

## Executive Summary

{2-3 sentence summary: what was trained, what was achieved, what it means}

---

## Results

### Test Set Performance

| Model/Condition | Accuracy | Loss | 95% CI | vs Baseline |
|-----------------|----------|------|--------|-------------|
| **{Our Method}** | {X}% ± {Y}% | {val} | [{L}, {U}] | +{diff}pp *** |
| {Ablation} | {X}% ± {Y}% | {val} | [{L}, {U}] | +{diff}pp * |
| {Baseline} | {X}% ± {Y}% | {val} | [{L}, {U}] | - |
| Random | {X}% | - | - | - |

*p < 0.05, **p < 0.01, ***p < 0.001

### Training Dynamics

- **Convergence:** {Converged at epoch X / Did not converge}
- **Best Epoch:** {N} (val loss: {value})
- **Training Time:** {hours} per seed, {total hours} total
- **GPU Memory:** {X} GB peak

### Per-Seed Breakdown

| Seed | Test Acc | Val Loss (best) | Epochs | Notes |
|------|----------|-----------------|--------|-------|
| 42 | {X}% | {val} | {N} | {any issues} |
| 123 | {X}% | {val} | {N} | {any issues} |
| 456 | {X}% | {val} | {N} | {any issues} |
| **Mean** | **{X}% ± {Y}%** | **{val}** | **{N}** | |

---

## Statistical Analysis

### Primary Comparison: {Our Method} vs {Baseline}

| Statistic | Value |
|-----------|-------|
| Mean Difference | {+X.XX} percentage points |
| t-statistic | t({df}) = {value} |
| p-value | {value} ({one/two-tailed}) |
| Cohen's d | {value} ({small/medium/large}) |
| 95% CI for difference | [{lower}, {upper}] |

**Interpretation:** {Our method} {significantly outperforms / does not significantly differ from} {baseline} with a {small/medium/large} effect size.

### Reproducibility Check

- **Coefficient of Variation:** {X}% (target: < 10%)
- **Interpretation:** {High / Acceptable / Low} variance across seeds

---

## Pass/Fail Assessment

| Criterion | Threshold | Actual | Result |
|-----------|-----------|--------|--------|
| Test Accuracy | > {X}% | {Y}% | ✓ PASS / ✗ FAIL |
| Statistical Significance | p < 0.05 | p = {val} | ✓ PASS / ✗ FAIL |
| Effect Size | d > 0.5 | d = {val} | ✓ PASS / ✗ FAIL |
| Reproducibility | CV < 10% | CV = {val}% | ✓ PASS / ✗ FAIL |
| Training Stability | No NaN | {status} | ✓ PASS / ✗ FAIL |

**Overall Verdict:** {PASS | FAIL | INCONCLUSIVE}

---

## Key Findings

1. **{Finding 1}:** {Description with numbers}
2. **{Finding 2}:** {Description with numbers}
3. **{Finding 3}:** {Description with numbers}

### Unexpected Observations
- {Something surprising in training dynamics, per-class performance, etc.}

### Ablation Insights
- {What the ablation studies revealed about component importance}

---

## Failure Modes / Limitations

- **{Limitation 1}:** {Description and impact}
- **{Limitation 2}:** {Description and impact}

---

## Decision & Next Steps

**Decision:** {Accept this method / Reject and try alternative / Need more validation}

**Rationale:** {Why this follows from the results}

**Recommended Actions:**
1. {Action 1}
2. {Action 2}

---

## Follow-Up Experiments

| ID | Purpose | Priority | Status |
|----|---------|----------|--------|
| E{M}.{N}F1_{name} | {validation goal} | CRITICAL | {status} |
| E{M}.{N}F2_{name} | {robustness test} | HIGH | {status} |

---

## Artifacts

### Checkpoints
- \`results/seed42/best.pt\` ({X} MB)
- \`results/seed123/best.pt\` ({X} MB)
- \`results/seed456/best.pt\` ({X} MB)

### Metrics
- \`results/seed*/metrics.jsonl\` - Training logs

### Analysis
- \`analysis/statistical_report.md\` - Full stats
- \`analysis/plots/learning_curves.png\`
- \`analysis/plots/comparison.png\`

---

**Summary Prepared by:** Curie & Feynman
**Reviewed by:** Popper
`,
};

/**
 * ML Config template
 */
const mlConfigTemplate: Template = {
  type: 'config',
  extension: 'yaml',
  description: 'ML experiment configuration template',
  content: `# E{M}.{N} {Experiment Name} - Configuration
# WARNING: This file is FROZEN after training starts. DO NOT MODIFY.
# To change parameters, create a new experiment or follow-up.

experiment:
  id: "E{M}.{N}_{experiment_name}"
  name: "{Human-readable experiment name}"
  date: "{YYYY-MM-DD}"
  status: "running"  # planned | running | complete | failed

  # Version control
  git_commit: "{commit_hash}"
  git_branch: "{branch_name}"

# Dataset configuration
data:
  name: "{dataset_name}"
  path: "{path/to/data}"

  # Splits
  train_split: 0.8
  val_split: 0.1
  test_split: 0.1

  # Preprocessing
  max_length: {value}
  # Add other preprocessing params

# Model configuration
model:
  architecture: "{model_type}"

  # Architecture-specific params
  hidden_size: {value}
  num_layers: {value}
  # Add other architecture params

# Training configuration
training:
  epochs: {value}
  batch_size: {value}
  gradient_accumulation_steps: 1

  # Optimizer
  optimizer: "adamw"
  learning_rate: {value}
  weight_decay: {value}

  # Scheduler
  scheduler: "cosine"
  warmup_steps: {value}

  # Regularization
  dropout: {value}

  # Early stopping
  early_stopping: true
  patience: {value}
  min_delta: {value}

# Evaluation configuration
evaluation:
  eval_every_n_epochs: 1
  metrics:
    primary: ["accuracy"]
    secondary: ["loss", "perplexity"]

  # Generation settings (if applicable)
  num_samples: {value}
  sampling_temperature: {value}

# Reproducibility
reproducibility:
  seeds: [42, 123, 456]
  deterministic: true

  environment:
    python_version: "{X.Y.Z}"
    pytorch_version: "{X.Y.Z}"
    cuda_version: "{X.Y}"

  hardware:
    gpu: "{GPU type}"
    gpu_memory_gb: {value}
    num_gpus: 1

# Checkpointing
checkpointing:
  save_best: true
  save_final: true
  save_every_n_epochs: null  # or integer
  checkpoint_dir: "./results"

# Logging
logging:
  log_every_n_steps: 100
  wandb:
    enabled: false
    project: "{project_name}"
    entity: "{entity}"

# Frozen timestamp (filled automatically)
frozen_at: null
frozen_by: null
`,
};

/**
 * ML Analysis template
 */
const mlAnalysisTemplate: Template = {
  type: 'analysis',
  extension: 'md',
  description: 'ML statistical analysis report template',
  content: `# E{M}.{N} {Experiment Name} - Statistical Analysis

**Analyst:** Curie
**Date:** {YYYY-MM-DD}

---

## Data Summary

### Training Runs
| Seed | Epochs | Final Train Loss | Best Val Loss | Test Accuracy |
|------|--------|------------------|---------------|---------------|
| 42 | {N} | {val} | {val} | {X}% |
| 123 | {N} | {val} | {val} | {X}% |
| 456 | {N} | {val} | {val} | {X}% |

### Convergence Check
- **All runs converged:** {Yes/No}
- **NaN/Inf detected:** {Yes/No}
- **Early stopping triggered:** {N/3 runs}

---

## Descriptive Statistics

### Test Accuracy

| Statistic | Value |
|-----------|-------|
| Mean | {X}% |
| Standard Deviation | {Y}% |
| Median | {Z}% |
| Min | {A}% |
| Max | {B}% |
| 95% CI | [{L}%, {U}%] |
| Coefficient of Variation | {CV}% |

### Distribution Assessment

**Shapiro-Wilk Test for Normality:**
- W = {value}, p = {value}
- Interpretation: {Normal / Non-normal}

**Note:** With n=3, normality tests have low power. Using t-distribution CI is appropriate.

---

## Hypothesis Tests

### Test 1: Comparison to Baseline

**Paired t-test:** {Our Method} vs {Baseline}

| Component | Value |
|-----------|-------|
| Mean Difference | {value} |
| t-statistic | {value} |
| Degrees of Freedom | {N-1} |
| p-value (two-tailed) | {value} |

**Decision:** {Reject H0 / Fail to reject H0} at α = 0.05

### Effect Size

**Cohen's d:**
- Value: {d}
- 95% CI: [{lower}, {upper}]
- Interpretation: {negligible (<0.2) / small (0.2-0.5) / medium (0.5-0.8) / large (>0.8)}

**Practical Significance:**
- Absolute improvement: {X} percentage points
- Relative improvement: {Y}% over baseline

---

## Per-Class Analysis (if applicable)

| Class | Baseline | Our Method | Δ | Notes |
|-------|----------|------------|---|-------|
| {class_1} | {X}% | {Y}% | {diff} | {observation} |
| {class_2} | {X}% | {Y}% | {diff} | {observation} |
| ... | | | | |

**Class Imbalance Check:**
- Most improved: {class}, +{X}pp
- Least improved: {class}, +{X}pp
- Anomalies: {any unexpected patterns}

---

## Ablation Analysis (if applicable)

| Ablation | Accuracy | Δ vs Full | Contribution |
|----------|----------|-----------|--------------|
| Full Model | {X}% | - | - |
| - Component A | {Y}% | -{diff}pp | {interpretation} |
| - Component B | {Z}% | -{diff}pp | {interpretation} |
| Baseline | {W}% | -{diff}pp | - |

---

## Learning Curve Analysis

### Convergence Speed
- **Epochs to 90% of final:** {N}
- **Epochs to best val loss:** {N}
- **Training stability:** {Stable / Some variance / Unstable}

### Overfitting Check
- **Final train loss:** {value}
- **Final val loss:** {value}
- **Gap:** {value} ({interpretation})

---

## Visualizations

1. **Learning Curves** (\`plots/learning_curves.png\`)
   - Train/val loss per epoch for each seed

2. **Performance Comparison** (\`plots/comparison.png\`)
   - Bar chart with error bars comparing conditions

3. **Per-Class Breakdown** (\`plots/per_class.png\`)
   - Confusion matrix or per-class accuracy

---

## Summary Statistics Table

| Condition | Mean | Std | 95% CI | p vs Baseline | d |
|-----------|------|-----|--------|---------------|---|
| {Our Method} | {X}% | {Y}% | [{L}, {U}] | {p} | {d} |
| {Ablation 1} | {X}% | {Y}% | [{L}, {U}] | {p} | {d} |
| {Baseline} | {X}% | {Y}% | [{L}, {U}] | - | - |

---

## Conclusions

1. **Primary Finding:** {Our method} {does/does not} significantly outperform {baseline} (p = {value}, d = {value})

2. **Effect Size:** The improvement of {X} percentage points represents a {small/medium/large} effect

3. **Reproducibility:** Results are {highly reproducible (CV < 5%) / reproducible (CV < 10%) / variable (CV > 10%)}

4. **Component Importance:** {Which components contribute most, from ablation}

---

## Recommendations

1. {Statistical recommendation for interpretation}
2. {Recommendation for additional analysis}
3. {Recommendation for follow-up experiments}

---

**Analysis Complete**
`,
};

/**
 * Import general templates for types we don't override
 */
import { generalDomainTemplates } from '../general/templates.js';

/**
 * ML domain templates
 */
export const mlDomainTemplates: DomainTemplates = {
  domain: 'ml',
  name: 'Machine Learning',
  description: 'Templates for ML/AI training experiments',
  templates: {
    protocol: mlProtocolTemplate,
    summary: mlSummaryTemplate,
    config: mlConfigTemplate,
    analysis: mlAnalysisTemplate,
    // Inherit from general for these
    notes: generalDomainTemplates.templates.notes,
    milestone_readme: generalDomainTemplates.templates.milestone_readme,
    experiments_readme: generalDomainTemplates.templates.experiments_readme,
  },
  statisticalRequirements: {
    minRuns: 3,
    defaultSeeds: [42, 123, 456],
    alpha: 0.05,
    effectSizeMeasure: "Cohen's d",
    requiredTests: ['paired t-test', 'confidence interval'],
    confidenceLevel: 0.95,
  },
  terminology: {
    runName: 'seed',
    executionName: 'training',
    metricsName: 'accuracy/loss',
    subjectName: 'model',
    primaryOutput: 'checkpoint',
  },
};
