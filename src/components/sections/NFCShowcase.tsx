import React, { useState } from 'react';
import { CreditCard, QrCode, Smartphone, CheckCircle, ShieldCheck, ArrowRight, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPackageWhatsAppUrl } from '../../utils/whatsapp';

export const NFCShowcase: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'front' | 'back'>('front');

  return (
    <section className="py-20 bg-charcoal-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-forest-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Hardware + Contactless Tech
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Collect 5-Star Google Reviews at Your Counter in Under 3 Seconds.
            </h2>

            <p className="text-base text-charcoal-300 leading-relaxed max-w-xl">
              Eliminate 100% of the customer friction. Satisfied customers never have to type your business name, open Google Maps, or search for review links. They simply tap their phone on the BizTap NFC Card, and your review dialog opens immediately.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-charcoal-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero customer app download required</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Works with iPhone & Android natively</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Laser-printed QR backup for older phones</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>₹3,000 one-time • Zero monthly subscriptions</span>
              </div>
            </div>

            {/* Google Policy Assurance Note */}
            <div className="bg-charcoal-900/90 rounded-xl p-4 border border-charcoal-800 text-xs text-charcoal-400 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">100% Google Policy Compliant:</strong> We strictly follow Google Review guidelines. No review gating, no selective filtering, and no prohibited incentives. Pure frictionless customer convenience.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getPackageWhatsAppUrl('NFC Smart Review Card', '₹3,000')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 transition-all shadow-md flex items-center gap-2"
              >
                <span>Order NFC Card for ₹3,000</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/services/nfc-smart-review-cards"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-cream-200 hover:text-white hover:bg-white/5 border border-charcoal-700 transition-colors"
              >
                Learn How NFC Works
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Card Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Card Flip Switch */}
            <div className="flex items-center gap-2 bg-charcoal-900 p-1 rounded-xl border border-charcoal-800 mb-6 text-xs font-semibold">
              <button
                onClick={() => setActiveSide('front')}
                className={`px-4 py-1.5 rounded-lg transition-colors ${
                  activeSide === 'front'
                    ? 'bg-emerald-500 text-charcoal-950 font-bold'
                    : 'text-charcoal-400 hover:text-white'
                }`}
              >
                Front Face (NFC Tap)
              </button>
              <button
                onClick={() => setActiveSide('back')}
                className={`px-4 py-1.5 rounded-lg transition-colors ${
                  activeSide === 'back'
                    ? 'bg-emerald-500 text-charcoal-950 font-bold'
                    : 'text-charcoal-400 hover:text-white'
                }`}
              >
                Back Face (Laser QR Backup)
              </button>
            </div>

            {/* Physical Card Mockup Container */}
            <div className="relative w-full max-w-[360px] aspect-[1.586] rounded-2xl p-6 shadow-2xl transition-all duration-300 border border-emerald-500/30 bg-gradient-to-tr from-forest-950 via-[#0E281F] to-charcoal-900 overflow-hidden flex flex-col justify-between group">
              {/* Matte texture overlay */}
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>

              {activeSide === 'front' ? (
                <>
                  {/* Front Face Content */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cream-200">
                        BizTap Smart Card
                      </span>
                    </div>

                    {/* Contactless symbol */}
                    <div className="flex items-center gap-1 text-emerald-400">
                      <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none">
                        <path d="M7 6C10 4 14 4 17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8.5 9.5C10.5 8 13.5 8 15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 13C11 12 13 12 14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Center Brand Placeholder */}
                  <div className="my-auto py-2">
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <h4 className="text-lg font-extrabold tracking-tight text-white">
                      Your Business Name Here
                    </h4>
                    <p className="text-[11px] text-emerald-300/80">
                      Tap phone here to review us on Google
                    </p>
                  </div>

                  {/* Bottom Strip */}
                  <div className="flex items-center justify-between text-[10px] text-charcoal-400 border-t border-white/10 pt-3">
                    <span>Premium Matte PVC Finish</span>
                    <span className="text-emerald-400 font-mono">NFC ENABLED</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Back Face Content (QR Code backup) */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-cream-200 uppercase tracking-wider">
                      Universal QR Backup
                    </span>
                    <span className="text-[10px] text-charcoal-400">No App Required</span>
                  </div>

                  <div className="flex items-center justify-center py-2">
                    {/* Simulated High-Contrast QR Code */}
                    <div className="bg-white p-3 rounded-xl shadow-md border border-white">
                      <div className="w-24 h-24 bg-charcoal-900 rounded-lg p-2 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white"></div>
                          </div>
                          <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white"></div>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-2 h-2 bg-emerald-400"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white"></div>
                          </div>
                          <div className="w-2 h-2 bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-charcoal-300">
                    Point camera at QR code if NFC is unavailable on your smartphone
                  </div>
                </>
              )}
            </div>

            <p className="text-xs text-charcoal-400 text-center mt-4">
              Delivered across India via express courier with customized company logo printing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
