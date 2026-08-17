import React, { useState } from 'react';
import { ActiveTab, QuoteRequest } from '../types';
import { Phone, Mail, MapPin, Instagram, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactViewProps {
  onAddQuoteRequest: (quote: QuoteRequest) => void;
  setActiveTab?: (tab: ActiveTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onAddQuoteRequest, setActiveTab }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [serviceCategory, setServiceCategory] = useState('3D LED & Architectural Signages');
  const [requirements, setRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuote: QuoteRequest = {
      id: `q-${Date.now()}`,
      clientName: name || 'Oman Inquiry',
      email: email || 'info@client.om',
      phone: phone || '+968 93507021',
      company: company || 'N/A',
      serviceCategory,
      requirements: requirements || 'Contact Form Submission',
      estimatedBudget: 'OMR 500 - 2,000',
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAddQuoteRequest(newQuote);
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white space-y-16 pb-16">
      {/* 1. TOP HERO BANNER IMAGE WITH OVERLAY */}
      <section className="page-banner relative w-full h-[240px] sm:h-[300px] lg:h-[340px] overflow-hidden flex items-center justify-center border-b border-white/10">
        {/* Banner Background Image */}
        <img
          src="/images/banner_image_2.png"
          alt="IMPAACT MEDIA Contact Muscat Headquarters Oman"
          className="absolute inset-0 w-full h-full object-cover filter brightness-80 contrast-105 saturate-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/85" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e52425]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-lg"
          >
            CONTACT <span className="text-[#e52425]">US</span>
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 font-mono tracking-wider"
          >
            <button onClick={() => setActiveTab && setActiveTab('home')} className="hover:text-[#e52425] transition-colors font-medium">Home</button>
            <span className="text-[#e52425] font-bold">/</span>
            <span className="text-white font-bold">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Map Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-zinc-950 border border-white/15 rounded-2xl p-6 md:p-8 bw-glass space-y-6">
              <h3 className="text-xl font-black text-white border-b border-white/10 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#e52425]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#e52425]">Call / WhatsApp Hotline</span>
                    <div className="font-mono font-bold text-white text-base">
                      <a href="tel:+96893507021" className="hover:text-[#e52425] transition-colors">+968 93507021</a> / <a href="tel:+96899742432" className="hover:text-[#e52425] transition-colors">99742432</a>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">Available Saturday to Thursday (8:00 AM – 7:00 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-[#e52425]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#e52425]">Official Instagram</span>
                    <div className="font-bold text-white">
                      <a href="https://instagram.com/impaactmedia_oman" target="_blank" rel="noreferrer" className="hover:text-[#e52425] transition-colors">
                        @impaactmedia_oman
                      </a>
                    </div>
                    <p className="text-xs text-zinc-400 mt-0.5">Daily installation photos & video reels</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#e52425]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#e52425]">Email Address</span>
                    <div className="font-bold text-white">
                      <a href="mailto:info@impaactmedia.om" className="hover:text-[#e52425] transition-colors">info@impaactmedia.om</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#e52425]/10 border border-[#e52425]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#e52425]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#e52425]">Muscat Office & Fabrication Bay</span>
                    <div className="font-bold text-white">Sultanate of Oman</div>
                    <p className="text-xs text-zinc-400 mt-0.5">Muscat Industrial Zone / Ruwi Commercial Area</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <a
                href="https://wa.me/96893507021"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 text-xs uppercase tracking-widest transition shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp (+968 93507021)</span>
              </a>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-zinc-950 border border-white/15 rounded-2xl p-4 bw-glass space-y-2">
              <div className="text-xs font-bold uppercase text-zinc-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#e52425]" />
                <span>Location Locator • Muscat, Oman</span>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-white">IMPAACT MEDIA WORKSHOP BAY</div>
                  <div className="text-xs text-zinc-400">Muscat, Sultanate of Oman</div>
                  <div className="text-[10px] text-[#e52425] font-mono pt-2">GPS Coordinates: 23.5880° N, 58.3829° E</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-950 border border-[#e52425]/30 rounded-2xl p-6 md:p-8 bw-glass text-white shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#e52425] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Inquiry Received!</h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-white">{name}</strong>. Your inquiry has been forwarded to our Muscat project team. We will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold px-6 py-2.5 text-xs uppercase tracking-widest transition shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Provide project details to receive a complimentary design survey and quote.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abdullah Al-Omani"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+968 9350 7021"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="abdullah@company.om"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Regus / Oasis / Hills Avenue"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                      Service Category Needed
                    </label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                    >
                      <option value="3D LED & Architectural Signages">3D LED & Architectural Signages</option>
                      <option value="Vehicle & Fleet Wrapping">Vehicle & Fleet Wrapping</option>
                      <option value="3D Printing & Large Format UV">3D Printing & Large Format UV</option>
                      <option value="Brand Naming & Logo Design">Brand Naming & Logo Design</option>
                      <option value="Event Management & Exhibition Booths">Event Management & Exhibition Booths</option>
                      <option value="3D Laser Cut & Engraving">3D Laser Cut & Engraving</option>
                      <option value="Mall Branding & Retail Display">Mall Branding & Retail Display</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                      Project Details & Dimensions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about sign sizing, vehicle quantity, installation location in Oman..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold py-3.5 px-6 text-xs uppercase tracking-widest transition shadow-xl shadow-[#e52425]/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
