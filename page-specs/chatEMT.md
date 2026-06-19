# Page Spec: ChatEMT | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/chatEMT/index.html`
- Route: `/chatEMT/`
- Page title: `ChatEMT | Shreyas Sriram`
- Meta description: `ChatEMT healthcare communication architecture, EMT workflow context, and CCnC Solutions product incubation for Shreyas Sriram.`
- Stylesheet(s): `../routes.css?v=14`

## Global Visual System
- Use the `routes.css` dark editorial portfolio system: deep charcoal/blue background with soft radial color fields, cream text, muted secondary copy, Fraunces serif headlines, IBM Plex Sans body text, and IBM Plex Mono labels.
- Keep the page inside the centered `.shell` container, with generous bottom padding and a thin topbar divider.
- Preserve the current route hierarchy and link destinations unless an edit explicitly asks to change navigation.
- Panels should feel like translucent dark glass cards with subtle borders, 24px radius, and accent-specific border/glow colors.
- Chips are compact wrapped pills. Link cards are horizontal, clickable rows with a bold title and muted right-side descriptor.
- Maintain responsive behavior: multi-column layouts collapse cleanly to one column on small screens, without text overlap.

## Current Page Structure
1. `div.topbar`
   - Layout instruction: Top navigation: brand mark left, primary links right, thin divider under the row.
   - Contains/current text summary: Codes by Shrey Education Experiences Expression Connect
2. `section.hero`
   - Layout instruction: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
   - Contains/current text summary: Healthcare Communication + Architecture ChatEMT An early healthcare communication concept shaped by EMT experience, CCnC Solutions product incubation, BLS safety boundaries, and AI-assisted information gathering. Architecture EMT context Pu...
3. `section.grid#architecture`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Product Concept ChatEMT explored how a conversational interface could gather structured patient information, ask relevant follow-up questions, and produce a readable handoff summary without pretending to replace medical judgment. Architectu...
4. `section.section#emt-context`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: EMT + Healthcare Workflow Context EMT experience matters here because healthcare communication is not just a content problem. It is a time-pressured workflow involving uncertainty, triage language, patient emotion, family context, documenta...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Professional Takeaway Healthcare Workflow Design Define the care moment, user need, risk boundary, escalation path, and handoff artifact. Prompt + State Separation Keep persona, rules, question flow, and summary format legible enough to tes...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: ChatEMT
  - `div.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Public-Safe Scope
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Information gathering, not diagnosis Escalation-aware healthcare communication Patient summary generation for EMS handoff Workflow thinking from field...
- `section.grid#architecture`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Product Concept
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Concept
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Architecture Lens
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Node / Express Python Prompts OpenAI Experiments Static Frontend
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Safety Boundary
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Workflow Output
- `section.section#emt-context`: Distinct vertical section in the route flow. Current text cue: EMT + Healthcare Workflow Context
  - `h2`: Standalone heading anchoring the next content block. Current text cue: EMT + Healthcare Workflow Context
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: EMT experience matters here because healthcare communication is not just a content problem. It is a time-pressured workflow involving uncertainty, tri...
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: EMT-B Patient Handoff Triage Logic Scope Boundaries
- `section.section`: Distinct vertical section in the route flow. Current text cue: Professional Takeaway
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Professional Takeaway

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#architecture`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#emt-context`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: ChatEMT | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Healthcare Communication + Architecture
- `h1`: ChatEMT
- `p.lead`: An early healthcare communication concept shaped by EMT experience, CCnC Solutions product incubation, BLS safety boundaries, and AI-assisted information gathering.
- `a.button.primary`: Architecture
- `a.button.secondary`: EMT context
- `p.panel-title`: Public-Safe Scope
- `li`: Information gathering, not diagnosis
- `li`: Escalation-aware healthcare communication
- `li`: Patient summary generation for EMS handoff
- `li`: Workflow thinking from field care to product architecture
- `p.meta-label`: Origin
- `p.meta-value`: CCnC Solutions + EMT
- `p.meta-label`: Type
- `p.meta-value`: Healthcare chatbot sandbox
- `p.meta-label`: Boundary
- `p.meta-value`: BLS-informed support
- `p.meta-label`: Skill
- `p.meta-value`: Architecture + workflow design
- `p.panel-title`: Product Concept
- `p`: ChatEMT explored how a conversational interface could gather structured patient information, ask relevant follow-up questions, and produce a readable handoff summary without pretending to replace medical judgment.
- `p.panel-title`: Architecture Lens
- `p`: The early implementation used a lightweight web app and prompt experiments to test how healthcare prompts, role boundaries, context, and response formats could work together.
- `span.chip.tech`: Node / Express
- `span.chip.tech`: Python Prompts
- `span.chip.tech`: OpenAI Experiments
- `span.chip.tech`: Static Frontend
- `p.panel-title`: Safety Boundary
- `p`: The strongest design principle was constraint: the tool should defer direct medical questions beyond BLS scope, avoid diagnosis, and help people prepare information for qualified clinicians or EMS.
- `p.panel-title`: Workflow Output
- `p`: A useful version would summarize symptoms, context, relevant risks, and plain-language explanations so patients and responders share a clearer picture during handoff.
- `h2`: EMT + Healthcare Workflow Context
- `p`: EMT experience matters here because healthcare communication is not just a content problem. It is a time-pressured workflow involving uncertainty, triage language, patient emotion, family context, documentation, transport, and escalation.
- `span.chip.concept`: EMT-B
- `span.chip.concept`: Patient Handoff
- `span.chip.concept`: Triage Logic
- `span.chip.concept`: Scope Boundaries
- `h2`: Professional Takeaway
- `strong`: Healthcare Workflow Design
- `p`: Define the care moment, user need, risk boundary, escalation path, and handoff artifact.
- `strong`: Prompt + State Separation
- `p`: Keep persona, rules, question flow, and summary format legible enough to test and revise.
- `strong`: Product Maturity
- `p`: Early sandbox work later informs more formal clinical simulation, AI safety, and healthcare communication pages.
- `p.footer`: Related work: , , and . Clinical Roleplay Clinical AI Praxik
- `a.quiet-link`: Clinical Roleplay
- `a.quiet-link`: Clinical AI
- `a.quiet-link`: Praxik

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Architecture | `#architecture` |
| EMT context | `#emt-context` |
| Clinical Roleplay | `../clinical-roleplay/` |
| Clinical AI | `../clinical-ai/` |
| Praxik | `../praxik/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
