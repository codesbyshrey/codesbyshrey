# Page Spec: HapTrek | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/haptrek/index.html`
- Route: `/haptrek/`
- Page title: `HapTrek | Shreyas Sriram`
- Meta description: `HapTrek project page for Shreyas Sriram: haptic navigation, fall detection, accelerometer sensing, and embodied interface design.`
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
   - Contains/current text summary: Embodied Interface HapTrek A haptic hiking and public-safety concept exploring non-visual navigation, fall detection through 3-axis accelerometer sensing, and the application of human body dynamics to product design. HapTrek study Product b...
3. `section.grid#study`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Problem Outdoor navigation and safety tools often assume visual attention, phone availability, and low cognitive load. HapTrek explores how tactile feedback can support hikers when visual interfaces are impractical or unsafe. Concept The pr...
4. `section.section#product-brief`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Product Brief Draft This page serves as the current HapTrek case study and product brief. A fuller PRD would define target users, vibration language, fall-detection thresholds, environmental constraints, validation protocol, accessibility r...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Process + Progress HapTrek is being framed as a professional embodied-interface case study: concept first, then sensor behavior, haptic signal design, safety validation, and accessibility testing. Concept Define the hiking safety problem as...
6. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Technical Skills Demonstrated Sensor Logic Accelerometer-based state detection, threshold thinking, and fall-detection requirements. Embodied UX Haptic signal mapping, non-visual information design, and movement-aware interaction constraint...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: HapTrek
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Focus
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Haptic feedback for navigation Accessible and non-visual wayfinding 3-axis accelerometer sensing Fall detection and safety signaling Embodied product ...
- `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Problem
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Problem
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Concept
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Safety Layer
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Design Value
- `section.section#product-brief`: Distinct vertical section in the route flow. Current text cue: Product Brief Draft
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Brief Draft
- `section.section`: Distinct vertical section in the route flow. Current text cue: Process + Progress
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Process + Progress
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: HapTrek is being framed as a professional embodied-interface case study: concept first, then sensor behavior, haptic signal design, safety validation,...
- `section.section`: Distinct vertical section in the route flow. Current text cue: Technical Skills Demonstrated
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Technical Skills Demonstrated

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#product-brief`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.
6. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: HapTrek | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Embodied Interface
- `h1`: HapTrek
- `p.lead`: A haptic hiking and public-safety concept exploring non-visual navigation, fall detection through 3-axis accelerometer sensing, and the application of human body dynamics to product design.
- `a.button.primary`: HapTrek study
- `a.button.secondary`: Product brief
- `p.panel-title`: Focus
- `li`: Haptic feedback for navigation
- `li`: Accessible and non-visual wayfinding
- `li`: 3-axis accelerometer sensing
- `li`: Fall detection and safety signaling
- `li`: Embodied product design
- `p.meta-label`: Domain
- `p.meta-value`: Human factors, hardware, safety
- `p.meta-label`: Methods
- `p.meta-value`: Haptic mapping, sensing, prototyping
- `p.meta-label`: Stack
- `p.meta-value`: Arduino, accelerometer, haptics
- `p.meta-label`: Lens
- `p.meta-value`: Embodied interaction
- `p.panel-title`: Problem
- `p`: Outdoor navigation and safety tools often assume visual attention, phone availability, and low cognitive load. HapTrek explores how tactile feedback can support hikers when visual interfaces are impractical or unsafe.
- `p.panel-title`: Concept
- `p`: The project frames navigation as an embodied interface problem: direction, motion, and safety status can be communicated through vibration patterns and sensor-driven feedback rather than a screen-first workflow.
- `p.panel-title`: Safety Layer
- `p`: Accelerometer data supports fall-detection logic, giving the system a public-health and emergency-response angle beyond wayfinding alone.
- `p.panel-title`: Design Value
- `p`: HapTrek connects human factors, biomechanics, and interface design: the body becomes the medium for information, and the product must respect perception, movement, balance, and terrain.
- `p.panel-title`: Product Brief Draft
- `p`: This page serves as the current HapTrek case study and product brief. A fuller PRD would define target users, vibration language, fall-detection thresholds, environmental constraints, validation protocol, accessibility requirements, and emergency escalation behavior.
- `h2`: Process + Progress
- `p`: HapTrek is being framed as a professional embodied-interface case study: concept first, then sensor behavior, haptic signal design, safety validation, and accessibility testing.
- `span.process-stage`: Concept
- `p.process-detail`: Define the hiking safety problem as glance-free navigation and terrain-aware status feedback.
- `p.process-evidence`: Public-safety and non-visual interaction brief.
- `span.process-stage`: Sensing
- `p.process-detail`: Use 3-axis accelerometer data to detect motion state and candidate fall events.
- `p.process-evidence`: Arduino + accelerometer prototype direction.
- `span.process-stage`: Haptics
- `p.process-detail`: Map directional and safety states into vibration patterns that can be learned without visual attention.
- `p.process-evidence`: Vibration language still needs validation.
- `span.process-stage`: Validation
- `p.process-detail`: Test false positives, terrain constraints, cognitive load, accessibility, and response behavior.
- `p.process-evidence`: Next PRD requirement.
- `h2`: Technical Skills Demonstrated
- `strong`: Sensor Logic
- `p`: Accelerometer-based state detection, threshold thinking, and fall-detection requirements.
- `strong`: Embodied UX
- `p`: Haptic signal mapping, non-visual information design, and movement-aware interaction constraints.
- `strong`: Safety Validation
- `p`: Accessibility, false-positive analysis, environmental constraints, and emergency escalation planning.
- `p.footer`: Related work: , , and . Biomechanics Glenoid Implant Patent Experiences
- `a.quiet-link`: Biomechanics
- `a.quiet-link`: Glenoid Implant Patent
- `a.quiet-link`: Experiences

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| HapTrek study | `#study` |
| Product brief | `#product-brief` |
| Biomechanics | `../biomechanics/` |
| Glenoid Implant Patent | `../patent/` |
| Experiences | `../experiences/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
