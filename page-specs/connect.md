# Page Spec: Connect | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/connect/index.html`
- Route: `/connect/`
- Page title: `Connect | Shreyas Sriram`
- Meta description: `Schedule a 45-minute conversation, email, LinkedIn, GitHub, Substack, Medium, and Practice Intuition links for Shreyas Sriram.`
- Body classes: `route-connect`
- Stylesheet(s): `../routes.css?v=15`

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
   - Contains/current text summary: Connect Clinical AI, human factors, product systems, embodied design.
3. `section.schedule-hero`
   - Layout instruction: Booking/contact band with primary scheduling CTA and secondary contact panel.
   - Contains/current text summary: 45 minutes Book a 45-minute meeting Calendly Contact Email shreyassriram3@gmail.com LinkedIn Professional profile GitHub Code & projects
4. `section.grid.three[How to engage]`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Hiring Hire page Recruiters and hiring managers Contract work Work page UX research, design, prototyping Coaching Coaching page Performance and movement
5. `section.grid.three`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Writing Substack Practice Intuition Medium Essays Practice Intuition Practice Intuition Site Selected work Clinical Roleplay PI Bonita HapTrek
6. `section.grid`
   - Layout instruction: Responsive card/panel grid; preserve child order and the column count implied by classes.
   - Contains/current text summary: Product documents Clinical Roleplay PRD Virtual standardized patient system PI Bonita PRD v1 Wellness intelligence protocols Conversation areas Clinical AI Evaluation Human Factors Product Strategy Public Health Tools Biomechanics Embodied ...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph. Current text cue: Clinical AI, human factors, product systems, embodied design.
- `section.schedule-hero`: Booking/contact band with primary scheduling CTA and secondary contact panel. Current text cue: Book a 45-minute meeting
  - `div.cal-primary`: Prominent booking CTA block: label, h2, support copy, primary button. Current text cue: Book a 45-minute meeting
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Book a 45-minute meeting
  - `aside.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Contact
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Email shreyassriram3@gmail.com LinkedIn Professional profile GitHub Code & projects
- `section.grid.three[How to engage]`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Hiring
  - `article.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Hiring
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Hire page Recruiters and hiring managers
  - `article.panel.accent-orange`: Rounded translucent dark panel with orange accent styling; mono uppercase panel title; muted body text. Current text cue: Contract work
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Work page UX research, design, prototyping
  - `article.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Coaching
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Coaching page Performance and movement
- `section.grid.three`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Writing
  - `article.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Writing
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Substack Practice Intuition Medium Essays
  - `article.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Practice Intuition
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Practice Intuition Site
  - `article.panel.accent-red`: Rounded translucent dark panel with red accent styling; mono uppercase panel title; muted body text. Current text cue: Selected work
    - `div.actions`: Button row for secondary actions. Current text cue: Clinical Roleplay PI Bonita HapTrek
- `section.grid`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Product documents
  - `article.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Product documents
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Clinical Roleplay PRD Virtual standardized patient system PI Bonita PRD v1 Wellness intelligence protocols
  - `article.panel`: Rounded translucent dark panel; mono uppercase panel title; muted body text. Current text cue: Conversation areas
    - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Clinical AI Evaluation Human Factors Product Strategy Public Health Tools Biomechanics Embodied Interfaces

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `section.hero.full`: Single-column hero: eyebrow, oversized serif headline, muted lead paragraph.
3. For `section.schedule-hero`: Booking/contact band with primary scheduling CTA and secondary contact panel.
4. For `section.grid.three[How to engage]`: Responsive card/panel grid; preserve child order and the column count implied by classes.
5. For `section.grid.three`: Responsive card/panel grid; preserve child order and the column count implied by classes.
6. For `section.grid`: Responsive card/panel grid; preserve child order and the column count implied by classes.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Connect | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Connect
- `h1`: Clinical AI, human factors, product systems, embodied design.
- `p.cal-label`: 45 minutes
- `h2`: Book a 45-minute meeting
- `a.button.primary`: Calendly
- `p.panel-title`: Contact
- `a.link-card`: Email shreyassriram3@gmail.com
- `strong`: Email
- `span`: shreyassriram3@gmail.com
- `a.link-card`: LinkedIn Professional profile
- `strong`: LinkedIn
- `span`: Professional profile
- `a.link-card`: GitHub Code & projects
- `strong`: GitHub
- `span`: Code & projects
- `p.panel-title`: Hiring
- `a.link-card`: Hire page Recruiters and hiring managers
- `strong`: Hire page
- `span`: Recruiters and hiring managers
- `p.panel-title`: Contract work
- `a.link-card`: Work page UX research, design, prototyping
- `strong`: Work page
- `span`: UX research, design, prototyping
- `p.panel-title`: Coaching
- `a.link-card`: Coaching page Performance and movement
- `strong`: Coaching page
- `span`: Performance and movement
- `p.panel-title`: Writing
- `a.link-card`: Substack Practice Intuition
- `strong`: Substack
- `span`: Practice Intuition
- `a.link-card`: Medium Essays
- `strong`: Medium
- `span`: Essays
- `p.panel-title`: Practice Intuition
- `a.link-card`: Practice Intuition Site
- `strong`: Practice Intuition
- `span`: Site
- `p.panel-title`: Selected work
- `a.button.secondary`: Clinical Roleplay
- `a.button.secondary`: PI Bonita
- `a.button.secondary`: HapTrek
- `p.panel-title`: Product documents
- `a.link-card`: Clinical Roleplay PRD Virtual standardized patient system
- `strong`: Clinical Roleplay PRD
- `span`: Virtual standardized patient system
- `a.link-card`: PI Bonita PRD v1 Wellness intelligence protocols
- `strong`: PI Bonita PRD v1
- `span`: Wellness intelligence protocols
- `p.panel-title`: Conversation areas
- `span.chip.ux`: Clinical AI Evaluation
- `span.chip.ux`: Human Factors
- `span.chip.domain`: Product Strategy
- `span.chip.concept`: Public Health Tools
- `span.chip.concept`: Biomechanics
- `span.chip.concept`: Embodied Interfaces

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Calendly | `https://calendly.com/shreyassriram3` |
| Email shreyassriram3@gmail.com | `mailto:shreyassriram3@gmail.com` |
| LinkedIn Professional profile | `https://linkedin.com/in/shreyas-sriram` |
| GitHub Code & projects | `https://github.com/codesbyshrey` |
| Hire page Recruiters and hiring managers | `../hire/` |
| Work page UX research, design, prototyping | `../work/` |
| Coaching page Performance and movement | `../coaching/` |
| Substack Practice Intuition | `https://practiceintuition.substack.com` |
| Medium Essays | `https://medium.com/@picsbyshrey` |
| Practice Intuition Site | `https://practiceintuition.github.io` |
| Clinical Roleplay | `../clinical-roleplay/` |
| PI Bonita | `../pi-bonita/` |
| HapTrek | `../haptrek/` |
| Clinical Roleplay PRD Virtual standardized patient system | `../clinical-roleplay-PRD/` |
| PI Bonita PRD v1 Wellness intelligence protocols | `../pi-bonita-prdv1/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
