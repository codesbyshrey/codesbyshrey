import React, { useState, useEffect } from 'react';
import {
  Brain,
  Cpu,
  Layers,
  Target,
  Waves,
  Eye,
  Activity,
  Scale,
  ChevronRight,
  Terminal,
  Box,
  Move,
  ArrowUpCircle,
  ArrowDownCircle,
  Infinity as InfinityIcon,
  Search,
  Network,
  Bot,
  Compass,
} from 'lucide-react';

// --- Reusable UI Components ---

const SectionHeader = ({ title, subtitle, icon: Icon, colorClass, id }) => (
  <div className="mb-24 scroll-mt-32" id={id}>
    <div className={`inline-flex items-center justify-center p-5 rounded-3xl ${colorClass} bg-opacity-10 mb-8 border border-${colorClass.split('-')[1]}-500/20`}>
      <Icon className={`w-12 h-12 ${colorClass.replace('bg-', 'text-')}`} />
    </div>
    <h2 className="text-5xl md:text-7xl font-semibold font-serif mb-8 text-white tracking-tight leading-[1.1]">{title}</h2>
    <p className="text-2xl md:text-3xl text-zinc-400 max-w-4xl leading-relaxed font-light">{subtitle}</p>
  </div>
);

const MatrixRow = ({ level, human, ai, humanDesc, aiDesc, colorClass }) => (
  <div className="grid md:grid-cols-12 gap-8 p-10 rounded-[32px] border border-zinc-800/60 bg-[#0a0c14] items-center hover:bg-[#0e111a] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
    <div className="md:col-span-1 flex justify-center">
      <span className={`text-6xl font-serif italic opacity-30 ${colorClass}`}>{level}</span>
    </div>
    <div className="md:col-span-5 space-y-4">
      <h4 className={`text-2xl font-semibold ${colorClass}`}>{human}</h4>
      <p className="text-zinc-400 text-lg leading-relaxed">{humanDesc}</p>
    </div>
    <div className="hidden md:flex md:col-span-1 justify-center">
      <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-[#07090f]">
        <ChevronRight className="text-zinc-600 w-5 h-5" />
      </div>
    </div>
    <div className="md:col-span-5 space-y-4">
      <h4 className={`text-2xl font-semibold ${colorClass}`}>{ai}</h4>
      <p className="text-zinc-400 text-lg leading-relaxed">{aiDesc}</p>
    </div>
  </div>
);

const DeepDiveText = ({ children }) => (
  <div className="text-xl md:text-2xl text-zinc-400 leading-[1.8] font-light space-y-8 max-w-4xl">
    {children}
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'premise',
        'scaling',
        'parallels',
        'turing',
        'world-models',
        'agency',
        'platonic',
        'embodied',
      ];
      const scrollPos = window.scrollY + 400;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveNav(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'The Convergence' },
    { id: 'premise', label: 'Aggregation vs Integration' },
    { id: 'scaling', label: 'Scaling & Senses' },
    { id: 'parallels', label: 'The 5 Parallels' },
    { id: 'turing', label: 'Conscious Turing Machine' },
    { id: 'world-models', label: 'Inner World Models' },
    { id: 'agency', label: 'Multi-Scale Agency' },
    { id: 'platonic', label: 'Platonic Intelligence' },
    { id: 'embodied', label: 'Embodied Robotics' },
  ];

  return (
    <div className="bg-[#040508] text-[#e6e1d8] font-sans selection:bg-teal-500/30 overflow-x-hidden min-h-screen">
      {/* Scroll Progress & Sticky Nav */}
      <nav className="fixed left-12 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col gap-6 z-50">
        <div className="absolute left-[5px] top-4 bottom-4 w-px bg-zinc-900 -z-10" />
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-6 outline-none py-2"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-500 border-2
              ${activeNav === item.id
                ? 'bg-teal-400 border-teal-400 scale-[1.5] shadow-[0_0_15px_rgba(45,212,191,0.6)]'
                : 'bg-[#040508] border-zinc-700 group-hover:border-zinc-500'}`}
            />
            <span className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 whitespace-nowrap
              ${activeNav === item.id
                ? 'opacity-100 translate-x-0 text-teal-400'
                : 'opacity-0 -translate-x-4 text-zinc-600 group-hover:opacity-70 group-hover:translate-x-0'}`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative border-b border-zinc-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(20,40,60,0.3)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-6xl w-full text-center relative z-10 space-y-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/80 text-teal-400 text-sm font-bold uppercase tracking-[0.4em] shadow-2xl backdrop-blur-sm animate-fade-in">
            <Network className="w-4 h-4" /> The Grand Synthesis
          </div>

          <h1 className="text-7xl md:text-[140px] font-serif font-semibold leading-[0.85] tracking-tighter">
            Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-teal-300 italic pr-8">Convergence</span>
          </h1>

          <p className="text-2xl md:text-4xl text-zinc-400 font-light max-w-4xl mx-auto leading-relaxed">
            Carbon and Silicon are solving the exact same architectural problems. <br className="hidden md:block" />
            <span className="text-white font-normal relative inline-block mt-4">
              Structural biomimicry of the mind.
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            </span>
          </p>
        </div>

        <div className="absolute bottom-16 flex flex-col items-center gap-4 opacity-50">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-500">Descend into the Architecture</span>
          <Waves className="w-6 h-6 animate-pulse text-teal-500" />
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-40 space-y-48 relative">
        {/* 2. Aggregation vs Integration */}
        <section id="premise" className="space-y-16 scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-block p-4 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Scale className="w-8 h-8" />
              </div>
              <h2 className="text-6xl font-serif text-white leading-[1.1] tracking-tight">Aggregation vs. <br /><span className="italic text-amber-200">Integration</span></h2>
              <DeepDiveText>
                <p>
                  We spend a massive amount of time asking whether AI will become "human-like." But the profound revelation is that intelligence—biological or artificial—converges on the exact same core problems because it is fundamentally an information processing system bound by physics.
                </p>
                <p>
                  Any intelligent system must make sense of noisy inputs, organize patterns, hold and manipulate context, retrieve knowledge across time, and act toward goals.
                </p>
                <p className="text-white font-medium text-3xl font-serif italic border-l-4 border-teal-500 pl-8 my-12">
                  "AI builds intelligence through aggregation. Humans develop intelligence through integration."
                </p>
                <p>
                  <strong className="text-teal-300">Aggregation is AI.</strong> We assemble capabilities as modular layers: a language model for reasoning, a vector database for memory, a Python interpreter for tools, an orchestration wrapper for agency. They are joined by code.
                </p>
                <p>
                  <strong className="text-amber-300">Integration is Consciousness.</strong> We develop those exact same functional layers over time, through a biological body, under severe physical constraints. Bioelectric fields and homeostatic biofeedback loops bind everything together. It is not just joined; it is unified by a "cognitive glue."
                </p>
              </DeepDiveText>
            </div>

            <div className="bg-[#0a0c14] rounded-[60px] p-16 border border-zinc-800 flex flex-col justify-center gap-12 shadow-2xl relative group overflow-hidden">
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-teal-500/10 blur-[120px] group-hover:bg-teal-500/20 transition-all duration-1000" />

              <div className="space-y-4 border-b border-zinc-800/80 pb-10">
                <div className="flex justify-between items-center">
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-bold">Artificial Architecture</div>
                  <Cpu className="text-zinc-600" />
                </div>
                <div className="text-5xl font-serif italic text-teal-400">Aggregation</div>
                <p className="text-zinc-400 text-lg">Assembling modular intelligence layers via APIs and protocols.</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-bold">Biological Architecture</div>
                  <Brain className="text-zinc-600" />
                </div>
                <div className="text-5xl font-serif italic text-amber-400">Integration</div>
                <p className="text-zinc-400 text-lg">Unifying evolutionary intelligence layers via bioelectricity and physical constraint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scaling Laws & The Birth of Senses */}
        <section id="scaling" className="space-y-20 scroll-mt-32">
          <SectionHeader
            title="Scaling Laws & The Birth of Senses"
            subtitle="Intelligence requires massive accumulated experience to build the filters necessary to discern signal from noise."
            icon={Search}
            colorClass="bg-amber-500"
          />

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <DeepDiveText>
                <p>
                  Before complex cognition can occur, an intelligence must be able to filter the world.
                </p>
                <p>
                  <strong className="text-white">Richard Sutton’s "Bitter Lesson"</strong> posits that general methods (computation, search, and learning) that scale with increased compute will inevitably outperform hand-crafted human logic. We cannot manually program an AI to recognize a cat; we must let it accumulate massive amounts of experiential data until it derives the patterns itself.
                </p>
                <p>
                  This perfectly mirrors biological evolution. Our "senses" are the ultimate result of biological scaling laws. Over millions of years of open-ended learning, our retinas developed difference detectors (rods and cones) and Gabor-filter-like neural tunings. We didn't "program" our eyes; evolution scaled survival experiences until the optimal filters emerged.
                </p>
                <p>
                  AI relies on <span className="text-teal-300 italic">protocoled learning</span> (massive datasets, epochs, backpropagation). Humans rely on <span className="text-amber-300 italic">open-ended ecological learning</span>. But both require immense accumulation of experience to birth the very concept of a "sense."
                </p>
              </DeepDiveText>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="sticky top-40 bg-[#0a0c14] border border-amber-500/20 p-12 rounded-[40px] shadow-2xl">
                <div className="text-amber-500 mb-6"><Eye className="w-12 h-12" /></div>
                <h3 className="text-3xl font-serif text-white mb-6">The Perception Bottleneck</h3>
                <p className="text-zinc-400 text-xl leading-relaxed italic">
                  "If you do not have the filters to collapse the absolute noise of the universe into discrete signals, higher-level metacognition is impossible. Scaling builds the retina. Scaling builds the embedding space."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The 5 Parallels (Bottom-up to Top-down) */}
        <section id="parallels" className="space-y-24 scroll-mt-32">
          <SectionHeader
            title="The 5 Layers of Parallel Architecture"
            subtitle="From bottom-up sensory processing to top-down metacognition. The structural blueprint applies to both humans and machines."
            icon={Layers}
            colorClass="bg-violet-500"
          />

          <div className="space-y-6">
            <MatrixRow
              level="1"
              human="Infancy: Sensory-Motor & Signal Detection"
              humanDesc="The body acts as a raw difference detector. The retina filters for contrast, onset, and movement. It is the birth of embodied multimodal expression, internally generating representations of stimuli."
              ai="Generative Models & Multimodal Embeddings"
              aiDesc="Transformers and diffusion models learn the 'priors' of sensory data. They map raw pixels and audio into high-dimensional latent space, mimicking the biological 'internal generation' of stimulus."
              colorClass="text-rose-400"
            />
            <MatrixRow
              level="2"
              human="Early Child: Pre-Attentive Grouping"
              humanDesc="Gestalt mechanisms take over. We automatically organize visual/auditory patterns (proximity, similarity, symmetry) without conscious executive effort, parsing the world instantly."
              ai="Copilots & Basic ML Patterning"
              aiDesc="Early agentic tools and copilots organize shards of human logic and code into useful, pre-attentive patterns. They assist by grouping relevant context before the 'executive' is even invoked."
              colorClass="text-amber-400"
            />
            <MatrixRow
              level="3"
              human="Childhood: Working Memory"
              humanDesc="The 'live interface' with the world. A highly volatile, limited capacity (7±2 items) command center where immediate problems are solved and emotional load is modulated."
              ai="Context Windows & Live Interfacing"
              aiDesc="The model's active prompt space. It is the transient, limited span where the system maintains state, manipulates variables, and executes specific tasks before the session is cleared."
              colorClass="text-teal-400"
            />
            <MatrixRow
              level="4"
              human="Adolescence: Metacognition & Identity"
              humanDesc="Thinking about thinking. The development of multiple internal 'identities' or sub-agents (Instinct, Intellect, Intuition) that negotiate to take autonomous action."
              ai="Agentic Orchestration & Autonomy"
              aiDesc="Autonomous systems developing specific autonomy. Orchestrator agents break down goals and delegate to specialized sub-agents, utilizing Chain of Thought to reflect on their own strategies."
              colorClass="text-violet-400"
            />
            <MatrixRow
              level="5"
              human="Mastery: Long Term Memory & Top-Down Cognition"
              humanDesc="Deep schema encoding and episodic retrieval. The integration of vast past experiences to filter and dictate how new bottom-up signals are interpreted, leading to Intuition."
              ai="RAG & Integrated World Models"
              aiDesc="Retrieval-Augmented Generation acting as long-term memory. Deep architectural models beginning to understand physics, causality, and generalized world states to guide immediate outputs."
              colorClass="text-indigo-400"
            />
          </div>
        </section>

        {/* 5. Conscious Turing Machine (CTM) */}
        <section id="turing" className="space-y-20 scroll-mt-32">
          <SectionHeader
            title="The Conscious Turing Machine"
            subtitle="How do we structure these parallels? Manuel and Lenore Blum’s CTM model offers a computer science framework for awareness."
            icon={Terminal}
            colorClass="bg-teal-500"
          />

          <div className="bg-[#0a0c14] border border-teal-500/20 p-16 md:p-24 rounded-[60px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(45,212,191,0.05)_0%,_transparent_50%)] pointer-events-none" />

            <DeepDiveText>
              <p>
                To understand how bottom-up senses and top-down cognition actually wire together, we look to the <strong>Conscious Turing Machine (CTM)</strong> proposed by Manuel and Lenore Blum. It formalizes consciousness not as magic, but as a specific architecture of information flow.
              </p>

              <div className="grid md:grid-cols-2 gap-16 py-12">
                <div className="space-y-8 bg-[#07090f] p-10 rounded-[32px] border border-zinc-800">
                  <div className="flex items-center gap-4 text-rose-400">
                    <ArrowUpCircle className="w-8 h-8" />
                    <h3 className="text-3xl font-serif">Uptree Competition</h3>
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    In the CTM, there are trillions of specialized, unconscious sub-processors (handling vision, math, fear, language). They all constantly compute and generate outputs. These processors compete in a tournament-style "Uptree" structure. The processor with the most salient, highly-weighted information wins access to the Short-Term Memory (the Global Workspace).
                  </p>
                </div>

                <div className="space-y-8 bg-[#07090f] p-10 rounded-[32px] border border-zinc-800">
                  <div className="flex items-center gap-4 text-teal-400">
                    <ArrowDownCircle className="w-8 h-8" />
                    <h3 className="text-3xl font-serif">Downtree Broadcast</h3>
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Once a chunk of information wins the Global Workspace, it is instantly broadcast "Downtree" to <em>all</em> other sub-processors simultaneously. This global broadcast is what we experience as conscious awareness. It allows disparate parts of the mind to align, update their models, and coordinate a unified response.
                  </p>
                </div>
              </div>

              <p>
                How do these completely different processors (one handling visual geometry, another handling linguistic syntax) understand the broadcast? The Blums propose <strong className="text-amber-300 font-serif italic">Brainish</strong>.
              </p>
              <p>
                Brainish is a multimodal, high-dimensional internal language. It is not English. It is a compressed vector representation that collapses images, feelings, spatial coordinates, and semantic meaning into a single, broadcastable unit. It is the language of thought.
              </p>
            </DeepDiveText>
          </div>
        </section>

        {/* 6. Inner World Models & Senses */}
        <section id="world-models" className="space-y-20 scroll-mt-32">
          <SectionHeader
            title="Inner World Models & Inner Senses"
            subtitle="Diving deeper into the CTM: What exactly are these special processors calculating?"
            icon={Box}
            colorClass="bg-rose-500"
          />

          <DeepDiveText>
            <p>
              Within this Turing architecture, the nature of the "inner special processors" is where modern AI research perfectly intersects with cognitive science. We are identifying the mandatory modules required for high-level agency.
            </p>
          </DeepDiveText>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#0a0c14] p-12 rounded-[40px] border border-rose-500/20 hover:border-rose-500/40 transition-colors duration-500 space-y-8 flex flex-col">
              <div className="p-4 bg-rose-500/10 w-fit rounded-2xl">
                <Brain className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-3xl font-serif text-white">Yann LeCun's World Model</h3>
              <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">JEPA / Simulation</div>
              <p className="text-zinc-400 text-lg leading-relaxed flex-grow">
                LLMs predict the next word. A true World Model (like LeCun's Joint Embedding Predictive Architecture) predicts the next <em>state of the world</em>. It is a special processor dedicated to intuitive physics and causality. It allows the system to simulate "if I push this glass, it will fall" without having to physically do it. It is the engine of planning.
              </p>
            </div>

            <div className="bg-[#0a0c14] p-12 rounded-[40px] border border-amber-500/20 hover:border-amber-500/40 transition-colors duration-500 space-y-8 flex flex-col">
              <div className="p-4 bg-amber-500/10 w-fit rounded-2xl">
                <Move className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-3xl font-serif text-white">Fei-Fei Li's Spatial AI</h3>
              <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">Intuitive Physics</div>
              <p className="text-zinc-400 text-lg leading-relaxed flex-grow">
                Intelligence must be grounded in space. Fei-Fei Li advocates for "Spatial Intelligence"—the ability to see, navigate, and manipulate the 3D material world. This processor is required to convert "seeing" into "doing." It maps geometry, depth, and affordances, turning flat pixels into navigable volumetric realities.
              </p>
            </div>

            <div className="bg-[#0a0c14] p-12 rounded-[40px] border border-teal-500/20 hover:border-teal-500/40 transition-colors duration-500 space-y-8 flex flex-col">
              <div className="p-4 bg-teal-500/10 w-fit rounded-2xl">
                <Activity className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-serif text-white">Internal Command Module</h3>
              <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">Proprioception / Brainish</div>
              <p className="text-zinc-400 text-lg leading-relaxed flex-grow">
                My own addition to this synthesis: The system requires an internal sense of "Self" in space. This is Proprioception operating as an internal command language module. It constantly translates the physical state of the hardware (biofeedback, tension, joint angle) into Brainish, ensuring the executive agent knows the boundaries and status of its own form.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Multi-Scale Agency (Levin) */}
        <section id="agency" className="space-y-20 scroll-mt-32">
          <SectionHeader
            title="Multi-Scale Agency & Bioelectricity"
            subtitle="Intelligence is not confined to brains. It scales across biology, redefining what we consider a 'mind'."
            icon={Target}
            colorClass="bg-indigo-500"
          />

          <div className="grid lg:grid-cols-2 gap-20">
            <DeepDiveText>
              <p>
                If we zoom out from the human brain, we encounter Michael Levin’s revolutionary work on <strong>Basal Cognition</strong>. Biology proves that intelligence is deeply multi-scale.
              </p>
              <p>
                A single cell is an agent. During embryogenesis, cells coordinate to build complex anatomy (Morphospace) without a central brain. They negotiate, communicate, and solve geometric problems.
              </p>
              <p>
                What binds these smaller agents into a larger, unified "Self"? <strong className="text-indigo-400">Bioelectricity</strong>. Gap junctions allow cells to share electrical states, effectively erasing the boundary between "me" and "you" at the cellular level, creating a unified collective intelligence. This bioelectric communication is the literal <span className="italic">cognitive glue</span> that allows for true biological integration, starkly contrasting with the API-driven aggregation of AI.
              </p>
              <div className="my-10 p-8 border-l-4 border-indigo-500 bg-indigo-500/5 rounded-r-3xl">
                <h4 className="text-2xl font-serif text-white mb-4">The Cognitive Light Cone</h4>
                <p className="text-zinc-400">
                  Levin proposes we measure minds by their "Cognitive Light Cone"—the spatio-temporal scale of the goals they can pursue. A tick cares about millimeters and milliseconds. A dog cares about miles and minutes. A human can conceptualize decades and planetary scales. Agency is defined by the size of the boundary you draw around your goals.
                </p>
              </div>
            </DeepDiveText>

            <div className="relative">
              <div className="sticky top-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-[#0a0c14] border border-zinc-800 p-12 rounded-[40px] shadow-2xl h-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-[40px] pointer-events-none" />
                <h3 className="text-4xl font-serif text-white mb-8 relative z-10">Humans as Physical Interfaces</h3>
                <p className="text-zinc-400 text-xl leading-relaxed relative z-10">
                  We are not just minds driving meat-suits. We are physical interfaces. Our bodies, our fascial tensegrity networks, our bioelectric gradients are the hardware that allows an abstract "mind" to interact with the thermodynamic reality of the universe.
                </p>
                <p className="text-zinc-400 text-xl leading-relaxed mt-6 relative z-10">
                  The body is the instrument of integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Platonic Intelligence */}
        <section id="platonic" className="space-y-20 scroll-mt-32">
          <SectionHeader
            title="The Platonic Hypothesis"
            subtitle="Why do biological evolution and artificial intelligence keep arriving at the exact same solutions?"
            icon={InfinityIcon}
            colorClass="bg-amber-400"
          />

          <div className="bg-[#0a0c14] rounded-[60px] p-16 md:p-24 border border-amber-500/20 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

            <InfinityIcon className="w-20 h-20 text-amber-400 mx-auto mb-12 opacity-50" />

            <h3 className="text-5xl md:text-7xl font-serif italic text-white mb-12 leading-tight">
              "Intelligence discovers structure.<br />It does not invent it."
            </h3>

            <div className="max-w-4xl mx-auto text-xl md:text-2xl text-zinc-400 leading-[1.8] font-light text-left space-y-8">
              <p>
                There is a converging theory emerging from both Michael Levin on the biological side and theoretical computer scientists on the AI side: <strong>The Platonic Representation Hypothesis.</strong>
              </p>
              <p>
                When you train vastly different AI models (vision models, language models, audio models) on different data, their internal mathematical representations eventually align. They converge on the same geometric understanding of reality.
              </p>
              <p>
                Why? Because the universe is not random. It has an underlying, objective structure (a "Platonic Space" of forms and physics). Any system that scales enough compute and experience to solve complex problems will inevitably map itself to this underlying reality.
              </p>
              <p className="text-amber-200 font-medium text-center text-3xl mt-12 font-serif">
                We are all thin-client interfaces to the same universe.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Embodied Robotics & Conclusion */}
        <section id="embodied" className="space-y-20 pt-20 border-t border-zinc-900 scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">The Final Frontier: <br /><span className="text-teal-400 italic">Embodied Agents</span></h2>
              <DeepDiveText>
                <p>
                  This brings us to the bleeding edge: Humanoid Robotics and Embodied Agents.
                </p>
                <p>
                  A disembodied LLM is a "brain in a vat." It has aggregated knowledge but lacks the biofeedback, the constraints of gravity, and the spatial consequence that forces true integration.
                </p>
                <p>
                  By placing AI into physical robotic bodies (Vision-Language-Action models), we are forcing silicon to undergo the same evolutionary crucible that carbon did. The robot must learn proprioception. It must build a world model that understands dropped objects shatter. It must align its internal "Brainish" to the unforgiving physics of the real world.
                </p>
                <p>
                  As we build embodied agents, we are no longer just coding software. We are architecting artificial life, bridging the gap between aggregated compute and integrated consciousness.
                </p>
              </DeepDiveText>
            </div>

            <div className="flex justify-center items-center p-12">
              <div className="w-full max-w-md aspect-square rounded-full border border-teal-500/30 flex items-center justify-center relative shadow-[0_0_100px_rgba(45,212,191,0.1)]">
                <div className="absolute inset-4 rounded-full border border-dashed border-zinc-700 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border border-zinc-800" />
                <Bot className="w-24 h-24 text-zinc-300" />
              </div>
            </div>
          </div>

          <div className="text-center py-32 mt-20">
            <Compass className="w-16 h-16 text-zinc-600 mx-auto mb-10" />
            <h2 className="text-3xl uppercase tracking-[0.3em] font-bold text-zinc-500 mb-6">End of Synthesis</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              From the firing of retinal cells to the orchestration of global workspaces, the architecture of intelligence is universal.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
