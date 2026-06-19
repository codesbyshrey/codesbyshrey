# Page Spec: Hire | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/hire/index.html`
- Route: `/hire/`
- Page title: `Hire | Shreyas Sriram`
- Meta description: `Human-centered product engineer for clinical AI, health, and human-performance systems. MS Human Factors, full-stack AI prototyping, evaluation, and research.`
- Body classes: `route-pitch route-pitch-hire`
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
   - Contains/current text summary: Recruiters & hiring managers Human-centered product engineer for clinical AI, health, and human-performance systems. I design, evaluate, and prototype AI and health products where trust, safety, behavior, and outcomes matter.
4. `section.schedule-hero[Primary meeting]`
   - Layout instruction: Booking/contact band with primary scheduling CTA and secondary contact panel.
   - Contains/current text summary: Next step Book a 45-minute meeting Intro call for full-time roles, screens, or hiring-manager conversations. Open Calendly Contact Email shreyassriram3@gmail.com LinkedIn Profile
5. `section.panel.accent-purple`
   - Layout instruction: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: Proof Education MS Human Factors in Information Design, Bentley University Education BS Biomedical Engineering, RPI Certification AWS Certified Developer - Associate Credentials NASM CPT, EMT-B, CITI human subjects training Product Clinical...
6. `h2.pitch-heading#hire-own`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: What you can hire me to own
7. `ul.pitch-bullets`
   - Layout instruction: Plain bullet list under the preceding pitch heading.
   - Contains/current text summary: Translate ambiguous product problems into user flows, requirements, prototypes, and decision-ready documentation. Evaluate AI product behavior for trust, safety, communication quality, and human-in-the-loop failure modes. Plan and conduct U...
8. `h2.pitch-heading#hire-fit`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Role fit
9. `h2.pitch-heading#hire-work`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Relevant work
10. `div.link-grid.compact-paths.pitch-work-links`
   - Layout instruction: Vertical list of link cards with left title and right descriptor.
   - Contains/current text summary: Clinical Roleplay Case study Experiences Roles and projects Education Credentials Human-AI Parallels Systems essay Connect All links
11. `section.panel.pitch-footer-contact.accent-green`
   - Layout instruction: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: More contact GitHub codesbyshrey Contract work Freelance UX and prototyping Coaching Performance and movement

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link. Current text cue: Also see Hire Work Coaching
- `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition. Current text cue: Human-centered product engineer for clinical AI, health, and human-performance systems.
  - `h1#hire-title`: Standalone heading anchoring the next content block. Current text cue: Human-centered product engineer for clinical AI, health, and human-performance systems.
