import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none will-change-transform">
      {/* Animated Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Lightweight GPU-Accelerated Matte Crimson Ambient Glows */}
      <div 
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full opacity-15 pointer-events-none animate-pulse duration-[8s]"
        style={{
          background: 'radial-gradient(circle, rgba(214, 40, 40, 0.22) 0%, rgba(214, 40, 40, 0.05) 50%, transparent 70%)',
          transform: 'translateZ(0)'
        }}
      />

      <div 
        className="absolute top-1/2 -right-32 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full opacity-12 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(214, 40, 40, 0.18) 0%, rgba(139, 24, 27, 0.04) 55%, transparent 70%)',
          transform: 'translateZ(0)'
        }}
      />

      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 24, 27, 0.15) 0%, transparent 70%)',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  );
};

