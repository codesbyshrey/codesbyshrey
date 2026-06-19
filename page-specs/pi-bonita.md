# Page Spec: Bonita | Practice Intuition

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/pi-bonita/index.html`
- Route: `/pi-bonita/`
- Page title: `Bonita | Practice Intuition`
- Meta description: `Bonita Encode AI wellness intelligence MVP, case study, and PRD links.`
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
   - Contains/current text summary: Practice Intuition Bonita Encode An AI wellness intelligence MVP that helps users route real-world challenges into TIME, SPACE, and SELF, then receive one structured protocol with clear steps, rationale, and safety boundaries. Open live bui...
3. `section.grid`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Problem Most wellness products isolate sleep, exercise, mood, or tracking. Bonita treats wellness as an interconnected system and gives users one actionable next step instead of an overwhelming plan. Experience Users can start from a brande...
4. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Process + Progress The product is documented as a PRD-to-MVP translation: a structured assessment flow, protocol engine, safety boundary model, and future telemetry loop. PRD Define the TIME, SPACE, SELF pillars and the wellness intelligenc...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Technical Skills Demonstrated Structured LLM Output Classification, clarifying questions, JSON-style responses, and UI-rendered protocols. Product Safety Medical boundary setting, escalation language, and wellness-coaching constraints. Fron...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Bonita Encode
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product System
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: TIME: circadian rhythm, sleep, timing, energy SPACE: body, movement, pain, fascia, environment SELF: mood, cognition, emotional regulation, identity I...
- `section.grid`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Problem
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Problem
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Experience
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: AI Behavior
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Value
- `section.section`: Distinct vertical section in the route flow. Current text cue: Process + Progress
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Process + Progress
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: The product is documented as a PRD-to-MVP translation: a structured assessment flow, protocol engine, safety boundary model, and future telemetry loop...
- `section.section`: Distinct vertical section in the route flow. Current text cue: Technical Skills Demonstrated
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Technical Skills Demonstrated

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Bonita | Practice Intuition
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Practice Intuition
- `h1`: Bonita Encode
- `p.lead`: An AI wellness intelligence MVP that helps users route real-world challenges into TIME, SPACE, and SELF, then receive one structured protocol with clear steps, rationale, and safety boundaries.
- `a.button.primary`: Open live build
- `a.button.secondary`: PI Bonita PRD v1
- `p.panel-title`: Product System
- `li`: TIME: circadian rhythm, sleep, timing, energy
- `li`: SPACE: body, movement, pain, fascia, environment
- `li`: SELF: mood, cognition, emotional regulation, identity
- `li`: IQ / EQ / KQ wellness dashboard framing
- `p.meta-label`: Domain
- `p.meta-value`: AI wellness intelligence
- `p.meta-label`: Stack
- `p.meta-value`: React, TypeScript, Gemini
- `p.meta-label`: Pattern
- `p.meta-value`: Assessment to protocol
- `p.meta-label`: Safety
- `p.meta-value`: Medical boundaries and escalation
- `p.panel-title`: Problem
- `p`: Most wellness products isolate sleep, exercise, mood, or tracking. Bonita treats wellness as an interconnected system and gives users one actionable next step instead of an overwhelming plan.
- `p.panel-title`: Experience
- `p`: Users can start from a branded entry point, browse pillar resources, complete a chat-based assessment, add daily check-in context, and generate a broader wellness dashboard.
- `p.panel-title`: AI Behavior
- `p`: The assistant classifies user needs, asks focused clarifying questions, returns structured JSON, renders checklist-style protocols, and preserves clear boundaries around medical advice.
- `p.panel-title`: Product Value
- `p`: The MVP demonstrates PRD-to-product translation: a premium-feeling front end, structured LLM output, safety checks, local telemetry concepts, and an extensible protocol framework.
- `h2`: Process + Progress
- `p`: The product is documented as a PRD-to-MVP translation: a structured assessment flow, protocol engine, safety boundary model, and future telemetry loop.
- `span.process-stage`: PRD
- `p.process-detail`: Define the TIME, SPACE, SELF pillars and the wellness intelligence framing.
- `p.process-evidence`: PI Bonita PRD v1
- `a.quiet-link`: PI Bonita PRD v1
- `span.process-stage`: MVP
- `p.process-detail`: Build a polished entry point with assessment, pillar resources, and protocol output.
- `p.process-evidence`: Live build linked from hero.
- `span.process-stage`: Protocol
- `p.process-detail`: Use structured LLM output so the assistant returns renderable product data instead of raw chat.
- `p.process-evidence`: Checklist-style protocol workflow.
- `span.process-stage`: Iteration
- `p.process-detail`: Next layer: saved progress, protocol quality review, telemetry, and follow-up loops.
- `p.process-evidence`: Roadmap-ready product surface.
- `h2`: Technical Skills Demonstrated
- `strong`: Structured LLM Output
- `p`: Classification, clarifying questions, JSON-style responses, and UI-rendered protocols.
- `strong`: Product Safety
- `p`: Medical boundary setting, escalation language, and wellness-coaching constraints.
- `strong`: Frontend Delivery
- `p`: React, TypeScript, branded interaction design, and PRD-to-product implementation.
- `p.footer`: Read the or explore the broader layer. PI Bonita PRD v1 Practice Intuition expression
- `a.quiet-link`: PI Bonita PRD v1
- `a.quiet-link`: Practice Intuition expression

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Open live build | `https://bonita-baddies-wellness-858379987835.us-west1.run.app/` |
| PI Bonita PRD v1 | `../pi-bonita-prdv1/` |
| PI Bonita PRD v1 | `../pi-bonita-prdv1/` |
| PI Bonita PRD v1 | `../pi-bonita-prdv1/` |
| Practice Intuition expression | `../expression/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
