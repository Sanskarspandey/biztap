import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  isWhatsAppPrimary?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Your Business Deserves a Better Digital Presence.',
  subtitle = 'From professional websites to NFC-powered review experiences, BizTap helps Indian businesses connect with customers and present themselves online with confidence.',
  primaryCtaText = 'Get a Free Quote',
  primaryCtaLink = '/get-a-quote',
  isWhatsAppPrimary = false,
}) => {
  return (
    <section className="py-20 bg-forest-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-forest-800/20 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Transparent Pricing • Zero Hidden Lock-Ins
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          {isWhatsAppPrimary ? (
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold text-sm rounded-xl shadow-premium transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-charcoal-950" />
              <span>Discuss on WhatsApp ({COMPANY.phone})</span>
            </a>
          ) : (
            <Link
              to={primaryCtaLink}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold text-sm rounded-xl shadow-premium transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-charcoal-950" />
            </Link>
          )}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Bottom trust assurances */}
        <div className="pt-6 border-t border-forest-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-cream-300/80 max-w-2xl mx-auto">
          <div>
            <span className="font-bold text-white block">100% Code Ownership</span>
            <span>You own your domain & assets</span>
          </div>
          <div>
            <span className="font-bold text-white block">No Hidden Charges</span>
            <span>Fixed proposals before coding</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-bold text-white block">Direct WhatsApp Support</span>
            <span>Talk to real web engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
