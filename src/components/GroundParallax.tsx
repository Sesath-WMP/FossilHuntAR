import { motion, useScroll, useTransform } from 'framer-motion';
import groundImg from '../img/ground layer.png';

export function GroundParallax() {
  const { scrollY } = useScroll();

  // Moves upward at a ratio of 0.8 relative to the scroll speed.
  // We use translate3d for high performance 60FPS smoothness.
  const y = useTransform(scrollY, (val) => -(val * 0.8));

  return (
    <motion.div
      style={{ y, z: 0 }}
      className="fixed top-[75vh] max-md:top-[100vh] left-0 w-full pointer-events-none z-[15]"
    >
      <img 
        src={groundImg} 
        alt="Underground dirt transition" 
        className="w-full object-cover min-h-[200px]" 
        style={{ 
          transform: 'translate3d(0, 0, 0)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      />
    </motion.div>
  );
}
