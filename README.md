<div align="center">

# Principia

**Multi-agent research orchestration for CS/ML/AI**

_Named after Newton's Principia Mathematica - where scientific methods were systematized._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agents](https://img.shields.io/badge/Agents-11-ff0040)](https://github.com/edhenry/principia)
[![Research](https://img.shields.io/badge/Focus-Research-00ffff)](https://github.com/edhenry/principia)

[Install](#quick-install) • [Agents](#the-eleven-scientists) • [Skills](#research-skills) • [Framework](#research-framework) • [MCP Servers](#recommended-mcp-servers)

</div>

---

## What is Principia?

Principia is a multi-agent orchestration system designed for **computer science, machine learning, and artificial intelligence research**. Each agent is named after a famous scientist who embodies their specialized capabilities.

---

## Quick Install

```bash
git clone https://github.com/edhenry/principia.git
cd principia
npm install
npm run build
npm link
```

Then run the installer:

```bash
principia install
```

---

## The Eleven Scientists

Each agent embodies the spirit of a famous scientist:

### Discovery & Theory

| Agent          | Named After                 | Model  | Specialty                                                      |
| -------------- | --------------------------- | ------ | -------------------------------------------------------------- |
| **Archimedes** | Ancient Greek polymath      | Sonnet | Literature discovery, citations, research gaps                 |
| **Aristotle**  | Father of formal logic      | Opus   | Formal proofs, complexity analysis, theoretical foundations    |
| **Darwin**     | Evolutionary theory pioneer | Opus   | Hypothesis generation, novelty assessment, research directions |
| **Newton**     | Principia author            | Opus   | Feasibility assessment, scoping, risk analysis                 |

### Execution & Analysis

| Agent       | Named After              | Model  | Specialty                                      |
| ----------- | ------------------------ | ------ | ---------------------------------------------- |
| **Galileo** | Father of modern science | Sonnet | Experiment design, ablation studies, protocols |
| **Turing**  | Father of CS and AI      | Sonnet | ML implementation, PyTorch/JAX/TensorFlow      |
| **Curie**   | Nobel Prize physicist    | Sonnet | Data analysis, visualization, statistics       |
| **Euler**   | Prolific mathematician   | Haiku  | Quick math, gradients, LaTeX formatting        |

### Review & Communication

| Agent       | Named After           | Model  | Specialty                                             |
| ----------- | --------------------- | ------ | ----------------------------------------------------- |
| **Feynman** | The Great Explainer   | Sonnet | Paper writing, clear explanations, documentation      |
| **Popper**  | Philosophy of science | Opus   | Critical review, falsifiability, methodology critique |

### Coordination

| Agent        | Named After      | Model  | Specialty                                 |
| ------------ | ---------------- | ------ | ----------------------------------------- |
| **Lovelace** | First programmer | Sonnet | Research orchestration, task coordination |

---

## Research Workflow

Principia follows the scientific method:

```
Research Question
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│                    LOVELACE (Orchestrator)                │
└──────────────────────────────────────────────────────────┘
       │
       ├─► Newton: Assess feasibility & scope
       │
       ├─► Archimedes: Literature survey
       │
       ├─► Darwin: Generate hypotheses
       │
       ├─► [PARALLEL]
       │   ├─► Aristotle: Theoretical foundation
       │   └─► Galileo: Experiment design
       │
       ├─► Turing: Implement experiments
       │
       ├─► Curie: Analyze results
       │
       ├─► Popper: Critical review
       │
       └─► Feynman: Write up findings
```

---

## Research Skills

Skills provide specialized research workflows:

| Skill                | Description                                     |
| -------------------- | ----------------------------------------------- |
| `/lovelace`          | Activate research orchestration mode            |
| `/protocol <domain>` | Activate research framework with domain context |
| `/templates`         | Show available templates and domains            |
| `/literature-review` | Systematic literature discovery with Archimedes |
| `/hypothesis`        | Generate and evaluate hypotheses with Darwin    |
| `/experiment`        | Design rigorous experiments with Galileo        |
| `/critique`          | Critical methodology review with Popper         |
| `/paper-writing`     | Write scientific content with Feynman           |
| `/research-loop`     | Persistent research until completion            |

### Usage Examples

```bash
# In Claude Code:

# Activate research framework for ML domain
/protocol ml

# Show available templates
/templates

# Start research orchestration
/lovelace survey the literature on transformer efficiency

# Generate hypotheses
/hypothesis what novel approaches could improve attention mechanisms

# Design experiments
/experiment create ablation study for proposed method

# Critical review
/critique review methodology for data leakage

# Write paper section
/paper-writing write introduction for attention efficiency paper
```

---

## Research Framework

Principia includes a structured research framework that ensures reproducibility and statistical rigor. Use `/protocol <domain>` to activate it.

### Available Domains

| Domain      | Description                                           |
| ----------- | ----------------------------------------------------- |
| **general** | Standard scientific methodology                       |
| **ml**      | Machine learning with training-specific terminology   |
| **systems** | Systems research (inherits from general)              |
| **theory**  | Theoretical CS (inherits from general)                |

### Directory Structure

When the research framework is active, agents create artifacts in this structure:

```
{project}/
├── experiments/                      # All research work
│   ├── README.md                     # Experiment index
│   ├── milestone_{a,b,c,...}/        # Research milestones
│   │   ├── README.md                 # Milestone overview & status
│   │   └── E{M}.{N}_{name}/          # Individual experiments
│   │       ├── protocol.md           # Design (BEFORE execution)
│   │       ├── config.yaml           # Frozen config (NEVER modify after)
│   │       ├── results/              # Outputs per seed
│   │       │   ├── seed42/
│   │       │   ├── seed123/
│   │       │   └── seed456/
│   │       ├── analysis/             # Statistical analysis (AFTER)
│   │       │   ├── statistical_report.md
│   │       │   └── plots/
│   │       ├── SUMMARY.md            # Key findings (AFTER)
│   │       ├── NOTES.md              # Human observations
│   │       └── followups/            # Validation experiments
│   │           └── E{M}.{N}F{F}_{name}/
│   └── cross_milestone/              # Meta-analyses spanning milestones
```

### Naming Conventions

| Type           | Format                | Examples                        |
| -------------- | --------------------- | ------------------------------- |
| **Experiment** | `E{M}.{N}_{name}`     | E1.1_baseline, E2.3_ablation    |
| **Follow-up**  | `E{M}.{N}F{F}_{name}` | E1.1F1_validation, E2.3F2_robust|
| **Milestone**  | `milestone_{letter}`  | milestone_a, milestone_b        |

Where: **M** = Milestone number, **N** = Experiment number, **F** = Follow-up number

### The 7-Phase Research Cycle

```
1. DESIGN    (Galileo)  → protocol.md
2. REVIEW    (Popper)   → Methodology critique
3. EXECUTE   (Turing)   → Training/running, results/
4. ANALYZE   (Curie)    → analysis/statistical_report.md
5. CRITIQUE  (Popper)   → Results review
6. DOCUMENT  (Feynman)  → SUMMARY.md
7. FOLLOW-UP (Galileo)  → followups/ if needed
```

### Statistical Requirements

The framework enforces statistical rigor:

| Requirement              | Value                           |
| ------------------------ | ------------------------------- |
| **Minimum seeds**        | 3 (default: 42, 123, 456)       |
| **Required statistics**  | Mean ± Std, 95% CI              |
| **Hypothesis tests**     | t-test or appropriate alternative|
| **Effect size**          | Cohen's d (small: 0.2, medium: 0.5, large: 0.8) |
| **Significance level**   | α = 0.05                        |

### Critical Rules

1. **FROZEN CONFIGS**: Once execution starts, `config.yaml` is IMMUTABLE
   - Want changes? Create a NEW experiment or follow-up

2. **MULTIPLE SEEDS**: Always ≥3 for statistical validity
   - Use: 42, 123, 456 (default)

3. **PRE-DEFINED CRITERIA**: Set pass/fail thresholds BEFORE execution
   - Include H1 (expected) and H0 (null) hypotheses

4. **EFFECT SIZES**: p-values alone are insufficient
   - Always compute Cohen's d or equivalent

5. **VALIDATION**: Surprising results require follow-up experiments

### Template Types

Each domain provides these templates (view with `/templates`):

| Template              | File                    | Purpose                              |
| --------------------- | ----------------------- | ------------------------------------ |
| **protocol**          | protocol.md             | Experiment design (BEFORE execution) |
| **config**            | config.yaml             | Frozen configuration (DURING)        |
| **summary**           | SUMMARY.md              | Key findings (AFTER)                 |
| **analysis**          | statistical_report.md   | Statistical analysis report          |
| **notes**             | NOTES.md                | Human observations, session log      |
| **milestone_readme**  | README.md               | Milestone overview and status        |
| **experiments_readme**| README.md               | Top-level experiments index          |

### Example: Running an ML Experiment

```bash
# 1. Activate ML research framework
/protocol ml

# 2. Design experiment with Galileo
/experiment design baseline comparison for attention mechanism

# 3. Galileo creates: experiments/milestone_a/E1.1_baseline/protocol.md

# 4. Review methodology with Popper
/critique review E1.1_baseline protocol for issues

# 5. Implement with Turing (config.yaml gets frozen)
Ask Turing to implement the training pipeline

# 6. Run with multiple seeds (42, 123, 456)

# 7. Analyze with Curie
/analyze results from E1.1_baseline across all seeds

# 8. Document with Feynman
Ask Feynman to write SUMMARY.md with findings
```

---

## Recommended MCP Servers

Enhance your research capabilities with these MCP servers:

### Academic Paper Search

| Server                   | Source                                                            | Features                                                          |
| ------------------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| **paper-search-mcp**     | [GitHub](https://github.com/openags/paper-search-mcp)             | arXiv, PubMed, bioRxiv, medRxiv, Google Scholar, Semantic Scholar |
| **semantic-scholar-mcp** | [GitHub](https://github.com/FujishigeTemma/semantic-scholar-mcp)  | 200M+ papers, citation networks, BibTeX/APA/MLA export            |
| **google-scholar-mcp**   | [GitHub](https://github.com/JackKuo666/Google-Scholar-MCP-Server) | Google Scholar search, author analysis, citation tracking         |
| **MCP-DBLP**             | [GitHub](https://github.com/flowhunt/MCP-DBLP)                    | CS bibliography, author exploration, venue search                 |

### Machine Learning & Datasets

| Server                     | Source                                                            | Features                                                   |
| -------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| **hf-mcp-server**          | [Hugging Face](https://huggingface.co/docs/hub/en/hf-mcp-server)  | 1M+ models, 250K+ datasets, Spaces, papers, FLUX image gen |
| **huggingface-mcp-server** | [GitHub](https://github.com/shreyaskarnik/huggingface-mcp-server) | Community HF server, model/dataset/paper search            |

### Scientific Computing

| Server                   | Source                                                       | Features                                          |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------- |
| **mcp-jupyter**          | [GitHub](https://github.com/datalayer/jupyter-mcp-server)    | Notebook execution, JupyterHub, kernel management |
| **jupyter-notebook-mcp** | [GitHub](https://github.com/jjsantos01/jupyter-notebook-mcp) | Two-way Claude ↔ Jupyter communication            |
| **pandas-mcp-server**    | [GitHub](https://github.com/marlonluo2018/pandas-mcp-server) | Pandas operations, data analysis, visualization   |

### Mathematical Computation

| Server                      | Source                                                                   | Features                                                 |
| --------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| **mcp-wolfram-alpha**       | [GitHub](https://github.com/cnosuke/mcp-wolfram-alpha)                   | Wolfram Alpha API, precise calculations, scientific data |
| **wolfram-mathematica-mcp** | [PulseMCP](https://www.pulsemcp.com/servers/aac6fef-wolfram-mathematica) | Wolfram Language execution, symbolic math                |

### LaTeX & Citations

| Server               | Source                                                     | Features                                              |
| -------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| **arxiv-latex-mcp**  | [GitHub](https://github.com/takashiishida/arxiv-latex-mcp) | Fetch LaTeX source from arXiv papers                  |
| **latex-mcp-server** | [GitHub](https://github.com/Yeok-c/latex-mcp-server)       | BibTeX parsing, PDF download, citation key generation |

### Code & Repository Analysis

| Server                | Source                                                                       | Features                                             |
| --------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| **github-mcp-server** | [GitHub](https://github.com/github/github-mcp-server)                        | Official GitHub server, repo management, code search |
| **code-index-mcp**    | [GitHub](https://github.com/johnhuang316/code-index-mcp)                     | Code indexing, semantic search, refactoring help     |
| **grep-mcp**          | [Vercel](https://vercel.com/blog/grep-a-million-github-repositories-via-mcp) | Search 1M+ GitHub repos for patterns                 |

### Knowledge Management

| Server                  | Source                                                     | Features                                                   |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| **obsidian-mcp-server** | [GitHub](https://github.com/cyanheads/obsidian-mcp-server) | Obsidian vault access, note search, frontmatter management |
| **notion-mcp**          | [PulseMCP](https://www.pulsemcp.com/servers/notion)        | Notion workspace integration, page/database access         |

### Cloud Storage

| Server                | Source                                                      | Features                                |
| --------------------- | ----------------------------------------------------------- | --------------------------------------- |
| **aws-s3-mcp**        | [GitHub](https://github.com/OpenWorkspace-o1/aws-ow-s3-mcp) | S3 bucket operations, pre-signed URLs   |
| **gdrive-mcp-server** | [GitHub](https://github.com/felores/gdrive-mcp-server)      | Google Drive file access and management |

### Configuration Example

Add to your `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "huggingface": {
      "url": "https://huggingface.co/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_HF_TOKEN"
      }
    },
    "semantic-scholar": {
      "command": "uvx",
      "args": ["semantic-scholar-mcp"],
      "env": {
        "SEMANTIC_SCHOLAR_API_KEY": "your-api-key"
      }
    },
    "jupyter": {
      "command": "uvx",
      "args": ["mcp-jupyter"]
    },
    "paper-search": {
      "command": "uvx",
      "args": ["paper-search-mcp"]
    },
    "wolfram": {
      "command": "uvx",
      "args": ["mcp-wolfram-alpha"],
      "env": {
        "WOLFRAM_API_KEY": "your-wolfram-key"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@github/mcp-server"],
      "env": {
        "GITHUB_TOKEN": "your-github-token"
      }
    }
  }
}
```

### API Keys Needed

| Server           | API Key Source                                                                 |
| ---------------- | ------------------------------------------------------------------------------ |
| Hugging Face     | [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)       |
| Semantic Scholar | [semanticscholar.org/product/api](https://www.semanticscholar.org/product/api) |
| Wolfram Alpha    | [developer.wolframalpha.com](https://developer.wolframalpha.com/)              |
| GitHub           | [github.com/settings/tokens](https://github.com/settings/tokens)               |

---

## Agent Categories

Agents are organized by their role in the research workflow:

| Category          | Agents                        | Model Tier | When to Use                             |
| ----------------- | ----------------------------- | ---------- | --------------------------------------- |
| **Discovery**     | Archimedes                    | Sonnet     | Finding papers, building bibliographies |
| **Theory**        | Aristotle                     | Opus       | Proofs, formal analysis                 |
| **Hypothesis**    | Darwin                        | Opus       | Generating research ideas               |
| **Advisor**       | Newton                        | Opus       | Scoping, feasibility                    |
| **Execution**     | Galileo, Turing, Curie, Euler | Mixed      | Designing and running experiments       |
| **Critique**      | Popper                        | Opus       | Critical review                         |
| **Communication** | Feynman                       | Sonnet     | Writing and explaining                  |
| **Coordination**  | Lovelace                      | Sonnet     | Orchestrating workflow                  |

---

## Configuration

### Project-Level Research Context

Create `.claude/CLAUDE.md` in your research project:

```markdown
# Research Project Context

## Research Area

- Domain: Computer Vision / Self-Supervised Learning
- Focus: Contrastive learning efficiency

## Conventions

- All experiments in /experiments
- Results in /results with date prefix
- Use PyTorch Lightning for training

## Baselines

- SimCLR, MoCo v3, DINO
- Report: Top-1 accuracy, Linear probe, kNN

## Compute

- 4x A100 GPUs available
- Max 48 hour jobs
```

### Agent Customization

Edit agent files in `~/.claude/agents/` to customize:

```yaml
---
name: archimedes
description: Literature discovery specialist
tools: WebSearch, WebFetch, Read, Write
model: sonnet
---
Your custom prompt additions...
```

---

## Research Domain Support

Principia supports multiple CS/ML/AI research domains:

| Domain                     | Key Agents                  | Typical Workflow                 |
| -------------------------- | --------------------------- | -------------------------------- |
| **Machine Learning**       | Darwin, Turing, Curie       | Hypothesis → Implement → Analyze |
| **NLP**                    | Archimedes, Turing, Feynman | Survey → Build → Write           |
| **Computer Vision**        | Galileo, Turing, Popper     | Design → Train → Review          |
| **Reinforcement Learning** | Aristotle, Turing, Curie    | Theory → Implement → Analyze     |
| **Theory**                 | Aristotle, Euler, Popper    | Prove → Verify → Critique        |

---

## Credits

- Forked from [oh-my-claude-sisyphus](https://github.com/Yeachan-Heo/oh-my-claude-sisyphus) by Yeachan Heo
- Inspired by the scientific method and history of science
- Agent names honor: Archimedes, Aristotle, Darwin, Newton, Galileo, Turing, Curie, Feynman, Popper, Euler, Lovelace

---

<div align="center">

_"If I have seen further it is by standing on the shoulders of giants."_
— Isaac Newton

**The research never stops.**

</div>
