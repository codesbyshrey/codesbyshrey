# Page Spec: The Architecture of Agency | Practice Intuition

This Markdown file is an editable reconstruction brief for Cursor/Codex. Edit the copy, comments, or layout notes here, then hand it back with instructions to update the matching HTML page.

## Source
- HTML file: `../codesbyshrey.github.io/architecture-of-agency/index.html`
- Route: `/architecture-of-agency/`
- Page title: `The Architecture of Agency | Practice Intuition`
- Meta description: `An ecological, biophysical, and systems-science synthesis of embodied cognition and human performance. Practice Intuition.`
- Body classes: `antialiased`
- Stylesheet(s): `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap`

## Global Visual System
- Use the `routes.css` dark editorial portfolio system: deep charcoal/blue background with soft radial color fields, cream text, muted secondary copy, Fraunces serif headlines, IBM Plex Sans body text, and IBM Plex Mono labels.
- Keep the page inside the centered `.shell` container, with generous bottom padding and a thin topbar divider.
- Preserve the current route hierarchy and link destinations unless an edit explicitly asks to change navigation.
- Panels should feel like translucent dark glass cards with subtle borders, 24px radius, and accent-specific border/glow colors.
- Chips are compact wrapped pills. Link cards are horizontal, clickable rows with a bold title and muted right-side descriptor.
- Maintain responsive behavior: multi-column layouts collapse cleanly to one column on small screens, without text overlap.

## Current Page Structure
1. `nav.fixed.top-0.left-0.w-full.bg-[#F9F8F6]/90.backdrop-blur-md.border-b.border-[#E2E8F0].z-50`
   - Layout instruction: Navigation object with compact links.
   - Contains/current text summary: Portfolio Practice Intuition Abstract The Strata Affordances Neurology Ontology
2. `header.pt-32.pb-20.px-6.max-w-4xl.mx-auto.text-center.fade-in`
   - Layout instruction: Structural container; preserve child order and current spacing.
   - Contains/current text summary: Process Philosophy The Architecture of Agency An Ecological, Biophysical, and Systems-Science Synthesis of Embodied Cognition and Human Performance. By Shreyas Sriram
3. `main.max-w-6xl.mx-auto.px-6.pb-24`
   - Layout instruction: Main content wrapper; child sections define the visual layout.
   - Contains/current text summary: The Disembodied Crisis Contemporary paradigms in human-computer interaction, engineering, and rehabilitation default to a centralized, brain-centric model. This treats humans as passive computers, creating a between biophysical discovery an...
4. `footer.bg-[#1A202C].text-white.py-8.text-center.text-sm`
   - Layout instruction: Footer object at the bottom of the page.
   - Contains/current text summary: Based on "The Architecture of Agency" by Shreyas Sriram. Practice Intuition. · Expression Connect

## Detailed Object Map
Use this map when commenting on arrangement. It follows the current DOM order and names the visible layout objects that should be preserved or intentionally changed.

- `nav.fixed.top-0.left-0.w-full.bg-[#F9F8F6]/90.backdrop-blur-md.border-b.border-[#E2E8F0].z-50`: Navigation object with compact links. Current text cue: Portfolio Practice Intuition Abstract The Strata Affordances Neurology Ontology
- `header.pt-32.pb-20.px-6.max-w-4xl.mx-auto.text-center.fade-in`: Structural container; preserve child order and current spacing. Current text cue: The Architecture of Agency
  - `h1.text-5xl.md:text-6xl.font-bold.leading-tight.mb-6.text-[#1A202C]`: Standalone heading anchoring the next content block. Current text cue: The Architecture of Agency
- `main.max-w-6xl.mx-auto.px-6.pb-24`: Main content wrapper; child sections define the visual layout. Current text cue: The Disembodied Crisis
  - `section.mb-24.fade-in#abstract`: Distinct vertical section in the route flow. Current text cue: The Disembodied Crisis
  - `section.mb-24.fade-in#strata`: Distinct vertical section in the route flow. Current text cue: The Tri-Stratum Model
  - `section.mb-24.fade-in#affordances`: Distinct vertical section in the route flow. Current text cue: The Cone of Plausibility
  - `section.mb-24.fade-in#neurology`: Distinct vertical section in the route flow. Current text cue: Neurological Realities: The Preattentive Spine
    - `div.grid.grid-cols-1.md:grid-cols-2.gap-8`: Responsive card/panel grid; preserve child order and the column count implied by classes. Current text cue: Cortical Pathway (Slow)
  - `section.mb-24.fade-in#ontology`: Distinct vertical section in the route flow. Current text cue: Ontological Grounding
  - `section.fade-in.text-center.max-w-4xl.mx-auto.py-12#conclusion`: Distinct vertical section in the route flow. Current text cue: Learning is Unobstructed Self-Expression.
    - `h2.text-3xl.md:text-5xl.font-bold.serif.leading-tight.text-[#2D3748].mb-6`: Standalone heading anchoring the next content block. Current text cue: Learning is Unobstructed Self-Expression.
