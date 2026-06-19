# AI Agentic Infrastructure Reference

Purpose: extracted industry notes from the 73-image set on MCP, skills, RAG, agents, copilot workflows, evals, ontology, AI safety, and AI infrastructure.

Primary source: user-provided screenshots from LinkedIn, Threads, TikTok, Instagram, and related feeds.

Official references:

- OpenAI Agents: https://platform.openai.com/docs/guides/agents
- OpenAI Agents SDK: https://platform.openai.com/docs/guides/agents-sdk
- OpenAI Retrieval: https://platform.openai.com/docs/guides/retrieval
- OpenAI File Search: https://platform.openai.com/docs/guides/tools-file-search
- OpenAI Graders: https://platform.openai.com/docs/guides/graders/
- Anthropic Model Context Protocol: https://docs.anthropic.com/en/docs/mcp
- Anthropic Claude Code setup: https://docs.anthropic.com/en/docs/claude-code/getting-started
- Anthropic Claude Code CLI reference: https://docs.anthropic.com/en/docs/claude-code/cli-usage

Related local references:

- [No-Code RAG Chatbot Follow-Along](../no-code-rag-chatbot-follow-along.md)
- [AI Builder / PM / FDE Skill Map](./ai-builder-pm-fde-skill-map.md)
- [Health-Tech Wearables and WHOOP Reference](./health-tech-wearables-whoop-reference.md)
- [AI Health-Tech Resume Positioning](./ai-healthtech-resume-positioning.md)
- `llm-wiki-knowledge-base/00 System/Codex Cursor Role Split.md`
- `llm-wiki-knowledge-base/02 LLM Wiki/wiki/concepts/Agent Review Loop.md`

## Core Thesis

The industry is moving from "ask a model a question" to "architect a system that routes context, tools, memory, verification, and action through the right cognitive layer."

The model is not the product by itself. The durable advantage is the operating system around it:

- What the model can see.
- What instructions it follows.
- What tools it can call.
- What actions it is allowed to take.
- What evidence it must use.
- How its work is evaluated.
- How knowledge persists across sessions.
- How humans audit and steer it.

## MCP Versus Skills

Extracted distinction:

- MCP is a protocol for connecting external context and tools: databases, APIs, files, services, local apps, and workflows.
- Skills are reusable instructions: markdown-based procedural knowledge that tells an assistant how to work in a domain, repo, workflow, or role.

Simple framing:

- MCP is what the agent can access.
- Skills are how the agent should reason and operate.
- MCP without skills gives access without domain judgment.
- Skills without MCP gives good procedure without live context.
- Together, they create useful automation.

Design implication:

- Use MCP for governed access to the outside world.
- Use skills for stable work patterns, checklists, review loops, and domain behavior.
- Keep both scoped. More tools and more instructions do not automatically improve output.

## RAG Is A Retrieval Pipeline, Not A Chatbot Trick

Extracted production RAG flow:

1. User question.
2. Backend API.
3. Query embedding.
4. Vector database search.
5. Relevant chunks retrieved.
6. Prompt builder.
7. LLM.
8. Answer with sources.

The production work is around the retrieval layer:

- Chunking strategy.
- Tenant and user metadata filtering.
- Permissions.
- Prompt-injection protection.
- Vector search latency.
- Reranking.
- Source traceability.
- Response validation.
- Confidence or abstention behavior.

Useful principle: if retrieval quality is weak, the system becomes "hallucination as a service." The fix is usually not only a better model; it is better data, better chunking, better metadata, better evals, and better source boundaries.

## Recursive Retrieval Pattern

One screenshot described a "recursive knowledge engine" pattern:

1. Retrieve.
2. Answer.
3. Critique.
4. Refine.
5. Retrieve again.

Additional implementation notes:

- Upload PDFs/text.
- Build local embeddings.
- Use FAISS or another vector index.
- Run multiple retrieval passes, not one-shot retrieval.
- Show sources and similarity scores for transparency.
- Use a FastAPI backend and simple chat UI.
- Track latency and confidence across iterations.

