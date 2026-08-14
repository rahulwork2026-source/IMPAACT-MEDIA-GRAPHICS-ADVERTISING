import React from 'react';
import { motion } from 'motion/react';

interface Client {
  id: string;
  name: string;
  category: string;
  logoSvg?: React.ReactNode;
}

interface OurClientsSectionProps {
  isDarkMode?: boolean;
}

export const OurClientsSection: React.FC<OurClientsSectionProps> = ({ isDarkMode = true }) => {
  const textPrimary = isDarkMode ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDarkMode ? 'text-zinc-400' : 'text-zinc-500';
  const borderPrimary = isDarkMode ? 'border-white' : 'border-zinc-900';
  const borderSubtle = isDarkMode ? 'border-zinc-700' : 'border-zinc-300';
  const badgeBg = isDarkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-zinc-900';

  const clients: Client[] = [
    {
      id: 'client-1',
      name: 'BORDES ESTATES',
      category: 'Real Estate',
      logoSvg: (
        <div className={`flex items-center gap-2 font-serif ${textPrimary} tracking-widest text-sm sm:text-base font-bold`}>
          <span className={`border-r-2 ${borderPrimary} pr-2 text-lg sm:text-xl font-mono`}>B</span>
          <div className="flex flex-col text-[10px] sm:text-xs leading-none uppercase tracking-widest font-semibold">
            <span>BORDES</span>
            <span className={`text-[8px] ${textSecondary} tracking-widest`}>ESTATES</span>
          </div>
        </div>
      )
    },
    {
      id: 'client-2',
      name: 'AT THE TOP BURJ KHALIFA',
      category: 'Tourism & Landmarks',
      logoSvg: (
        <div className="flex flex-col items-center justify-center text-center">
          <svg className={`w-6 h-6 ${textPrimary} mb-1`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6" />
          </svg>
          <span className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest ${textPrimary} uppercase leading-tight`}>AT THE TOP</span>
          <span className={`text-[7px] ${textSecondary} tracking-widest uppercase`}>BURJ KHALIFA</span>
        </div>
      )
    },
    {
      id: 'client-3',
      name: 'EMAAR',
      category: 'Real Estate',
      logoSvg: (
        <div className={`text-xl sm:text-2xl font-black ${textPrimary} tracking-[0.25em] font-sans uppercase`}>
          EMAAR
        </div>
      )
    },
    {
      id: 'client-4',
      name: 'nutricook',
      category: 'F&B Tech',
      logoSvg: (
        <div className={`flex items-center gap-1.5 ${textPrimary} font-sans text-sm sm:text-base tracking-tight font-medium`}>
          <svg className={`w-5 h-5 ${textPrimary}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          <span className="font-light">nutri</span>
          <span className="font-bold">cook</span>
        </div>
      )
    },
    {
      id: 'client-5',
      name: 'twincamPro INTERNATIONAL',
      category: 'Media & Tech',
      logoSvg: (
        <div className="flex flex-col items-center text-center">
          <div className={`text-xs sm:text-sm font-bold ${textPrimary} tracking-tight flex items-center gap-0.5`}>
            <span>twincam</span>
            <span className={`font-extrabold ${badgeBg} px-1 rounded text-[10px]`}>Pro</span>
          </div>
          <span className={`text-[7px] ${textSecondary} tracking-[0.2em] font-mono uppercase`}>INTERNATIONAL</span>
        </div>
      )
    },
    {
      id: 'client-6',
      name: 'Yaldi',
      category: 'Logistics',
      logoSvg: (
        <div className={`flex items-center text-xl sm:text-2xl font-black ${textPrimary} italic tracking-tight`}>
          Yaldi
          <span className="w-1.5 h-1.5 rounded-full bg-[#e52425] ml-0.5 not-italic"></span>
        </div>
      )
    },
    {
      id: 'client-7',
      name: 'VALO Energy',
      category: 'Energy',
      logoSvg: (
        <div className="flex items-center gap-2">
          <span className={`text-lg sm:text-xl font-black ${textPrimary} tracking-widest`}>VALO</span>
          <span className={`text-[9px] ${textSecondary} font-mono tracking-wider border-l ${borderSubtle} pl-1.5`}>ENERGY</span>
        </div>
      )
    },
    {
      id: 'client-8',
      name: 'Déjà Vu',
      category: 'Hospitality',
      logoSvg: (
        <div className={`font-serif italic text-lg sm:text-2xl ${textPrimary} tracking-wide`}>
          Déjà Vu
        </div>
      )
    },
    {
      id: 'client-9',
      name: 'MSM Multi Family Office',
      category: 'Finance',
      logoSvg: (
        <div className="flex items-center gap-2">
          <div className={`text-xl font-black ${textPrimary} tracking-tighter`}>
            M<span className="text-[#e52425]">S</span>M
          </div>
          <div className={`text-[8px] ${textSecondary} leading-tight uppercase font-mono`}>
            <div>MULTI FAMILY</div>
            <div>OFFICE</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-10',
      name: "Peet's Coffee",
      category: 'F&B',
      logoSvg: (
        <div className={`flex items-center gap-1.5 font-serif ${textPrimary} text-xs sm:text-sm font-bold tracking-wider`}>
          <svg className={`w-4 h-4 ${textPrimary}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V3zm-2 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h12v8z" />
          </svg>
          <span>Peet&apos;s Coffee</span>
        </div>
      )
    },
    {
      id: 'client-11',
      name: 'BANQUE MISR',
      category: 'Banking',
      logoSvg: (
        <div className="flex items-center gap-2">
          <svg className={`w-6 h-6 ${textPrimary} shrink-0`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v2h20V7L12 2zm-8 8v7h3v-7H4zm6 0v7h4v-7h-4zm7 0v7h3v-7h-3zM2 20v2h20v-2H2z"/>
          </svg>
          <div className={`text-left font-serif ${textPrimary}`}>
            <div className={`text-[10px] ${textSecondary} leading-none`}>بنك مصر</div>
            <div className="text-[9px] font-bold tracking-wider leading-none mt-0.5">BANQUE MISR</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-12',
      name: 'VAULT',
      category: 'Finance',
      logoSvg: (
        <div className={`text-xl sm:text-2xl font-serif font-black ${textPrimary} tracking-[0.3em] uppercase`}>
          VAULT
        </div>
      )
    },
    {
      id: 'client-13',
      name: 'WEALTHBRIX',
      category: 'Capital',
      logoSvg: (
        <div className="flex items-center gap-1.5">
          <svg className={`w-5 h-5 ${textPrimary}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
          <div className="text-left">
            <div className={`text-xs sm:text-sm font-extrabold ${textPrimary} tracking-wider leading-none`}>WEALTHBRIX</div>
            <div className={`text-[7px] ${textSecondary} tracking-widest font-mono uppercase mt-0.5`}>CAPITAL PARTNERS</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-14',
      name: 'ABDULLAH A. ALMOOSA ENTERPRISES',
      category: 'Holding',
      logoSvg: (
        <div className="flex items-center gap-2">
          <div className={`text-xl font-serif font-black ${textPrimary} tracking-tighter`}>AA</div>
          <div className={`text-[7px] ${textSecondary} font-mono tracking-widest uppercase leading-tight`}>
            <div>ABDULLAH A. ALMOOSA</div>
            <div>ENTERPRISES</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-15',
      name: 'Al Muzaki Contracting',
      category: 'Construction',
      logoSvg: (
        <div className="flex items-center gap-2">
          <div className="text-left">
            <div className={`text-xs sm:text-sm font-bold ${textPrimary} tracking-wide`}>Al Muzaki</div>
            <div className={`text-[8px] ${textSecondary} font-arabic leading-none`}>شركة المزكي للمقاولات</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-16',
      name: 'GROVE VILLAGE',
      category: 'Retail',
      logoSvg: (
        <div className="flex items-center gap-2">
          <span className={`text-lg font-bold ${textPrimary} tracking-wider`}>GV</span>
          <div className={`text-[8px] ${textSecondary} font-mono tracking-widest border-l ${borderSubtle} pl-2`}>
            <div>جروف فيليج</div>
            <div>GROVE VILLAGE</div>
          </div>
        </div>
      )
    },
    {
      id: 'client-17',
      name: 'ecocoast',
      category: 'Engineering',
      logoSvg: (
        <div className={`text-lg sm:text-xl font-black ${textPrimary} tracking-tight lowercase`}>
          eco<span className="font-light">coast</span>
        </div>
      )
    },
    {
      id: 'client-18',
      name: 'Cloud Concept',
      category: 'Technology',
      logoSvg: (
        <div className="flex items-center gap-1.5">
          <svg className={`w-5 h-5 ${textPrimary}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.5 19x-11a4.5 4.5 0 111.08-8.87A5 5 0 0119.5 12 3.5 3.5 0 0117.5 19z" />
          </svg>
          <div className="text-left font-sans">
            <div className={`text-xs sm:text-sm font-bold ${textPrimary} leading-none`}>Cloud</div>
            <div className={`text-[8px] ${textSecondary} uppercase tracking-wider font-light`}>Concept</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-3 mb-10 text-left"
      >
        <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight ${
          isDarkMode ? 'text-white' : 'text-zinc-900'
        }`}>
          Our Clients
        </h2>
        <p className={`text-sm sm:text-base lg:text-lg font-serif italic max-w-3xl leading-relaxed ${
          isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
        }`}>
          Trusted by some of the region&apos;s most recognised names across real estate, finance, F&amp;B, and government.
        </p>
      </motion.div>

      {/* Grid Container with Clean 1px Border Lines */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04
            }
          }
        }}
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-t border-l rounded-2xl overflow-hidden transition-colors duration-300 ${
          isDarkMode ? 'border-zinc-800/80 bg-black' : 'border-zinc-200 bg-white shadow-sm'
        }`}
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className={`h-28 sm:h-32 border-b border-r p-4 flex items-center justify-center transition-all duration-300 group relative overflow-hidden ${
              isDarkMode 
                ? 'border-zinc-800/80 bg-zinc-950/40 hover:bg-zinc-900/80' 
                : 'border-zinc-200 bg-white hover:bg-zinc-50'
            }`}
          >
            {/* Hover Subtle Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
              isDarkMode ? 'bg-white/5' : 'bg-black/5'
            }`} />

            {/* Logo Display */}
            <div className="relative z-10 flex items-center justify-center text-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 select-none">
              {client.logoSvg}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
