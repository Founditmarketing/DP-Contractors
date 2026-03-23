import { motion } from 'motion/react';
import { useMemo } from 'react';

export default function BlowingIceBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const isPill = Math.random() > 0.5;
      const width = isPill ? Math.random() * 60 + 20 : Math.random() * 12 + 4;
      const height = isPill ? Math.random() * 3 + 1 : width;
      
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${-10 - Math.random() * 20}%`, // Start off-screen to the left
        width: `${width}px`,
        height: `${height}px`,
        duration: Math.random() * 10 + 5, // 5s to 15s
        delay: Math.random() * 15, // 0s to 15s
        opacity: Math.random() * 0.4 + 0.2, // 0.2 to 0.6
        blur: Math.random() > 0.5 ? 'blur-sm' : 'blur-md',
        color: Math.random() > 0.3 ? 'bg-white' : 'bg-blue-200',
        yOffset: `-${Math.random() * 40 + 10}vh`, // Move upwards while moving right
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-[#020617] via-[#0a0f24] to-[#2c45ae]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color} ${p.blur}`}
          style={{
            top: p.top,
            left: p.left,
            width: p.width,
            height: p.height,
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: '120vw',
            y: p.yOffset,
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
