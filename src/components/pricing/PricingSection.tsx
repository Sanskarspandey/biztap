import React, { useState } from 'react';
import {
  Check,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CreditCard,
  Globe
} from 'lucide-react';
import { NFC_PACKAGES } from '../../data/pricing';
import { SERVICES } from '../../data/services';

interface PricingSectionProps {
  onSelectPlan?: (planName: string, price: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'hardware-profile' | 'websites'>(
    'hardware-profile'
  );

  const handlePlanClick = (planName: string, price: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName, price);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    }
  };

  // Top representative website tiers for quick comparison
  const featuredWebsiteTiers = [
    {
      id: 'starter-web',
      name: 'Starter Business Website',
      badge: 'Best for Small Outlets',
      priceDisplay: '₹8,999',
      billingType: 'one-time',
      description:
        'Clean, fast 5-page informational web presence ideal for preschools, salons, consultants, and neighborhood retail.',
      features: [
        'Up to 5 Custom Mobile-Responsive Pages',
        'Direct WhatsApp Chat Trigger & Call Action',
        'Google Business Profile & Maps Integration',
        'Contact & Lead Inquiry Form',
        'Free Cloud Hosting for the First 3 Months',
        '100% Code & Content Ownership'
      ],
      idealFor: 'Schools, consultants, salons & local counters'
    },
    {
      id: 'standard-web',
      name: 'Professional Business Website',
      badge: 'Most Popular',
      priceDisplay: '₹12,999',
      billingType: 'one-time',
      isPopular: true,
      description:
        'Comprehensive multi-page digital asset engineered for appointment booking, service catalogues, and local search visibility.',
      features: [
        'Up to 8 Custom Designed Pages',
        'Interactive Appointment / Slot Booking Engine',
        'Service & Product Catalog Showcase',
        'SEO Foundation (Schema Markup, Fast WebP)',
        'Free Cloud Hosting for the First 3 Months',
        'Admin Panel for Basic Content Updates',
        'Priority 7–10 Business Day Delivery'
      ],
      idealFor: 'Clinics, gyms, restaurants, architects & CA firms'
    },
    {
      id: 'ecommerce-web',
      name: 'E-Commerce Storefront',
      badge: 'Online Selling',
      priceDisplay: '₹14,999',
      billingType: 'one-time',
      description:
        'Full storefront with product catalogue, payment gateway checkout, shopping cart, and instant WhatsApp order notifications.',
      features: [
        'Complete Online Store (Catalog & Categories)',
        'Shopping Cart & UPI / Card Payment Gateway',
        'Direct WhatsApp Order Notification Ping',
        'Order & Inventory Management Dashboard',
        'Free Cloud Hosting for the First 3 Months',
        'Customer Checkout & Order Receipt Sharing'
      ],
      idealFor: 'Retailers, boutique brands, food products & artisans'
    }
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Transparent Commercials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Pricing
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            No surprise invoices, lock-in contracts, or predatory percentage fees. All prices clearly distinguish one-time launch costs from optional ongoing care.
          </p>

          {/* Pricing Category Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-[#131D31] border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('hardware-profile')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'hardware-profile'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>NFC Cards & Smart Profiles</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('websites')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'websites'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Website Development Packages</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: NFC & Digital Profiles */}
        {activeTab === 'hardware-profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {NFC_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#131D31]/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-200 hover:-translate-y-1 ${
                  pkg.isPopular
                    ? 'border-blue-500/60 shadow-xl shadow-blue-950/30 relative'
                    : 'border-slate-800 hover:border-slate-700/80 shadow-lg'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-[11px] font-bold text-white shadow-sm uppercase tracking-wider">
                    {pkg.badge || 'Popular'}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      {pkg.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  </div>

                  <div className="pt-1">
                    <div className="text-3xl font-extrabold text-white tracking-tight">
                      {pkg.priceDisplay}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      One-time charge • No monthly software fee
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pkg.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Includes:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pkg.features.slice(0, 5).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handlePlanClick(pkg.name, pkg.priceDisplay)}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Website Development Packages */}
        {activeTab === 'websites' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWebsiteTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#131D31]/90 backdrop-blur-sm rounded-2xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-200 hover:-translate-y-1 ${
                  tier.isPopular
                    ? 'border-blue-500/60 shadow-xl shadow-blue-950/30 relative'
                    : 'border-slate-800 hover:border-slate-700/80 shadow-lg'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-[11px] font-bold text-white shadow-sm uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                      {tier.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <div className="pt-1">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {tier.priceDisplay}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      One-time development cost
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {tier.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => handlePlanClick(tier.name, tier.priceDisplay)}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Get a Quote for This Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transparent Infrastructure & Hosting Disclosure Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-blue-950/30 border border-blue-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Transparent Hosting & Maintenance Terms</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every website package includes <strong className="text-white">free cloud hosting for the first 3 months</strong>. After 3 months, optional hosting care is ₹599/month (Basic) or ₹1,699/month (Standard). You retain 100% code ownership and can host anywhere at any time.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handlePlanClick('Hosting & Maintenance Care', '₹599/mo')}
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
          >
            Ask About Hosting
          </button>
        </div>
      </div>
    </section>
  );
};
