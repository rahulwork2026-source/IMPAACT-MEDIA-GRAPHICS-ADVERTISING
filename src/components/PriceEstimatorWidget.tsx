import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle } from 'lucide-react';

interface PriceEstimatorWidgetProps {
  onOpenQuoteModalWithDetails?: (details: string) => void;
}

export const PriceEstimatorWidget: React.FC<PriceEstimatorWidgetProps> = ({
  onOpenQuoteModalWithDetails
}) => {
  const [serviceType, setServiceType] = useState<'signage' | 'wrap' | 'printing' | 'branding'>('signage');
  const [sizeSqM, setSizeSqM] = useState<number>(5);
  const [illumination, setIllumination] = useState<boolean>(true);
  const [installationNeeded, setInstallationNeeded] = useState<boolean>(true);

  // Price calculations
  const calculateEstimate = () => {
    let baseRate = 40; // OMR per sq meter
    if (serviceType === 'signage') baseRate = illumination ? 85 : 50;
    if (serviceType === 'wrap') baseRate = 60;
    if (serviceType === 'printing') baseRate = 30;
    if (serviceType === 'branding') return { min: 250, max: 800 };

    let total = baseRate * sizeSqM;
    if (installationNeeded) total += 50 + sizeSqM * 8;

    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15)
    };
  };

  const estimate = calculateEstimate();

  const handleWhatsAppQuote = () => {
    const text = `Hello IMPAACT MEDIA, I used your online estimator on your website:
- Service: ${serviceType.toUpperCase()}
- Size/Scale: ${sizeSqM} sq. meters
- Illumination: ${illumination ? 'Yes (3D LED Backlit)' : 'Standard Non-Illuminated'}
- On-Site Installation: ${installationNeeded ? 'Required in Oman' : 'Self Installation'}
- Estimated Price Range: OMR ${estimate.min} - OMR ${estimate.max}

Please contact me to discuss finalized specifications!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/96893507021?text=${encodedText}`, '_blank');
  };

  return (
    <div className="w-full bg-zinc-950 border border-white/20 rounded-2xl p-6 md:p-8 bw-glass text-white space-y-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="w-10 h-10 rounded-lg bg-white text-black font-extrabold flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white">
            Instant Signage & Graphics Estimator
          </h3>
          <p className="text-xs text-zinc-400">
            Configure your project parameters for an instant budget calculation in OMR.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Select Service Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'signage', label: '3D LED Signage' },
                { id: 'wrap', label: 'Vehicle Wrap' },
                { id: 'printing', label: 'UV Print / Banner' },
                { id: 'branding', label: 'Brand Naming' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setServiceType(item.id as any)}
                  className={`py-2.5 px-3 text-xs font-bold rounded-lg border text-center transition ${
                    serviceType === item.id
                      ? 'bg-white text-black border-white'
                      : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Scale Slider */}
          {serviceType !== 'branding' && (
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="uppercase tracking-wider text-zinc-400">Project Size (Sq. Meters / Area)</span>
                <span className="text-white text-sm bg-white/10 px-2.5 py-0.5 rounded border border-white/20">
                  {sizeSqM} m²
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={sizeSqM}
                onChange={(e) => setSizeSqM(Number(e.target.value))}
                className="w-full accent-white bg-zinc-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                <span>Small Sign (1m²)</span>
                <span>Medium Storefront (15m²)</span>
                <span>Large Rooftop (50m²)</span>
              </div>
            </div>
          )}

          {/* Toggles */}
          {serviceType === 'signage' && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-white/10">
              <span className="text-xs font-semibold text-zinc-300">3D LED Internal Illumination</span>
              <button
                onClick={() => setIllumination(!illumination)}
                className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                  illumination ? 'bg-white' : 'bg-zinc-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-black transition-transform ${
                    illumination ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-white/10">
            <span className="text-xs font-semibold text-zinc-300">On-Site Installation & Crane Setup</span>
            <button
              onClick={() => setInstallationNeeded(!installationNeeded)}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                installationNeeded ? 'bg-white' : 'bg-zinc-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-black transition-transform ${
                  installationNeeded ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Display Output */}
        <div className="bg-zinc-900/90 rounded-xl p-6 border border-white/15 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Estimated Budget Range
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-white mt-2 font-mono">
              OMR {estimate.min} – {estimate.max}
            </div>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              * Estimate includes high-grade materials, weather-resistant coating, and initial CAD proof. Final site survey required for official quote.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={handleWhatsAppQuote}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3 px-4 rounded-lg text-sm transition shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Estimate to WhatsApp (+968 93507021)</span>
            </button>

            {onOpenQuoteModalWithDetails && (
              <button
                onClick={() => onOpenQuoteModalWithDetails(`Estimated range: OMR ${estimate.min}-${estimate.max} for ${serviceType.toUpperCase()} (${sizeSqM}m²)`)}
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-bold py-3 px-4 rounded-lg text-sm transition"
              >
                <span>Request Detailed Official PDF Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
