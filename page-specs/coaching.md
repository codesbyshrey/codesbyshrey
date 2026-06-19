# Page Spec: Coaching | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/coaching/index.html`
- Route: `/coaching/`
- Page title: `Coaching | Shreyas Sriram`
- Meta description: `Human performance and behavior change coaching: movement, biomechanics, NASM CPT. Practice Intuition. Not medical care.`
- Body classes: `route-pitch route-pitch-coaching`
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
   - Contains/current text summary: Movement & behavior coaching Human performance and behavior change coaching for movement, self-awareness, and sustainable improvement. I coach people through cognitive, biomechanical, and behavioral tracks so training becomes clearer, safer...
4. `section.schedule-hero[Primary meeting]`
   - Layout instruction: Booking/contact band with primary scheduling CTA and secondary contact panel.
   - Contains/current text summary: Start with a conversation Book a 45-minute meeting Discuss goals, coaching fit, and how you want to train. Open Calendly Contact Email shreyassriram3@gmail.com LinkedIn Profile
5. `section.panel.accent-green`
   - Layout instruction: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: Background Training credential NASM Certified Personal Trainer Education Biomechanics and biomedical engineering foundation, RPI BS BME Clinic context Physical Therapy Clinic Exposure: observation and clinic operations support only, not cli...
6. `h2.pitch-heading#coach-tracks`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Coaching tracks
7. `h2.pitch-heading#coach-links`
   - Layout instruction: Standalone heading anchoring the next content block.
   - Contains/current text summary: Related pages
8. `div.link-grid.compact-paths.pitch-work-links`
   - Layout instruction: Vertical list of link cards with left title and right descriptor.
   - Contains/current text summary: Biomechanics Coaching and movement Expression Practice Intuition Bonita AI wellness prototype Practice Intuition Site Connect All links
9. `section.panel.pitch-footer-contact.accent-purple`
   - Layout instruction: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text.
   - Contains/current text summary: Professional pages Hiring Contract work

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
- `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link. Current text cue: Also see Hire Work Coaching
- `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition. Current text cue: Human performance and behavior change coaching for movement, self-awareness, and sustainable improvement.
  - `h1#coach-title`: Standalone heading anchoring the next content block. Current text cue: Human performance and behavior change coaching for movement, self-awareness, and sustainable improvement.
- `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel. Current text cue: Book a 45-minute meeting
  - `div.cal-primary`: Prominent booking CTA block: label, h2, support copy, primary button. Current text cue: Book a 45-minute meeting
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Book a 45-minute meeting
  - `aside.panel.accent-blue`: Rounded translucent dark panel with blue accent styling; mono uppercase panel title; muted body text. Current text cue: Contact
    - `div.link-grid`: Vertical list of link cards with left title and right descriptor. Current text cue: Email shreyassriram3@gmail.com LinkedIn Profile
- `section.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text. Current text cue: Background
  - `dl.pitch-proof-grid`: Dense definition-list proof grid, each item as label plus evidence. Current text cue: Training credential NASM Certified Personal Trainer Education Biomechanics and biomedical engineering foundation, RPI BS BME Clinic context Physical T...
