import { motion } from 'framer-motion';
import { Smartphone, Layers, TrendingUp, Building2 } from 'lucide-react';

export function Commercialization() {
  const opportunities = [
    {
      title: "Virtual Species Import",
      desc: "Modular architecture enables the ability to virtually 'import' species (like Dinosaurs) not found in local Sri Lankan collections.",
      icon: Layers
    },
    {
      title: "Mobile-First BYOD",
      desc: "The 'Bring Your Own Device' (BYOD) model ensures consumer-grade smartphones can be used, minimizing institutional costs.",
      icon: Smartphone
    },
    {
      title: "Adaptable Framework",
      desc: "Core mechanics can be easily reskinned for archaeology, space exploration, or art history.",
      icon: TrendingUp
    },
    {
      title: "Museums & Galleries",
      desc: "Low-cost implementation for institutions lacking space or budget for physical dinosaur exhibits.",
      icon: Building2
    }
  ];

  return (
    <section id="features" className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#00E5FF] font-bold tracking-widest uppercase mb-4 text-sm">Future Potential</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Commercialization & Scalability
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/80 text-lg">
            Positioned as a highly scalable immersive museum education platform ready for real-world deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-6 bg-[#1a110b]/80 backdrop-blur-md p-8 rounded-3xl border border-[#8D6E63]/30 hover:border-[#00E5FF]/50 hover:-translate-y-2 transition-all group shadow-[0_0_20px_rgba(0,229,255,0.05)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 flex items-center justify-center shrink-0 border border-[#00E5FF]/20 group-hover:bg-[#00E5FF]/20 transition-colors">
                <opp.icon size={32} className="text-[#00E5FF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#FFB300] mb-3">{opp.title}</h4>
                <p className="text-museum-wall/80 leading-relaxed text-base">{opp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Roadmap / Vision Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#FFB300] to-[#FF8F00] rounded-3xl p-8 md:p-12 text-center shadow-[0_0_40px_rgba(255,179,0,0.3)] relative overflow-hidden max-w-5xl mx-auto border border-[#FFB300]/50"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          <div className="relative z-10">
            <h4 className="text-3xl font-display font-bold text-[#291b15] mb-4">Ready for Deployment</h4>
            <p className="max-w-3xl mx-auto text-[#3E2723] font-bold text-lg mb-8">
              Fossil Hunt AR is a complete, modular system ready to be integrated into cultural heritage spaces. 
              It provides a high-impact, low-friction solution to modernize educational offerings.
            </p>
            <button className="bg-[#1a110b] text-[#FFB300] px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl transform hover:scale-105 border border-[#FFB300]/20">
              Discuss Partnership
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
