# Page Spec: Clinical Roleplay PRD | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/clinical-roleplay-prdv1/index.html`
- Route: `/clinical-roleplay-prdv1/`
- Page title: `Clinical Roleplay PRD | Shreyas Sriram`
- Meta description: `Product requirements document for a clinical roleplay simulator with AI patient scenarios and OSCE-style evaluation.`
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
   - Contains/current text summary: Product Requirements Document Clinical Roleplay Simulator PRD A web-based medical communication training tool where learners select a standardized-patient scenario, conduct a simulated consultation through text or voice, and receive AI-gene...
3. `main.doc`
   - Layout instruction: Main content wrapper; child sections define the visual layout.
   - Contains/current text summary: Product Summary The simulator is designed for communication-skills practice rather than formal assessment. Learners choose a patient scenario, interact through text or voice, and receive structured formative feedback at the end of the sessi...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Clinical Roleplay Simulator PRD
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Scope
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Scenario selection from a fixed case library In-character AI patient responses Browser speech recognition for learner input AI voice playback for pati...
- `main.doc`: Main content wrapper; child sections define the visual layout. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Product Summary
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Product Summary
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Problem
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Problem
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Scenario Library
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Scenario Library
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Functional Requirements
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Functional Requirements
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Present available scenarios and allow selected or random launch. Initialize each conversation with a scenario-specific patient statement. Display pati...
  - `section.doc-section`: Distinct vertical section in the route flow. Current text cue: Evaluation Categories
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Evaluation Categories
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
- `p.lead`: A web-based medical communication training tool where learners select a standardized-patient scenario, conduct a simulated consultation through text or voice, and receive AI-generated OSCE-style evaluation.
- `a.button.primary`: Clinical Roleplay
- `a.button.secondary`: Clinical Roleplay PRD
- `p.panel-title`: Product Scope
- `li`: Scenario selection from a fixed case library
- `li`: In-character AI patient responses
- `li`: Browser speech recognition for learner input
- `li`: AI voice playback for patient responses
- `li`: End-of-session structured evaluation
- `p.meta-label`: Users
- `p.meta-value`: Medical learners and educators
- `p.meta-label`: Mode
- `p.meta-value`: Text and voice simulation
- `p.meta-label`: Feedback
- `p.meta-value`: OSCE-style report
- `p.meta-label`: Status
- `p.meta-value`: MVP prototype
- `h2`: Product Summary
- `p`: The simulator is designed for communication-skills practice rather than formal assessment. Learners choose a patient scenario, interact through text or voice, and receive structured formative feedback at the end of the session.
- `h2`: Problem
- `p`: Medical learners need repeated practice for communication-heavy encounters: foundational history taking, cross-cultural communication, psychosocial assessment, shared decision-making, family communication, and difficult news delivery.
- `h2`: Scenario Library
- `p`: The MVP includes six fixed scenarios with patient demographics, chief complaint, communication focus, description, allergies, medical history, medications, vital signs, and avatar image.
- `h2`: Functional Requirements
- `li`: Present available scenarios and allow selected or random launch.
- `li`: Initialize each conversation with a scenario-specific patient statement.
- `li`: Display patient overview data during the encounter.
- `li`: Append learner and patient messages to a visible transcript.
- `li`: Support browser-native speech recognition where available.
- `li`: Generate and display a structured JSON evaluation report.
- `h2`: Evaluation Categories
- `p`: Evaluation currently covers history taking, communication skills, rapport building, clinical reasoning, and professionalism, with overall score, grade, strengths, priority improvements, and specific recommendations.
- `h2`: Next Release Priorities
- `p`: Future work should add authentication, saved session history, transcript and evaluation persistence, educator review dashboards, rubric QA against human-rated samples, scenario authoring, learner progress tracking, and stronger accessibility behavior.
- `p.footer`: Source-informed summary based on the Clinical Roleplay Simulator PRD. Related page: . Clinical Roleplay
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
| Clinical Roleplay PRD | `../clinical-roleplay-PRD/` |
| Clinical Roleplay | `../clinical-roleplay/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
