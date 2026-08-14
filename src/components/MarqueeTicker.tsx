import React from 'react';

interface MarqueeTickerProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  variant?: 'red' | 'dark' | 'outline';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items,
  direction = 'left',
  speed = 'medium',
  className = '',
  variant = 'dark',
}) => {
  const speedClass =
    speed === 'slow' ? 'animate-marquee-slow' : speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';

  const reverseClass = direction === 'right' ? 'animate-marquee-reverse' : '';

  const variantStyles = {
    red: 'bg-[#e52425] text-white py-3.5 border-y border-red-500/30',
    dark: 'bg-zinc-950/90 text-zinc-300 py-3.5 border-y border-white/10 backdrop-blur-md',
    outline: 'bg-transparent text-white/80 py-3 border-y border-white/15',
  };

  // Duplicate items 4 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none relative z-20 ${variantStyles[variant]} ${className}`}>
      <div className={`inline-flex items-center gap-8 ${speedClass} ${reverseClass}`}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] font-mono">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#e52425] shrink-0 shadow-[0_0_8px_#e52425]" />
          </div>
        ))}
      </div>
    </div>
  );
};