- `footer.bg-[#1A202C].text-white.py-8.text-center.text-sm`: Footer object at the bottom of the page. Current text cue: Based on "The Architecture of Agency" by Shreyas Sriram. Practice Intuition.

## Verbal Reconstruction Prompt
Recreate this page as a static GitHub Pages HTML route using the existing `routes.css` design language. Start with the shared topbar, then arrange the sections in the exact order listed below. Preserve the current copy unless the Markdown edits say otherwise. Use semantic sections/articles/asides where appropriate, keep headings in the same hierarchy, and reuse the existing class names so the visual system remains consistent.

1. For `nav.fixed.top-0.left-0.w-full.bg-[#F9F8F6]/90.backdrop-blur-md.border-b.border-[#E2E8F0].z-50`: Navigation object with compact links.
2. For `header.pt-32.pb-20.px-6.max-w-4xl.mx-auto.text-center.fade-in`: Structural container; preserve child order and current spacing.
3. For `main.max-w-6xl.mx-auto.px-6.pb-24`: Main content wrapper; child sections define the visual layout.
4. For `footer.bg-[#1A202C].text-white.py-8.text-center.text-sm`: Footer object at the bottom of the page.

## Existing Text Inventory
Use this as the source of truth for visible page copy. If changing copy, edit these lines and mention whether the HTML should be updated exactly.

