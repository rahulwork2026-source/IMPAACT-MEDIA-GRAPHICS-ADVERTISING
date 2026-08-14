import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Award, CheckCircle2, Shield, Wrench, Sparkles, MapPin, ArrowRight, Target, Eye, ShieldCheck, Heart, Compass, Star, HelpCircle, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingObjects } from './FloatingObjects';
import { MarqueeTicker } from './MarqueeTicker';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of 3D signages do you manufacture in Oman?',
      answer: 'We fabricate 3D illuminated LED channel letters, stainless steel and brass 3D logos, rooftop structural signages, acrylic pylon signs, and neon flex displays engineered specifically for GCC weather extremes.'
    },
    {
      question: 'How long do your commercial vehicle wraps last under the Oman sun?',
      answer: 'We use premium 3M and Avery Dennison cast vinyl with UV-protective lamination. Applied inside our climate-controlled wrapping bay, our vehicle wraps last 3 to 5+ years without fading or peeling.'
    },
    {
      question: 'Do you assist with municipality permits and engineering approvals?',
      answer: 'Yes! We offer complete end-to-end service including engineering shop drawings, structural safety assessments, and assistance with Muscat Municipality / Ministry approvals.'
    },
    {
      question: 'What is the standard lead time for a custom signage project?',
      answer: 'Standard 3D illuminated signages take between 5 to 10 working days from design sign-off to site installation. Urgent turnarounds can be expedited at our in-house facility.'
    },
    {
      question: 'Where is your manufacturing facility located?',
      answer: 'Our state-of-the-art production facility, CNC fiber laser workshop, and specialized vehicle wrapping bay are located in Muscat, Sultanate of Oman.'
    },
    {
      question: 'Do you offer warranty and ongoing maintenance support?',
      answer: 'Yes! All LED light modules, power transformers, and structural signage frames come with an extended warranty and optional Annual Maintenance Contracts (AMC).'
    }
  ];
  return (
    <div className="bg-black text-white space-y-16 sm:space-y-20 lg:space-y-24 pb-24 relative overflow-hidden">
      {/* Background Floating Objects Animation Layer */}
      <FloatingObjects />

      {/* 1. TOP HERO BANNER IMAGE WITH OVERLAY */}
      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Banner Background Image */}
        <img
          src="/images/banner_image_2.png"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover filter brightness-80 contrast-105 saturate-110"
        />

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />

        {/* Banner Content: Only ABOUT US text and Breadcrumb */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-lg"
          >
            ABOUT <span className="text-[#e52425]">US</span>
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
            <span className="text-white font-bold">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Moving Text Ticker */}
      <div className="-mt-16 sm:-mt-20 lg:-mt-24">
        <MarqueeTicker
          variant="red"
          speed="medium"
          items={[
            '20 YEARS OF CRAFTSMANSHIP IN OMAN',
            'ESTABLISHED 2005 IN MUSCAT',
            'IN-HOUSE FABRICATION FACTORY',
            'GOVERNMENT & CORPORATE TRUSTED',
            'IMPAACT MEDIA'
          ]}
        />
      </div>

      {/* 2. ABOUT US SECTION (Text on Left, Image on Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e52425]/10 border border-[#e52425]/30 text-xs font-bold uppercase tracking-widest text-[#e52425]">
                <Award className="w-3.5 h-3.5 text-[#e52425]" />
                <span>20 YEARS OF ENGINEERING EXCELLENCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Pioneering 3D Signages, Vehicle Wraps & <span className="text-[#e52425]">Visual Media in Oman</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Founded in 2005 in Muscat, <strong className="text-white font-semibold">IMPAACT MEDIA GRAPHICS & ADVERTISING</strong> has grown into Oman’s most trusted full-service agency. We specialize in precision 3D illuminated channel letters, high-durability commercial vehicle wraps, UV printing, and custom exhibition booths.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Equipped with in-house CNC channel benders, fiber laser cutters, flatbed UV printing machinery, and a temperature-controlled vehicle wrapping bay, we ensure zero-compromise quality built specifically to withstand GCC weather extremes.
            </p>
          </motion.div>

          {/* Right Column: Featured Showcase Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#e52425]/30 to-red-900/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-zinc-950 shadow-2xl group hover:border-[#e52425]/60 transition-all duration-300 bw-glass">
              <img
                src="/images/portfolio2.png"
                alt="About Us IMPAACT MEDIA Oman Factory"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              {/* Floating Badge: Years in Oman */}
              <div className="absolute top-5 left-5 bg-black/85 backdrop-blur-md border border-[#e52425]/50 px-4 py-2.5 rounded-xl text-white shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e52425] flex items-center justify-center font-mono font-black text-white text-lg">
                  20
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">Years in Oman</div>
                  <div className="text-[10px] text-zinc-400">Since 2005 • Muscat HQ</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Our Mission, Our Vision, Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center md:text-left mb-10"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#e52425] bg-[#e52425]/10 border border-[#e52425]/30 px-3 py-1 rounded-full">
            Foundational Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Mission, Vision & Core Values
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Guiding principles powering 20 years of craftsmanship across Oman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-950 border border-white/10 hover:border-[#e52425]/50 rounded-2xl p-8 bw-glass space-y-5 transition-all shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#e52425]" />
            <div className="w-12 h-12 rounded-xl bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center text-[#e52425] group-hover:bg-[#e52425] group-hover:text-white transition-colors duration-300">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#e52425]">01 / PURPOSE</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Our Mission</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              To empower Omani businesses and corporate fleets with high-impact 3D signages, precision vehicle wraps, and innovative graphic advertising through 20 years of local engineering mastery.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-950 border border-white/10 hover:border-[#e52425]/50 rounded-2xl p-8 bw-glass space-y-5 transition-all shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#e52425]" />
            <div className="w-12 h-12 rounded-xl bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center text-[#e52425] group-hover:bg-[#e52425] group-hover:text-white transition-colors duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#e52425]">02 / FUTURE</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Our Vision</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              To remain Oman's most trusted signage and wrap agency—setting benchmarks for structural durability, LED innovation, and visual excellence across the region.
            </p>
          </motion.div>

          {/* Our Values */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-zinc-950 border border-white/10 hover:border-[#e52425]/50 rounded-2xl p-8 bw-glass space-y-5 transition-all shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#e52425]" />
            <div className="w-12 h-12 rounded-xl bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center text-[#e52425] group-hover:bg-[#e52425] group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#e52425]">03 / CODE</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Our Core Values</h3>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52425] shrink-0 mt-0.5" />
                <span><strong>GCC Grade Engineering:</strong> Weather-proof materials for Oman heat.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52425] shrink-0 mt-0.5" />
                <span><strong>Relentless Precision:</strong> In-house CNC laser & 3D channel benders.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52425] shrink-0 mt-0.5" />
                <span><strong>Integrity & Speed:</strong> Transparent pricing & punctual site installations.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 border border-white/15 rounded-3xl p-8 sm:p-12 bw-glass space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#e52425] uppercase tracking-widest inline-flex items-center gap-1.5 bg-[#e52425]/10 border border-[#e52425]/20 px-3.5 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Got Questions? We Have Answers
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Everything you need to know about our 3D signages, vehicle wraps, permits, and execution process in Oman.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-black/60 border border-white/10 hover:border-[#e52425]/40 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                      <span className="text-[#e52425] font-mono text-xs">0{index + 1}.</span>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-zinc-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#e52425] text-white border-[#e52425]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-zinc-300 border-t border-white/5 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-16">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#e52425]">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl font-black text-white">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Feedback from operations managers and marketing leads across Muscat & Oman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "IMPAACT MEDIA fabricated our 3D LED rooftop signage at Regus. Their engineering and high-altitude installation standard in Muscat were flawless.",
              author: "Commercial Operations Director",
              company: "Regus Oman",
              rating: 5
            },
            {
              quote: "Wrapped our entire fleet of delivery utility trucks with 3M cast vinyl. After 2 years under Oman sun, zero peeling or color fading. Highly recommended!",
              author: "Fleet Logistics Manager",
              company: "Averda Environmental",
              rating: 5
            },
            {
              quote: "Their event booth fabrication for Oasis Oman was the highlight of the exhibition. Creative 3D interior design and fast turnaround time.",
              author: "Brand Marketing Lead",
              company: "Oasis Oman",
              rating: 5
            }
          ].map((t, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -4 }}
              className="bg-zinc-950 border border-white/10 hover:border-[#e52425]/40 rounded-2xl p-6 bw-glass space-y-4 transition-colors"
            >
              <div className="flex gap-1 text-[#e52425]">
                {[...Array(t.rating)].map((_, r) => (
                  <Star key={r} className="w-4 h-4 fill-[#e52425] stroke-none" />
                ))}
              </div>
              <p className="text-sm text-zinc-300 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-sm text-white">{t.company}</div>
                <div className="text-xs text-zinc-500">{t.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 border border-[#e52425]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-white">Have a project in mind?</h3>
            <p className="text-xs text-zinc-400">Talk directly with our senior signage and wrapping engineers in Muscat.</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#e52425] text-white font-extrabold px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#c81e20] transition shadow-lg shadow-[#e52425]/20"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="border border-white/20 text-white font-bold px-6 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

