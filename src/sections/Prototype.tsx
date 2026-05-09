import { motion } from 'framer-motion';
import gameplayVideo from '../img/Gameplay.mp4';

export function Prototype() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[#FF8F00] font-bold tracking-widest uppercase mb-4 text-sm">Prototype</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Functional Demonstration
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/70 text-lg">
            See the live AR tracking, excavation interactions, and state persistence behavior in action.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-5xl mx-auto perspective-[2000px]">
          {/* Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 25, rotateX: 10, rotateZ: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              opacity: { duration: 0.8 },
              x: { duration: 0.8 }
            }}
            className="relative mx-auto bg-[#1a110b] border-[4px] border-[#3E2723] rounded-[2.5rem] h-[600px] w-[290px] flex-shrink-0 group cursor-pointer shadow-[-15px_15px_0px_#0a0604,_-30px_30px_40px_rgba(0,0,0,0.8)] transition-all duration-700 hover:rotate-0 hover:shadow-[0_0_50px_rgba(255,179,0,0.2)] [transform-style:preserve-3d]"
          >
            {/* Inner Border */}
            <div className="absolute inset-[6px] rounded-[2rem] border-[4px] border-black z-20 pointer-events-none"></div>
            
            {/* Edge highlights for 3D effect */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none z-30"></div>
            
            {/* Notch */}
            <div className="absolute top-[10px] inset-x-0 h-[24px] bg-black rounded-b-3xl w-[140px] mx-auto z-40"></div>
            
            <div className="absolute inset-[10px] rounded-[1.8rem] overflow-hidden bg-black z-10">
              <video 
                src={gameplayVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              ></video>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h4 className="text-3xl font-display font-bold text-[#FFB300]">In-Game AR Mechanics</h4>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF8F00] to-transparent"></div>
            <p className="text-museum-wall/80 text-lg leading-relaxed">
              This raw gameplay footage demonstrates the core loop of Fossil Hunt AR. Notice how the application anchors the digital excavation site seamlessly onto the physical museum environment using target tracking.
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Real-time surface tracking and target recognition",
                "Tactile 3-tap excavation and brushing mechanics",
                "Knowledge-locked persistence logic",
                "Fluid particle systems and high-fidelity rendering"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 font-medium">
                  <span className="text-[#00E5FF] mt-1 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <div className="inline-block bg-[#1a110b] border border-[#FFB300]/30 px-6 py-3 rounded-xl text-sm text-[#FFB300] font-bold shadow-lg">
                Captured live on Android Device
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
