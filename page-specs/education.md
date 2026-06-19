# Page Spec: Education | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/education/index.html`
- Route: `/education/`
- Page title: `Education | Shreyas Sriram`
- Meta description: `Education and credentials across human factors, cloud and full-stack AI prototyping, and biomedical engineering for Shreyas Sriram.`
- Body classes: `route-education`
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
2. `section.hero.full`
   - Layout instruction: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph.
   - Contains/current text summary: Education Training across human factors, AI prototyping, and biomedical engineering. MS Human Factors at Bentley. BS Biomedical Engineering at RPI. AWS Certified Developer - Associate and Coding Dojo full-stack training.
3. `section.grid.section`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Snapshot MS Human Factors in Information Design - Bentley BS Biomedical Engineering - RPI AWS Certified Developer - Associate Coding Dojo full-stack immersive NASM CPT, EMT-B, CITI human subjects Co-inventor on a Glenoid implant patent Rela...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph. Current text cue: Training across human factors, AI prototyping, and biomedical engineering.
- `section.grid.section`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Snapshot
  - `article.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Snapshot
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: MS Human Factors in Information Design - Bentley BS Biomedical Engineering - RPI AWS Certified Developer - Associate Coding Dojo full-stack immersive ...
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Related work
    - `div.actions`: Button row for secondary actions. Current text cue: Clinical Roleplay Patent Biomechanics Full Stack + Cloud

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph.
3. For `section.grid.section`: Responsive card/panel grid; preserve child order and the column count implied by classes.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Education | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Education
- `h1`: Training across human factors, AI prototyping, and biomedical engineering.
- `p.lead.tight`: MS Human Factors at Bentley. BS Biomedical Engineering at RPI. AWS Certified Developer - Associate and Coding Dojo full-stack training.
- `p.panel-title`: Human Factors
- `h2`: MS Human Factors in Information Design - Bentley University
- `p.lead`: Graduate training in UX research, usability testing, mixed methods, AI trust, and multimodal interaction.
- `span.chip.ux`: UX Research
- `span.chip.ux`: Usability Testing
- `span.chip.ux`: Mixed Methods
- `span.chip.ux`: AI Trust
- `span.chip.ux`: Multimodal Interaction
- `li`: Qualitative inquiry, interview synthesis, observation, thematic coding
- `li`: Quantitative study design, scales, and usability measurement
- `li`: Moderated sessions, task success, error analysis, and recommendation capture
- `li`: CITI human subjects training
- `li`: Conversational and voice-first interaction patterns
- `li`: Trust calibration, explainability, and high-stakes decision support
- `li`: Immersive and spatial interface concepts for attention and safety
- `p.panel-title`: Cloud / Full Stack + AI Prototyping
- `h2`: AWS Certified Developer - Associate and Coding Dojo full-stack
- `p.lead`: Certification and intensive training in AWS, React, TypeScript, Python, REST APIs, Postgres, and RAG/LLM-assisted prototyping.
- `span.chip.tech`: AWS Certified Developer - Associate
- `span.chip.tech`: React
- `span.chip.tech`: TypeScript
- `span.chip.tech`: Python
- `span.chip.tech`: Postgres
- `span.chip.tech`: RAG
- `li`: AWS Certified Developer - Associate (primary)
- `li`: Coding Dojo full-stack immersive (MERN + Python/Django)
- `li`: AWS Certified Cloud Practitioner (foundational)
- `li`: Frontend: React, TypeScript, responsive layouts, component-driven UX
- `li`: Backend: Python, Django / FastAPI, Node / Express, REST APIs, PostgreSQL
- `li`: Cloud: AWS core services, deployment, IAM-aware builds
- `li`: AI: RAG concepts, LLM orchestration patterns, prototype-first iteration
- `p`: Shipped prototypes and case studies: , , . Full Stack + Cloud Clinical Roleplay PI Bonita
- `a.quiet-link`: Full Stack + Cloud
- `a.quiet-link`: Clinical Roleplay
- `a.quiet-link`: PI Bonita
- `p.panel-title`: Biomedical Engineering
- `h2`: BS Biomedical Engineering - Rensselaer Polytechnic Institute
- `p.lead`: Undergraduate training in biomechanics, biomaterials, physiology, and medical-device design - culminating in a co-invented Glenoid implant patent.
- `span.chip.concept`: Biomechanics
- `span.chip.concept`: Biomaterials
- `span.chip.concept`: Medical-Device Design
- `span.chip.concept`: Shoulder Arthroplasty
- `li`: Mechanics of implant systems and physiological loading
- `li`: Biomaterials selection, wear considerations, and revision-context thinking
- `li`: Physiology and structure-function relationships
- `li`: Translating lab measurement into design decisions
- `p`: Co-invented a modular Glenoid implant for shoulder arthroplasty as a BME capstone, with mechanical testing on 3D-printed prototypes - see . Patent
- `a.quiet-link`: Patent
- `p.panel-title`: Snapshot
- `li`: MS Human Factors in Information Design - Bentley
- `li`: BS Biomedical Engineering - RPI
- `li`: AWS Certified Developer - Associate
- `li`: Coding Dojo full-stack immersive
- `li`: NASM CPT, EMT-B, CITI human subjects
- `li`: Co-inventor on a Glenoid implant patent
- `p.panel-title`: Related work
- `a.button.secondary`: Clinical Roleplay
- `a.button.secondary`: Patent
- `a.button.secondary`: Biomechanics
- `a.button.secondary`: Full Stack + Cloud
- `p.footer`: For the public-facing portfolio, see and . Experiences Home
- `a.quiet-link`: Experiences
- `a.quiet-link`: Home

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Full Stack + Cloud | `../fullstack/` |
| Clinical Roleplay | `../clinical-roleplay/` |
| PI Bonita | `../pi-bonita/` |
| Patent | `../patent/` |
| Clinical Roleplay | `../clinical-roleplay/` |
| Patent | `../patent/` |
| Biomechanics | `../biomechanics/` |
| Full Stack + Cloud | `../fullstack/` |
| Experiences | `../experiences/` |
| Home | `../` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
