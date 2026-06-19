# Page Spec: About | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/about/index.html`
- Route: `/about/`
- Page title: `About | Shreyas Sriram`
- Meta description: `About Shreyas Sriram: human factors, product, clinical AI, biomedical engineering, and movement systems.`
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
   - Contains/current text summary: About Human factors, clinical AI, and embodied product systems. Shreyas Sriram builds and evaluates systems where technology has to work with real human behavior: clinical communication simulators, AI evaluation workflows, health-adjacent p...
3. `section.route-layout`
   - Layout instruction: Two-column route body: narrow left sidebar stack and wider right content stack.
   - Contains/current text summary: Snapshot MS Human Factors in Information Design BS Biomedical Engineering Clinical AI safety and evaluation experience EMT, movement coaching, and applied biomechanics background Co-inventor on a glenoid implant patent Domains Clinical AI H...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph. Current text cue: Human factors, clinical AI, and embodied product systems.
- `section.route-layout`: Two-column route body: narrow left sidebar stack and wider right content stack. Current text cue: Snapshot
  - `aside.side-stack`: Vertical stack of supporting sidebar panels. Current text cue: Snapshot
    - `article.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Snapshot
      - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: MS Human Factors in Information Design BS Biomedical Engineering Clinical AI safety and evaluation experience EMT, movement coaching, and applied biom...
    - `article.panel.accent-red`: Rounded translucent dark panel with red accent styling; mono uppercase panel title; muted body text. Current text cue: Domains
      - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Clinical AI Human Factors Biomechanics Medical Devices Practice Intuition Public Health
  - `div.content-stack`: Vertical stack of primary content panels. Current text cue: Case Studies
    - `article.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Case Studies
      - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Clinical Roleplay Clinical communication simulator HapTrek Haptic navigation and fall detection Patent Glenoid Implant invention and mechanical testin...
    - `article.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: PRDs + Product Documents
      - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Clinical Roleplay PRD Virtual standardized patient system Clinical Roleplay PRD AI patient simulation and OSCE feedback PI Bonita PRD v1 AI wellness i...
    - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: How I Work

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph.
3. For `section.route-layout`: Two-column route body: narrow left sidebar stack and wider right content stack.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: About | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: About
- `h1`: Human factors, clinical AI, and embodied product systems.
- `p.lead`: Shreyas Sriram builds and evaluates systems where technology has to work with real human behavior: clinical communication simulators, AI evaluation workflows, health-adjacent products, usability research, haptic interfaces, and movement-centered tools.
- `p.panel-title`: Snapshot
- `li`: MS Human Factors in Information Design
- `li`: BS Biomedical Engineering
- `li`: Clinical AI safety and evaluation experience
- `li`: EMT, movement coaching, and applied biomechanics background
- `li`: Co-inventor on a glenoid implant patent
- `p.panel-title`: Domains
- `span.chip.domain`: Clinical AI
- `span.chip.domain`: Human Factors
- `span.chip.concept`: Biomechanics
- `span.chip.concept`: Medical Devices
- `span.chip.domain`: Practice Intuition
- `span.chip.concept`: Public Health
- `p.panel-title`: Case Studies
- `a.link-card`: Clinical Roleplay Clinical communication simulator
- `strong`: Clinical Roleplay
- `span`: Clinical communication simulator
- `a.link-card`: HapTrek Haptic navigation and fall detection
- `strong`: HapTrek
- `span`: Haptic navigation and fall detection
- `a.link-card`: Patent Glenoid Implant invention and mechanical testing
- `strong`: Patent
- `span`: Glenoid Implant invention and mechanical testing
- `a.link-card`: Biomechanics Human performance, NASM, and coaching context
- `strong`: Biomechanics
- `span`: Human performance, NASM, and coaching context
- `a.link-card`: Full Stack + Cloud AWS, CodingDojo, and startup build range
- `strong`: Full Stack + Cloud
- `span`: AWS, CodingDojo, and startup build range
- `a.link-card`: Nathan Sports Usability research and recommendations
- `strong`: Nathan Sports
- `span`: Usability research and recommendations
- `p.panel-title`: PRDs + Product Documents
- `a.link-card`: Clinical Roleplay PRD Virtual standardized patient system
- `strong`: Clinical Roleplay PRD
- `span`: Virtual standardized patient system
- `a.link-card`: Clinical Roleplay PRD AI patient simulation and OSCE feedback
- `strong`: Clinical Roleplay PRD
- `span`: AI patient simulation and OSCE feedback
- `a.link-card`: PI Bonita PRD v1 AI wellness intelligence protocols
- `strong`: PI Bonita PRD v1
- `span`: AI wellness intelligence protocols
- `p.panel-title`: How I Work
- `p`: I combine human factors research, product thinking, technical prototyping, biomedical context, and embodied practice. The work starts with behavior and constraints, then moves into systems architecture, interface design, and evaluation.
- `p.footer`: For focused examples, start with the , , or . Clinical Roleplay case study PI Bonita HapTrek
- `a.quiet-link`: Clinical Roleplay case study
- `a.quiet-link`: PI Bonita
- `a.quiet-link`: HapTrek

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Clinical Roleplay Clinical communication simulator | `../clinical-roleplay/` |
| HapTrek Haptic navigation and fall detection | `../haptrek/` |
| Patent Glenoid Implant invention and mechanical testing | `../patent/` |
| Biomechanics Human performance, NASM, and coaching context | `../biomechanics/` |
| Full Stack + Cloud AWS, CodingDojo, and startup build range | `../fullstack/` |
| Nathan Sports Usability research and recommendations | `../nathan-sports/` |
| Clinical Roleplay PRD Virtual standardized patient system | `../clinical-roleplay-PRD/` |
| Clinical Roleplay PRD AI patient simulation and OSCE feedback | `../clinical-roleplay-PRD/` |
| PI Bonita PRD v1 AI wellness intelligence protocols | `../pi-bonita-prdv1/` |
| Clinical Roleplay case study | `../clinical-roleplay/` |
| PI Bonita | `../pi-bonita/` |
| HapTrek | `../haptrek/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
