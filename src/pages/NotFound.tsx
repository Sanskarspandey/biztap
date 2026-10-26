import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, MessageSquare, Compass, Search } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found | BizTap"
        description="The page you requested could not be found. Explore our services, industries, or return to the BizTap homepage."
      />

      <section className="py-24 md:py-32 bg-cream-50/70 flex items-center justify-center text-center px-4">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-forest-100 text-forest-900 border border-forest-200 flex items-center justify-center mx-auto shadow-sm">
            <Compass className="w-10 h-10 text-forest-800" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-6xl font-black text-forest-950 font-mono tracking-tight">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Page Not Found
            </h1>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-sm mx-auto">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-subtle transition-all flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-cream-100 text-charcoal-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-cream-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Helpful Links */}
          <div className="pt-8 border-t border-cream-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 block">
              Popular Destinations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
              <Link to="/industries" className="px-3 py-1.5 rounded-lg bg-white border border-cream-200 hover:bg-forest-50 text-charcoal-700">
                Industries
              </Link>
              <Link to="/pricing" className="px-3 py-1.5 rounded-lg bg-white border border-cream-200 hover:bg-forest-50 text-charcoal-700">
                Pricing
              </Link>
              <Link to="/portfolio" className="px-3 py-1.5 rounded-lg bg-white border border-cream-200 hover:bg-forest-50 text-charcoal-700">
                Our Work
              </Link>
              <Link to="/contact" className="px-3 py-1.5 rounded-lg bg-white border border-cream-200 hover:bg-forest-50 text-charcoal-700">
                Contact
              </Link>
              <a
                href={getWhatsAppUrl('Hi BizTap, I ran into a 404 page on your website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