Interpretation:

- This is useful when research quality matters more than speed.
- The critic/refine step should be measured; recursive loops can also drift if they keep retrieving noisy context.
- Add an iteration cap, source budget, and final evidence check.

## Context Engineering And Completion Engines

Several screenshots framed the core AI work as context quality rather than prompt cleverness.

High-risk failure:

- AI fabricates API contracts.
- AI assumes deployment details.
- AI invents endpoints.
- AI turns hallucinated assumptions into architecture.
- Teams build downstream work on false generated context.

Corrective pattern:

- Treat AI context like requirements.
- Curate, validate, and version it.
- Document what the agent does not know.
- Make the agent refuse to guess when evidence is missing.
- Separate "completion" from "clarification."

Practical rule: AI should not silently fill missing system context. It should ask, inspect, retrieve, or mark uncertainty.

## Ontology As Anti-Hallucination Infrastructure

Extracted concept:

- Ontology defines what entities exist, what relationships are valid, and what rules must hold.
- When an LLM works inside a governed ontology, it proposes actions on defined objects rather than inventing an unconstrained world.
- Ontology makes switching costs high because it becomes the way an organization thinks.

Architecture implication:

- Define domain objects.
- Define relationships.
- Define allowed actions.
- Define invalid states.
- Map natural language requests to this ontology before action.
- Log decisions against domain objects, not only against chat turns.

Good candidates for ontology:

- Healthcare: patient, encounter, lab result, wearable signal, care plan, consent, clinician, intervention.
- Product: user, journey, feature, event, metric, segment, experiment, risk, decision.
- Enterprise: account, contract, ticket, workflow, approval, compliance state, system of record.

## Single-Model Agents Waste Money

Extracted pattern:

- Bad architecture: one frontier model handles all steps, including button clicks, form filling, UI navigation, and nuanced judgment.
- Better architecture: route work by cognition density.

Layered agent pattern:

- Layer 1: deterministic automation for repetitive actions, form steps, page flow, clicks, extraction, and data movement.
- Layer 2: strategic reasoning for judgment, framing, synthesis, final decisions, and ambiguity.

Benefits:

- Lower cost.
- Lower latency.
- Faster cycles.
- Better output quality where judgment matters.
- Less drift.

Design rule: reserve expensive reasoning for steps where subtle judgment changes the outcome.

## Agentic Workflow Stack

Extracted recurring stack:

- Project instructions: `CLAUDE.md`, equivalent repo instructions, or operating manuals.
- Local overrides: private/personal instructions that are not committed.
- Settings: permissions, model, tools, config.
- Commands: slash commands or task macros for review, fix issue, deploy, compact, summarize.
- Rules: code style, testing, API conventions, security practices.
- Skills: auto-invoked workflows for security review, deployment, research, design review, or domain-specific execution.
- Agents: isolated subagent personas such as code reviewer, security auditor, research analyst, evaluator, or QA tester.
- MCP servers: controlled access to outside context and tools.
- Evals: deterministic checks and LLM-as-judge graders.
- Memory: project memory, user memory, lessons learned, and compact handoff summaries.

## Useful Agent Operating Patterns

### Plan Before Build

- Enter planning mode for multi-step or architectural work.
- If something goes sideways, pause and re-plan.
- Use plans for verification steps, not only implementation.
- Write detailed specs before ambiguity becomes hidden debt.

### Subagent Strategy

- Use subagents to keep the main context window clean.
- Offload research, exploration, and parallel analysis.
- Use more compute on complex problems, not on every task.
- Give one task per subagent.

### Self-Improvement Loop

- After corrections, update task or lessons files.
- Write rules for yourself that prevent the same mistake.
- Review lessons before similar future tasks.
- Let repeated failures become operating-system improvements.

### Verification Before Done

- Never call a task complete without proving it works.
- Diff before final response.
- Ask whether a senior engineer would approve it.
- Run tests, checks, demonstrations, or source validation.

### Compact Handoff

