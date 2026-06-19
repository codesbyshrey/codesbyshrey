# Page Spec: Full Stack + Cloud | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/fullstack/index.html`
- Route: `/fullstack/`
- Page title: `Full Stack + Cloud | Shreyas Sriram`
- Meta description: `Full stack developer certificate, AWS certifications, startup work, and technical prototyping background for Shreyas Sriram.`
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
   - Contains/current text summary: Full Stack + Cloud AWS-certified builder with full-stack product range. The 2023 build year: full-stack developer certificate work, AWS certification momentum, startup exposure, and rapid product prototyping across healthcare and education ...
3. `section.grid#certifications`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: AWS Developer Associate Featured certification for application-centered cloud fluency: APIs, deployment thinking, permissions, managed services, and developer workflows. AWS APIs Deployment Cloud Architecture AWS Cloud Practitioner Cloud fo...
4. `section.section#startup`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Spotlist + Startup Product Exposure Spotlist is best represented here as technical and product exposure rather than as a standalone experience page: startup constraints, ambiguous requirements, shipping pressure, user-facing features, and t...
5. `section.section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: How This Shows Up Now Clinical Roleplay LLM workflows, RAG concepts, conversational UI, prompt architecture, and product evaluation. Practice Intuition AI-assisted wellness prototypes, route planning, protocol structures, and safety boundar...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: AWS-certified builder with full-stack product range.
  - `div.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Featured Credentials
    - `ul.list`: List block; preserve item order and spacing under its preceding heading/panel title. Current text cue: AWS Certified Developer - Associate AWS Certified Cloud Practitioner CodingDojo Full-Time Full Stack Bootcamp Startup product development exposure
- `section.grid#certifications`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: AWS Developer Associate
  - `article.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: AWS Developer Associate
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: AWS APIs Deployment Cloud Architecture
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: AWS Cloud Practitioner
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: CodingDojo Full Stack
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: HTML / CSS / JS Python Django Java React
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Build Mindset
- `section.section#startup`: Distinct vertical section in the route flow. Current text cue: Spotlist + Startup Product Exposure
  - `h2`: Standalone heading anchoring the next content block. Current text cue: Spotlist + Startup Product Exposure
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Spotlist is best represented here as technical and product exposure rather than as a standalone experience page: startup constraints, ambiguous requir...
- `section.section`: Distinct vertical section in the route flow. Current text cue: How This Shows Up Now
  - `h2`: Standalone heading anchoring the next content block. Current text cue: How This Shows Up Now

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.grid#certifications`: Responsive card/panel grid; preserve child order and the column count implied by classes.
4. For `section.section#startup`: Distinct vertical section in the route flow.
5. For `section.section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Full Stack + Cloud | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Full Stack + Cloud
- `h1`: AWS-certified builder with full-stack product range.
- `p.lead`: The 2023 build year: full-stack developer certificate work, AWS certification momentum, startup exposure, and rapid product prototyping across healthcare and education ideas.
- `a.button.primary`: Certifications
- `a.button.secondary`: Startup work
- `p.panel-title`: Featured Credentials
- `li`: AWS Certified Developer - Associate
- `li`: AWS Certified Cloud Practitioner
- `li`: CodingDojo Full-Time Full Stack Bootcamp
- `li`: Startup product development exposure
- `p.meta-label`: Year
- `p.meta-value`: 2023
- `p.meta-label`: Stack
- `p.meta-value`: React, Python, Django, Java, MERN
- `p.meta-label`: Cloud
- `p.meta-value`: AWS foundations + developer track
- `p.meta-label`: Use
- `p.meta-value`: Rapid product prototyping
- `p.panel-title`: AWS Developer Associate
- `p`: Featured certification for application-centered cloud fluency: APIs, deployment thinking, permissions, managed services, and developer workflows.
- `span.chip.tech`: AWS
- `span.chip.tech`: APIs
- `span.chip.tech`: Deployment
- `span.chip.tech`: Cloud Architecture
- `p.panel-title`: AWS Cloud Practitioner
- `p`: Cloud foundation for understanding service models, infrastructure tradeoffs, reliability, security, pricing, and architecture vocabulary.
- `p.panel-title`: CodingDojo Full Stack
- `p`: Full-time bootcamp work across web fundamentals, Python, Java, JavaScript, databases, backend patterns, frontend interfaces, and CRUD applications.
- `span.chip.tech`: HTML / CSS / JS
- `span.chip.tech`: Python
- `span.chip.tech`: Django
- `span.chip.tech`: Java
- `span.chip.tech`: React
- `p.panel-title`: Build Mindset
- `p`: The value of this period is not only the languages. It is product translation: turning a need into routes, data models, interface states, deployment assumptions, and testable artifacts.
- `h2`: Spotlist + Startup Product Exposure
- `p`: Spotlist is best represented here as technical and product exposure rather than as a standalone experience page: startup constraints, ambiguous requirements, shipping pressure, user-facing features, and the practical rhythm of making software legible enough for a team to keep improving.
- `h2`: How This Shows Up Now
- `strong`: Clinical Roleplay
- `p`: LLM workflows, RAG concepts, conversational UI, prompt architecture, and product evaluation.
- `strong`: Practice Intuition
- `p`: AI-assisted wellness prototypes, route planning, protocol structures, and safety boundaries.
- `strong`: Portfolio System
- `p`: GitHub Pages, case-study routing, professional process artifacts, and polished static delivery.
- `p.footer`: Related work: , , and . Clinical Roleplay ChatEMT Education
- `a.quiet-link`: Clinical Roleplay
- `a.quiet-link`: ChatEMT
- `a.quiet-link`: Education

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Certifications | `#certifications` |
| Startup work | `#startup` |
| Clinical Roleplay | `../clinical-roleplay/` |
| ChatEMT | `../chatEMT/` |
| Education | `../education/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
