# Page Spec: Shreyas Sriram | Clinical AI, Human Factors & Human Performance Systems

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/index.html`
- Route: `/`
- Page title: `Shreyas Sriram | Clinical AI, Human Factors & Human Performance Systems`
- Meta description: `Portfolio for Shreyas Sriram, a human-centered product engineer working across clinical AI evaluation, human factors, biomedical engineering, full-stack prototyping, and applied biomechanics.`
- Body classes: `route-home`
- Stylesheet(s): `routes.css?v=14`

## Global Visual System
- Use the `routes.css` dark editorial portfolio system: deep charcoal/blue background with soft radial color fields, cream text, muted secondary copy, Fraunces serif headlines, IBM Plex Sans body text, and IBM Plex Mono labels.
- Keep the page inside the centered `.shell` container, with generous bottom padding and a thin topbar divider.
- Preserve the current route hierarchy and link destinations unless an edit explicitly asks to change navigation.
- Panels should feel like translucent dark glass cards with subtle borders, 24px radius, and accent-specific border/glow colors.
- Chips are compact wrapped pills. Link cards are horizontal, clickable rows with a bold title and muted right-side descriptor.
- Maintain responsive behavior: multi-column layouts collapse cleanly to one column on small screens, without text overlap.

## Current Page Structure
1. `header.topbar`
   - Layout instruction: Top navigation: brand mark left, primary links right, thin divider under the row.
   - Contains/current text summary: Codes by Shrey Education Experiences Expression Connect
2. `main`
   - Layout instruction: Main content wrapper; child sections define the visual layout.
   - Contains/current text summary: Human-Centered Product Engineer Shreyas Sriram Clinical AI x Human Factors · Systems Interaction Design · Biomechanics · AWS Certified Developer (DVA-C02) I design human centered systems for high-stakes embodied interactions. I engineer sol...
3. `footer.editorial-footer`
   - Layout instruction: Footer row with Practice Intuition link and copyright text.
   - Contains/current text summary: Practice Intuition → Human Systems, Movement, and Embodied Design Shreyas Sriram © 2026

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `header.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row. Current text cue: Codes by Shrey Education Experiences Expression Connect
  - `nav.links[Primary]`: Navigation object with compact links. Current text cue: Education Experiences Expression Connect
