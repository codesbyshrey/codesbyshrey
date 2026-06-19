# Page Spec: Biomechanics | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/biomechanics/index.html`
- Route: `/biomechanics/`
- Page title: `Biomechanics | Shreyas Sriram`
- Meta description: `Applied biomechanics, NASM certifications, clinic-based movement education, and biomedical engineering context for Shreyas Sriram.`
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
   - Contains/current text summary: Human Performance + Biomedical Context Applied biomechanics, coaching, and movement systems. A professional bridge between biomedical engineering, physical therapy clinic exposure, NASM training, swim instruction, and movement coaching. Coa...
3. `section.grid#practice`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Coaching Lens Biomechanics work is framed as a feedback system: assess movement, identify constraints, intervene with clear cues or progressions, then retest how the body adapts. Assessment Motor Learning Strength Progression Recovery Clini...
4. `section.section#coursework`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Relevant Coursework + Training Biomedical Engineering Biomechanics, biomaterials, physiology, medical-device thinking, body systems, and engineering design constraints. NASM + Coaching Personal training, corrective exercise, performance enh...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Professional Translation The portfolio use of biomechanics is not just fitness content. It is a practical human-systems discipline: observe a body in context, understand the constraint, design an intervention, evaluate the response, and com...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Applied biomechanics, coaching, and movement systems.
  - `div.panel.accent-red`: Rounded translucent dark panel with red accent styling; mono uppercase panel title; muted body text. Current text cue: Certified Practice Areas
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Certified biomechanics specialist framing NASM personal training and corrective exercise lens Performance, nutrition, and behavior-change education Ph...
- `section.grid#practice`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Coaching Lens
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Coaching Lens
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Assessment Motor Learning Strength Progression Recovery
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Clinical Movement Context
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Patient Education Pain-Free Movement Rehab Context
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Systems Model
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Breath Mechanics Gait Tissue Adaptation Constraints
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Relevance
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Haptics Biofeedback Coaching Workflows
- `section.section#coursework`: Distinct vertical section in the route flow. Current text cue: Relevant Coursework + Training
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Relevant Coursework + Training
- `section.section`: Distinct vertical section in the route flow. Current text cue: Professional Translation
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Professional Translation
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: The portfolio use of biomechanics is not just fitness content. It is a practical human-systems discipline: observe a body in context, understand the c...

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#practice`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#coursework`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Biomechanics | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Human Performance + Biomedical Context
- `h1`: Applied biomechanics, coaching, and movement systems.
- `p.lead`: A professional bridge between biomedical engineering, physical therapy clinic exposure, NASM training, swim instruction, and movement coaching.
- `a.button.primary`: Coaching practice
- `a.button.secondary`: Coursework
- `p.panel-title`: Certified Practice Areas
- `li`: Certified biomechanics specialist framing
- `li`: NASM personal training and corrective exercise lens
- `li`: Performance, nutrition, and behavior-change education
- `li`: Physical Therapy Clinic Exposure and patient-facing coaching context
- `p.meta-label`: Domain
- `p.meta-value`: Human performance
- `p.meta-label`: Base
- `p.meta-value`: BS Biomedical Engineering
- `p.meta-label`: Practice
- `p.meta-value`: Assessment, coaching, retesting
- `p.meta-label`: Bridge
- `p.meta-value`: Body systems to product systems
- `p.panel-title`: Coaching Lens
- `p`: Biomechanics work is framed as a feedback system: assess movement, identify constraints, intervene with clear cues or progressions, then retest how the body adapts.
- `span.chip.concept`: Assessment
- `span.chip.concept`: Motor Learning
- `span.chip.concept`: Strength Progression
- `span.chip.concept`: Recovery
- `p.panel-title`: Clinical Movement Context
- `p`: Physical therapy clinic exposure and patient-facing coaching shaped a practical communication style: explain movement simply, respect pain and uncertainty, and help clients understand what to do next.
- `span.chip.ux`: Patient Education
- `span.chip.ux`: Pain-Free Movement
- `span.chip.ux`: Rehab Context
- `p.panel-title`: Systems Model
- `p`: The approach integrates breath mechanics, ribcage and pelvis organization, gait, strength skill, fascia, connective tissue, perception, and environmental constraints.
- `span.chip.domain`: Breath Mechanics
- `span.chip.domain`: Gait
- `span.chip.domain`: Tissue Adaptation
- `span.chip.domain`: Constraints
- `p.panel-title`: Product Relevance
- `p`: This background informs HapTrek, Practice Intuition, and human-performance product work: interfaces should respect how people sense, move, compensate, learn, and recover.
- `span.chip.tech`: Haptics
- `span.chip.tech`: Biofeedback
- `span.chip.tech`: Coaching Workflows
- `h2`: Relevant Coursework + Training
- `strong`: Biomedical Engineering
- `p`: Biomechanics, biomaterials, physiology, medical-device thinking, body systems, and engineering design constraints.
- `strong`: NASM + Coaching
- `p`: Personal training, corrective exercise, performance enhancement, behavior change, and nutrition-informed coaching language.
- `strong`: Applied Practice
- `p`: Swim instruction, movement coaching, physical therapy clinic exposure, strength training, gait, and client education.
- `h2`: Professional Translation
- `p`: The portfolio use of biomechanics is not just fitness content. It is a practical human-systems discipline: observe a body in context, understand the constraint, design an intervention, evaluate the response, and communicate the next action clearly.
- `p.footer`: Related work: , , and . HapTrek Glenoid Implant Patent Bonita Intelligence System
- `a.quiet-link`: HapTrek
- `a.quiet-link`: Glenoid Implant Patent
- `a.quiet-link`: Bonita Intelligence System

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Coaching practice | `#practice` |
| Coursework | `#coursework` |
| HapTrek | `../haptrek/` |
| Glenoid Implant Patent | `../patent/` |
| Bonita Intelligence System | `../pi-bonita/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
