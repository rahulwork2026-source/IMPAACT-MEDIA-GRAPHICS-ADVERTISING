import React from 'react';
import { ActiveTab } from '../types';
import Logo from './Logo';
import { motion } from 'motion/react';
import {
  ArrowUp,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuoteModal: () => void;
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, isDarkMode = true }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNav = (tab: ActiveTab) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6 }}
      className={`border-t transition-colors duration-300 ${isDarkMode ? 'bg-[#141519] border-white/[0.08] text-[#f4f4f6]' : 'bg-[#eaecf0] border-[#e2e4e9] text-[#18191e]'}`}
    >
      <div className="container mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none flex items-center group transition-transform hover:opacity-90"
              aria-label="IMPAACT MEDIA Home"
            >
              <Logo
                id="footer-site-logo"
                variant={isDarkMode ? "dark" : "light"}
                size="md"
              />
            </button>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Delivering high-impact 3D illuminated signages, fleet vehicle
              wrapping, and brand identity across Muscat, Sultanate of Oman
              since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[#d62828] uppercase text-xs font-bold tracking-widest mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-zinc-400">

              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white"
                >
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white"
                >
                  Portfolio
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-white"
                >
                  Blog
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white"
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">

            <h4 className="text-[#d62828] uppercase text-xs font-bold tracking-widest mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-zinc-400">

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-left"
                >
                  • 3D LED Signages
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-left"
                >
                  • Fleet Vehicle Wraps
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-left"
                >
                  • UV Flatbed Printing
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-left"
                >
                  • Architectural Laser Cut
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white text-left"
                >
                  • Event Booths & Exhibits
                </button>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div className="md:col-span-3">

            <h4 className="text-[#d62828] uppercase text-xs font-bold tracking-widest mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d62828]" />
                <span className="text-zinc-400">
                  Muscat, Sultanate of Oman
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d62828]" />

                <a
                  href="tel:+96893507021"
                  className="hover:text-white text-zinc-400"
                >
                  +968 93507021 / 99742432
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d62828]" />

                <a
                  href="mailto:info@impaactmedia.om"
                  className="hover:text-white text-zinc-400"
                >
                  info@impaactmedia.om
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#d62828]" />

                <a
                  href="https://instagram.com/impaactmedia_oman"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white text-zinc-400 flex items-center gap-1"
                >
                  @impaactmedia_oman
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/[0.08] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-xs text-zinc-500">

            © {new Date().getFullYear()} IMPAACT MEDIA. All rights reserved by{' '}

            <a
              href="https://pixelprosolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-[#d62828]"
            >
              Pixel Pro Solution
            </a>

          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#18191e] hover:bg-[#d62828] transition"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>

        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;