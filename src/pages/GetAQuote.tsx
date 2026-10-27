import React from 'react';
import { ShieldCheck, MessageSquare, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { QuoteForm } from '../components/forms/QuoteForm';
import { COMPANY } from '../data/company';

export const GetAQuote: React.FC = () => {
  return (
    <>
      <SEO
        title="Get a Free Project Quote — Itemized Proposal | BizTap"
        description="Configure your website package, select your industry, add optional care modules, and receive an itemized proposal from BizTap with zero hidden fees."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Get a Quote' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Interactive Quote Builder
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Configure Your Tailored Project Proposal
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-xl mx-auto">
            Select your industry vertical, preferred package tier, and optional add-ons below. We provide an immediate estimate and itemized proposal on WhatsApp.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs text-charcoal-500 pt-2">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Free & No-Obligation
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Direct WhatsApp Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Quote Form Container */}
      <section className="py-16 bg-cream-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />

          {/* Quick Help Box */}
          <div className="mt-12 text-center text-xs text-charcoal-500 space-y-1">
            <p>Prefer to speak with an engineer first?</p>
            <p>
              Call us directly: Mumbai <a href={COMPANY.mumbai.telUrl} className="font-bold text-forest-900 underline">{COMPANY.mumbai.phone}</a> &middot; Chennai <a href={COMPANY.chennai.telUrl} className="font-bold text-forest-900 underline">{COMPANY.chennai.phone}</a> or email <a href={`mailto:${COMPANY.email}`} className="font-bold text-forest-900 underline">{COMPANY.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
