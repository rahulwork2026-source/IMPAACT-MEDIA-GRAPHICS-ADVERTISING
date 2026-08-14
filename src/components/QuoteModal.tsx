import React, { useState } from 'react';
import { QuoteRequest } from '../types';
import { X, CheckCircle, Send, Phone, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRequirements?: string;
  onAddQuoteRequest: (quote: QuoteRequest) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialRequirements = '',
  onAddQuoteRequest,
}) => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceCategory, setServiceCategory] = useState('3D LED & Architectural Signages');
  const [requirements, setRequirements] = useState(initialRequirements);
  const [estimatedBudget, setEstimatedBudget] = useState('OMR 500 - 1,500');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuote: QuoteRequest = {
      id: `q-${Date.now()}`,
      clientName: clientName || 'Client Inquirer',
      email: email || 'contact@client.om',
      phone: phone || '+968 93507021',
      company: company || 'N/A',
      serviceCategory,
      requirements: requirements || 'Requested custom quote from website modal.',
      estimatedBudget,
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAddQuoteRequest(newQuote);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-zinc-950 border border-[#e52425]/40 rounded-2xl p-6 md:p-8 bw-glass text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white hover:border-[#e52425] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 bg-[#e52425] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Quote Request Submitted!
            </h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{clientName}</strong>. Our senior advertising engineers at IMPAACT MEDIA will review your specifications and reach out within 2 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://wa.me/96893507021"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-3 text-xs uppercase tracking-widest transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Direct on WhatsApp (+968 93507021)</span>
              </a>
              <button
                onClick={resetAndClose}
                className="bg-white text-black font-extrabold px-5 py-3 text-xs uppercase tracking-widest hover:bg-zinc-200 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#e52425]">
                IMPAACT MEDIA • Oman
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Request Custom Quote
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill in your project details for a tailored estimate from our 20-year experienced team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salim Al-Omani"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
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
                  placeholder="salim@company.om"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hills Retail / Regus"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                Primary Service Needed
              </label>
              <select
                value={serviceCategory}
                onChange={(e) => setServiceCategory(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
              >
                <option value="3D Printing">3D Printing</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Brand Naming">Brand Naming</option>
                <option value="Logo Design">Logo Design</option>
                <option value="E-Flyers">E-Flyers</option>
                <option value="Signages">Signages (3D LED & Architectural)</option>
                <option value="Vehicle Wraps">Vehicle Wraps</option>
                <option value="3D Laser Cut">3D Laser Cut</option>
                <option value="Engraving">Engraving</option>
                <option value="UV Printing">UV Printing</option>
                <option value="Billboards & Site Signs">Billboards & Site Signs</option>
                <option value="Pull Up & Flag Banners">Pull Up & Flag Banners</option>
                <option value="Directional Signs">Directional Signs</option>
                <option value="Brochures & Catalogues">Brochures & Catalogues</option>
                <option value="Video & Photography">Video & Photography</option>
                <option value="Mall Branding">Mall Branding</option>
                <option value="Corporate Stationery">Corporate Stationery</option>
                <option value="Print Management">Print Management</option>
                <option value="Business Stationery">Business Stationery</option>
                <option value="Menu Printing">Menu Printing</option>
                <option value="Logo Animation">Logo Animation</option>
                <option value="Email signatures">Email signatures</option>
                <option value="Websites">Websites</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">
                Project Requirements & Specifications
              </label>
              <textarea
                rows={3}
                placeholder="Describe sign dimensions, vehicle type, site location in Muscat, or design ideas..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52425]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#e52425] hover:bg-[#c81e20] text-white font-extrabold py-3.5 px-6 text-xs uppercase tracking-widest transition shadow-xl shadow-[#e52425]/25"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

