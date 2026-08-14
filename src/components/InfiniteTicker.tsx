import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export const InfiniteTicker: React.FC = () => {
  const itemsTop = [
    '3D LED SIGNAGES',
    'COMMERCIAL FLEET WRAPPINGS',
    'UV FLATBED PRINTING',
    'ARCHITECTURAL LASER CUT',
    'EVENT BOOTHS & EXHIBITIONS',
    'MUSCAT OMAN',
  ];

  const itemsBottom = [
    '20 YEARS CRAFTSMANSHIP',
    'ESTABLISHED 2005',
    'IN-HOUSE PRECISION FACTORY',
    'ROOFTOP SIGNAGE STRUCTURES',
    'LUXURY RETAIL FACADES',
    'IMPAACT MEDIA',
  ];

  const repeatedTop = [...itemsTop, ...itemsTop, ...itemsTop, ...itemsTop];
  const repeatedBottom = [...itemsBottom, ...itemsBottom, ...itemsBottom, ...itemsBottom];

  return (
    <div className="w-full space-y-2 overflow-hidden py-4 relative z-20 select-none">
      {/* Top Banner - Moving Left */}
      <div className="bg-[#e52425] text-white py-3 overflow-hidden border-y border-red-500/30 -rotate-1 scale-102 shadow-2xl">
        <div className="inline-flex items-center gap-8 animate-marquee whitespace-nowrap">
          {repeatedTop.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] font-mono">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-white shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner - Moving Right */}
      <div className="bg-zinc-950 text-zinc-300 py-3 overflow-hidden border-y border-white/10 rotate-1 scale-102 backdrop-blur-md">
        <div className="inline-flex items-center gap-8 animate-marquee-reverse whitespace-nowrap">
          {repeatedBottom.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] font-mono text-zinc-200">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#e52425] shrink-0 shadow-[0_0_8px_#e52425]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

