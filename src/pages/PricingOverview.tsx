import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, ShieldCheck, HelpCircle, Layers, MessageSquare, Zap, Clock } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PricingCard } from '../components/cards/PricingCard';
import { CTASection } from '../components/sections/CTASection';
import { Accordion } from '../components/common/Accordion';
import { NFC_PACKAGES, INDUSTRY_PRICING, ADDON_SERVICES } from '../data/pricing';
import { INDUSTRIES } from '../data/industries';
import { FAQS } from '../data/faq';
import { formatINR } from '../utils/formatters';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const PricingOverview: React.FC = () => {
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState('clinics');

  const activeIndustryData = INDUSTRY_PRICING[selectedIndustrySlug] || INDUSTRY_PRICING['clinics'];
  const pricingFaqs = FAQS.filter((f) => f.category === 'Pricing & Payments' || f.category === 'Ownership & Hosting');

  return (
    <>
      <SEO
        title="Transparent Pricing — Website & NFC Packages | BizTap"
        description="Transparent proposed pricing for websites, NFC smart review cards, and digital profiles in India. Starting prices from ₹3,999. Zero hidden lock-in fees."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Transparent Pricing' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Transparent Commercials
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Transparent Pricing. Zero Hidden Fees. Full Code Ownership.
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            We publish our proposed starting rates openly. Clearly distinguishing one-time development costs from optional annual hosting and maintenance care.
          </p>

          <div className="bg-cream-100/80 p-3 rounded-xl border border-cream-200 inline-block text-xs text-charcoal-600 max-w-lg">
            * All listed prices are proposed launch figures in INR. Exact quotations are confirmed in writing prior to coding.
          </div>
        </div>
      </section>

      {/* Section 1: NFC & Digital Profile Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Hardware & Smart Profiles
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              NFC Smart Cards & Digital Business Profiles
            </h2>
            <p className="text-sm text-charcoal-600">
              Hardware and micro-site solutions engineered to generate Google Reviews and share business contacts effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NFC_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} tier={pkg} contextName="BizTap Hardware / Profile" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Industry-Specific Website Pricing Explorer */}
      <section className="py-20 bg-cream-100/50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Industry Packages
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Industry-Specific Website Package Tiers
            </h2>
            <p className="text-sm text-charcoal-600">
              Select your industry below to inspect tailored Starter, Professional, and Premium packages with itemized inclusions.
            </p>
          </div>

          {/* Industry Pill Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
            {INDUSTRIES.map((ind) => {
              const isSelected = selectedIndustrySlug === ind.slug;
              return (
                <button
                  key={ind.slug}
                  onClick={() => setSelectedIndustrySlug(ind.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                      : 'bg-white text-charcoal-700 border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Active Industry Header */}
          <div className="bg-white p-6 rounded-2xl border border-cream-200 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-forest-800 uppercase tracking-wider">
                Currently Viewing:
              </span>
              <h3 className="text-xl font-bold text-charcoal-900">
                {activeIndustryData.industryName}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-charcoal-500 block">Proposed Starting Rate:</span>
              <span className="text-2xl font-extrabold text-forest-950">
                {activeIndustryData.startingPrice}
              </span>
            </div>
          </div>

          {/* Tier Cards for Selected Industry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeIndustryData.tiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                contextName={activeIndustryData.industryName}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to={`/industries/${selectedIndustrySlug}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors uppercase tracking-wider"
            >
              <span>Explore Full {activeIndustryData.industryName} Page Blueprint & Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Add-On Services & Recurring Care */}
      <section className="py-20 bg-white border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Optional Add-Ons & Renewals
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Add-On Services & Ongoing Maintenance
            </h2>
            <p className="text-sm text-charcoal-600">
              We separate development fees from recurring infrastructure costs so you have total clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDON_SERVICES.map((addon, idx) => (
              <div
                key={idx}
                className="bg-cream-50/70 rounded-2xl p-6 border border-cream-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-forest-100 text-forest-900">
                      {addon.feeType}
                    </span>
                    <span className="text-sm font-extrabold text-forest-950">{addon.price}</span>
                  </div>

                  <h3 className="text-base font-bold text-charcoal-900 mb-2">{addon.name}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
                    {addon.description}
                  </p>
                </div>

                {addon.note && (
                  <p className="text-[11px] text-charcoal-500 pt-3 border-t border-cream-200/80 italic">
                    Note: {addon.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Pricing FAQs */}
      <section className="py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <Accordion items={pricingFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need a Formal Written Quote for Your Business?"
        subtitle="Use our interactive quote builder or message us on WhatsApp with your exact requirements for a rapid itemized proposal."
        primaryCtaText="Build a Custom Quote"
        primaryCtaLink="/get-a-quote"
      />
    </>
  );
};
