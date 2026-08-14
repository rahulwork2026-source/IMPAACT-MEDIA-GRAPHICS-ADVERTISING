import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Award, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { FloatingObjects } from './FloatingObjects';

interface HeroSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModal: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/banner_image_1.png',
    tag: '3D Printing & Scale Modeling',
    title: 'Precision Architectural & Prototype 3D Printing',
    description: '3D printed architectural scale models, complex lattice geometry, prototype product designs, and custom acrylic structures produced in Muscat.',
  },
  {
    id: 2,
    image: '/images/banner_image_2.png',
    tag: 'Architectural Totems & Pylon Signs',
    title: 'Modern Backlit Lobby Totems & Building Directionals',
    description: 'Custom illuminated entrance pylons, corporate lobby wayfinding totems, and LED architectural signages for premium landmarks in Oman.',
  },
  {
    id: 3,
    image: '/images/banner_image_3.png',
    tag: 'Large Format UV & High-Resolution Printing',
    title: 'Vibrant Industrial Printing & Wall Graphics',
    description: 'Direct-to-substrate UV flatbed printing and wide-format roll-to-roll vinyl graphics engineered for commercial and retail spaces.',
  },
  {
    id: 4,
    image: '/images/banner_image_4.png',
    tag: 'Commercial Fleet & Vehicle Wrapping',
    title: 'Dynamic Mobile Fleet & Custom Vehicle Wraps',
    description: 'Full vehicle cast vinyl wraps, bold geometric graphic wraps, and climate-controlled precision bay installation for corporate fleets in Oman.',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveTab,
  onOpenQuoteModal,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="hero-section relative min-h-[82vh] flex flex-col justify-between bg-[#121316] text-[#f4f4f6] overflow-hidden py-12 lg:py-16 border-b border-white/[0.08] select-none">
      
      {/* Background Floating Objects Animation Layer */}
      <FloatingObjects />

      {/* Background Slideshow Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.02] saturate-[1.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-Layer Gradient Overlays for Readability & Matte High Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/85 to-[#121316]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/95 via-transparent to-[#121316]/50 z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-9 space-y-6">
            {/* Active Slide Category Badge */}
            <motion.div 
              key={`tag-${activeSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d62828]/15 border border-[#d62828]/35 text-xs font-bold uppercase tracking-widest text-[#d62828]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d62828]" />
              <span>{activeSlide.tag}</span>
            </motion.div>

            {/* Dynamic Active Slide Title & Description */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`content-${activeSlide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#f4f4f6] uppercase">
                  {activeSlide.title}
                </h1>
                
                <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuoteModal}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#d62828] hover:bg-[#b91c1c] text-white font-extrabold px-9 py-4 text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#d62828]/25 rounded-full overflow-hidden"
              >
                <span className="relative z-10">Get Custom Quote</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={() => setActiveTab('portfolio')}
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-[#18191e]/80 text-[#f4f4f6] hover:border-white hover:bg-white hover:text-[#18191e] font-extrabold px-9 py-4 text-xs uppercase tracking-widest transition-all duration-300 rounded-full"
              >
                <span>View Works</span>
              </button>
            </motion.div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#18191e] border border-white/10 hover:border-[#d62828] hover:bg-[#d62828] text-white flex items-center justify-center transition-all"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#18191e] border border-white/10 hover:border-[#d62828] hover:bg-[#d62828] text-white flex items-center justify-center transition-all"
                  title="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-[#18191e] border border-white/10 hover:border-[#d62828] text-zinc-300 hover:text-white flex items-center justify-center transition-all ml-1"
                  title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              {/* Dots / Indicators */}
              <div className="flex items-center gap-2 ml-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlideIndex === idx 
                        ? 'w-8 bg-[#d62828]' 
                        : 'w-2.5 bg-white/20 hover:bg-white/50'
                    }`}
                    title={`Go to Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="text-xs font-mono font-bold text-zinc-400 ml-auto">
                <span className="text-white">0{currentSlideIndex + 1}</span> / 0{HERO_SLIDES.length}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Counter Stats Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-8 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.08] pt-8">
          {[
            { label: 'Years Experience', value: '20+', sub: 'Since 2005' },
            { label: 'Projects Executed', value: '2,500+', sub: 'Across Oman' },
            { label: 'Client Retention', value: '100%', sub: 'Guaranteed Quality' },
            { label: '3D Signage Installs', value: '500+', sub: 'Muscat Landmarks' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -2 }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#d62828] font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};


