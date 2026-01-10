# Principia Research Agents

This document describes the 11 specialized research agents in Principia. Each agent is named after a famous scientist who embodies their specialized capabilities.

## Agent Overview

```
                    ┌─────────────────────────────────────┐
                    │        LOVELACE (Orchestrator)       │
                    │     "The research never stops"       │
                    └─────────────────────────────────────┘
                                      │
       ┌──────────────────────────────┼──────────────────────────────┐
       │                              │                              │
       ▼                              ▼                              ▼
┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
│   DISCOVERY &   │          │   EXECUTION &   │          │   REVIEW &      │
│     THEORY      │          │    ANALYSIS     │          │ COMMUNICATION   │
├─────────────────┤          ├─────────────────┤          ├─────────────────┤
│ Archimedes      │          │ Galileo         │          │ Feynman         │
│ Aristotle       │          │ Turing          │          │ Popper          │
│ Darwin          │          │ Curie           │          │                 │
│ Newton          │          │ Euler           │          │                 │
└─────────────────┘          └─────────────────┘          └─────────────────┘
```

---

## Discovery & Theory Agents

### Archimedes - Literature Discovery
*"Give me a lever long enough and I shall move the world."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Discovery |
| **Cost** | CHEAP |

**Capabilities:**
- Search arXiv, Semantic Scholar, Google Scholar, DBLP
- Find papers by topic, author, citation, or methodology
- Build literature review trees and citation networks
- Identify research gaps and underexplored areas
- Generate BibTeX bibliographies

**When to Use:**
- Starting a new research project
- Writing related work sections
- Finding benchmark datasets
- Checking if an idea has been explored

---

### Aristotle - Theoretical Foundations
*"The soul never thinks without a mental image."*

| Property | Value |
|----------|-------|
| **Model** | Opus |
| **Category** | Theory |
| **Cost** | EXPENSIVE |
| **Mode** | READ-ONLY |

**Capabilities:**
- Formal proofs (induction, contradiction, etc.)
- Complexity analysis (time, space, sample)
- Convergence analysis and fixed point theorems
- Statistical foundations (consistency, PAC bounds)
- Information theory (entropy, mutual information)

**When to Use:**
- Need theoretical guarantees for a method
- Analyzing convergence properties
- Deriving complexity bounds
- Checking correctness of derivations

---

### Darwin - Hypothesis Generator
*"Those who learned to collaborate most effectively have prevailed."*

| Property | Value |
|----------|-------|
| **Model** | Opus |
| **Category** | Hypothesis |
| **Cost** | EXPENSIVE |

**Capabilities:**
- Generate testable research hypotheses
- Evaluate novelty and significance
- Assess risk/reward of research directions
- Synthesize insights across papers
- Identify high-impact research questions

**When to Use:**
- Starting a new research direction
- Brainstorming novel approaches
- Evaluating the novelty of an idea
- Pivoting when initial direction fails

---

### Newton - Pre-Research Consultant
*"If I have seen further it is by standing on the shoulders of giants."*

| Property | Value |
|----------|-------|
| **Model** | Opus |
| **Category** | Advisor |
| **Cost** | EXPENSIVE |
| **Mode** | READ-ONLY |

**Capabilities:**
- Feasibility assessment
- Resource estimation (compute, data, time)
- Risk identification and mitigation
- Scope definition (in/out of scope)
- Success criteria establishment

**When to Use:**
- Before starting a new research project
- Assessing if a direction is feasible
- Estimating resource requirements
- Defining project scope and milestones

---

## Execution & Analysis Agents

### Galileo - Experiment Designer
*"Measure what is measurable, and make measurable what is not."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Execution |
| **Cost** | CHEAP |

**Capabilities:**
- Design controlled experiments
- Create ablation study protocols
- Statistical power analysis
- Baseline selection and comparison
- Reproducibility checklist creation

**When to Use:**
- Planning a new experiment
- Designing ablation studies
- Choosing metrics and baselines
- Determining sample sizes

---