- `main`: Main content wrapper; child sections define the visual layout. Current text cue: Shreyas Sriram
  - `section.editorial-hero`: Editorial home hero: large identity copy block left, focused summary panel right, broad spacing. Current text cue: Shreyas Sriram
    - `aside.focus-panel`: Right hero panel: section label, h2, paragraph, four-word framework strip, and icon/link row. Current text cue: Human-centered systems for high-stakes interaction.
      - `h2#focus-title`: Standalone heading anchoring the next content block. Current text cue: Human-centered systems for high-stakes interaction.
      - `div.framework-strip[Problem Person Process Product]`: Structural container; preserve child order and current spacing. Current text cue: Problem Person Process Product
      - `div.icon-row[Professional links]`: Structural container; preserve child order and current spacing. Current text cue: in GH Human-AI Parallels
  - `section.chronology[Chronology]`: Timeline section containing a horizontal/scrollable track of linked timeline items. Current text cue: 2019 BS Biomedical Engineering Biomechanics, biomaterials, NCAA D3 XC/TF. 2020-2022 Patent + EMT Glenoid implant work, EMT field experience, patient c...
    - `div.chronology-track`: Timeline track row; keep items ordered left to right by year. Current text cue: 2019 BS Biomedical Engineering Biomechanics, biomaterials, NCAA D3 XC/TF. 2020-2022 Patent + EMT Glenoid implant work, EMT field experience, patient c...
      - `a.chronology-item.orange`: Timeline item card with year, bold title, and concise context line. Current text cue: 2019 BS Biomedical Engineering Biomechanics, biomaterials, NCAA D3 XC/TF.
      - `a.chronology-item.red`: Timeline item card with year, bold title, and concise context line. Current text cue: 2020-2022 Patent + EMT Glenoid implant work, EMT field experience, patient care.
      - `a.chronology-item.green`: Timeline item card with year, bold title, and concise context line. Current text cue: 2023 Software + Cloud AWS Certified Developer, full-stack training, startup work.
      - `a.chronology-item.red`: Timeline item card with year, bold title, and concise context line. Current text cue: 2024-2025 Movement + Coaching NASM CPT, swim instruction, Physical Therapy Clinic Exposure.
      - `a.chronology-item.blue`: Timeline item card with year, bold title, and concise context line. Current text cue: 2025 MS Human Factors UX research, usability testing, multimodal interaction.
      - `a.chronology-item.purple`: Timeline item card with year, bold title, and concise context line. Current text cue: 2026 Clinical AI Evaluation mpathic, LLM review, human-in-the-loop workflows.
  - `section.split-bar`: Thin divider band with two labels balanced across the row. Current text cue: Clinical + Digital Systems Embodied + Physical Systems
  - `section.work-mosaic[Selected work]`: Two-column project mosaic; each column has a section label and stacked project cards. Current text cue: Clinical Roleplay Simulator
    - `article.work-column`: One project column within the mosaic; lead with the section label, then cards. Current text cue: Clinical Roleplay Simulator
      - `a.work-card.blue-card.large-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: Clinical Roleplay Simulator
        - `h2`: Standalone heading anchoring the next content block. Current text cue: Clinical Roleplay Simulator
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: React TypeScript LLM OSCE Voice
      - `a.work-card.purple-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: mpathic
        - `h3`: Standalone heading anchoring the next content block. Current text cue: mpathic
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Clinical AI LLM Evaluation Human-in-the-Loop
      - `a.work-card.teal-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: AI Evidence Tools Study
        - `h3`: Standalone heading anchoring the next content block. Current text cue: AI Evidence Tools Study
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: HF795 AI Trust Perplexity
    - `article.work-column`: One project column within the mosaic; lead with the section label, then cards. Current text cue: HapTrek
      - `a.work-card.red-card.large-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: HapTrek
        - `h2`: Standalone heading anchoring the next content block. Current text cue: HapTrek
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Arduino C++ Haptics Field Testing
      - `a.work-card.orange-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: Glenoid Implant Patent
        - `h3`: Standalone heading anchoring the next content block. Current text cue: Glenoid Implant Patent
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Shoulder Arthroplasty Mechanical Testing 3D Printing
      - `a.work-card.blue-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: NATHAN Sports
        - `h3`: Standalone heading anchoring the next content block. Current text cue: NATHAN Sports
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Moderated Research Mobile UX Recommendations
  - `section.pi-systems`: Practice Intuition feature section with intro copy and related card grid. Current text cue: Learning is Unobstructed Self Expression.
    - `div.pi-grid`: Related Practice Intuition cards in a responsive grid. Current text cue: Practice Intuition
      - `a.work-card.purple-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: Practice Intuition
        - `h3`: Standalone heading anchoring the next content block. Current text cue: Practice Intuition
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: Design Think Tank Writing
      - `a.work-card.green-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: Bonita Intelligence System
        - `h3`: Standalone heading anchoring the next content block. Current text cue: Bonita Intelligence System
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: React Gemini Wellness AI
      - `a.work-card.red-card`: Clickable project card; kicker above heading, short paragraph, then optional chips. Current text cue: Applied Biomechanics Coaching
        - `h3`: Standalone heading anchoring the next content block. Current text cue: Applied Biomechanics Coaching
        - `div.chips`: Wrapped chip cluster with compact pill labels. Current text cue: NASM CPT Movement Coaching
  - `section.adjacent-grid[Additional experience]`: Compact grid of mini cards for adjacent experience. Current text cue: 2023-2024 CCnC / ChatEMT Healthcare AI product incubation, prompt design, RAG, caregiver workflows. 2023-2024 Full Stack + AWS React, TypeScript, Pyth...
    - `a.mini-card.purple`: Small linked experience card with date, bold title, and italic descriptor. Current text cue: 2023-2024 CCnC / ChatEMT Healthcare AI product incubation, prompt design, RAG, caregiver workflows.
    - `a.mini-card.green`: Small linked experience card with date, bold title, and italic descriptor. Current text cue: 2023-2024 Full Stack + AWS React, TypeScript, Python, Postgres, REST APIs, AWS Developer Associate.
    - `a.mini-card.red`: Small linked experience card with date, bold title, and italic descriptor. Current text cue: 2021-2022 EMT-B Patient care, emergency response, transport, closed-loop communication.
    - `a.mini-card.teal`: Small linked experience card with date, bold title, and italic descriptor. Current text cue: 2018 Praxik AR Internship Adobe XD, Xcode, Swift, ARKit, museum-learning prototype.
  - `section.identity-panel`: Full-width identity statement panel with large text and action buttons. Current text cue: Those experiences inform how I design systems for learning, trust, and adaptation.
    - `h2`: Standalone heading anchoring the next content block. Current text cue: Those experiences inform how I design systems for learning, trust, and adaptation.
