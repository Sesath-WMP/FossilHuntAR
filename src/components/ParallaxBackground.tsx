import { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bone, Skull, Gem } from 'lucide-react';

// Pre-generate random-looking values to prevent hydration mismatches and re-renders
const DUST_PARTICLES = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  left: `${(i * 13.7) % 100}%`,
  top: `${(i * 19.3) % 100}%`,
  size: (i % 3) * 2 + 2,
  opacity: (i % 5) * 0.1 + 0.05,
  duration: (i % 5) * 2 + 4,
  delay: (i % 7) * 0.5,
  xOffset: i % 2 === 0 ? 20 : -20,
}));

const FOSSILS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  Icon: [Bone, Skull, Gem][i % 3],
  left: `${(i * 23.4 + 10) % 90}%`,
  top: `${(i * 31.7 + 20) % 150}%`,
  rotation: (i * 45) % 360,
  scale: (i % 3) * 0.4 + 0.8,
  opacity: (i % 4) * 0.02 + 0.02, 
}));

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Different layers move at different speeds for 3D depth
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);  // Slow background (cave wall)
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);  // Medium layer (blobs & fossils)
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']); // Faster particles/dust

  // An overlay that smoothly darkens the scene as you scroll down deeper underground
  const darknessOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.5]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#291b15] overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#291b15]" />
      
      {/* Layer 1 - Deepest, rocky cave wall texture using inline SVG pattern */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-[-50%] opacity-15"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rock-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M10 10l20 5-5 25-20-10z M50 40l25-15 15 25-25 15z M100 20l15 15-15 15-15-15z M25 80l20 15-5 25-25-15z M75 90l30-5 5 20-25 20z" fill="none" stroke="#8D6E63" strokeWidth="0.5"/>
              <circle cx="30" cy="50" r="1" fill="#8D6E63" />
              <circle cx="85" cy="65" r="1.5" fill="#8D6E63" />
              <circle cx="105" cy="100" r="1" fill="#8D6E63" />
              <circle cx="55" cy="110" r="2" fill="#8D6E63" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rock-pattern)" />
        </svg>
      </motion.div>
      
      {/* Layer 2 - Medium speed, ambient blobs & buried fossils */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-[-50%]"
      >
        {/* Cinematic depth blobs */}
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#3E2723] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute top-[60%] right-[10%] w-[800px] h-[800px] bg-[#FF8F00] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute top-[110%] left-[20%] w-[700px] h-[700px] bg-[#1a110b] rounded-full blur-[150px] opacity-50"></div>

        {/* Buried Fossils */}
        {FOSSILS.map((fossil) => (
          <div
            key={`fossil-${fossil.id}`}
            className="absolute text-[#FFB300]"
            style={{
              top: fossil.top,
              left: fossil.left,
              opacity: fossil.opacity,
              transform: `scale(${fossil.scale}) rotate(${fossil.rotation}deg)`,
            }}
          >
            <fossil.Icon size={120} strokeWidth={1} />
          </div>
        ))}
      </motion.div>
      
      {/* Layer 3 - Glowing dust motes, floating gently */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-[-50%] opacity-80"
      >
        {DUST_PARTICLES.map((p) => (
          <motion.div 
            key={`dust-${p.id}`}
            className="absolute bg-[#FFB300] rounded-full shadow-[0_0_12px_#FFB300]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, p.xOffset, 0],
              opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Depth Darkness - increases opacity as you scroll down */}
      <motion.div 
        className="absolute inset-0 bg-[#0a0604] pointer-events-none"
        style={{ opacity: darknessOpacity }}
      />
    </div>
  );
}
