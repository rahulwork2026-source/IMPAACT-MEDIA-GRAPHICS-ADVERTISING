import React, { useState } from 'react';
import { ActiveTab, ServiceItem } from '../types';
import { 
  Sparkles, 
  Car, 
  Printer, 
  Palette, 
  Layout, 
  Video, 
  CheckCircle2, 
  X,
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingObjects } from './FloatingObjects';

interface ServicesViewProps {
  services: ServiceItem[];
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModalWithDetails: (details: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  services,
  setActiveTab,
  onOpenQuoteModalWithDetails,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#e52425]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#e52425]" />;
      case 'Printer': return <Printer className="w-5 h-5 text-[#e52425]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#e52425]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#e52425]" />;
      case 'Video': return <Video className="w-5 h-5 text-[#e52425]" />;
      default: return <Sparkles className="w-5 h-5 text-[#e52425]" />;
    }
  };

  return (
    <div className="bg-black text-white space-y-12 sm:space-y-16 lg:space-y-20 pb-24 relative overflow-hidden">
      {/* Background Floating Objects Layer */}
      <FloatingObjects />

      {/* 1. TOP HERO BANNER IMAGE WITH OVERLAY */}
      <section className="page-banner relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Banner Background Image */}
        <img
          src="/images/banner_image_3.png"
          alt="IMPAACT MEDIA Advertising & Fabrication Services Muscat"
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
            OUR FULL <span className="text-[#e52425]">SERVICES</span>
          </motion.h1>

          <p className="text-zinc-300 text-xs sm:text-base max-w-2xl mx-auto font-medium">
            Explore all 23 specialized media, signage, 3D laser fabrication, and digital branding solutions produced in-house in Muscat, Oman.
          </p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono tracking-wider pt-1"
          >
            <button onClick={() => setActiveTab('home')} className="hover:text-[#e52425] transition-colors font-medium">Home</button>
            <span className="text-[#e52425] font-bold">/</span>
            <span className="text-white font-bold">Our Services</span>
          </motion.div>
        </div>
      </section>

      {/* ALL 23 SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              className="bg-zinc-950 border border-white/10 rounded-2xl p-5 sm:p-6 bw-glass flex flex-col justify-between space-y-5 shadow-xl hover:border-[#e52425]/70 transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Thumbnail Image Header */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {getIcon(srv.iconName)}
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                      {srv.category}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#e52425] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3 font-normal">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-zinc-300">
                  {srv.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e52425] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                  {srv.features.length > 3 && (
                    <span className="text-[10px] text-[#e52425] font-semibold pl-5 block">
                      +{srv.features.length - 3} more specifications...
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white border border-white/15 font-bold py-2.5 px-3 rounded-xl text-xs transition text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenQuoteModalWithDetails(`Inquiry for ${srv.title} service in Muscat, Oman.`)}
                  className="flex-1 bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold py-2.5 px-3 rounded-xl text-xs transition shadow-lg shadow-[#e52425]/20 text-center flex items-center justify-center gap-1 group/btn"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-[#e52425]/40 rounded-2xl p-6 md:p-8 bw-glass text-white shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white hover:border-[#e52425] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/20">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#e52425] text-white text-xs font-extrabold uppercase px-3 py-1 rounded shadow-md">
                  {selectedService.category}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#e52425] flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#e52425]" />
                  Full Capabilities & Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-200">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-zinc-900/90 p-3 rounded-lg border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#e52425] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-1/3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition border border-white/10 text-center"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    const details = `Selected Service: ${selectedService.title}`;
                    setSelectedService(null);
                    onOpenQuoteModalWithDetails(details);
                  }}
                  className="w-full sm:w-2/3 bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-[#e52425]/20 text-center"
                >
                  Request Direct Factory Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
