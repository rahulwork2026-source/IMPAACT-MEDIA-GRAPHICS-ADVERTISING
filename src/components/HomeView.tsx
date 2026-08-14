import React from 'react';
import { ActiveTab, ServiceItem, PortfolioItem } from '../types';
import { HeroSection } from './HeroSection';
import { InfiniteTicker } from './InfiniteTicker';
import { FloatingObjects } from './FloatingObjects';
import { OurClientsSection } from './OurClientsSection';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Car, 
  Printer, 
  Palette, 
  Layout, 
  Video, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Award,
  Factory,
  Clock
} from 'lucide-react';

interface HomeViewProps {
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModal: () => void;
  onOpenQuoteModalWithDetails: (details: string) => void;
  isDarkMode?: boolean;
}

export const HomeView: React.FC<HomeViewProps> = ({
  services,
  portfolio,
  setActiveTab,
  onOpenQuoteModal,
  onOpenQuoteModalWithDetails,
  isDarkMode = true,
}) => {
  // Map icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#e52425]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#e52425]" />;
      case 'Printer': return <Printer className="w-6 h-6 text-[#e52425]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#e52425]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#e52425]" />;
      case 'Video': return <Video className="w-6 h-6 text-[#e52425]" />;
      default: return <Sparkles className="w-6 h-6 text-[#e52425]" />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 bg-black text-white overflow-hidden pb-12">
      {/* 1. Hero Section */}
      <HeroSection 
        setActiveTab={setActiveTab} 
        onOpenQuoteModal={onOpenQuoteModal} 
      />

      {/* 2. Infinite Continuous Ticker */}
      <div className="-mt-6 sm:-mt-8">
        <InfiniteTicker />
      </div>

      {/* 3. About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <FloatingObjects />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e52425]/10 border border-[#e52425]/30 text-xs font-bold uppercase tracking-widest text-[#e52425]">
                <Award className="w-3.5 h-3.5 text-[#e52425]" />
                <span>ABOUT IMPAACT MEDIA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                20 Years of Excellence in <span className="text-[#e52425]">Signage & Visual Media</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Established in <strong className="text-white font-semibold">2005 in Muscat, Sultanate of Oman</strong>, IMPAACT MEDIA GRAPHICS & ADVERTISING is a premier full-service signage and visual communications agency. We specialize in precision 3D illuminated LED signages, commercial vehicle fleet wrapping, large-format UV flatbed printing, and architectural branding.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              With our in-house manufacturing factory equipped with fiber laser cutters, CNC channel benders, and a specialized wrapping bay, we engineer all solutions to withstand Oman’s extreme weather conditions while maximizing brand visibility.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center gap-2 bg-[#e52425] text-white hover:bg-[#c81e20] font-bold px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#e52425]/20 rounded-full"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group hover:border-[#e52425]/60 transition-all duration-300 bw-glass">
              <img
                src="/images/banner_image_2.png"
                alt="About IMPAACT MEDIA Oman"
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Floating Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-black/80 backdrop-blur-md border border-white/15 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Muscat, Sultanate of Oman</div>
                  <div className="text-[11px] text-[#e52425] font-mono font-semibold">Factory Direct Production</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-extrabold text-white font-mono">EST. 2005</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Feature/Content Section: Core Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FloatingObjects />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-20"
        >
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#e52425] uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What We Do Best
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              3D signages, vehicle wraps, UV printing, brand identity, and event installations engineered across Muscat & Oman.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-white hover:text-[#e52425] border-b border-[#e52425] pb-1 self-start md:self-end transition-colors uppercase tracking-widest shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#e52425]" />
          </button>
        </motion.div>

        {/* 3-COLUMN GRID with Clean Agency Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {services.slice(0, 6).map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveTab('services')}
              className="group relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-[#e52425]/60 bw-glass"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  {/* Top Right Index */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3 relative z-20">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#e52425] transition-colors duration-200">
                      {srv.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#e52425] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <FloatingObjects />

        <div className="bg-zinc-950/90 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden bw-glass">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e52425]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 relative z-10">
            <span className="text-xs font-bold text-[#e52425] uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#e52425]/10 border border-[#e52425]/20 px-3.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE IMPAACT ADVANTAGE</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Choose IMPAACT MEDIA?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We combine two decades of Omani market craftsmanship with state-of-the-art in-house technology to deliver flawless signage & visual media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                icon: Award,
                title: '20+ Years Experience',
                desc: 'Established in Muscat in 2005 with deep knowledge of local regulatory standards and landmark structural installations.',
                highlight: 'Since 2005'
              },
              {
                icon: Factory,
                title: 'In-House Factory',
                desc: '100% direct manufacturing with fiber laser cutters, CNC benders, and UV printers. Zero middleman delays.',
                highlight: 'Direct Production'
              },
              {
                icon: ShieldCheck,
                title: 'GCC Weather Tested',
                desc: 'Materials engineered and UV-stabilized specifically to endure Oman’s intense heat, humidity, and coastal weather.',
                highlight: 'Industrial Quality'
              },
              {
                icon: Clock,
                title: 'Turnkey Execution',
                desc: 'Complete end-to-end service from initial 3D rendering and site survey to municipality permits and final mounting.',
                highlight: 'On-Time Delivery'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/60 border border-white/10 hover:border-[#e52425]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center text-[#e52425] group-hover:bg-[#e52425] group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 group-hover:text-[#e52425] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#e52425] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider font-mono">
                    {item.highlight}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#e52425]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#e52425] uppercase tracking-widest">
              Selected Works Across Oman
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Portfolio
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              3D signages, event setups, and fleet wrapping projects executed for Omani brands.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('portfolio')}
            className="inline-flex items-center gap-2 bg-[#e52425] text-white hover:bg-[#c81e20] font-bold px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#e52425]/20 rounded-full shrink-0"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.filter(p => p.featured).slice(0, 3).map((item, pIdx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden bw-glass group cursor-pointer hover:border-[#e52425]/60 transition-all duration-300 shadow-xl"
              onClick={() => setActiveTab('portfolio')}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-white group-hover:text-[#e52425] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Our Clients Section */}
      <OurClientsSection isDarkMode={isDarkMode} />

      {/* 6. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-zinc-950 border border-white/10 rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden bw-glass shadow-xl"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e52425]">
              Ready to elevate your brand presence?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-[#e52425]">Significant</span> Together.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Contact IMPAACT MEDIA GRAPHICS & ADVERTISING today for a free site consultation and 3D design proposal in Muscat, Oman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 relative z-10">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold px-8 py-3.5 text-xs uppercase tracking-widest transition shadow-lg shadow-[#e52425]/25 rounded-full"
            >
              Request Custom Quote
            </button>

            <a
              href="https://wa.me/96893507021"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 bg-black/40 hover:border-emerald-500 hover:text-emerald-400 text-white font-bold px-8 py-3.5 text-xs uppercase tracking-widest transition rounded-full"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

