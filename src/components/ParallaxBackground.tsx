import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // Different layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Slow background
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']); // Medium layer
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '150%']); // Faster particles/dust
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#291b15] overflow-hidden">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#291b15]"></div>
      
      {/* Layer 1 - Deepest, moves slowest */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-[-50%] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"
      ></motion.div>
      
      {/* Layer 2 - Medium speed, some large blurred shapes for cinematic depth */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-[-50%]"
      >
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#3E2723] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute top-[60%] right-[10%] w-[800px] h-[800px] bg-[#FF8F00] rounded-full blur-[200px] opacity-10"></div>
      </motion.div>
      
      {/* Layer 3 - Fastest, glowing floating dust elements */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-[-50%] opacity-50"
      >
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-[#FFB300] rounded-full shadow-[0_0_10px_#FFB300]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 2 + 0.5})`
            }}
          ></div>
        ))}
      </motion.div>
    </div>
  );
}
