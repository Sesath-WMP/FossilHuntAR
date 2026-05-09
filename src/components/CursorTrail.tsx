import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CursorTrail() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let particleId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      // Create a new particle every few pixels or just continuously
      // To prevent too many particles, we can throttle or just limit the array length
      particleId += 1;
      const newParticle = { id: particleId, x: e.clientX, y: e.clientY };
      setParticles(prev => [...prev, newParticle].slice(-15));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: Math.random() * 0.5 + 0.5, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: p.y + (Math.random() * 40 + 20), // Fall down slightly like dust
              x: p.x + (Math.random() * 40 - 20)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-2 h-2 rounded-full bg-[#FFB300] shadow-[0_0_8px_#FFB300]"
            style={{ left: -4, top: -4 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
