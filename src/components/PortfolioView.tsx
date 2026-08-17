import React, { useState } from 'react';
import { ActiveTab, PortfolioItem } from '../types';
import { X, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingObjects } from './FloatingObjects';
import { MarqueeTicker } from './MarqueeTicker';

interface PortfolioViewProps {
  portfolio: PortfolioItem[];
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModalWithDetails: (details: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  portfolio,
  setActiveTab,
  onOpenQuoteModalWithDetails,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Signages', 'Vehicle Wraps', '3D Laser Cut', 'Events'];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-black text-white space-y-16 sm:space-y-20 lg:space-y-24 pb-24 relative overflow-hidden">
      {/* Background Floating Objects Layer */}
      <FloatingObjects />

      {/* 1. TOP HERO BANNER IMAGE WITH OVERLAY */}
      <section className="page-banner relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Banner Background Image */}
        <img
          src="/images/banner_image_1.png"
          alt="IMPAACT MEDIA Portfolio Showcase Oman"
          className="absolute inset-0 w-full h-full object-cover filter brightness-80 contrast-105 saturate-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-lg"
          >
            OUR <span className="text-[#e52425]">PORTFOLIO</span>
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono tracking-wider"
          >
            <button onClick={() => setActiveTab('home')} className="hover:text-[#e52425] transition-colors font-medium">Home</button>
            <span className="text-[#e52425] font-bold">/</span>
            <span className="text-white font-bold">Our Portfolio</span>
          </motion.div>
        </div>
      </section>

      {/* Moving Portfolio Marquee Ticker */}
      <div className="-mt-16 sm:-mt-20 lg:-mt-24">
        <MarqueeTicker
          variant="red"
          speed="fast"
          items={[
            'PORTFOLIO SHOWCASE',
            'MUSCAT & OMAN INSTALLATIONS',
            '3D LED SIGNAGES',
            'FLEET WRAPPING',
            'RETAIL FACADES',
            'IMPAACT MEDIA'
          ]}
        />
      </div>

      {/* Category Filters Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-[#e52425] text-white border-[#e52425] shadow-lg shadow-[#e52425]/30 scale-102'
                  : 'bg-zinc-950 border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, pIdx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(item)}
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden bw-glass group cursor-pointer hover:border-[#e52425]/60 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-[#e52425] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-[#e52425]/40 rounded-2xl p-6 md:p-8 bw-glass text-white shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white hover:border-[#e52425]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/20">
                <img
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#e52425]">
                  {activeProject.category} • {activeProject.year}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs bg-zinc-900/90 p-4 rounded-xl border border-white/10">
                <div>
                  <span className="text-zinc-500 uppercase font-bold text-[10px]">Client</span>
                  <div className="font-bold text-white mt-0.5">{activeProject.client}</div>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-bold text-[10px]">Location</span>
                  <div className="font-bold text-white mt-0.5">{activeProject.location}</div>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-bold text-[10px]">Completed</span>
                  <div className="font-bold text-white mt-0.5">{activeProject.year}</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#e52425]">
                  Project Case Details & Execution
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const details = `Inquiry regarding portfolio project: ${activeProject.title} (${activeProject.client})`;
                    setActiveProject(null);
                    onOpenQuoteModalWithDetails(details);
                  }}
                  className="bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition shadow-lg shadow-[#e52425]/20"
                >
                  Request Similar Project Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