- `title`: The Architecture of Agency | Practice Intuition
- `a.shrink-0.text-xs.font-semibold.uppercase.tracking-widest.text-[#718096].hover:text-[#48BB78].transition-colors`: Portfolio
- `a.hover:text-[#48BB78].transition-colors`: Abstract
- `a.hover:text-[#48BB78].transition-colors`: The Strata
- `a.hover:text-[#48BB78].transition-colors`: Affordances
- `a.hover:text-[#48BB78].transition-colors`: Neurology
- `a.hover:text-[#48BB78].transition-colors`: Ontology
- `h1.text-5xl.md:text-6xl.font-bold.leading-tight.mb-6.text-[#1A202C]`: The Architecture of Agency
- `p.text-xl.text-[#4A5568].mb-8.font-light`: An Ecological, Biophysical, and Systems-Science Synthesis of Embodied Cognition and Human Performance.
- `h2.text-3xl.font-bold.serif.mb-6`: The Disembodied Crisis
- `p.text-lg.leading-relaxed.text-[#4A5568].mb-6`: Contemporary paradigms in human-computer interaction, engineering, and rehabilitation default to a centralized, brain-centric model. This treats humans as passive computers, creating a between biophysical discovery and clinical application. Information Processing System (IPS) 17-year implementation gap
- `strong`: Information Processing System (IPS)
- `strong`: 17-year implementation gap
- `p.text-lg.leading-relaxed.text-[#4A5568]`: This application interactiveizes the . We argue that agency is not a centralized cognitive calculation, but an emergent, self-organizing property of a distributed, tensegral body-brain-environment system. Architecture of Agency
- `strong`: Architecture of Agency
- `h2.text-4xl.font-bold.serif.mb-4`: The Tri-Stratum Model
- `p.text-[#4A5568]`: Human interaction with environments is organized across three parallel, horizontal strata. Select a layer below to explore the biophysical and cognitive dynamics.
- `button.tab-btn.w-full.text-left.px-6.py-5.rounded-xl.border.border-[#E2E8F0].bg-white.hover:bg-[#F0FFF4].transition-all.focus:outline-none.shadow-sm.font-semibold.text-lg.bg-[#48BB78].text-white`: Sense (Primal) Stratum 1 (Bottom-Up)
- `span.block.text-xs.uppercase.tracking-wider.mb-1.opacity-80`: Stratum 1 (Bottom-Up)
- `button.tab-btn.w-full.text-left.px-6.py-5.rounded-xl.border.border-[#E2E8F0].bg-white.hover:bg-[#F0FFF4].transition-all.focus:outline-none.shadow-sm.font-semibold.text-lg`: Act (Manifestation) Stratum 2 (Interface)
- `span.block.text-xs.uppercase.tracking-wider.mb-1.opacity-80`: Stratum 2 (Interface)
- `button.tab-btn.w-full.text-left.px-6.py-5.rounded-xl.border.border-[#E2E8F0].bg-white.hover:bg-[#F0FFF4].transition-all.focus:outline-none.shadow-sm.font-semibold.text-lg`: Think (Strategic) Stratum 3 (Top-Down)
- `span.block.text-xs.uppercase.tracking-wider.mb-1.opacity-80`: Stratum 3 (Top-Down)
- `h3.text-2xl.font-bold.serif.mb-2`: The Sense Stratum
- `p.text-sm.uppercase.tracking-widest.text-[#718096].mb-6`: Expanding the Horizon of Affordance
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Awareness ●
- `span.text-[#48BB78].mr-2`: ●
- `p.text-[#4A5568]`: The foundational signal. Mediated by the vagus nerve and somatosensory cortex. High Heart Rate Variability (HRV) reflects autonomic flexibility, allowing high-resolution environmental sampling.
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Perception ●
- `span.text-[#48BB78].mr-2`: ●
- `p.text-[#4A5568]`: The active inference map. Perception = Top-Down Prediction + Sensory Prediction Error. Translating biophysical inputs into relational meaning.
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Choices ●
- `span.text-[#48BB78].mr-2`: ●
- `p.text-[#4A5568]`: The generation of Gibsonian Affordances. The clarity of baseline awareness determines the breadth of your choice-landscape.
- `h3.text-2xl.font-bold.serif.mb-2`: The Act Stratum
- `p.text-sm.uppercase.tracking-widest.text-[#718096].mb-6`: Manifestation of Systemic Will
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Execution ●
- `span.text-[#4299E1].mr-2`: ●
- `p.text-[#4A5568]`: The systematic biomechanical rollout. Solving the degrees of freedom problem to coordinate motor units.
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Expression ●
- `span.text-[#4299E1].mr-2`: ●
- `p.text-[#4A5568]`: Governed by . Force is distributed throughout a continuous, pre-stressed network of bones and connective tissues, minimizing metabolic waste. Biotensegrity
- `strong`: Biotensegrity
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Action ●
- `span.text-[#4299E1].mr-2`: ●
- `p.text-[#4A5568]`: The ultimate ecological footprint. The physical intervention that alters the environment, generating new bottom-up sensory feedback.
- `h3.text-2xl.font-bold.serif.mb-2`: The Think Stratum
- `p.text-sm.uppercase.tracking-widest.text-[#718096].mb-6`: The Crucible of Accumulated Wisdom
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Decisions ●
- `span.text-[#ED8936].mr-2`: ●
- `p.text-[#4A5568]`: Strategic pruning of the affordance field. The initial assertion of conscious agency over environmental determinism.
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Intention ●
- `span.text-[#ED8936].mr-2`: ●
- `p.text-[#4A5568]`: The local vector toward coherence (Dharma). Organizing muscle synergies and autonomic tone prior to movement.
- `h4.font-bold.text-lg.mb-2.flex.items-center`: Attention ●
- `span.text-[#ED8936].mr-2`: ●
- `p.text-[#4A5568]`: Sensory gain modulation. Mathematically defined as the optimization of precision weighting of prediction errors. Dampens peripheral noise.
- `h2.text-3xl.font-bold.serif.mb-4`: The Cone of Plausibility
- `p.text-[#A0AEC0].text-lg`: An individual's affordances dictate their position within this cone. Organisms with restricted somatic capabilities are trapped in the predictable . By expanding somatic and cognitive affordances, the agent broadens the aperture, accessing the edges. Probable Zone Preferable
- `strong`: Probable Zone
- `strong`: Preferable
- `button.px-6.py-2.rounded-full.border.border-white/30.hover:bg-white/10.transition-colors.text-sm.tracking-wide.focus:bg-white.focus:text-[#2D3748]#btnRestricted`: Simulate Restricted System
- `button.px-6.py-2.rounded-full.border.border-[#48BB78].bg-[#48BB78]/20.hover:bg-[#48BB78].hover:text-white.transition-colors.text-sm.tracking-wide.text-[#48BB78]#btnExpanded`: Expand Affordances (Agency)
- `h2.text-3xl.font-bold.serif.mb-4`: Neurological Realities: The Preattentive Spine
- `p.text-[#4A5568]`: The dominant cognitive science paradigm assumes centralized, brain-centric control. However, rapid real-time dynamics (e.g., catching a ball) rely on distributed peripheral computing. The brain is too slow.
- `h3.text-xl.font-bold.mb-6`: Cortical Pathway (Slow)
- `span.w-6.h-6.rounded-full.bg-[#E2E8F0].flex.items-center.justify-center.mr-3.text-xs`: 1
- `span.w-6.h-6.rounded-full.bg-[#E2E8F0].flex.items-center.justify-center.mr-3.text-xs`: 2
- `span.w-6.h-6.rounded-full.bg-[#E2E8F0].flex.items-center.justify-center.mr-3.text-xs`: 3
- `span.w-6.h-6.rounded-full.bg-[#E2E8F0].flex.items-center.justify-center.mr-3.text-xs`: 4
- `h3.text-xl.font-bold.mb-6`: Spinal Pathway (Fast)
- `span.w-6.h-6.rounded-full.bg-[#C6F6D5].flex.items-center.justify-center.mr-3.text-xs.text-[#2F855A]`: 1
- `span.w-6.h-6.rounded-full.bg-[#C6F6D5].flex.items-center.justify-center.mr-3.text-xs.text-[#2F855A]`: 2
- `span.w-6.h-6.rounded-full.bg-[#C6F6D5].flex.items-center.justify-center.mr-3.text-xs.text-[#2F855A]`: 3
- `button.bg-[#2D3748].text-white.px-8.py-3.rounded-xl.hover:bg-[#1A202C].transition-colors.font-medium#btnRunSim`: Run Temporal Simulation
- `h2.text-4xl.font-bold.serif.mb-4.text-[#2D3748]`: Ontological Grounding
- `p.text-[#4A5568]`: Bridging Eastern process philosophies with Western biophysics. All psychology is ultimately pervaded physiology. Hover to explore.
- `h3.text-2xl.font-bold.serif.text-[#2D3748]`: Fascia as Karma
- `p.text-sm.uppercase.tracking-widest.text-[#A0AEC0].mt-2`: The Topology of Strain
- `h4.text-xl.font-bold.mb-4.border-b.border-white/20.pb-2`: Stored Mechanical Strain
- `p.text-sm.leading-relaxed.mb-4`: Blood, lymph, and interstitial fluid are non-Newtonian. Under trauma or psychological stress, fascial networks remodel. Fibroblasts lay disorganized collagen, restricting tissue sliding.
- `h3.text-2xl.font-bold.serif.text-[#2D3748]`: Bones as Dharma
- `p.text-sm.uppercase.tracking-widest.text-[#A0AEC0].mt-2`: The Vector of Coherence
- `h4.text-xl.font-bold.mb-4.border-b.border-[#48BB78]/30.pb-2`: Optimal Alignment Vector
- `p.text-sm.leading-relaxed.text-[#276749]`: Bones are compression struts. Aligned framework uses gravity as an organizing principle via —mechanical loading generates currents stimulating osteoblasts, nourishing marrow. piezoelectricity
- `strong`: piezoelectricity
- `h2.text-3xl.md:text-5xl.font-bold.serif.leading-tight.text-[#2D3748].mb-6`: Learning is Unobstructed Self-Expression.
- `p.text-xl.text-[#4A5568].font-light.max-w-2xl.mx-auto.mb-10`: It is the systematic removal of internal noise that prevents the mind from expressing its true nature through the interface of the body-brain.
- `p.text-lg.font-medium.text-[#2D3748].uppercase.tracking-widest`: You practice. The intuition emerges.
- `p.text-[#A0AEC0]`: Based on "The Architecture of Agency" by Shreyas Sriram. Practice Intuition.
- `p.mt-2`: · Expression Connect
- `a.text-[#68D391].hover:underline`: Expression
- `a.text-[#68D391].hover:underline`: Connect

