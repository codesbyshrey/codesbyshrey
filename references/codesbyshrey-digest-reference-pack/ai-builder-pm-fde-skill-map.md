# AI Builder / PM / FDE Skill Map

Purpose: key skills a product manager, full-stack builder, or forward-deployed engineer should build for the next phase of AI, health-tech, wearable, and enterprise software work.

Primary source: user-provided 73-image set.

Related references:

- [AI Agentic Infrastructure Reference](./ai-agentic-infrastructure-reference.md)
- [Health-Tech Wearables and WHOOP Reference](./health-tech-wearables-whoop-reference.md)
- [AI Health-Tech Resume Positioning](./ai-healthtech-resume-positioning.md)
- [Backend API and System Design Reference](./backend-api-and-system-design-reference.md)
- [Project and System Design Notes](./project-system-design-notes.md)

## Core Industry Shift

The screenshots converge on one practical point: the market is rewarding people who can turn ambiguity into working systems.

In AI-heavy software work, the highest-value person is not only:

- A prompt writer.
- A pure UI builder.
- A model enthusiast.
- A slide-deck strategist.

The highest-value person can:

- Understand a domain.
- Define the decision to improve.
- Build or direct the system.
- Ground AI in the right data.
- Evaluate the output.
- Ship into a real workflow.
- Measure business or health outcomes.

## Skill Stack Overview

| Layer | PM | Full-Stack Builder | FDE |
|---|---|---|---|
| Problem framing | User pain, metric, hypothesis | Technical feasibility | Customer workflow diagnosis |
| Product thinking | Prioritization, scoping, narrative | UX and workflow implementation | Field requirement translation |
| Systems | Business process and dependencies | Backend, frontend, data, infra | Integration into existing systems |
| AI | Use cases, eval criteria, risk | RAG, tools, agents, model routing | Customer-specific automation |
| Data | Funnels, retention, behavior, outcomes | Pipelines, schemas, observability | Data mapping, ontology, source systems |
| UX | Journey mapping, usability, human factors | Interface and interaction states | Adoption and workflow fit |
| Delivery | One-pagers, roadmaps, stakeholder updates | Working product, tests, deployment | Client deliverables and implementation |
| Judgment | Tradeoffs, uncertainty, trust | Architecture choices | Field escalation and product feedback |

## PM Skills Moving Forward

Product basics that remain durable:

- Problem -> user pain -> metric -> hypothesis -> next step.
- Prioritization with RICE, ICE, or similar frameworks.
- Crisp one-pagers.
- Basic analytics: funnels, activation, retention, cohort behavior.
- Stakeholder communication through decision updates.
- Scope control: must-have vs nice-to-have.
- Customer journey mapping.
- User research and synthesis.
- Metric selection and tradeoff reasoning.

AI-era PM additions:

- Understand LLM capabilities and limits.
- Define AI acceptance criteria.
- Know when to use RAG, tools, workflow automation, or no AI.
- Design evals before launch.
- Define human-in-the-loop thresholds.
- Understand privacy, safety, and regulatory risk.
- Treat context as product infrastructure.
- Separate prototype value from production reliability.

## Full-Stack Builder Skills Moving Forward

Foundational software skills:

- Backend APIs.
- Frontend state and interaction design.
- Databases and schema design.
- Authentication and authorization.
- Deployment and CI/CD.
- Observability and logging.
- Testing.
- Performance.

Systems skills highlighted by the screenshots:

- Distributed systems.
- Networking fundamentals.
- OS internals.
- Performance engineering.
- Data pipelines.
- Queueing and async work.
- Reliability and rollback.
- Security and privacy.

AI builder skills:

- Embeddings.
- Vector databases.
- Chunking.
- Metadata filters.
- Reranking.
- Prompt builders.
- Tool calling.
- MCP-style context access.
- Agent orchestration.
- Model routing.
- Evals and graders.
- Retrieval logging.
- Confidence and refusal behavior.

## FDE Skills Moving Forward

Forward-deployed engineering sits between product, engineering, customer success, and strategy.

Core skills:

- Map customer workflows.
- Identify operational bottlenecks.
- Translate messy requirements into product constraints.
- Integrate with customer systems.
- Build demos that touch real data.
- Ship prototypes fast.
- Harden what proves useful.
- Communicate tradeoffs to nontechnical stakeholders.
- Capture repeatable patterns for the core product team.

AI-era FDE skills:

