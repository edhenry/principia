<div align="center">

# Principia

**Multi-agent research orchestration for CS/ML/AI**

_Named after Newton's Principia Mathematica - where scientific methods were systematized._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Agents](https://img.shields.io/badge/Agents-11-ff0040)](https://github.com/edhenry/principia)
[![Research](https://img.shields.io/badge/Focus-Research-00ffff)](https://github.com/edhenry/principia)

[Install](#quick-install) • [Agents](#the-eleven-scientists) • [Skills](#research-skills) • [MCP Servers](#recommended-mcp-servers)

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
| `/literature-review` | Systematic literature discovery with Archimedes |
| `/hypothesis`        | Generate and evaluate hypotheses with Darwin    |
| `/experiment`        | Design rigorous experiments with Galileo        |
| `/critique`          | Critical methodology review with Popper         |
| `/paper-writing`     | Write scientific content with Feynman           |
| `/research-loop`     | Persistent research until completion            |

### Usage Examples

```bash
# In Claude Code:

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
