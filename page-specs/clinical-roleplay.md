# Page Spec: Clinical Roleplay Simulator | Shreyas Sriram

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/clinical-roleplay/index.html`
- Route: `/clinical-roleplay/`
- Page title: `Clinical Roleplay Simulator | Shreyas Sriram`

## Global Visual System
- Use the `routes.css` dark editorial portfolio system: deep charcoal/blue background with soft radial color fields, cream text, muted secondary copy, Fraunces serif headlines, IBM Plex Sans body text, and IBM Plex Mono labels.
- Keep the page inside the centered `.shell` container, with generous bottom padding and a thin topbar divider.
- Preserve the current route hierarchy and link destinations unless an edit explicitly asks to change navigation.
- Panels should feel like translucent dark glass cards with subtle borders, 24px radius, and accent-specific border/glow colors.
- Chips are compact wrapped pills. Link cards are horizontal, clickable rows with a bold title and muted right-side descriptor.
- Maintain responsive behavior: multi-column layouts collapse cleanly to one column on small screens, without text overlap.

## Current Page Structure
1. `header.sitebar`
   - Layout instruction: Structural container; preserve child order and current spacing.
   - Contains/current text summary: Codes by Shrey Education Experiences Expression Connect
2. `div.hero`
   - Layout instruction: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
   - Contains/current text summary: Clinical Roleplay · National Board of Medical Examiners · 2025 Designing a Clinical Simulation Roleplay System for Patient-Centered Communication A behavioral simulation system for practicing clinical conversations, surfacing communication ...
3. `section.glance-band`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: At a Glance Role Lead Product Engineer Owned the MVP loop across product, UX, architecture, and clinician testing. Product Clinical roleplay simulator LLM patient personas, voice/text encounters, and OSCE-style feedback. Methods User testin...
4. `section#problem`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 01 — The Problem Communication fails in the interaction, not the knowledge In clinical environments, providers are trained to diagnose. They are not consistently trained to be present, explain uncertainty, preserve autonomy, or notice when ...
5. `section#product`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 02 — The System Not a chatbot. A behavioral simulation. "The goal was not simply to simulate a patient. It was to create a structured environment where communication patterns could become visible, discussable, and improvable." The Clinical ...
6. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 03 — My Role Across product, research, design, and engineering Worked within a small team, where I led system design and built the full functional prototype — driving evaluation and iteration across all four domains. Decisions in each domai...
7. `section#architecture`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 04 — System Architecture Three independent states — separation by design The system struggled to produce consistent value until this architecture was introduced — state separation wasn't a refinement, it was a prerequisite. Scenario Generat...
8. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 05 — Behavioral Model Behavior as position, not personality Each of the 6 patient personas is defined by two governing variables: emotional state and cooperation level (a continuous 0–1 scale). These aren't decorative traits — they actively...
9. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 06 — Key System Challenge The LLM's helpfulness is a design vulnerability In early testing, without state separation, the model defaulted to its trained behavior — resolution, helpfulness, clarification. After a predictable number of conver...
10. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 07 — Core Design Tradeoff Realism vs. Evaluability Realism Infinite variation · unpredictable · inconsistent scoring ⚖ Evaluability Controlled variation · consistent feedback · scalable → We chose evaluability as the constraint · realism as...
11. `section#evaluation`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 08 — Evaluation Engine Three layers, one hierarchy Clinical competency functions as a hard constraint — it supersedes all communication scoring. A misdiagnosis costs a life. Poor communication costs trust, adherence, disclosure, and shared ...
12. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 09 — Feedback System Three perspectives per session Most evaluation systems produce a rubric score or highlight specific errors. This system produces feedback from three distinct analytical positions — each one addressing a different kind o...
13. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 10 — Agent Reflections What the faux patient and evaluator surfaced After the system had played both standardized patient and conversational evaluator, I asked it to reflect on what it had learned. The output became a useful qualitative art...
14. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 11 — Competency Model Turning reflection into an assessment artifact The reflections pointed toward a more mature product artifact: a shared language for what "good communication" actually means in a simulated encounter. The model below tra...
15. `section#outcome`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 12 — Outcome What changed 15 Clinicians Tested ↑ Realism After Redesign 3× Feedback Perspectives ↑ Question Quality Shift Before Feedback risked feeling personal, vague, or detached from the moment-by-moment dialogue. → After Feedback becam...
16. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: Most healthcare AI systems optimize for correctness. This system optimizes for — because what we assess is what we become. evaluability Controlled variation · shared language · feedback loops · behavioral focus
17. `section#roadmap`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 14 — Process + Progress From research gap to evaluable training system The project matured through a professional product loop: domain research, architecture decisions, prototype delivery, clinician testing, and a roadmap for longitudinal s...
18. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 15 — Technical Skills Demonstrated AI product architecture, not chatbot assembly LLM Orchestration Scenario generation Persona state control Evaluator isolation Context-window management Evaluation Design OSCE-style feedback Motivational in...
19. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 16 — What's Next Where the ceiling is The MVP proved the training loop. The next ceiling is longitudinal: making communication growth visible across sessions, personas, and transitions from student to resident to physician. 01 · Progress Pr...
20. `section`
   - Layout instruction: Distinct vertical section in the route flow.
   - Contains/current text summary: 17 — Close What was proven, what remains Proven The training loop works Clinicians can rehearse communication behaviors with AI patient personas and receive transcript-specific feedback. Remaining Longitudinal growth Profiles, saved evaluat...

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `header.sitebar`: Structural container; preserve child order and current spacing. Current text cue: Codes by Shrey Education Experiences Expression Connect
  - `nav.links[Primary]`: Navigation object with compact links. Current text cue: Education Experiences Expression Connect