- Diagnose where AI belongs in a workflow.
- Route repetitive work to cheap deterministic layers.
- Reserve expensive reasoning for judgment-heavy moments.
- Build customer-specific RAG over trusted sources.
- Define ontology from customer operations.
- Add observability and audit logs for AI actions.
- Handle permissions, tenancy, and data deletion.
- Create eval sets from real customer examples.
- Package learning back into reusable product patterns.

## Human Factors And Health-Tech Skills

The screenshots repeatedly point to the same health-tech requirement: usable health products need clinical, behavioral, and product judgment.

Important skills:

- Human factors.
- UX research.
- Clinical workflow awareness.
- Behavior change design.
- Accessibility.
- Patient/member journey mapping.
- Consent and privacy.
- Biomarker literacy.
- Wearable signal interpretation.
- Longitudinal data reasoning.
- Risk communication.
- Escalation boundaries.

Health-tech product framing:

- Know what the number means.
- Know what the user can do about it.
- Know when the product should stay quiet.
- Know when the product should escalate.
- Know what claim the evidence supports.

## AI-Native Work Habits

From the screenshots:

- Use AI daily, but do not outsource judgment.
- Let first outputs show assumptions and gaps.
- Iterate: prompt, read, critique, refine.
- Think in flows, not screens.
- Use existing design context and system components.
- Ask for multiple variants quickly.
- Treat AI-made screens as wireframes unless rebuilt with production design standards.
- Use compact handoffs when context gets long.
- Document project instructions.
- Keep task packets scoped.
- Use review loops and tests before shipping.

## Product Judgment Economy

One screenshot framed the future as a "judgment economy."

Valuable skills:

- Exercise sound judgment under uncertainty.
- Craft strategic narratives that align people.
- Lead with empathy and curiosity.
- Know what not to build.
- Know when feedback is early and unclear rather than wrong.
- Know when a prototype has signal.
- Know when revenue, adoption, or clinical value must replace internal perfection.

Startup lesson:

- If nobody is using it, every architecture diagram, decision memo, and product plan is still speculative.
- The first dollar of revenue, real deployment, or validated outcome changes the ledger.

## Tool Stack To Stay Familiar With

AI and agent tools:

- OpenAI APIs.
- Claude / Claude Code.
- Codex.
- Gemini.
- Perplexity.
- Cursor.
- Copilot.
- Figma Make.
- MCP servers.
- Vector databases.
- FAISS.
- FastAPI.
- n8n / Make.
- GitHub.
- Evals / graders.

Product and design tools:

- Figma.
- Design systems.
- Analytics dashboards.
- Jira / Linear.
- One-pagers.
- Journey maps.
- Research repositories.
- Experiment trackers.

Health-tech and data tools:

- Wearables.
- Apple Health / HealthKit-style data sources.
- WHOOP-style biometrics.
- CGM data.
- Lab results.
- Clinical dashboards.
- Consent and privacy systems.
- Exportable clinician reports.

## Development Plan

### Month 1: AI Builder Foundations

- Build a small RAG system.
- Add source display.
- Add metadata filters.
- Add a refusal rule.
- Add a basic eval set.
- Document the architecture.

### Month 2: Agentic Workflow

- Add a tool-calling workflow.
- Route deterministic steps separately from reasoning steps.
- Add a compact handoff command.
- Add a review checklist.
- Log tool calls and retrieved context.

### Month 3: Health-Tech Product Case

- Build a wearable-style dashboard from mock data.
- Add behavior logging.
- Add pattern detection.
- Add a clinician or coach summary export.
- Add safety language and escalation boundaries.
- Write a product brief with metrics and risks.

### Month 4: FDE Simulation

- Pick a customer workflow.
- Interview or simulate stakeholders.
- Map source systems.
- Define ontology.
- Build a working prototype.
- Write a field implementation memo.
- Turn the repeated pattern into a reusable template.

## Skill Evidence To Build

Portfolio artifacts:

- AI product one-pager.
- RAG architecture diagram.
- Agent workflow spec.
- Eval set and scorecard.
- Health dashboard prototype.
- Wearable behavior-change product brief.
- FDE implementation memo.
- Resume case study with business, user, and technical outcomes.

Interview stories:

- A time you reduced ambiguity.
- A time you shipped a prototype quickly.
- A time you refused to overbuild.
- A time you used AI but preserved human judgment.
- A time you improved context quality.
- A time you translated domain knowledge into a product system.
