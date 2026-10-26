import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, ArrowRight, Phone, Mail } from 'lucide-react';
import { MAIN_NAV } from '../../data/navigation';
import { COMPANY } from '../../data/company';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-cream-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-cream-200/50 py-4'
      }`}
    >
      {/* Top micro-bar for quick contact on desktop */}
      <div className="hidden lg:block border-b border-cream-200/40 pb-2 mb-2 text-xs text-charcoal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
              Accepting new business website projects across India
            </span>
            <span className="text-charcoal-300">|</span>
            <span className="text-charcoal-600">Headquartered in India • Remote Delivery</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 hover:text-forest-900 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-forest-700" />
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 hover:text-forest-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-forest-700" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo showTagline={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                location.pathname === item.href ||
                (hasChildren && location.pathname.startsWith(item.href));

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-forest-900 bg-forest-50 font-semibold'
                        : 'text-charcoal-700 hover:text-forest-900 hover:bg-cream-100/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-forest-900 bg-forest-50 font-semibold'
                        : 'text-charcoal-700 hover:text-forest-900 hover:bg-cream-100/60'
                    }`}
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-charcoal-400 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180 text-forest-700' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown Menu */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-[380px] sm:w-[480px] bg-white rounded-xl shadow-premium border border-cream-200 p-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="col-span-full pb-2 mb-1 border-b border-cream-100 flex items-center justify-between">
                        <Link
                          to={item.href}
                          className="text-xs font-bold text-forest-900 uppercase tracking-wider hover:underline flex items-center gap-1"
                        >
                          View All {item.label} <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[11px] text-charcoal-400">
                          {item.children?.length} offerings
                        </span>
                      </div>

                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex flex-col p-2.5 rounded-lg hover:bg-cream-100/80 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-charcoal-900 group-hover:text-forest-800 transition-colors">
                              {child.label}
                            </span>
                            {child.badge && (
                              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-forest-100 text-forest-800">
                                {child.badge}
                              </span>
                            )}
                          </div>
                          {child.description && (
                            <span className="text-xs text-charcoal-500 mt-0.5 line-clamp-1">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-forest-900 bg-cream-100 hover:bg-forest-100 rounded-lg transition-colors border border-cream-300"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-brand-emerald" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-forest-900 hover:bg-forest-800 rounded-lg shadow-sm transition-all hover:shadow-subtle active:scale-[0.99]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-forest-900 bg-forest-50 rounded-lg border border-forest-200"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 text-brand-emerald" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-700 hover:text-forest-900 hover:bg-cream-100 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-50 overflow-y-auto border-t border-cream-200 p-5 flex flex-col justify-between">
          <div className="space-y-1">
            {MAIN_NAV.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpanded[item.label];
              const isActive = location.pathname === item.href;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-semibold rounded-lg ${
                      isActive
                        ? 'text-forest-900 bg-forest-50 font-bold'
                        : 'text-charcoal-800 hover:bg-cream-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="border-b border-cream-200/60 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-base font-semibold text-charcoal-800 hover:text-forest-900"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-3 text-charcoal-500 hover:text-forest-900"
                      aria-label={`Toggle ${item.label} Submenu`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-4 pr-2 pb-3 space-y-1 bg-cream-50/70 rounded-xl mt-1 border border-cream-200/60">
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-xs font-bold text-forest-800 uppercase tracking-wider"
                      >
                        → View All {item.label}
                      </Link>
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:text-forest-900 hover:bg-white rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom mobile drawer actions */}
          <div className="pt-6 border-t border-cream-200 space-y-3 mt-6">
            <Link
              to="/get-a-quote"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-center text-sm font-bold text-white bg-forest-900 rounded-xl shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-center text-sm font-bold text-forest-900 bg-forest-100 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-brand-emerald" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="text-center pt-2 text-xs text-charcoal-500">
              <p>Direct Support: {COMPANY.phone}</p>
              <p>{COMPANY.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