- `footer.editorial-footer`: Footer row with Practice Intuition link and copyright text. Current text cue: Practice Intuition → Human Systems, Movement, and Embodied Design Shreyas Sriram © 2026

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `header.topbar`: Top navigation: brand mark left, primary links right, thin divider under the row.
2. For `main`: Main content wrapper; child sections define the visual layout.
3. For `footer.editorial-footer`: Footer row with Practice Intuition link and copyright text.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Shreyas Sriram | Clinical AI, Human Factors & Human Performance Systems
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `p.eyebrow`: Human-Centered Product Engineer
- `h1#home-title`: Shreyas Sriram
- `p.role-line`: Clinical AI x Human Factors · Systems Interaction Design · Biomechanics · AWS Certified Developer (DVA-C02)
- `p.hero-copy`: I design human centered systems for high-stakes embodied interactions. I engineer solutions where trust, safety, behavior, and outcomes matter.
- `a.credential-pill.blue-pill`: Clinical AI Evaluation
- `a.credential-pill.purple-pill`: Human-AI Parallels
- `a.credential-pill.red-pill`: Biomechanics Coaching
- `a.credential-pill.green-pill`: AWS Certified Developer
- `p.section-label`: Current Focus
- `h2#focus-title`: Human-centered systems for high-stakes interaction.
- `p`: Clinical communication, AI evaluation, full-stack prototyping, biomedical context, and movement coaching shape how I build products people can actually use.
- `span`: Problem
- `span`: Person
- `span`: Process
- `span`: Product
- `a`: in
- `a`: GH
- `a.focus-button`: Human-AI Parallels
- `span.icon-text`: Human-AI Parallels
- `a.chronology-item.orange`: 2019 BS Biomedical Engineering Biomechanics, biomaterials, NCAA D3 XC/TF.
- `span.timeline-year`: 2019
- `strong`: BS Biomedical Engineering
- `span`: Biomechanics, biomaterials, NCAA D3 XC/TF.
- `a.chronology-item.red`: 2020-2022 Patent + EMT Glenoid implant work, EMT field experience, patient care.
- `span.timeline-year`: 2020-2022
- `strong`: Patent + EMT
- `span`: Glenoid implant work, EMT field experience, patient care.
- `a.chronology-item.green`: 2023 Software + Cloud AWS Certified Developer, full-stack training, startup work.
- `span.timeline-year`: 2023
- `strong`: Software + Cloud
- `span`: AWS Certified Developer, full-stack training, startup work.
- `a.chronology-item.red`: 2024-2025 Movement + Coaching NASM CPT, swim instruction, Physical Therapy Clinic Exposure.
- `span.timeline-year`: 2024-2025
- `strong`: Movement + Coaching
- `span`: NASM CPT, swim instruction, Physical Therapy Clinic Exposure.
- `a.chronology-item.blue`: 2025 MS Human Factors UX research, usability testing, multimodal interaction.
- `span.timeline-year`: 2025
- `strong`: MS Human Factors
- `span`: UX research, usability testing, multimodal interaction.
- `a.chronology-item.purple`: 2026 Clinical AI Evaluation mpathic, LLM review, human-in-the-loop workflows.
- `span.timeline-year`: 2026
- `strong`: Clinical AI Evaluation
- `span`: mpathic, LLM review, human-in-the-loop workflows.
- `span`: Clinical + Digital Systems
- `span`: Embodied + Physical Systems
- `p.section-label`: Clinical AI
- `a.work-card.blue-card.large-card`: Project · 2025 Clinical Roleplay Simulator Built a React/TypeScript clinical communication simulator with LLM patient personas, voice interaction, and OSCE-style feedback. React TypeScript LLM OSCE Voice
- `span.card-kicker`: Project · 2025
- `h2`: Clinical Roleplay Simulator
- `p`: Built a React/TypeScript clinical communication simulator with LLM patient personas, voice interaction, and OSCE-style feedback.
- `span.chip.tech`: React
- `span.chip.tech`: TypeScript
- `span.chip.tech`: LLM
- `span.chip.tech`: OSCE
- `span.chip.tech`: Voice
- `a.work-card.purple-card`: Experience · 2026 mpathic Clinical AI evaluation for communication quality, empathy, safety, and appropriate response behavior. Clinical AI LLM Evaluation Human-in-the-Loop
- `span.card-kicker`: Experience · 2026
- `h3`: mpathic
- `p`: Clinical AI evaluation for communication quality, empathy, safety, and appropriate response behavior.
- `span.chip.ux`: Clinical AI
- `span.chip.ux`: LLM Evaluation
- `span.chip.ux`: Human-in-the-Loop
- `a.work-card.teal-card`: Research · 2025 AI Evidence Tools Study HF795 mixed-methods research comparing OpenEvidence, Consensus, and Perplexity for trust, comprehension, and evidence interpretation. HF795 AI Trust Perplexity
- `span.card-kicker`: Research · 2025
- `h3`: AI Evidence Tools Study
- `p`: HF795 mixed-methods research comparing OpenEvidence, Consensus, and Perplexity for trust, comprehension, and evidence interpretation.
- `span.chip.ux`: HF795
- `span.chip.ux`: AI Trust
- `span.chip.ux`: Perplexity
- `p.section-label`: Embodied Interface
- `a.work-card.red-card.large-card`: Project · 2025 HapTrek Prototyped a haptic outdoor navigation system with Arduino, accelerometer-based fall detection, and field testing. Arduino C++ Haptics Field Testing
- `span.card-kicker`: Project · 2025
- `h2`: HapTrek
- `p`: Prototyped a haptic outdoor navigation system with Arduino, accelerometer-based fall detection, and field testing.
- `span.chip.concept`: Arduino
- `span.chip.concept`: C++
- `span.chip.concept`: Haptics
- `span.chip.concept`: Field Testing
- `a.work-card.orange-card`: Patent · 2019-2022 Glenoid Implant Patent Co-invented a modular Glenoid implant for shoulder arthroplasty with mechanical testing on 3D-printed prototypes. Shoulder Arthroplasty Mechanical Testing 3D Printing
- `span.card-kicker`: Patent · 2019-2022
- `h3`: Glenoid Implant Patent
- `p`: Co-invented a modular Glenoid implant for shoulder arthroplasty with mechanical testing on 3D-printed prototypes.
- `span.chip.concept`: Shoulder Arthroplasty
- `span.chip.concept`: Mechanical Testing
- `span.chip.concept`: 3D Printing
- `a.work-card.blue-card`: Research · 2025 NATHAN Sports Led and conducted moderated usability research on mobile/web product discovery, navigation, conversion, and runner segments. Moderated Research Mobile UX Recommendations
- `span.card-kicker`: Research · 2025
- `h3`: NATHAN Sports
- `p`: Led and conducted moderated usability research on mobile/web product discovery, navigation, conversion, and runner segments.
- `span.chip.ux`: Moderated Research
- `span.chip.ux`: Mobile UX
- `span.chip.ux`: Recommendations
- `p.section-label`: Practice Intuition Systems
- `h2#pi-title`: Learning is Unobstructed Self Expression.
- `p`: Practice Intuition is where I build, coach, and write about adaptive human systems.
- `a.work-card.purple-card`: Founder · 2026 Practice Intuition A design think tank for adaptive human systems, embodied learning, and behavior-aware tools. Design Think Tank Writing
- `span.card-kicker`: Founder · 2026
- `h3`: Practice Intuition
- `p`: A design think tank for adaptive human systems, embodied learning, and behavior-aware tools.
- `span.chip.domain`: Design Think Tank
- `span.chip.domain`: Writing
- `a.work-card.green-card`: AI Wellness · 2026 Bonita Intelligence System AI wellness MVP with React + Gemini, structured TIME / SPACE / SELF triage, and explicit safety boundaries. React Gemini Wellness AI
- `span.card-kicker`: AI Wellness · 2026
- `h3`: Bonita Intelligence System
- `p`: AI wellness MVP with React + Gemini, structured TIME / SPACE / SELF triage, and explicit safety boundaries.
- `span.chip.tech`: React
- `span.chip.tech`: Gemini
- `span.chip.domain`: Wellness AI
- `a.work-card.red-card`: Coaching · 2024-Present Applied Biomechanics Coaching Movement assessment, strength progressions, and client education for pain-free movement and performance. NASM CPT Movement Coaching
- `span.card-kicker`: Coaching · 2024-Present
- `h3`: Applied Biomechanics Coaching
- `p`: Movement assessment, strength progressions, and client education for pain-free movement and performance.
- `span.chip.concept`: NASM CPT
- `span.chip.concept`: Movement Coaching
- `a.mini-card.purple`: 2023-2024 CCnC / ChatEMT Healthcare AI product incubation, prompt design, RAG, caregiver workflows.
- `span`: 2023-2024
- `strong`: CCnC / ChatEMT
- `em`: Healthcare AI product incubation, prompt design, RAG, caregiver workflows.
- `a.mini-card.green`: 2023-2024 Full Stack + AWS React, TypeScript, Python, Postgres, REST APIs, AWS Developer Associate.
- `span`: 2023-2024
- `strong`: Full Stack + AWS
- `em`: React, TypeScript, Python, Postgres, REST APIs, AWS Developer Associate.
- `a.mini-card.red`: 2021-2022 EMT-B Patient care, emergency response, transport, closed-loop communication.
- `span`: 2021-2022
- `strong`: EMT-B
- `em`: Patient care, emergency response, transport, closed-loop communication.
- `a.mini-card.teal`: 2018 Praxik AR Internship Adobe XD, Xcode, Swift, ARKit, museum-learning prototype.
- `span`: 2018
- `strong`: Praxik AR Internship
- `em`: Adobe XD, Xcode, Swift, ARKit, museum-learning prototype.
- `p.section-label`: EMT · Athlete · Patient Advocate · Coach · Engineer
- `h2`: Those experiences inform how I design systems for learning, trust, and adaptation.
- `a`: Experience
- `a`: Credentials
- `a`: Connect
- `a.quiet-link`: Practice Intuition → Human Systems, Movement, and Embodied Design
- `span`: Shreyas Sriram © 2026

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `./` |
| Education | `education/` |
| Experiences | `experiences/` |
| Expression | `expression/` |
| Connect | `connect/` |
| Clinical AI Evaluation | `clinical-ai/` |
| Human-AI Parallels | `human-ai-parallels/` |
| Biomechanics Coaching | `biomechanics/` |
| AWS Certified Developer | `education/` |
| in | `https://linkedin.com/in/shreyas-sriram` |
| GH | `https://github.com/codesbyshrey` |
| Human-AI Parallels | `human-ai-parallels/` |
| (icon/empty link) | `https://practiceintuition.substack.com` |
| 2019 BS Biomedical Engineering Biomechanics, biomaterials, NCAA D3 XC/TF. | `education/` |
| 2020-2022 Patent + EMT Glenoid implant work, EMT field experience, patient care. | `patent/` |
| 2023 Software + Cloud AWS Certified Developer, full-stack training, startup work. | `fullstack/` |
| 2024-2025 Movement + Coaching NASM CPT, swim instruction, Physical Therapy Clinic Exposure. | `biomechanics/` |
| 2025 MS Human Factors UX research, usability testing, multimodal interaction. | `education/` |
| 2026 Clinical AI Evaluation mpathic, LLM review, human-in-the-loop workflows. | `experiences/` |
| Project · 2025 Clinical Roleplay Simulator Built a React/TypeScript clinical communication simulator with LLM patient personas, voice interaction, and OSCE-style feedback. React TypeScript LLM OSCE Voice | `clinical-roleplay/` |
| Experience · 2026 mpathic Clinical AI evaluation for communication quality, empathy, safety, and appropriate response behavior. Clinical AI LLM Evaluation Human-in-the-Loop | `experiences/` |
| Research · 2025 AI Evidence Tools Study HF795 mixed-methods research comparing OpenEvidence, Consensus, and Perplexity for trust, comprehension, and evidence interpretation. HF795 AI Trust Perplexity | `experiences/` |
| Project · 2025 HapTrek Prototyped a haptic outdoor navigation system with Arduino, accelerometer-based fall detection, and field testing. Arduino C++ Haptics Field Testing | `haptrek/` |
| Patent · 2019-2022 Glenoid Implant Patent Co-invented a modular Glenoid implant for shoulder arthroplasty with mechanical testing on 3D-printed prototypes. Shoulder Arthroplasty Mechanical Testing 3D Printing | `patent/` |
| Research · 2025 NATHAN Sports Led and conducted moderated usability research on mobile/web product discovery, navigation, conversion, and runner segments. Moderated Research Mobile UX Recommendations | `nathan-sports/` |
| Founder · 2026 Practice Intuition A design think tank for adaptive human systems, embodied learning, and behavior-aware tools. Design Think Tank Writing | `expression/` |
| AI Wellness · 2026 Bonita Intelligence System AI wellness MVP with React + Gemini, structured TIME / SPACE / SELF triage, and explicit safety boundaries. React Gemini Wellness AI | `pi-bonita/` |
| Coaching · 2024-Present Applied Biomechanics Coaching Movement assessment, strength progressions, and client education for pain-free movement and performance. NASM CPT Movement Coaching | `biomechanics/` |
| 2023-2024 CCnC / ChatEMT Healthcare AI product incubation, prompt design, RAG, caregiver workflows. | `chatEMT/` |
| 2023-2024 Full Stack + AWS React, TypeScript, Python, Postgres, REST APIs, AWS Developer Associate. | `fullstack/` |
| 2021-2022 EMT-B Patient care, emergency response, transport, closed-loop communication. | `experiences/` |
| 2018 Praxik AR Internship Adobe XD, Xcode, Swift, ARKit, museum-learning prototype. | `praxik/` |
| Experience | `experiences/` |
| Credentials | `education/` |
| Connect | `connect/` |
| Practice Intuition → Human Systems, Movement, and Embodied Design | `https://practiceintuition.github.io` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
