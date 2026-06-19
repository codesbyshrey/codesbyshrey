# Page Spec: Expression | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/expression/index.html`
- Route: `/expression/`
- Page title: `Expression | Shreyas Sriram`
- Meta description: `Practice Intuition: learning as unobstructed self-expression, founding work, biomechanics coaching, and AI wellness systems.`
- Body classes: `route-expression`
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
   - Contains/current text summary: Expression Learning is Unobstructed Self Expression Practice Intuition site Bonita Intelligence Substack
3. `section.grid.three`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Founding Practice Intuition Design think tank Writing and frameworks Adaptive human systems Founding Design Think Tank Writing Coaching Biomechanics coaching business Movement assessment Strength progressions Client education Biomechanics B...
4. `section.route-layout.expression-links`
   - Layout instruction: Two-column route body: narrow left sidebar stack and wider right content stack.
   - Contains/current text summary: Build · Coach · Write Practice Intuition Site Substack Essays Related work Architecture of Agency Interactive essay Bonita AI wellness Biomechanics Coaching HapTrek Haptics

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph. Current text cue: Learning is Unobstructed Self Expression
- `section.grid.three`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Practice Intuition
  - `article.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Practice Intuition
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Practice Intuition
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Design think tank Writing and frameworks Adaptive human systems
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Founding Design Think Tank Writing
  - `article.panel.accent-red`: Rounded translucent dark panel with red accent styling; mono uppercase panel title; muted body text. Current text cue: Biomechanics coaching business
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Biomechanics coaching business
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Movement assessment Strength progressions Client education
    - `div.actions`: Button row for secondary actions. Current text cue: Biomechanics
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Biomechanics Coaching Pain-Free Movement Motor Learning
  - `article.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Bonita Intelligence System
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Bonita Intelligence System
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: TIME / SPACE / SELF triage Structured protocols Explicit safety boundaries
    - `div.actions`: Button row for secondary actions. Current text cue: Bonita
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: React Gemini Wellness AI
- `section.route-layout.expression-links`: Two-column route body: narrow left sidebar stack and wider right content stack. Current text cue: Build · Coach · Write
  - `aside.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Build · Coach · Write
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Practice Intuition Site Substack Essays
  - `div.content-stack`: Vertical stack of primary content panels. Current text cue: Related work
    - `article.panel.accent-orange`: Rounded translucent dark panel with orange accent styling; mono uppercase panel title; muted body text. Current text cue: Related work
      - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Architecture of Agency Interactive essay Bonita AI wellness Biomechanics Coaching HapTrek Haptics

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph.
3. For `section.grid.three`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.route-layout.expression-links`: Two-column route body: narrow left sidebar stack and wider right content stack.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Expression | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Expression
- `h1`: Learning is Unobstructed Self Expression
- `a.button.primary`: Practice Intuition site
- `a.button.secondary`: Bonita Intelligence
- `a.button.secondary`: Substack
- `p.panel-title`: Founding
- `h2`: Practice Intuition
- `li`: Design think tank
- `li`: Writing and frameworks
- `li`: Adaptive human systems
- `span.chip.domain`: Founding
- `span.chip.domain`: Design Think Tank
- `span.chip.domain`: Writing
- `p.panel-title`: Coaching
- `h2`: Biomechanics coaching business
- `li`: Movement assessment
- `li`: Strength progressions
- `li`: Client education
- `a.button.secondary`: Biomechanics
- `span.chip.concept`: Biomechanics Coaching
- `span.chip.concept`: Pain-Free Movement
- `span.chip.concept`: Motor Learning
- `p.panel-title`: AI Wellness
- `h2`: Bonita Intelligence System
- `li`: TIME / SPACE / SELF triage
- `li`: Structured protocols
- `li`: Explicit safety boundaries
- `a.button.secondary`: Bonita
- `span.chip.tech`: React
- `span.chip.tech`: Gemini
- `span.chip.domain`: Wellness AI
- `p.panel-title`: Build · Coach · Write
- `a.link-card`: Practice Intuition Site
- `strong`: Practice Intuition
- `span`: Site
- `a.link-card`: Substack Essays
- `strong`: Substack
- `span`: Essays
- `p.panel-title`: Related work
- `a.link-card`: Architecture of Agency Interactive essay
- `strong`: Architecture of Agency
- `span`: Interactive essay
- `a.link-card`: Bonita AI wellness
- `strong`: Bonita
- `span`: AI wellness
- `a.link-card`: Biomechanics Coaching
- `strong`: Biomechanics
- `span`: Coaching
- `a.link-card`: HapTrek Haptics
- `strong`: HapTrek
- `span`: Haptics
- `p.footer`: Practice Intuition: adaptive human systems, movement, reflection, and embodied design.

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Practice Intuition site | `https://practiceintuition.github.io` |
| Bonita Intelligence | `../pi-bonita/` |
| Substack | `https://practiceintuition.substack.com` |
| Biomechanics | `../biomechanics/` |
| Bonita | `../pi-bonita/` |
| Practice Intuition Site | `https://practiceintuition.github.io` |
| Substack Essays | `https://practiceintuition.substack.com` |
| Architecture of Agency Interactive essay | `../architecture-of-agency/` |
| Bonita AI wellness | `../pi-bonita/` |
| Biomechanics Coaching | `../biomechanics/` |
| HapTrek Haptics | `../haptrek/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
