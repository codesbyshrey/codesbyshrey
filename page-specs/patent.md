# Page Spec: Patent | Glenoid Implant | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/patent/index.html`
- Route: `/patent/`
- Page title: `Patent | Glenoid Implant | Shreyas Sriram`
- Meta description: `Patent-focused Glenoid Implant biomedical engineering project page for Shreyas Sriram.`
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
   - Contains/current text summary: Patent + Medical Device Patent Holder: Glenoid Implant A patented shoulder arthroplasty implant concept focused on implant longevity, biocompatibility, revision surgery efficiency, and rehabilitation outcomes. Implant study Product brief Pa...
3. `section.grid#study`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Problem Space Shoulder arthroplasty design sits at the intersection of anatomy, materials, fixation, surgical workflow, long-term wear, and rehabilitation. A design decision is not only mechanical; it affects revision burden and patient rec...
4. `section.section#product-brief`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Product Brief Draft This page is the public-facing case study and product brief. A fuller PRD would document clinical need, user groups, anatomical constraints, design inputs, validation approach, surgical workflow implications, regulatory ...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Patent Holder: Glenoid Implant
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Patent Value
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Shoulder arthroplasty Implant longevity Biocompatibility Revision surgery efficiency Rehabilitation outcomes
- `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Problem Space
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Problem Space
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Design Goal
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Engineering Lens
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Portfolio Relevance
- `section.section#product-brief`: Distinct vertical section in the route flow. Current text cue: Product Brief Draft
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Product Brief Draft

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#product-brief`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Patent | Glenoid Implant | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Patent + Medical Device
- `h1`: Patent Holder: Glenoid Implant
- `p.lead`: A patented shoulder arthroplasty implant concept focused on implant longevity, biocompatibility, revision surgery efficiency, and rehabilitation outcomes.
- `a.button.primary`: Implant study
- `a.button.secondary`: Product brief
- `p.panel-title`: Patent Value
- `li`: Shoulder arthroplasty
- `li`: Implant longevity
- `li`: Biocompatibility
- `li`: Revision surgery efficiency
- `li`: Rehabilitation outcomes
- `p.meta-label`: Domain
- `p.meta-value`: Biomedical engineering
- `p.meta-label`: System
- `p.meta-value`: Shoulder arthroplasty
- `p.meta-label`: Contribution
- `p.meta-value`: Co-invented implant design
- `p.meta-label`: Lens
- `p.meta-value`: Device + rehab outcomes
- `p.panel-title`: Problem Space
- `p`: Shoulder arthroplasty design sits at the intersection of anatomy, materials, fixation, surgical workflow, long-term wear, and rehabilitation. A design decision is not only mechanical; it affects revision burden and patient recovery.
- `p.panel-title`: Design Goal
- `p`: The glenoid implant concept focused on improving implant longevity and biocompatibility while reducing the burden of revision surgery and supporting better downstream rehabilitation outcomes.
- `p.panel-title`: Engineering Lens
- `p`: The work reflects a biomedical engineering foundation: translating clinical constraints into physical design decisions, then considering how device behavior influences care delivery and patient movement after surgery.
- `p.panel-title`: Portfolio Relevance
- `p`: This project anchors the medical-device side of the portfolio and connects naturally to later work in biomechanics, movement coaching, clinical communication, and human-centered healthcare tools.
- `p.panel-title`: Product Brief Draft
- `p`: This page is the public-facing case study and product brief. A fuller PRD would document clinical need, user groups, anatomical constraints, design inputs, validation approach, surgical workflow implications, regulatory assumptions, and outcome measures.
- `p.footer`: Related work: , , and . HapTrek Biomechanics Education
- `a.quiet-link`: HapTrek
- `a.quiet-link`: Biomechanics
- `a.quiet-link`: Education

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Implant study | `#study` |
| Product brief | `#product-brief` |
| HapTrek | `../haptrek/` |
| Biomechanics | `../biomechanics/` |
| Education | `../education/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
