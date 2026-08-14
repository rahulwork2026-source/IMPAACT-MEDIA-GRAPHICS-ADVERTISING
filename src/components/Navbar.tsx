import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone, ChevronDown, Sparkles, Moon, Sun, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModal: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuoteModal,
  isDarkMode = true,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: ActiveTab; hasDropdown?: boolean }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Our Services', tab: 'services', hasDropdown: true },
    { label: 'Our Portfolio', tab: 'portfolio' },
    { label: 'Insights', tab: 'blog' },
    { label: 'Contact Us', tab: 'contact' },
  ];

  const serviceCategories = [
    { name: '3D Printing & 3D Laser Cut', id: 'srv-3d-printing' },
    { name: 'Social Media & Digital Marketing', id: 'srv-social-marketing' },
    { name: 'Brand Naming & Logo Design', id: 'srv-brand-naming' },
    { name: '3D LED Signages & Billboards', id: 'srv-signages' },
    { name: 'Vehicle & Commercial Fleet Wraps', id: 'srv-vehicle-wraps' },
    { name: 'UV Printing & Engraving', id: 'srv-uv-printing' },
    { name: 'Brochures, Catalogues & Menus', id: 'srv-brochures' },
    { name: 'Corporate Websites & E-Flyers', id: 'srv-websites' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Header Container */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isDarkMode
            ? scrolled 
              ? 'bg-[#121316]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-lg text-[#f4f4f6]' 
              : 'bg-[#121316]/85 backdrop-blur-md border-b border-white/[0.05] text-[#f4f4f6]'
            : scrolled
              ? 'bg-[#f3f4f6]/95 backdrop-blur-xl border-b border-[#e2e4e9] shadow-md text-[#18191e]'
              : 'bg-[#f3f4f6]/90 backdrop-blur-md border-b border-[#e2e4e9]/80 text-[#18191e]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between min-h-[62px] sm:min-h-[68px] md:min-h-[72px] gap-2 sm:gap-3">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none py-0.5 shrink-0 min-w-0"
            aria-label="IMPAACT MEDIA Home"
          >
            <Logo variant={isDarkMode ? "dark" : "light"} size="md" />
          </button>

          {/* Desktop Navigation Links (Visible on lg 1024px+ screens - strictly single line) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 whitespace-nowrap shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab || (activeTab === 'blog-detail' && item.tab === 'blog');

              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.tab}
                    className="relative group shrink-0"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.tab)}
                      className={`relative px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 whitespace-nowrap leading-none ${
                        isActive || servicesDropdownOpen
                          ? isDarkMode ? 'text-white font-bold' : 'text-zinc-950 font-bold'
                          : isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 shrink-0 ${servicesDropdownOpen ? 'rotate-180 text-[#e52425]' : isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`} />
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#e52425]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className={`absolute top-full left-0 w-72 rounded-xl p-2 z-50 backdrop-blur-2xl border shadow-2xl transition-colors ${
                            isDarkMode
                              ? 'bg-[#18191e] border-white/[0.08] text-[#f4f4f6]'
                              : 'bg-white border-[#e2e4e9] text-[#18191e] shadow-lg'
                          }`}
                        >
                          <div className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 border-b flex items-center justify-between ${
                            isDarkMode ? 'text-zinc-400 border-white/[0.06]' : 'text-zinc-500 border-zinc-200'
                          }`}>
                            <span>Our Capabilities</span>
                            <Sparkles className="w-3 h-3 text-[#e52425]" />
                          </div>
                          <div className="py-1">
                            {serviceCategories.map((srv) => (
                              <button
                                key={srv.id}
                                onClick={() => handleNavClick('services')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between group/srv ${
                                  isDarkMode
                                    ? 'text-zinc-300 hover:text-white hover:bg-white/10'
                                    : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                                }`}
                              >
                                <span>{srv.name}</span>
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/srv:opacity-100 text-[#e52425] transition" />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`relative px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap leading-none shrink-0 ${
                    isActive 
                      ? isDarkMode ? 'text-white font-bold' : 'text-zinc-950 font-bold'
                      : isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#e52425]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
            {/* White/Dark Rounded Pill 'Get in touch' button */}
            <button
              onClick={onOpenQuoteModal}
              className={`hidden sm:flex font-bold px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-2 rounded-full text-[11px] uppercase tracking-wider transition-all duration-200 shadow-md items-center gap-1 focus:outline-none hover:scale-105 active:scale-95 whitespace-nowrap shrink-0 ${
                isDarkMode 
                  ? 'bg-white hover:bg-zinc-200 text-black' 
                  : 'bg-black hover:bg-zinc-800 text-white'
              }`}
            >
              <span className="whitespace-nowrap">Get in touch</span>
            </button>

            {/* Direct Call Circle Button */}
            <a
              href="tel:+96893507021"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 shrink-0 ${
                isDarkMode 
                  ? 'bg-zinc-900 border border-white/15 hover:bg-zinc-800 text-white hover:border-[#e52425]/50' 
                  : 'bg-zinc-100 border border-zinc-300 hover:bg-zinc-200 text-zinc-900'
              }`}
              title="Call Us Directly"
              aria-label="Call +968 93507021"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Day / Night Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 shrink-0 ${
                isDarkMode 
                  ? 'bg-zinc-900 border border-white/15 hover:bg-zinc-800 text-white hover:border-[#e52425]/50' 
                  : 'bg-zinc-100 border border-zinc-300 hover:bg-zinc-200 text-zinc-900'
              }`}
              title={isDarkMode ? 'Switch to Light Mode (Day)' : 'Switch to Dark Mode (Night)'}
              aria-label="Toggle Day / Night Mode"
            >
              {isDarkMode ? (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
              ) : (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
              )}
            </button>

            {/* Header Hamburger Menu Button for Tablet (Hidden on mobile and desktop lg+) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hidden sm:flex lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full items-center justify-center transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 shrink-0 ${
                isDarkMode 
                  ? 'bg-zinc-900 border border-white/15 hover:bg-zinc-800 text-white' 
                  : 'bg-zinc-100 border border-zinc-300 hover:bg-zinc-200 text-zinc-900'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#e52425]" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Menu Trigger for Mobile Screens (Tequila.ae style floating bottom button) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] pointer-events-auto drop-shadow-2xl">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-[2.5px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-[#e52425] shadow-2xl transition-transform active:scale-95 focus:outline-none"
          aria-label="Toggle Mobile Navigation Menu"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-950 rounded-full flex items-center justify-center text-white border border-white/10 shadow-inner">
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#e52425]" />
            ) : (
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
                <span className="w-5 h-0.5 bg-white rounded-full"></span>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Fullscreen Card Drawer Navigation Overlay (Matching Tequila.ae Screenshot Style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-2 sm:inset-6 z-[100] bg-[#141519] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Overlay Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <button onClick={() => handleNavClick('home')} className="focus:outline-none">
                <Logo variant="dark" size="md" />
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="bg-[#1f2128] hover:bg-[#272932] text-white border border-white/10 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full transition"
                >
                  Get in touch
                </button>
                
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#1f2128] border border-white/10 text-white flex items-center justify-center hover:bg-[#272932] transition"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Main Menu Area: Clean, focused navigation links */}
            <div className="my-auto py-6">
              <div className="space-y-4">
                {navItems.map((item) => {
                  const isActive = activeTab === item.tab || (activeTab === 'blog-detail' && item.tab === 'blog');
                  
                  if (item.hasDropdown) {
                    return (
                      <div key={item.tab} className="space-y-2">
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className={`w-full flex items-center justify-between text-left transition-colors ${
                            isActive ? 'text-[#e52425]' : 'text-white hover:text-zinc-300'
                          }`}
                        >
                          <span className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                            {item.label}
                          </span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#e52425]' : 'text-zinc-500'}`} />
                        </button>

                        {/* Services Sub-Items Accordion */}
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 border-l border-white/10 my-2 overflow-hidden"
                            >
                              {serviceCategories.map((srv) => (
                                <button
                                  key={srv.id}
                                  onClick={() => handleNavClick('services')}
                                  className="block text-left text-xs text-zinc-400 hover:text-white py-1 transition-colors"
                                >
                                  {srv.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.tab}
                      onClick={() => handleNavClick(item.tab)}
                      className={`block w-full text-left text-2xl sm:text-3xl font-bold tracking-tight uppercase transition-colors ${
                        isActive ? 'text-[#e52425]' : 'text-white hover:text-zinc-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

                {/* FAQ Link */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="block w-full text-left text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white hover:text-[#e52425] transition-colors"
                >
                  FAQ &amp; Quote
                </button>
              </div>

              {/* WhatsApp & Instagram Options with Icons */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Direct Contact
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/96893507021?text=Hello%20IMPAACT%20MEDIA%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] text-white p-3 rounded-2xl flex items-center gap-2.5 transition group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.709 1.467h.005c6.554 0 11.89-5.335 11.893-11.892a11.821 11.821 0 00-3.488-8.413" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold leading-tight">WhatsApp</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-white/80">Chat directly</span>
                    </div>
                  </a>

                  {/* Instagram Button */}
                  <a
                    href="https://instagram.com/impaactmedia_oman"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-pink-500/15 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-pink-500/40 hover:border-pink-500 text-white p-3 rounded-2xl flex items-center gap-2.5 transition group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold leading-tight">Instagram</span>
                      <span className="text-[10px] text-zinc-400 group-hover:text-white/80">@impaactmedia</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section inside Overlay: Close button indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span className="text-[11px] text-zinc-500">© IMPAACT MEDIA Oman</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-wider text-zinc-300 hover:text-white flex items-center gap-1 font-bold"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5 text-[#e52425]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom-Right Contact Dock: Instagram top, Rotating "LET'S TALK NOW" WhatsApp bottom */}
      <div className="fixed bottom-5 right-3 sm:bottom-7 sm:right-6 md:bottom-10 md:right-8 z-[90] flex flex-col items-center gap-3 sm:gap-4.5 pointer-events-auto">
        {/* Top: Floating Instagram Button */}
        <a
          href="https://instagram.com/impaactmedia_oman"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/25 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
          title="Follow on Instagram"
          aria-label="Instagram @impaactmedia_oman"
        >
          <Instagram className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </a>

        {/* Bottom: Floating WhatsApp "LET'S TALK NOW" Rotating Badge */}
        <div className="relative flex items-center justify-center group">
          {/* Rotating SVG Curved Text Ring (Matching Tequila.ae reference design) */}
          <div className="absolute -inset-2.5 sm:-inset-3 md:-inset-4 animate-[spin_12s_linear_infinite] pointer-events-none opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="whatsappTextPathDock"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className={`text-[8.5px] font-black uppercase tracking-widest drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] ${
                isDarkMode ? 'fill-white' : 'fill-zinc-900'
              }`}>
                <textPath href="#whatsappTextPathDock" startOffset="0%">
                  • LET'S TALK NOW • LET'S TALK NOW
                </textPath>
              </text>
            </svg>
          </div>

          {/* Central Green WhatsApp Circular Button */}
          <a
            href="https://wa.me/96893507021?text=Hello%20IMPAACT%20MEDIA%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp +968 93507021"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.709 1.467h.005c6.554 0 11.89-5.335 11.893-11.892a11.821 11.821 0 00-3.488-8.413" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};


