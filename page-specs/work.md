# Page Spec: Work With Me | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/work/index.html`
- Route: `/work/`
- Page title: `Work With Me | Shreyas Sriram`
- Meta description: `Freelance UX research, UX design, and technical prototyping for AI, health, and human-centered products. Human Factors MS.`
- Body classes: `route-pitch route-pitch-work`
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
2. `nav.pitch-crosslink[Pitch pages]`
   - Layout instruction: Small sibling-page navigation row; include label and mark current link.
   - Contains/current text summary: Also see Hire Work Coaching
3. `section.pitch-intro`
   - Layout instruction: Pitch intro: eyebrow, large service headline, concise value proposition.
   - Contains/current text summary: Freelance & contract clients UX research, product design, and technical prototyping for AI, health, and human-centered products. I help teams clarify what users need, design the right workflow, and prototype enough of the product to test th...
4. `section.schedule-hero[Primary meeting]`
   - Layout instruction: Booking/contact band with primary scheduling CTA and secondary contact panel.
   - Contains/current text summary: Book a working session Book a 45-minute meeting Scope a sprint, research plan, or prototype milestone. Open Calendly Contact Email shreyassriram3@gmail.com LinkedIn Profile
5. `section.panel.accent-orange`
   - Layout instruction: Rounded translucent dark panel with orange accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: Proof Human factors MS Human Factors in Information Design, Bentley University UX research NATHAN Sports moderated usability research and product recommendations Mixed methods HF795 AI Evidence Tools Study Product build Clinical Roleplay Si...
6. `h2.pitch-heading#work-offer`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: What I can take on
7. `ul.pitch-bullets`
   - Layout instruction: Plain bullet list under the preceding pitch heading.
   - Contains/current text summary: UX research planning: interviews, usability tests, task analysis, mixed-methods studies, and synthesis. UX design support: user flows, wireframes, interaction patterns, onboarding, feedback states, and design recommendations. AI product eva...
8. `h2.pitch-heading#work-models`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Engagement models
9. `div.pitch-models`
   - Layout instruction: Responsive row/grid of engagement model cards.
   - Contains/current text summary: Research sprint Plan, run, synthesize, and recommend. Best when you need evidence before you lock a workflow or feature. Design + prototype sprint Flow, wireframe, and build enough to test. Best when the risk is interaction or feasibility, ...
10. `h2.pitch-heading#work-links`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Relevant work
11. `div.link-grid.compact-paths.pitch-work-links`
   - Layout instruction: Vertical list of link cards with left title and right descriptor.
   - Contains/current text summary: NATHAN Sports Usability research Clinical Roleplay Product case study Human-AI Parallels Systems thinking PI Bonita AI wellness prototype Connect All links
12. `section.panel.pitch-footer-contact.accent-green`
   - Layout instruction: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: Full-time hiring If you are hiring for a full-time role, use the hire page. Hire page GitHub

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link. Current text cue: Also see Hire Work Coaching
- `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition. Current text cue: UX research, product design, and technical prototyping for AI, health, and human-centered products.
  - `h1#work-title`: Standalone heading anchoring the next content block. Current text cue: UX research, product design, and technical prototyping for AI, health, and human-centered products.
- `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel. Current text cue: Book a 45-minute meeting
  - `div.cal-primary`: Prominent booking CTA block: label, h2, support copy, primary button. Current text cue: Book a 45-minute meeting
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Book a 45-minute meeting
  - `aside.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Contact
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Email shreyassriram3@gmail.com LinkedIn Profile
- `section.panel.accent-orange`: Rounded translucent dark panel with orange accent styling; mono uppercase panel title; muted body text. Current text cue: Proof
  - `dl.pitch-proof-grid`: Dense definition-list proof grid, each item as label plus evidence. Current text cue: Human factors MS Human Factors in Information Design, Bentley University UX research NATHAN Sports moderated usability research and product recommenda...
- `h2.pitch-heading#work-offer`: Standalone heading anchoring the next content block. Current text cue: What I can take on
- `ul.pitch-bullets`: Plain bullet list under the preceding pitch heading. Current text cue: UX research planning: interviews, usability tests, task analysis, mixed-methods studies, and synthesis. UX design support: user flows, wireframes, int...
- `h2.pitch-heading#work-models`: Standalone heading anchoring the next content block. Current text cue: Engagement models
- `div.pitch-models`: Responsive row/grid of engagement model cards. Current text cue: Research sprint
  - `article.pitch-model-card`: Compact model card with h3 and explanatory paragraph. Current text cue: Research sprint
    - `h3`: Standalone heading anchoring the next content block. Current text cue: Research sprint
  - `article.pitch-model-card`: Compact model card with h3 and explanatory paragraph. Current text cue: Design + prototype sprint
    - `h3`: Standalone heading anchoring the next content block. Current text cue: Design + prototype sprint
  - `article.pitch-model-card`: Compact model card with h3 and explanatory paragraph. Current text cue: Product clarity retainer
    - `h3`: Standalone heading anchoring the next content block. Current text cue: Product clarity retainer