- `div.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column. Current text cue: Designing a Clinical Simulation Roleplay System for Patient-Centered Communication
- `section.glance-band`: Distinct vertical section in the route flow. Current text cue: At a Glance Role Lead Product Engineer Owned the MVP loop across product, UX, architecture, and clinician testing. Product Clinical roleplay simulator...
- `section#problem`: Distinct vertical section in the route flow. Current text cue: Communication fails in the interaction, not the knowledge
- `section#product`: Distinct vertical section in the route flow. Current text cue: Not a chatbot. A behavioral simulation.
- `section`: Distinct vertical section in the route flow. Current text cue: Across product, research, design, and engineering
- `section#architecture`: Distinct vertical section in the route flow. Current text cue: Three independent states — separation by design
- `section`: Distinct vertical section in the route flow. Current text cue: Behavior as position, not personality
- `section`: Distinct vertical section in the route flow. Current text cue: The LLM's helpfulness is a design vulnerability
- `section`: Distinct vertical section in the route flow. Current text cue: Realism vs. Evaluability
- `section#evaluation`: Distinct vertical section in the route flow. Current text cue: Three layers, one hierarchy
- `section`: Distinct vertical section in the route flow. Current text cue: Three perspectives per session
- `section`: Distinct vertical section in the route flow. Current text cue: What the faux patient and evaluator surfaced
- `section`: Distinct vertical section in the route flow. Current text cue: Turning reflection into an assessment artifact
- `section#outcome`: Distinct vertical section in the route flow. Current text cue: What changed
- `section`: Distinct vertical section in the route flow. Current text cue: Most healthcare AI systems optimize for correctness. This system optimizes for — because what we assess is what we become. evaluability Controlled var...
- `section#roadmap`: Distinct vertical section in the route flow. Current text cue: From research gap to evaluable training system
- `section`: Distinct vertical section in the route flow. Current text cue: AI product architecture, not chatbot assembly
- `section`: Distinct vertical section in the route flow. Current text cue: Where the ceiling is
- `section`: Distinct vertical section in the route flow. Current text cue: What was proven, what remains

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `header.sitebar`: Structural container; preserve child order and current spacing.
2. For `div.hero`: Two-column hero grid: primary copy left, support panel/object right; responsive collapse to one column.
3. For `section.glance-band`: Distinct vertical section in the route flow.
4. For `section#problem`: Distinct vertical section in the route flow.
5. For `section#product`: Distinct vertical section in the route flow.
6. For `section`: Distinct vertical section in the route flow.
7. For `section#architecture`: Distinct vertical section in the route flow.
8. For `section`: Distinct vertical section in the route flow.
9. For `section`: Distinct vertical section in the route flow.
10. For `section`: Distinct vertical section in the route flow.
11. For `section#evaluation`: Distinct vertical section in the route flow.
12. For `section`: Distinct vertical section in the route flow.
13. For `section`: Distinct vertical section in the route flow.
14. For `section`: Distinct vertical section in the route flow.
15. For `section#outcome`: Distinct vertical section in the route flow.
16. For `section`: Distinct vertical section in the route flow.
17. For `section#roadmap`: Distinct vertical section in the route flow.
18. For `section`: Distinct vertical section in the route flow.
19. For `section`: Distinct vertical section in the route flow.
20. For `section`: Distinct vertical section in the route flow.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: Clinical Roleplay Simulator | Shreyas Sriram
- `a.mark`: Codes by Shrey
- `a`: Education
- `a`: Experiences
- `a`: Expression
- `a`: Connect
- `h1.hero-title.reveal.d1`: Designing a Clinical Simulation Roleplay System for Patient-Centered Communication
- `span.ac`: for Patient-Centered Communication
- `p.hero-sub.reveal.d2`: A behavioral simulation system for practicing clinical conversations, surfacing communication patterns, and making patient-centered competence observable.
- `em`: observable clinical behavior under constraint
- `span.chip.domain`: Clinical AI
- `span.chip.concept`: OSCE Simulation
- `span.chip.domain`: Human Factors
- `span.chip.ux`: Assessment Design
- `span.chip.concept`: Motivational Interviewing
- `a.hero-btn.primary`: Clinical Roleplay
- `a.hero-btn`: Clinical Roleplay PRD
- `a.hero-btn`: PRD v1
- `a`: 01 Problem
- `span.map-num`: 01
- `span.map-title`: Problem
- `a`: 02 Product
- `span.map-num`: 02
- `span.map-title`: Product
- `a`: 03 Architecture
- `span.map-num`: 03
- `span.map-title`: Architecture
- `a`: 04 Evaluation
- `span.map-num`: 04
- `span.map-title`: Evaluation
- `a`: 05 Outcome
- `span.map-num`: 05
- `span.map-title`: Outcome
- `a`: 06 Roadmap
- `span.map-num`: 06
- `span.map-title`: Roadmap
- `h2`: Communication fails in the interaction, not the knowledge
- `p`: In clinical environments, providers are trained to diagnose. They are not consistently trained to be present, explain uncertainty, preserve autonomy, or notice when the patient has stopped following the conversation. Discharge paperwork can be clinically correct but functionally unreadable for elderly patients or those with low health literacy. Providers discuss patients in front of patients. Emotional cues pass without acknowledgment.
- `p`: This gap became clear through my experience as an EMT, where effective care often depended less on diagnosis and more on how information was communicated in high-stress, low-context situations.
- `p`: Clinical training often focuses on what not to say — for liability. It does not always train how to adapt communication in real time, navigate emotional resistance, or balance information extraction with empathetic presence.
- `h2`: Not a chatbot. A behavioral simulation.
- `p`: The Clinical Roleplay Simulator gives clinicians a space to practice — without standardized patients, without scheduling overhead, and with evaluation specific enough to change behavior rather than just score it.
- `p`: Three goals drove the system design: simulate real interactions with enough fidelity that communication habits form, evaluate both clinical and communication performance independently, and generate feedback that surfaces patterns the clinician can actually act on.
- `p`: From a human factors perspective, communication failure is not simply a deficit in individual empathy. It is often a predictable output of systems that reward speed, certainty, and throughput over understanding, trust, and reflection.
- `h2`: Across product, research, design, and engineering
- `p`: Worked within a small team, where I led system design and built the full functional prototype — driving evaluation and iteration across all four domains.
- `p`: Decisions in each domain were sequential: research findings drove product decisions, which drove architecture choices.
- `h2`: Three independent states — separation by design
- `strong`: Scenario Generator
- `span`: Clinical prompt, task frame, OSCE-style requirements.
- `strong`: Patient Persona State
- `span`: Emotion, cooperation score, disclosure behavior, voice tone.
- `strong`: Conversation State
- `span`: Turns, transcript, visible patient-clinician exchange.
- `strong`: Evaluator State
- `span`: Rubric, criteria, post-session scoring, feedback generation.
- `strong`: No Cross-Access
- `span`: The patient never sees the evaluator rubric; the evaluator never steers the patient.
- `h3`: Why separation was non-negotiable
- `p`: In early testing, when patient and evaluator states shared context, the LLM's alignment training caused it to drift toward helpfulness. Within a predictable number of turns, the patient persona began responding like a clinician — mirroring the very user it was meant to challenge.
- `p`: Full state isolation prevented evaluation context from leaking into patient behavior. If the patient had access to the evaluation rubric, it would effectively guide the clinician through the test.
- `p`: This required careful prompt structuring, context control, and retrieval design to ensure each state behaved independently while maintaining conversational coherence.
- `h3`: Scenario independence
- `p`: Scenarios and personas are generated independently — the same clinical presentation behaves differently across an anxious patient versus a blunt, uncooperative one. This creates healthy dialogue diversity without sacrificing evaluation consistency.
- `h2`: Behavior as position, not personality
- `p`: Each of the 6 patient personas is defined by two governing variables: emotional state and cooperation level (a continuous 0–1 scale). These aren't decorative traits — they actively control how much information is shared, how responses are structured, and how the conversation evolves based on clinician behavior.
- `p`: A cooperation score near 0 doesn't mean the session is impossible. It means the clinician's communication quality is the only variable that can unlock the information needed for diagnosis.
- `p`: Emotional variables: anxious, fearful, annoyed, frustrated, demotivated, blunt. These expressed through tone in the STT/TTS layer — behavioral realism in voice, not just text.
- `span`: HIGH COOPERATION
- `span`: LOW COOPERATION
- `span`: CALM
- `span`: DISTRESSED
- `span`: cooperative
- `span`: resistant
- `span`: ambivalent
- `h2`: The LLM's helpfulness is a design vulnerability
- `p`: In early testing, without state separation, the model defaulted to its trained behavior — resolution, helpfulness, clarification. After a predictable number of conversational turns, it stopped being the patient.
- `span.arr`: →
- `span`: Patient accumulates evaluator context
- `span.arr`: →
- `span`: Model optimizes toward helpful resolution
- `span.hr`: helpful resolution
- `span.arr`: →
- `span`: Patient begins advising the clinician
- `span.hr`: advising the clinician
- `span.arr`: →
- `span.hr`: Patient persona becomes the clinician
- `span.arr`: →
- `span`: Simulation collapses — session invalid
- `span.arr`: →
- `span`: Patient receives question
- `span.arr`: →
- `span`: Patient responds within persona
- `span.ht`: within persona
- `span.arr`: →
- `span`: Clinician adapts to resistance or emotion
- `span.arr`: →
- `span`: Evaluator assesses dialogue independently
- `span.arr`: →
- `span.ht`: Role fidelity maintained throughout
- `h2`: Realism vs. Evaluability
- `p.reveal.d2`: More realism doesn't equal a better training system. If everything varies, evaluation becomes inconsistent and feedback loses meaning. 6 personas, OSCE-grounded scenarios, and tight guardrails meant every session produced evaluable output — and the system could scale without the feedback degrading.
- `h2`: Three layers, one hierarchy
- `p`: Clinical competency functions as a hard constraint — it supersedes all communication scoring. A misdiagnosis costs a life. Poor communication costs trust, adherence, disclosure, and shared decision-making. The hierarchy was intentional from the start.
- `h2`: Three perspectives per session
- `p`: Most evaluation systems produce a rubric score or highlight specific errors. This system produces feedback from three distinct analytical positions — each one addressing a different kind of learning and turning abstract professionalism into language a learner can practice against.
- `h2`: What the faux patient and evaluator surfaced
- `p.section-intro`: After the system had played both standardized patient and conversational evaluator, I asked it to reflect on what it had learned. The output became a useful qualitative artifact: it named the latent dimensions the simulator was already trying to assess.
- `h2`: Turning reflection into an assessment artifact
- `p.section-intro`: The reflections pointed toward a more mature product artifact: a shared language for what "good communication" actually means in a simulated encounter. The model below translates values into observable behaviors and failure modes.
- `h2`: What changed
- `strong`: Before
- `span`: Feedback risked feeling personal, vague, or detached from the moment-by-moment dialogue.
- `strong`: After
- `span`: Feedback became specific, actionable, and tied to observable communication behavior in the transcript.
- `strong.primary-shift-label`: Primary shift observed
- `em`: evaluability
- `h2`: From research gap to evaluable training system
- `p.section-intro`: The project matured through a professional product loop: domain research, architecture decisions, prototype delivery, clinician testing, and a roadmap for longitudinal skill growth.
- `h2`: AI product architecture, not chatbot assembly
- `h2`: Where the ceiling is
- `p.section-intro`: The MVP proved the training loop. The next ceiling is longitudinal: making communication growth visible across sessions, personas, and transitions from student to resident to physician.
- `h2`: What was proven, what remains
- `a.hero-btn.primary`: PRD
- `a.hero-btn`: PRD v1
- `a.hero-btn`: Connect
- `a.hero-btn`: Experience
- `a.flink`: Email
- `a.flink`: LinkedIn
- `a.flink`: Portfolio

