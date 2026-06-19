# Page Spec: PI Bonita PRD v1 | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/pi-bonita-prdv1/index.html`
- Route: `/pi-bonita-prdv1/`
- Page title: `PI Bonita PRD v1 | Shreyas Sriram`
- Meta description: `Product requirements document for Bonita Encode, an AI wellness intelligence MVP.`
- Body classes: `route-doc`
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
   - Contains/current text summary: Product Requirements Document Bonita Encode PRD An AI-guided wellness product that helps users assess a current challenge, route it into TIME, SPACE, and SELF, and receive structured daily protocols with clear safety boundaries. PI Bonita L...
3. `main.doc`
   - Layout instruction: Main content wrapper; child sections define the visual layout.
   - Contains/current text summary: Product Summary Bonita Encode is a consumer-facing MVP for integrated wellness guidance. It helps users name a current problem, classify the issue across TIME, SPACE, and SELF, and receive one protocol that is specific enough to try immedia...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Bonita Encode PRD
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Current MVP
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Branded landing experience Pillar exploration and resource browsing Chat-based AI assessment Structured protocol generation IQ / EQ / KQ wellness dash...
- `main.doc`: Main content wrapper; child sections define the visual layout. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Product Summary
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Problem
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Problem
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Core User Stories
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Core User Stories
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Describe a current wellness challenge in natural language. Understand whether the challenge is primarily TIME, SPACE, SELF, or multi-pillar. Receive o...
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Functional Requirements
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Functional Requirements
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Allow users to start from a home screen, browse resources, and drill into a pillar before chat. Infer likely pillar routing from user messages. Render...
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Risks and Gaps
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Risks and Gaps
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Product Vision
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Product Vision

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `main.doc`: Main content wrapper; child sections define the visual layout.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: PI Bonita PRD v1 | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Product Requirements Document
- `h1`: Bonita Encode PRD
- `p.lead`: An AI-guided wellness product that helps users assess a current challenge, route it into TIME, SPACE, and SELF, and receive structured daily protocols with clear safety boundaries.
- `a.button.primary`: PI Bonita
- `a.button.secondary`: Live Build
- `p.panel-title`: Current MVP
- `li`: Branded landing experience
- `li`: Pillar exploration and resource browsing
- `li`: Chat-based AI assessment
- `li`: Structured protocol generation
- `li`: IQ / EQ / KQ wellness dashboard
- `p.meta-label`: Users
- `p.meta-value`: Wellness-oriented consumers
- `p.meta-label`: Goal
- `p.meta-value`: One actionable protocol
- `p.meta-label`: Stack
- `p.meta-value`: React, TypeScript, Gemini
- `p.meta-label`: Safety
- `p.meta-value`: Red-flag escalation
- `h2`: Product Summary
- `p`: Bonita Encode is a consumer-facing MVP for integrated wellness guidance. It helps users name a current problem, classify the issue across TIME, SPACE, and SELF, and receive one protocol that is specific enough to try immediately.
- `h2`: Problem
- `p`: Many wellness tools are too narrow, too generic, or too dependent on passive tracking. Users need personalized guidance that connects body, mind, timing, and environment while teaching the reasoning behind each recommendation.
- `h2`: Core User Stories
- `li`: Describe a current wellness challenge in natural language.
- `li`: Understand whether the challenge is primarily TIME, SPACE, SELF, or multi-pillar.
- `li`: Receive one practical protocol with steps and time cost.
- `li`: Learn why the protocol works.
- `li`: Generate a broader wellness plan after enough conversation.
- `li`: Receive clear escalation when an issue may require medical help.
- `h2`: Functional Requirements
- `li`: Allow users to start from a home screen, browse resources, and drill into a pillar before chat.
- `li`: Infer likely pillar routing from user messages.
- `li`: Render structured JSON coaching responses as checklist-style protocol cards.
- `li`: Pass optional daily check-in context into the next AI request.
- `li`: Run deterministic red-flag checks before model generation.
- `li`: Generate a structured wellness dashboard with IQ, EQ, KQ scores and recommendations.
- `h2`: Risks and Gaps
- `p`: Future versions should move model calls behind a secure backend, add persistence, expand safety coverage, support citations or evidence provenance, and turn mock longitudinal concepts into real progress tracking.
- `h2`: Product Vision
- `p`: Bonita can evolve into a premium AI wellness intelligence platform that combines personalized behavior-change support, integrative health education, and longitudinal self-awareness while staying clear about medical boundaries.
- `p.footer`: Source-informed summary based on the PI Bonita PRD v1. Related page: . PI Bonita
- `a.quiet-link`: PI Bonita

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| PI Bonita | `../pi-bonita/` |
| Live Build | `https://bonita-baddies-wellness-858379987835.us-west1.run.app/` |
| PI Bonita | `../pi-bonita/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
