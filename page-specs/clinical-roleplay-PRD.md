# Page Spec: Clinical Roleplay PRD | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/clinical-roleplay-PRD/index.html`
- Route: `/clinical-roleplay-PRD/`
- Page title: `Clinical Roleplay PRD | Shreyas Sriram`
- Meta description: `Product requirements document for the Clinical Roleplay communication simulator.`
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
   - Contains/current text summary: Product Requirements Document Clinical Roleplay Simulator PRD A virtual standardized patient simulator for medical communication training, designed around scenario-specific patients, transcript-aware dialogue, voice support, prompt experime...
3. `main.doc`
   - Layout instruction: Main content wrapper; child sections define the visual layout.
   - Contains/current text summary: Product Summary The simulator gives learners a low-friction way to practice patient communication without live standardized patients. The revamped implementation supports defined patient cases, transcript-aware responses, optional voice wor...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Clinical Roleplay Simulator PRD
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Current Scope
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Generic VSP mode plus scenario-driven cases Multi-turn text and voice interaction Editable patient system prompts End-of-session OSCE-style evaluation...
- `main.doc`: Main content wrapper; child sections define the visual layout. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Product Summary
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Problem
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Problem
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Core Requirements
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Core Requirements
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Expose a list of public scenarios from the backend. Allow the learner to select either Generic VSP Mode or a structured patient scenario. Preserve tra...
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Product Principles
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Product Principles
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Success Metrics
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Success Metrics
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Scenario load success rate Text and voice conversation completion rates Evaluation completion rate Average learner turns per session User-rated scenar...
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Next Release Priorities
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Next Release Priorities

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `main.doc`: Main content wrapper; child sections define the visual layout.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Clinical Roleplay PRD | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Product Requirements Document
- `h1`: Clinical Roleplay Simulator PRD
- `p.lead`: A virtual standardized patient simulator for medical communication training, designed around scenario-specific patients, transcript-aware dialogue, voice support, prompt experimentation, and formative OSCE-style evaluation.
- `a.button.primary`: Clinical Roleplay
- `a.button.secondary`: Clinical Roleplay PRD v1
- `p.panel-title`: Current Scope
- `li`: Generic VSP mode plus scenario-driven cases
- `li`: Multi-turn text and voice interaction
- `li`: Editable patient system prompts
- `li`: End-of-session OSCE-style evaluation
- `li`: Static HTML proof-of-concept entry point
- `p.meta-label`: Users
- `p.meta-value`: Medical learners and educators
- `p.meta-label`: Goal
- `p.meta-value`: Repeatable communication practice
- `p.meta-label`: System
- `p.meta-value`: FastAPI, scenarios, voice, evaluation
- `p.meta-label`: Status
- `p.meta-value`: MVP prototype
- `h2`: Product Summary
- `p`: The simulator gives learners a low-friction way to practice patient communication without live standardized patients. The revamped implementation supports defined patient cases, transcript-aware responses, optional voice workflows, prompt customization, and structured feedback after the encounter.
- `h2`: Problem
- `p`: OSCE-style practice is expensive, scheduled, and difficult to repeat. Basic chat demos are easier to access, but they often lack scenario fidelity, patient consistency, and useful evaluation. The product bridges those gaps with a lightweight simulation environment.
- `h2`: Core Requirements
- `li`: Expose a list of public scenarios from the backend.
- `li`: Allow the learner to select either Generic VSP Mode or a structured patient scenario.
- `li`: Preserve transcript history so patient responses stay coherent across turns.
- `li`: Support typed messages, microphone input, and optional audio playback.
- `li`: Generate structured evaluation JSON from the transcript and selected scenario.
- `li`: Render evaluation feedback in a readable report.
- `h2`: Product Principles
- `p`: Keep the entry point simple, preserve backward compatibility with the original generic VSP workflow, make patients specific, expose prompt experimentation for builders, and treat AI evaluation as formative learning rather than credentialing.
- `h2`: Success Metrics
- `li`: Scenario load success rate
- `li`: Text and voice conversation completion rates
- `li`: Evaluation completion rate
- `li`: Average learner turns per session
- `li`: User-rated scenario realism and evaluation usefulness
- `li`: Prompt override usage by builders or educators
- `h2`: Next Release Priorities
- `p`: Priorities include transcript persistence, saved evaluations, a more extensible scenario format, stronger safety and consistency constraints, a modern frontend shell, and side-by-side tools for prompt experiments.
- `p.footer`: Source-informed summary based on the Clinical Roleplay PRD draft. Related page: . Clinical Roleplay
- `a.quiet-link`: Clinical Roleplay

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Clinical Roleplay | `../clinical-roleplay/` |
| Clinical Roleplay PRD v1 | `../clinical-roleplay-prdv1/` |
| Clinical Roleplay | `../clinical-roleplay/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
