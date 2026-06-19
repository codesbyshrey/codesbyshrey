---
name: agentic-ai-builder
description: Use when designing, reviewing, or implementing AI agents, RAG systems, MCP/tool integrations, model routing, evals, compact handoffs, or AI-assisted development workflows that need reliable architecture rather than one-off prompting.
---

# Agentic AI Builder

## Use This Skill When

- Building a RAG system, copilot, agent, or internal AI tool.
- Designing MCP/tool access for an agent.
- Creating project instructions, task packets, compact handoffs, or review loops.
- Deciding which work should be deterministic automation versus LLM reasoning.
- Adding evals, graders, logging, or human review.

## Core Workflow

1. Define the user task and the decision the system must improve.
2. Identify source-of-truth data and tool access.
3. Separate deterministic steps from judgment-heavy reasoning.
4. Design retrieval before generation.
5. Add permissions, logging, and refusal behavior.
6. Add evals before expanding scope.
7. Document a compact handoff for future agents.

## Architecture Checklist

- User goal is explicit.
- Data sources are named.
- Retrieval path is defined.
- Metadata filters are defined.
- Prompt-injection risks are considered.
- Tool permissions are scoped.
- Tool calls are logged.
- Model choice matches cognition density.
- Human approval exists for risky actions.
- Outputs cite or summarize sources where needed.
- Evals cover common success and failure cases.

## Routing Rule

Use cheaper deterministic layers for:

- Clicking.
- Form filling.
- Data movement.
- File parsing.
- Template transforms.
- Simple extraction.
- Repetitive workflow steps.

Use stronger reasoning for:

- Ambiguous tradeoffs.
- Product framing.
- Architecture decisions.
- Final synthesis.
- Safety-sensitive judgment.
- Customer-specific workflow design.

## RAG Checklist

- Chunking strategy.
- Embedding model.
- Vector store.
- Metadata filters.
- Reranking if needed.
- Source display.
- Retrieval latency target.
- Refusal when sources are weak.
- Eval set with known answerable and unanswerable questions.

## Done Criteria

- The workflow runs on realistic examples.
- There is a visible failure mode.
- The system can explain what context it used.
- Risky actions require approval.
- Evals or manual checks are recorded.
- The next agent can continue from a compact handoff.
