import React from 'react';
import { motion } from 'motion/react';

export const FloatingObjects: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none will-change-transform">
      {/* Soft Radial Glows */}
      <div 
        className="absolute -top-24 -left-24 w-[350px] h-[350px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(229, 36, 37, 0.3) 0%, transparent 70%)',
          transform: 'translateZ(0)'
        }}
      />

      <div 
        className="absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full opacity-18 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(229, 36, 37, 0.25) 0%, transparent 70%)',
          transform: 'translateZ(0)'
        }}
      />

      {/* Floating 3D Diamond Wireframe - Top Left */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-[4%] hidden lg:block"
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-12 h-12 border border-[#e52425]/40 rounded-xl transform rotate-45 bg-zinc-950/40 border-white/10 shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 border border-white/20 rounded-md transform -rotate-45" />
        </div>
      </motion.div>

      {/* Floating Glowing Ring - Right */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-[4%] hidden lg:block"
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-16 h-16 rounded-full border-2 border-[#e52425]/30 border-t-[#e52425]" />
      </motion.div>
    </div>
  );
};



