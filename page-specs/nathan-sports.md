# Page Spec: Nathan Sports Usability | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/nathan-sports/index.html`
- Route: `/nathan-sports/`
- Page title: `Nathan Sports Usability | Shreyas Sriram`
- Meta description: `Nathan Sports usability research page for Shreyas Sriram.`
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
   - Contains/current text summary: Usability Research Nathan Sports Usability Moderated usability research focused on product discovery, purchase decision drivers, customer retention, mobile interaction friction, and redesign recommendations for sports hydration products. Us...
3. `section.grid#study`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Research Goal The study examined how users discover products, compare hydration options, interpret purchase cues, and move through mobile product pages. User Behavior The work looked beyond task completion to the decision-making moments tha...
4. `section.section#research-brief`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Research Brief Draft This page is the current public research brief. A fuller PRD or study report would include participant criteria, task flows, research questions, severity-ranked findings, design recommendations, and measurable follow-up...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Nathan Sports Usability
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Research Lens
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Moderated user research Purchase behavior and decision drivers Customer retention opportunities Mobile usability friction Redesign recommendations
- `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Research Goal
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Research Goal
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: User Behavior
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Friction Areas
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Portfolio Relevance
- `section.section#research-brief`: Distinct vertical section in the route flow. Current text cue: Research Brief Draft
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Research Brief Draft

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#study`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#research-brief`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Nathan Sports Usability | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Usability Research
- `h1`: Nathan Sports Usability
- `p.lead`: Moderated usability research focused on product discovery, purchase decision drivers, customer retention, mobile interaction friction, and redesign recommendations for sports hydration products.
- `a.button.primary`: Usability study
- `a.button.secondary`: Research brief
- `p.panel-title`: Research Lens
- `li`: Moderated user research
- `li`: Purchase behavior and decision drivers
- `li`: Customer retention opportunities
- `li`: Mobile usability friction
- `li`: Redesign recommendations
- `p.meta-label`: Domain
- `p.meta-value`: Sports product UX
- `p.meta-label`: Methods
- `p.meta-value`: Moderated research, usability
- `p.meta-label`: Focus
- `p.meta-value`: Mobile discovery and conversion
- `p.meta-label`: Output
- `p.meta-value`: Findings and recommendations
- `p.panel-title`: Research Goal
- `p`: The study examined how users discover products, compare hydration options, interpret purchase cues, and move through mobile product pages.
- `p.panel-title`: User Behavior
- `p`: The work looked beyond task completion to the decision-making moments that influence trust, fit, perceived value, and repeat purchase behavior.
- `p.panel-title`: Friction Areas
- `p`: Mobile interaction friction, product information hierarchy, comparison support, and retention cues were treated as practical design levers.
- `p.panel-title`: Portfolio Relevance
- `p`: This project demonstrates applied human factors outside clinical AI: research planning, participant-facing moderation, synthesis, and presentation-ready product recommendations.
- `p.panel-title`: Research Brief Draft
- `p`: This page is the current public research brief. A fuller PRD or study report would include participant criteria, task flows, research questions, severity-ranked findings, design recommendations, and measurable follow-up hypotheses.
- `p.footer`: Related work: , , and . Experiences Clinical Roleplay HapTrek
- `a.quiet-link`: Experiences
- `a.quiet-link`: Clinical Roleplay
- `a.quiet-link`: HapTrek

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Usability study | `#study` |
| Research brief | `#research-brief` |
| Experiences | `../experiences/` |
| Clinical Roleplay | `../clinical-roleplay/` |
| HapTrek | `../haptrek/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
