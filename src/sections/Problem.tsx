import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section id="problem" className="relative py-32 bg-[#3E2723] overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#FF8F00] font-bold tracking-widest uppercase mb-4 text-sm">Problem & Need</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Museum Education Needs to Evolve
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#291b15]/90 p-8 rounded-3xl border border-[#8D6E63]/30 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-[#FFB300] mb-4 flex items-center gap-3">
              <span className="text-3xl">⚠️</span> The Problem
            </h4>
            <p className="text-museum-wall/90 text-lg leading-relaxed">
              Traditional museum learning is passive. <strong>2D labels fail to engage young audiences</strong>, leading to low knowledge retention and reduced excitement during visits.
            </p>
          </motion.div>

          {/* The Gap */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#291b15]/90 p-8 rounded-3xl border border-[#8D6E63]/30 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-[#FFB300] mb-4 flex items-center gap-3">
              <span className="text-3xl">🔍</span> The Gap
            </h4>
            <p className="text-museum-wall/90 text-lg leading-relaxed">
              Existing AR solutions are often <strong>single-user or expensive markerless systems</strong>, making them difficult to implement and scale across entire museum exhibits effectively.
            </p>
          </motion.div>

          {/* Target Beneficiaries */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#291b15]/90 p-8 rounded-3xl border border-[#8D6E63]/30 shadow-xl"
          >
            <h4 className="text-2xl font-bold text-[#FFB300] mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span> Target Beneficiaries
            </h4>
            <ul className="space-y-3 text-museum-wall/90 text-lg">
              <li className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> Natural history museum visitors</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> School groups and educators</li>
              <li className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> Museum curators and institutions</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