- `h2.pitch-heading#work-links`: Standalone heading anchoring the next content block. Current text cue: Relevant work
- `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor. Current text cue: NATHAN Sports Usability research Clinical Roleplay Product case study Human-AI Parallels Systems thinking PI Bonita AI wellness prototype Connect All ...
- `section.panel.pitch-footer-contact.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Full-time hiring
  - `div.actions`: Button row for secondary actions. Current text cue: Hire page GitHub

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link.
3. For `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition.
4. For `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel.
5. For `section.panel.accent-orange`: Rounded translucent dark panel with orange accent styling; mono uppercase panel title; muted body text.
6. For `h2.pitch-heading#work-offer`: Standalone heading anchoring the next content block.
7. For `ul.pitch-bullets`: Plain bullet list under the preceding pitch heading.
8. For `h2.pitch-heading#work-models`: Standalone heading anchoring the next content block.
9. For `div.pitch-models`: Responsive row/grid of engagement model cards.
10. For `h2.pitch-heading#work-links`: Standalone heading anchoring the next content block.
11. For `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor.
12. For `section.panel.pitch-footer-contact.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Work With Me | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `span.pitch-crosslink-label`: Also see
- `a`: Hire
- `a.is-current`: Work
- `a`: Coaching
- `p.eyebrow`: Freelance & contract clients
- `h1#work-title`: UX research, product design, and technical prototyping for AI, health, and human-centered products.
- `p.pitch-value`: I help teams clarify what users need, design the right workflow, and prototype enough of the product to test the decision.
- `p.cal-label`: Book a working session
- `h2`: Book a 45-minute meeting
- `p`: Scope a sprint, research plan, or prototype milestone.
- `a.button.primary`: Open Calendly
- `p.panel-title`: Contact
- `a.link-card`: Email shreyassriram3@gmail.com
- `strong`: Email
- `span`: shreyassriram3@gmail.com
- `a.link-card`: LinkedIn Profile
- `strong`: LinkedIn
- `span`: Profile
- `p.panel-title#work-proof`: Proof
- `dt`: Human factors
- `dd`: MS Human Factors in Information Design, Bentley University
- `dt`: UX research
- `dd`: NATHAN Sports moderated usability research and product recommendations
- `dt`: Mixed methods
- `dd`: HF795 AI Evidence Tools Study
- `dt`: Product build
- `dd`: Clinical Roleplay Simulator: React, TypeScript, voice, evaluation
- `dt`: AI wellness prototype
- `dd`: Bonita Intelligence System
- `dt`: Engineering range
- `dd`: Full-stack and AWS training, API-connected prototypes
- `dt`: Operating frame
- `dd`: Problem, Person, Process, Product
- `h2.pitch-heading#work-offer`: What I can take on
- `li`: UX research planning: interviews, usability tests, task analysis, mixed-methods studies, and synthesis.
- `li`: UX design support: user flows, wireframes, interaction patterns, onboarding, feedback states, and design recommendations.
- `li`: AI product evaluation: trust calibration, source presentation, evidence interpretation, safety boundaries, and appropriate reliance.
- `li`: Product documentation: briefs, PRDs, task packets, research readouts, decision logs, and implementation handoffs.
- `li`: Prototype development: React and TypeScript, API-connected flows, LLM-assisted concepts, dashboards, and proof-of-concept builds.
- `li`: Product clarity: scoped experiments, roadmap options, and next-build recommendations from ambiguous ideas.
- `h2.pitch-heading#work-models`: Engagement models
- `h3`: Research sprint
- `p`: Plan, run, synthesize, and recommend. Best when you need evidence before you lock a workflow or feature.
- `h3`: Design + prototype sprint
- `p`: Flow, wireframe, and build enough to test. Best when the risk is interaction or feasibility, not slides.
- `h3`: Product clarity retainer
- `p`: Weekly research, design, or product support for an early team. Best when you want a steady human-factors and build partner.
- `h2.pitch-heading#work-links`: Relevant work
- `a.link-card`: NATHAN Sports Usability research
- `strong`: NATHAN Sports
- `span`: Usability research
- `a.link-card`: Clinical Roleplay Product case study
- `strong`: Clinical Roleplay
- `span`: Product case study
- `a.link-card`: Human-AI Parallels Systems thinking
- `strong`: Human-AI Parallels
- `span`: Systems thinking
- `a.link-card`: PI Bonita AI wellness prototype
- `strong`: PI Bonita
- `span`: AI wellness prototype
- `a.link-card`: Connect All links
- `strong`: Connect
- `span`: All links
- `p.panel-title`: Full-time hiring
- `p.pitch-sub.pitch-tight`: If you are hiring for a full-time role, use the hire page.
- `a.button.secondary`: Hire page
- `a.button.secondary`: GitHub

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Hire | `../hire/` |
| Work | `./` |
| Coaching | `../coaching/` |
| Open Calendly | `https://calendly.com/shreyassriram3` |
| Email shreyassriram3@gmail.com | `mailto:shreyassriram3@gmail.com` |
| LinkedIn Profile | `https://linkedin.com/in/shreyas-sriram` |
| NATHAN Sports Usability research | `../nathan-sports/` |
| Clinical Roleplay Product case study | `../clinical-roleplay/` |
| Human-AI Parallels Systems thinking | `../human-ai-parallels/` |
| PI Bonita AI wellness prototype | `../pi-bonita/` |
| Connect All links | `../connect/` |
| Hire page | `../hire/` |
| GitHub | `https://github.com/codesbyshrey` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
