# Page Spec: Praxik | Swift AR Museum Interface | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/praxik/index.html`
- Route: `/praxik/`
- Page title: `Praxik | Swift AR Museum Interface | Shreyas Sriram`
- Meta description: `Praxik Swift AR project page for Shreyas Sriram, focused on an augmented reality museum learning interface.`
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
   - Contains/current text summary: Swift AR + Museum Learning Praxik A Swift AR project for museum learning, using augmented reality interaction to make exhibit content more spatial, playful, and discoverable. Project brief Process Focus Swift and ARKit product prototyping S...
3. `section.grid#brief`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Project Direction Praxik frames augmented reality as an educational interface: a way for learners to connect visual exhibit material, spatial placement, and interactive discovery. Implementation Lens The work is best understood as Swift AR ...
4. `section.section#process`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Process + Progress Praxik is now positioned as its own AR learning project rather than a healthcare AI page. The page can later absorb screenshots, video, or a concise build walkthrough without touching the Xcode source. Context Science mus...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Technical Skills Demonstrated Swift AR Prototyping Mobile AR implementation, spatial placement, asset handling, and embodied interface constraints. Exhibit Interaction Designing for curiosity, onboarding, public use, and educational clarity...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Praxik
  - `div.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Focus
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: Swift and ARKit product prototyping Science Museum of Minnesota learning context Spatial interaction and exhibit engagement Education technology throu...
- `section.grid#brief`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Project Direction
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Project Direction
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Implementation Lens
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Learning Lens
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Portfolio Relevance
- `section.section#process`: Distinct vertical section in the route flow. Current text cue: Process + Progress
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Process + Progress
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Praxik is now positioned as its own AR learning project rather than a healthcare AI page. The page can later absorb screenshots, video, or a concise b...
- `section.section`: Distinct vertical section in the route flow. Current text cue: Technical Skills Demonstrated
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Technical Skills Demonstrated

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#brief`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#process`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Praxik | Swift AR Museum Interface | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Swift AR + Museum Learning
- `h1`: Praxik
- `p.lead`: A Swift AR project for museum learning, using augmented reality interaction to make exhibit content more spatial, playful, and discoverable.
- `a.button.primary`: Project brief
- `a.button.secondary`: Process
- `p.panel-title`: Focus
- `li`: Swift and ARKit product prototyping
- `li`: Science Museum of Minnesota learning context
- `li`: Spatial interaction and exhibit engagement
- `li`: Education technology through embodied discovery
- `p.panel-title`: Project Direction
- `p`: Praxik frames augmented reality as an educational interface: a way for learners to connect visual exhibit material, spatial placement, and interactive discovery.
- `p.panel-title`: Implementation Lens
- `p`: The work is best understood as Swift AR prototyping: scene setup, asset placement, visual interaction, interface constraints, and the challenge of making digital objects feel learnable in physical space.
- `p.panel-title`: Learning Lens
- `p`: The museum context matters because good AR is not just visual novelty. It should help a visitor notice, compare, ask questions, and remember what they encountered.
- `p.panel-title`: Portfolio Relevance
- `p`: This route shows the embodied-interface side of the portfolio: spatial computing, public learning environments, and interaction design beyond conventional web screens.
- `h2`: Process + Progress
- `p`: Praxik is now positioned as its own AR learning project rather than a healthcare AI page. The page can later absorb screenshots, video, or a concise build walkthrough without touching the Xcode source.
- `span.process-stage`: Context
- `p.process-detail`: Science museum learning experience with spatial content and discovery-oriented interaction.
- `p.process-evidence`: Project route established.
- `span.process-stage`: Prototype
- `p.process-detail`: Swift AR implementation exploring camera-based interaction, 3D placement, and learner engagement.
- `p.process-evidence`: Xcode source retained separately.
- `span.process-stage`: Evaluation
- `p.process-detail`: Future page expansion can document usability, onboarding friction, interpretive clarity, and exhibit fit.
- `p.process-evidence`: Next portfolio artifact.
- `span.process-stage`: Portfolio
- `p.process-detail`: Use Praxik to show embodied interfaces, spatial computing, and educational product thinking.
- `p.process-evidence`: Current public positioning.
- `h2`: Technical Skills Demonstrated
- `strong`: Swift AR Prototyping
- `p`: Mobile AR implementation, spatial placement, asset handling, and embodied interface constraints.
- `strong`: Exhibit Interaction
- `p`: Designing for curiosity, onboarding, public use, and educational clarity in a museum context.
- `strong`: Spatial Product Thinking
- `p`: Connecting physical context, learner attention, and digital augmentation into one experience.
- `p.footer`: Related work: , , and . HapTrek Biomechanics Full Stack + Cloud
- `a.quiet-link`: HapTrek
- `a.quiet-link`: Biomechanics
- `a.quiet-link`: Full Stack + Cloud

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Project brief | `#brief` |
| Process | `#process` |
| HapTrek | `../haptrek/` |
| Biomechanics | `../biomechanics/` |
| Full Stack + Cloud | `../fullstack/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
