import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { AGENCY } from '../../data/agency';

interface HeroSectionProps {
  onQuoteClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuoteClick,
}) => {
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    }
  };
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 min-h-[640px] lg:min-h-[740px] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto space-y-7">
        {/* Status Pill - Matches Screenshot 1 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm font-medium text-blue-300 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
          </span>
          <span>{AGENCY.statusText}</span>
        </div>

        {/* Main Two-Line Headline with Dual Gradient - Matches Screenshot 1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12]">
          <span className="text-white block">Digital Solutions for</span>
          <span className="inline-block mt-1">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
              Every
            </span>{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Business
            </span>
          </span>
        </h1>

        {/* Centered Supporting Description */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          We help Indian businesses grow online through high-converting, modern websites designed to build credibility and turn visitors into loyal customers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          {/* Primary CTA: Get a Free Quote (Scrolls to Contact Form) */}
          <a
            href="#contact"
            onClick={handleQuoteClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span>Get a Free Quote</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Secondary CTA: Message on WhatsApp */}
          <a
            href={AGENCY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-blue-400 hover:text-blue-300 bg-slate-900/50 hover:bg-blue-950/40 border border-blue-500/50 hover:border-blue-400 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Message Us</span>
          </a>
        </div>

        {/* Statistics Row - Matches Screenshot 1 */}
        <div className="pt-12 sm:pt-16 grid grid-cols-3 gap-6 sm:gap-12 max-w-xl mx-auto border-t border-slate-800/40">
          {/* Stat 1: 9+ Services */}
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {AGENCY.stats[0].value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {AGENCY.stats[0].label}
            </div>
          </div>

          {/* Stat 2: Fast Delivery + Mouse Scroll Indicator */}
          <div className="flex flex-col items-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {AGENCY.stats[1].value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {AGENCY.stats[1].label}
            </div>
            {/* Animated Mouse Scroll Indicator */}
            <div className="pt-2">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#services');
                }}
                className="w-4 h-7 rounded-full border border-slate-600 hover:border-blue-400 flex justify-center pt-1.5 transition-colors cursor-pointer"
                aria-label="Scroll to Services section"
                title="View services"
              >
                <div className="w-1 h-1.5 rounded-full bg-blue-400 animate-mouse-wheel"></div>
              </a>
            </div>
          </div>

          {/* Stat 3: 24/7 Support */}
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {AGENCY.stats[2].value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {AGENCY.stats[2].label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