- `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel. Current text cue: Book a 45-minute meeting
  - `div.cal-primary`: Prominent booking CTA block: label, h2, support copy, primary button. Current text cue: Book a 45-minute meeting
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Book a 45-minute meeting
  - `aside.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Contact
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Email shreyassriram3@gmail.com LinkedIn Profile
- `section.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Proof
  - `dl.pitch-proof-grid`: Dense definition-list proof grid, each item as label plus evidence. Current text cue: Education MS Human Factors in Information Design, Bentley University Education BS Biomedical Engineering, RPI Certification AWS Certified Developer - ...
- `h2.pitch-heading#hire-own`: Standalone heading anchoring the next content block. Current text cue: What you can hire me to own
- `ul.pitch-bullets`: Plain bullet list under the preceding pitch heading. Current text cue: Translate ambiguous product problems into user flows, requirements, prototypes, and decision-ready documentation. Evaluate AI product behavior for tru...
- `h2.pitch-heading#hire-fit`: Standalone heading anchoring the next content block. Current text cue: Role fit
- `h2.pitch-heading#hire-work`: Standalone heading anchoring the next content block. Current text cue: Relevant work
- `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor. Current text cue: Clinical Roleplay Case study Experiences Roles and projects Education Credentials Human-AI Parallels Systems essay Connect All links
- `section.panel.pitch-footer-contact.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: More contact
  - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: GitHub codesbyshrey Contract work Freelance UX and prototyping Coaching Performance and movement

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link.
3. For `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition.
4. For `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel.
5. For `section.panel.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text.
6. For `h2.pitch-heading#hire-own`: Standalone heading anchoring the next content block.
7. For `ul.pitch-bullets`: Plain bullet list under the preceding pitch heading.
8. For `h2.pitch-heading#hire-fit`: Standalone heading anchoring the next content block.
9. For `h2.pitch-heading#hire-work`: Standalone heading anchoring the next content block.
10. For `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor.
11. For `section.panel.pitch-footer-contact.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Hire | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `span.pitch-crosslink-label`: Also see
- `a.is-current`: Hire
- `a`: Work
- `a`: Coaching
- `p.eyebrow`: Recruiters & hiring managers
- `h1#hire-title`: Human-centered product engineer for clinical AI, health, and human-performance systems.
- `p.pitch-value`: I design, evaluate, and prototype AI and health products where trust, safety, behavior, and outcomes matter.
- `p.cal-label`: Next step
- `h2`: Book a 45-minute meeting
- `p`: Intro call for full-time roles, screens, or hiring-manager conversations.
- `a.button.primary`: Open Calendly
- `p.panel-title`: Contact
- `a.link-card`: Email shreyassriram3@gmail.com
- `strong`: Email
- `span`: shreyassriram3@gmail.com
- `a.link-card`: LinkedIn Profile
- `strong`: LinkedIn
- `span`: Profile
- `p.panel-title#hire-proof`: Proof
- `dt`: Education
- `dd`: MS Human Factors in Information Design, Bentley University
- `dt`: Education
- `dd`: BS Biomedical Engineering, RPI
- `dt`: Certification
- `dd`: AWS Certified Developer - Associate
- `dt`: Credentials
- `dd`: NASM CPT, EMT-B, CITI human subjects training
- `dt`: Product
- `dd`: Clinical Roleplay Simulator for NBME: communication training, LLM personas, OSCE-style feedback
- `dt`: Evaluation
- `dd`: mpathic clinical AI evaluation
- `dt`: Research
- `dd`: HF795 AI Evidence Tools Study: OpenEvidence, Consensus, Perplexity
- `dt`: UX research
- `dd`: NATHAN Sports moderated usability studies and product recommendations
- `dt`: IP
- `dd`: Co-inventor, modular glenoid implant patent
- `h2.pitch-heading#hire-own`: What you can hire me to own
- `p.pitch-sub`: Product, research, and AI teams
- `li`: Translate ambiguous product problems into user flows, requirements, prototypes, and decision-ready documentation.
- `li`: Evaluate AI product behavior for trust, safety, communication quality, and human-in-the-loop failure modes.
- `li`: Plan and conduct UX research, usability testing, task analysis, and mixed-methods studies.
- `li`: Bridge product, design, research, and engineering on early-stage AI and health work.
- `li`: Build full-stack or AI-enabled prototypes that make strategy testable.
- `li`: Bring healthcare, human factors, biomedical, and human-performance context into product decisions.
- `h2.pitch-heading#hire-fit`: Role fit
- `p.pitch-sub`: I am strongest where human factors meets AI or health software: evaluation, interaction design, research, and hands-on prototyping.
- `h2.pitch-heading#hire-work`: Relevant work
- `a.link-card`: Clinical Roleplay Case study
- `strong`: Clinical Roleplay
- `span`: Case study
- `a.link-card`: Experiences Roles and projects
- `strong`: Experiences
- `span`: Roles and projects
- `a.link-card`: Education Credentials
- `strong`: Education
- `span`: Credentials
- `a.link-card`: Human-AI Parallels Systems essay
- `strong`: Human-AI Parallels
- `span`: Systems essay
- `a.link-card`: Connect All links
- `strong`: Connect
- `span`: All links
- `p.panel-title`: More contact
- `a.link-card`: GitHub codesbyshrey
- `strong`: GitHub
- `span`: codesbyshrey
- `a.link-card`: Contract work Freelance UX and prototyping
- `strong`: Contract work
- `span`: Freelance UX and prototyping
- `a.link-card`: Coaching Performance and movement
- `strong`: Coaching
- `span`: Performance and movement

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Hire | `./` |
| Work | `../work/` |
| Coaching | `../coaching/` |
| Open Calendly | `https://calendly.com/shreyassriram3` |
| Email shreyassriram3@gmail.com | `mailto:shreyassriram3@gmail.com` |
| LinkedIn Profile | `https://linkedin.com/in/shreyas-sriram` |
| Clinical Roleplay Case study | `../clinical-roleplay/` |
| Experiences Roles and projects | `../experiences/` |
| Education Credentials | `../education/` |
| Human-AI Parallels Systems essay | `../human-ai-parallels/` |
| Connect All links | `../connect/` |
| GitHub codesbyshrey | `https://github.com/codesbyshrey` |
| Contract work Freelance UX and prototyping | `../work/` |
| Coaching Performance and movement | `../coaching/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