- `h2.pitch-heading#coach-tracks`: Standalone heading anchoring the next content block. Current text cue: Coaching tracks
- `h2.pitch-heading#coach-links`: Standalone heading anchoring the next content block. Current text cue: Related pages
- `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor. Current text cue: Biomechanics Coaching and movement Expression Practice Intuition Bonita AI wellness prototype Practice Intuition Site Connect All links
- `section.panel.pitch-footer-contact.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text. Current text cue: Professional pages
  - `div.actions`: Button row for secondary actions. Current text cue: Hiring Contract work

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `div.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `nav.pitch-crosslink[Pitch pages]`: Small sibling-page navigation row; include label and mark current link.
3. For `section.pitch-intro`: Pitch intro: eyebrow, large service headline, concise value proposition.
4. For `section.schedule-hero[Primary meeting]`: Booking/contact band with primary scheduling CTA and secondary contact panel.
5. For `section.panel.accent-green`: Rounded translucent dark panel with green accent styling; mono uppercase panel title; muted body text.
6. For `h2.pitch-heading#coach-tracks`: Standalone heading anchoring the next content block.
7. For `h2.pitch-heading#coach-links`: Standalone heading anchoring the next content block.
8. For `div.link-grid.compact-paths.pitch-work-links`: Vertical list of link cards with left title and right descriptor.
9. For `section.panel.pitch-footer-contact.accent-purple`: Rounded translucent dark panel with purple accent styling; mono uppercase panel title; muted body text.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Coaching | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `span.pitch-crosslink-label`: Also see
- `a`: Hire
- `a`: Work
- `a.is-current`: Coaching
- `p.eyebrow`: Movement & behavior coaching
- `h1#coach-title`: Human performance and behavior change coaching for movement, self-awareness, and sustainable improvement.
- `p.pitch-value`: I coach people through cognitive, biomechanical, and behavioral tracks so training becomes clearer, safer, and easier to sustain.
- `p.cal-label`: Start with a conversation
- `h2`: Book a 45-minute meeting
- `p`: Discuss goals, coaching fit, and how you want to train.
- `a.button.primary`: Open Calendly
- `p.panel-title`: Contact
- `a.link-card`: Email shreyassriram3@gmail.com
- `strong`: Email
- `span`: shreyassriram3@gmail.com
- `a.link-card`: LinkedIn Profile
- `strong`: LinkedIn
- `span`: Profile
- `p.panel-title#coach-proof`: Background
- `dt`: Training credential
- `dd`: NASM Certified Personal Trainer
- `dt`: Education
- `dd`: Biomechanics and biomedical engineering foundation, RPI BS BME
- `dt`: Clinic context
- `dd`: Physical Therapy Clinic Exposure: observation and clinic operations support only, not clinical license or scope
- `dt`: Field care
- `dd`: EMT-B experience in patient-facing care settings
- `dt`: Teaching & sport
- `dd`: Swim instruction, coaching, and athlete background as already shared on the portfolio
- `dt`: Practice Intuition
- `dd`: Learning is Unobstructed Self Expression
- `dt`: Protocols
- `dd`: Bonita Intelligence System: structured wellness and AI triage thinking
- `p`: I am a personal trainer and coach. I am not licensed to provide physical therapy. Coaching is education and training support, not diagnosis, medical treatment, or physical therapy. Scope.
- `strong`: Scope.
- `p`: For pain, injury, or medical concerns, work with a licensed clinician.
- `h2.pitch-heading#coach-tracks`: Coaching tracks
- `h3`: Movement assessment
- `p`: Posture, pain-free movement basics, mobility, strength foundations, and body awareness.
- `h3`: Strength + conditioning
- `p`: Practical progressions, exercise selection, pacing, and routines you can sustain.
- `h3`: Behavior change
- `p`: Motivation, habit design, friction reduction, reflection, and consistency.
- `h3`: Cognitive performance
- `p`: Attention, self-awareness, learning loops, emotional regulation, and decision quality.
- `h3`: Biomechanics education
- `p`: Understand what you feel and why a progression makes sense.
- `h3`: Practice Intuition
- `p`: Connect movement, reflection, learning, and self-expression into a practical system.
- `h2.pitch-heading#coach-links`: Related pages
- `a.link-card`: Biomechanics Coaching and movement
- `strong`: Biomechanics
- `span`: Coaching and movement
- `a.link-card`: Expression Practice Intuition
- `strong`: Expression
- `span`: Practice Intuition
- `a.link-card`: Bonita AI wellness prototype
- `strong`: Bonita
- `span`: AI wellness prototype
- `a.link-card`: Practice Intuition Site
- `strong`: Practice Intuition
- `span`: Site
- `a.link-card`: Connect All links
- `strong`: Connect
- `span`: All links
- `p.panel-title`: Professional pages
- `a.button.secondary`: Hiring
- `a.button.secondary`: Contract work

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Hire | `../hire/` |
| Work | `../work/` |
| Coaching | `./` |
| Open Calendly | `https://calendly.com/shreyassriram3` |
| Email shreyassriram3@gmail.com | `mailto:shreyassriram3@gmail.com` |
| LinkedIn Profile | `https://linkedin.com/in/shreyas-sriram` |
| Biomechanics Coaching and movement | `../biomechanics/` |
| Expression Practice Intuition | `../expression/` |
| Bonita AI wellness prototype | `../pi-bonita/` |
| Practice Intuition Site | `https://practiceintuition.github.io` |
| Connect All links | `../connect/` |
| Hiring | `../hire/` |
| Contract work | `../work/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
