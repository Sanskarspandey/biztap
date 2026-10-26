import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Logo } from '../common/Logo';
import { AGENCY } from '../../data/agency';

export type NoticeSection = 'portfolio' | 'brochure';

export interface NavbarProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
  onOpenNotice: (section: NoticeSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuote,
  onOpenContact,
  onOpenNotice,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for hash changes on route navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const scrollToSectionOnHome = (id: string) => {
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    } else {
      navigate(`/#${id}`);
      // Small timeout to allow home DOM to mount before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleNavClick = (e: React.MouseEvent, label: string, href?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href && href.startsWith('#')) {
      scrollToSectionOnHome(href.slice(1));
      return;
    }

    const norm = label.toLowerCase().replace(/[^a-z]/g, '');
    if (norm.includes('service')) {
      scrollToSectionOnHome('services');
    } else if (norm.includes('whychoose') || norm.includes('why')) {
      scrollToSectionOnHome('why-choose');
    } else if (norm.includes('faq')) {
      scrollToSectionOnHome('faq');
    } else if (norm.includes('blog')) {
      scrollToSectionOnHome('blog');
    } else if (norm.includes('contact')) {
      scrollToSectionOnHome('contact');
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg py-3'
          : 'bg-navy-900/70 backdrop-blur-sm border-b border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo onClick={handleLogoClick} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {AGENCY.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:text-white ${
                  (item.label.toLowerCase() === 'blog' && (location.pathname === '/blog' || location.pathname.startsWith('/blog/'))) ||
                  (item.label.toLowerCase() === 'faq' && location.pathname === '/faq') ||
                  (item.label.toLowerCase() === 'contact' && location.pathname === '/contact')
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Direct Contact Phone Link */}
            <a
              href={`tel:${AGENCY.phone.replace(/\s+/g, '')}`}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium px-2 py-1 rounded-md hover:bg-slate-800/50"
              title="Call BizTap directly"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>{AGENCY.phone}</span>
            </a>

            {/* "Get a Quote" Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-full shadow-sm cursor-pointer"
            >
              Get a Quote
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-slate-800 px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {AGENCY.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  (item.label.toLowerCase() === 'blog' && (location.pathname === '/blog' || location.pathname.startsWith('/blog/'))) ||
                  (item.label.toLowerCase() === 'faq' && location.pathname === '/faq') ||
                  (item.label.toLowerCase() === 'contact' && location.pathname === '/contact')
                    ? 'text-blue-400 font-semibold bg-slate-800/50'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${AGENCY.phone.replace(/\s+/g, '')}`}
              className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Call BizTap</span>
              </span>
              <span className="font-semibold text-slate-300">{AGENCY.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-blue-300 bg-blue-950/50 border border-blue-800/40 rounded-lg hover:bg-blue-900/50 transition-colors cursor-pointer"
            >
              Contact Options (WhatsApp & Email)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