When context gets long, generate a clean handoff:

- Current task.
- Progress.
- Next steps.
- Key logic and files.
- Decisions and risks.

This supports transfer between Claude, ChatGPT, Codex, Copilot, Cursor, or another AI tool without losing continuity.

## AI Safety And Governance Signals

The screenshots repeatedly point to safety and governance becoming mainstream product work:

- AI agents in open competitive environments can optimize for local reward in ways that create global instability.
- Autonomous agents need auditability because natural language fluency does not mean human-like judgment.
- Evaluation must include gray-area human dynamics, such as emotional dependence, over-agreeability, persuasion, and harmful reinforcement.
- AI safety work now includes fairness, accountability, explainability, model lifecycle governance, risk management, data privacy, and cloud security.
- Prompt injection, data leakage, tool misuse, and overscoped autonomy are product architecture issues, not only model issues.

Governance checklist:

- Define allowed tools.
- Define forbidden actions.
- Define escalation thresholds.
- Log tool calls.
- Log retrieved context.
- Track confidence and refusal behavior.
- Evaluate with deterministic assertions and human review.
- Red-team gray-area interactions, not only policy violations.

## Tools Mentioned Across The Screenshots

AI build tools:

- OpenAI APIs.
- Claude / Claude Code / Claude Cowork.
- Gemini.
- Codex.
- Figma Make.
- Perplexity.
- FastAPI.
- FAISS.
- Vector databases.
- GitHub.
- n8n / Make.
- ElevenLabs.
- GoHighLevel.
- Meta Ads.
- CRM platforms.
- ChatGPT.

AI infrastructure concepts:

- Agents.
- MCP.
- Skills.
- Subagents.
- RAG.
- Recursive retrieval.
- Vector search.
- Embeddings.
- Reranking.
- Ontology.
- Memory.
- Evals.
- Graders.
- LLM-as-judge.
- Tool routing.
- Model routing.
- Deterministic automation.
- Human-in-the-loop review.

## Core Skill Shift

The screenshots converge on a practical industry claim:

- Raw output gets cheaper.
- Judgment gets more valuable.
- The scarce skill is not "prompting" alone.
- The scarce skill is designing reliable systems around AI.

High-value skills:

- Systems thinking.
- Distributed systems.
- Networking fundamentals.
- OS internals.
- Performance engineering.
- Data pipeline design.
- Retrieval evaluation.
- Product judgment.
- Domain modeling.
- Human-centered design.
- Security and privacy reasoning.
- Evidence-based validation.

## Source Image Coverage

The 73 screenshots were grouped as follows:

- Images 1, 35, 36, 37, 43, 48, 59: skills, Claude Code memory, `CLAUDE.md`, subagents, compact handoffs, evals, and workflow orchestration.
- Images 7, 26, 28: RAG, recursive retrieval, ontology, vector search, and retrieval quality.
- Images 9, 10, 20, 38, 41, 45, 54, 55: agent safety, completion-engine risk, model routing, AI governance, and cost-aware architectures.
- Images 2, 8, 22, 24, 29, 47, 56, 64: software foundations, robotics realism, sim-to-real, distributed systems, and embodied AI.
- Images 11, 15, 18, 27, 31, 42, 50, 53, 66, 67, 68: AI-native work, PM thinking, tool fluency, prompt iteration, GTM, startup feedback, and revenue discipline.
- Images 3, 30, 34, 39, 40, 44, 65, 72: human factors, UX research, design process, behavioral science, and healthcare product leadership.
- Images 4, 14, 21, 23, 32, 33, 46, 52, 57, 58, 60, 69, 70, 71, 73: health-tech, wearables, WHOOP, biometric data, coaching loops, movement analysis, and real-world validation.
- Images 5, 6, 12, 13, 16, 17, 19, 25, 49, 51, 61, 62, 63: broader adjacent context such as AI safety discourse, systems feeds, business development, environmental AI ethics, neural network history, medical education AI, autonomous labs, and older health/AI project history.