## Script-Defined or Template Text
These strings appear inside page scripts/templates and may be rendered dynamically or used as UI labels. Review before changing interactive pages.

- DOMContentLoaded
- .fade-in
- visible
- .tab-btn
- .tab-content
- data-active
- false
- bg-[#48BB78]
- text-white
- active
- true
- data-target
- click
- .tab-btn[data-target="sense-tab"]
- btnRunSim
- corticalBar
- spinalBar
- none
- width 3s linear
- width 0.15s linear
- 100%
- coneChart
- Possible (Edges)
- rgba(255, 255, 255, 0.05)
- rgba(255, 255, 255, 0.2)
- Possible Lower
- rgba(255,255,255,0)
- Plausible
- rgba(72, 187, 120, 0.1)
- rgba(72, 187, 120, 0.3)
- Plausible Lower
- Probable (Consensus)
- rgba(66, 153, 225, 0.3)
- rgba(66, 153, 225, 0.8)
- Probable Lower
- line
- easeOutQuart
- rgba(255, 255, 255, 0.7)
- Lower
- Time →
- rgba(255, 255, 255, 0.5)
- Affordance / Possibility Space
- btnRestricted
- bg-white
- text-[#2D3748]
- btnExpanded

## Links and CTAs
| Label | Destination |
|---|---|
| Portfolio | `../` |
| Abstract | `#abstract` |
| The Strata | `#strata` |
| Affordances | `#affordances` |
| Neurology | `#neurology` |
| Ontology | `#ontology` |
| Expression | `../expression/` |
| Connect | `../connect/` |

## Edit Notes
- Add comments below any item you want changed.
- For copy edits, replace the text directly in the inventory above.
- For layout edits, describe the desired arrangement under the relevant structure item or reconstruction prompt step.
- For new sections, specify placement relative to the numbered structure list.
