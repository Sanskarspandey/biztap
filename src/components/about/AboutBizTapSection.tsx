import React from 'react';
import {
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { AGENCY } from '../../data/agency';

export const AboutBizTapSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>About BizTap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Empowering Indian Businesses to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Own Their Digital Future
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            BizTap is a digital solutions agency created with a direct purpose: to give small and medium businesses in India modern, high-converting websites and NFC review tools without agency inflation or lock-in traps.
          </p>
        </div>

        {/* 2-Column Story / Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Our Mission & Philosophy */}
          <div className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Built for Independent Business Owners
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Many local businesses in India—clinics, retail shops, schools, cafés, and salons—struggle between predatory delivery and aggregator platforms that take 25–35% cuts, or overpriced agencies that deliver bloated templates with hidden monthly fees.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                BizTap bridges this gap. We provide clean, fast websites and physical NFC cards that build your own direct customer relationships, collect authentic Google reviews, and route leads straight to your WhatsApp.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Pan-India Service</span>
              </div>
            </div>
          </div>

          {/* Column 2: The BizTap Commitments */}
          <div className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Our Core Commitments
              </h3>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">100% Code & Asset Ownership</strong>
                    You own your website, code, images, and domain outright. No vendor lock-in.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Transparent INR Pricing</strong>
                    Every rupee is declared in advance. One-time development costs and optional hosting are clearly separated.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct WhatsApp Communication</strong>
                    No ticketing systems. Message us directly on WhatsApp or call anytime during business hours.
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md shadow-blue-900/30"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
