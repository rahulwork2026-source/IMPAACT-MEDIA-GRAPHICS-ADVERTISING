import React, { useState, useRef } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

export const InteractiveWrapSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 bw-glass">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#e52425]/10 border border-[#e52425]/30 rounded-full text-xs font-bold text-[#e52425] mb-2 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#e52425]" />
            Interactive Before & After Transformation
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Commercial Vehicle Fleet Wrapping
          </h3>
          <p className="text-zinc-400 text-sm mt-1 leading-relaxed max-w-2xl">
            Drag the slider to see how plain commercial vehicles are transformed into high-impact mobile advertising assets across Oman.
          </p>
        </div>

        <div className="text-right text-xs text-zinc-400 font-medium hidden md:block">
          <span>Move slider horizontally to inspect precision edges</span>
        </div>
      </div>

      {/* Interactive Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-xl overflow-hidden cursor-ew-resize border border-white/20 select-none shadow-2xl"
      >
        {/* AFTER Image (Full Wrapped Vehicle) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600"
            alt="Full Wrapped Commercial Vehicle"
            className="w-full h-full object-cover grayscale-0"
          />
          <div className="absolute top-4 right-4 bg-[#e52425] text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded shadow-lg">
            AFTER: Full Custom Wrap
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1600"
            alt="Original Plain White Vehicle"
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover filter contrast-125 brightness-90"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded border border-white/20">
            BEFORE: Plain Fleet Vehicle
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-[#e52425] shadow-[0_0_15px_rgba(229,36,37,0.8)] cursor-ew-resize z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#e52425] text-white border-2 border-white flex items-center justify-center shadow-2xl">
            <Sliders className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-zinc-400 font-medium px-1">
        <span>01. Plain Stock Vehicle</span>
        <span className="font-bold text-white">Interactive Comparison Slider</span>
        <span>02. IMPAACT Custom Cast Wrap</span>
      </div>
    </div>
  );
};

