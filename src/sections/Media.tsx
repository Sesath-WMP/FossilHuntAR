import { motion } from 'framer-motion';

// Dynamically import all screenshots from the directory
const imageModules = import.meta.glob<{ default: string }>('../img/screenshots/*.{jpeg,jpg,png}', { eager: true });
const screenshots = Object.values(imageModules).map(mod => mod.default);

export function Media() {
  return (
    <section id="gameplay" className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FF8F00] font-bold tracking-widest uppercase mb-4 text-sm">Visual Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            In-Game Screenshots
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/80 text-lg">
            A closer look at the augmented reality experience, interactive models, and the educational interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {screenshots.map((imgSrc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
              className="relative aspect-video rounded-2xl overflow-hidden group border-2 border-[#5D4037]/30 hover:border-[#FFB300]/80 shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all cursor-pointer"
            >
              <img 
                src={imgSrc} 
                alt={`Screenshot ${i + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-[#FFB300]/0 group-hover:bg-[#FFB300]/10 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