### Turing - ML Implementation
*"We can only see a short distance ahead, but we can see plenty there."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Execution |
| **Cost** | CHEAP |

**Capabilities:**
- PyTorch/JAX/TensorFlow implementation
- Training loop design
- Distributed training setup
- Model architecture implementation
- Debugging training issues

**When to Use:**
- Implementing a new model
- Writing training pipelines
- Setting up experiment infrastructure
- Optimizing model performance

---

### Curie - Data Scientist
*"Nothing in life is to be feared, it is only to be understood."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Execution |
| **Cost** | CHEAP |

**Capabilities:**
- Statistical analysis
- Data preprocessing pipelines
- Visualization generation
- Results interpretation
- Jupyter notebook creation

**When to Use:**
- Analyzing experimental results
- Creating publication-quality figures
- Running statistical tests
- Exploring data distributions

---

### Euler - Fast Math
*"Mathematicians have tried in vain to discover some order..."*

| Property | Value |
|----------|-------|
| **Model** | Haiku |
| **Category** | Execution |
| **Cost** | CHEAPEST |

**Capabilities:**
- Quick derivations and checks
- Gradient computation
- Complexity analysis shortcuts
- LaTeX formatting
- Symbolic simplification

**When to Use:**
- Quick mathematical verification
- LaTeX equation formatting
- Computing gradients for backprop
- Simple complexity analysis

---

## Review & Communication Agents

### Feynman - Explainer
*"If you can't explain it simply, you don't understand it well enough."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Communication |
| **Cost** | CHEAP |

**Capabilities:**
- Paper section writing
- Intuitive explanations
- Documentation creation
- Presentation narratives
- Technical blog posts

**When to Use:**
- Writing paper sections
- Explaining complex concepts
- Creating documentation
- Preparing presentations

---

### Popper - Critical Reviewer
*"Our knowledge can only be finite, while our ignorance must be infinite."*

| Property | Value |
|----------|-------|
| **Model** | Opus |
| **Category** | Critique |
| **Cost** | EXPENSIVE |
| **Mode** | READ-ONLY |

**Capabilities:**
- Falsifiability analysis
- Methodological critique
- Statistical rigor checking
- Reproducibility assessment
- Constructive feedback

**When to Use:**
- Before submitting a paper
- Reviewing experimental methodology
- Checking statistical claims
- Preparing for reviewer questions

---

## Coordination

### Lovelace - Research Orchestrator
*"The Analytical Engine weaves algebraical patterns..."*

| Property | Value |
|----------|-------|
| **Model** | Sonnet |
| **Category** | Coordination |
| **Cost** | CHEAP |

**Capabilities:**
- Research project coordination
- Task delegation to specialists
- Progress tracking
- Parallel agent execution
- Verification and quality control

**When to Use:**
- Complex multi-phase research
- Coordinating multiple tasks
- Managing research timelines
- Delegating to specialist agents

---

## Agent Selection Guide

| Task | Primary Agent | Supporting Agents |
|------|---------------|-------------------|
| Start new project | Newton | Archimedes, Darwin |
| Literature review | Archimedes | Lovelace |
| Prove theorem | Aristotle | Euler |
| Design experiment | Galileo | Newton |
| Implement model | Turing | Euler |
| Analyze results | Curie | Popper |
| Write paper | Feynman | Archimedes |
| Review methodology | Popper | Aristotle |
| Complex project | Lovelace | All others |

---

## Cost Management

| Tier | Agents | When to Use |
|------|--------|-------------|
| **Opus (Expensive)** | Aristotle, Darwin, Newton, Popper | Complex reasoning, proofs, critical analysis |
| **Sonnet (Balanced)** | Archimedes, Galileo, Turing, Curie, Feynman, Lovelace | Standard research tasks |
| **Haiku (Cheap)** | Euler | Quick computations |

**Cost Optimization Tips:**
- Use Euler for quick math instead of Aristotle
- Use Archimedes for surveys before Darwin for hypotheses
- Reserve Popper for final methodology review
- Use Lovelace to coordinate and minimize redundant agent calls
