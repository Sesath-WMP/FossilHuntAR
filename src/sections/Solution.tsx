import { motion } from 'framer-motion';
import { Scan, Pickaxe, BrainCircuit, Lightbulb } from 'lucide-react';

export function Solution() {
  const steps = [
    { icon: Scan, title: "Discover", desc: "Use Vuforia Image Tracking to uncover hidden AR markers anchored to physical exhibits." },
    { icon: Pickaxe, title: "Excavate", desc: "Engage in tactile shovel and brush interactions to unearth virtual fossils." },
    { icon: BrainCircuit, title: "Validate", desc: "Unlock collected fossils through knowledge-locked quizzes based on the exhibit." }
  ];

  return (
    <section id="solution" className="relative py-32 bg-[#291b15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[#00E5FF] font-bold tracking-widest uppercase mb-4 text-sm">Solution Overview</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            An Interactive 3-Step Educational Journey
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/70 text-lg">
            A sequential learning process designed to keep users engaged from discovery to mastery.
          </p>
        </div>

        <div className="relative mb-24">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B8D4] to-transparent -translate-y-1/2 hidden md:block opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group bg-[#3E2723]/80 backdrop-blur-sm p-8 rounded-3xl border border-[#5D4037]/50 shadow-xl"
              >
                <div className="w-24 h-24 rounded-2xl bg-[#5D4037] border border-white/10 flex items-center justify-center mb-8 relative group-hover:bg-[#00E5FF]/20 group-hover:border-[#00E5FF] transition-all duration-300 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#FFB300] text-[#291b15] font-bold flex items-center justify-center text-lg shadow-[0_0_15px_rgba(255,179,0,0.5)]">
                    {i + 1}
                  </div>
                  <step.icon size={48} className="text-white group-hover:text-[#00E5FF] transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-[#FFB300] mb-4">{step.title}</h4>
                <p className="text-base text-museum-wall/80 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Innovation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#3E2723] to-[#291b15] p-10 rounded-3xl border border-[#FF8F00]/30 shadow-[0_0_30px_rgba(255,143,0,0.1)] flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-20 h-20 rounded-full bg-[#FF8F00]/20 flex items-center justify-center shrink-0">
            <Lightbulb size={40} className="text-[#FFB300]" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Key Innovation</h4>
            <p className="text-museum-wall/90 text-lg leading-relaxed">
              <strong>Proximity-aware educational logic</strong> that actively encourages museum exploration. Users must physically navigate and interact with exhibits to unlock the full AR experience, turning the entire museum into a gamified learning environment.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
