import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, ArrowUp, MessageSquare, ShieldCheck } from 'lucide-react';
import { AGENCY } from '../../data/agency';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavAnchor = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${hash}`);
      }
    } else {
      navigate(`/#${hash}`);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="relative bg-navy-950/95 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <Logo onClick={scrollToTop} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {AGENCY.heroSubtitle}
            </p>

            {/* Direct Contact Box */}
            <div className="bg-[#131D31]/80 rounded-xl p-4 border border-slate-800/80 space-y-3 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Direct Consultation
              </span>
              <div className="space-y-2.5 text-xs text-slate-300">
                {/* Mumbai */}
                <div className="space-y-0.5">
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider">
                    Mumbai
                  </span>
                  <a
                    href={AGENCY.mumbai.telUrl}
                    className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors font-medium"
                    title="Call BizTap Mumbai"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{AGENCY.mumbai.phone}</span>
                  </a>
                </div>

                {/* Chennai */}
                <div className="space-y-0.5 pt-1.5 border-t border-slate-800/80">
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider">
                    Chennai
                  </span>
                  <a
                    href={AGENCY.chennai.telUrl}
                    className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors font-medium"
                    title="Call BizTap Chennai"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{AGENCY.chennai.phone}</span>
                  </a>
                </div>

                {/* Email */}
                <div className="pt-1.5 border-t border-slate-800/80">
                  <a
                    href={`mailto:${AGENCY.email}`}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{AGENCY.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dual WhatsApp Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2 max-w-sm">
              <a
                href={AGENCY.mumbai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-emerald-950/20"
                aria-label="WhatsApp Mumbai (+91 89280 51768)"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Mumbai</span>
              </a>

              <a
                href={AGENCY.chennai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-md shadow-emerald-950/20"
                aria-label="WhatsApp Chennai (+91 93729 48245)"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Chennai</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavAnchor(e, 'services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose"
                  onClick={(e) => handleNavAnchor(e, 'why-choose')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Why Choose BizTap
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavAnchor(e, 'faq')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => handleNavAnchor(e, 'blog')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Blog & Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Digital Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Custom Business Websites
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Responsive Web Design & Redesign
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Fast SEO & Performance Optimization
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Direct WhatsApp Lead Integration
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavAnchor(e, 'contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Domain, SSL & Managed Hosting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} BizTap. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Tagline: Tap. Connect. Grow.</span>
            <span className="hidden sm:inline">•</span>
            <span>Digital Solutions for Every Business</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