## Script-Defined or Template Text
These strings appear inside page scripts/templates and may be rendered dynamically or used as UI labels. Review before changing interactive pages.

- visible
- 0px 0px -30px 0px
- .reveal

## Links and CTAs
| Label | Destination |
|---|---|
| Codes by Shrey | `../` |
| Education | `../education/` |
| Experiences | `../experiences/` |
| Expression | `../expression/` |
| Connect | `../connect/` |
| Clinical Roleplay | `../clinical-roleplay/` |
| Clinical Roleplay PRD | `../clinical-roleplay-PRD/` |
| PRD v1 | `../clinical-roleplay-prdv1/` |
| 01 Problem | `#problem` |
| 02 Product | `#product` |
| 03 Architecture | `#architecture` |
| 04 Evaluation | `#evaluation` |
| 05 Outcome | `#outcome` |
| 06 Roadmap | `#roadmap` |
| PRD | `../clinical-roleplay-PRD/` |
| PRD v1 | `../clinical-roleplay-prdv1/` |
| Connect | `../connect/` |
| Experience | `../experiences/` |
| Email | `mailto:shreyassriram3@gmail.com` |
| LinkedIn | `https://linkedin.com/in/shreyas-sriram` |
| Portfolio | `https://codesbyshrey.github.io` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
