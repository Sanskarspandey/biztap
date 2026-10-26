import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ServiceCard } from '../components/cards/ServiceCard';
import { CTASection } from '../components/sections/CTASection';
import { SERVICES } from '../data/services';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ServicesOverview: React.FC = () => {
  return (
    <>
      <SEO
        title="Services — Complete Web & Digital Solutions by BizTap"
        description="Explore BizTap's comprehensive digital services: custom website development, NFC smart review cards, digital profiles, e-commerce stores, WhatsApp integration, and maintenance."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services Overview' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Our Digital Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Comprehensive Digital Services Built for Business Growth
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            From single-tap NFC Google review cards to robust multi-page corporate portals, we build high-performing digital touchpoints with transparent pricing and zero vendor lock-in.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/get-a-quote"
              className="px-6 py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-subtle flex items-center gap-1.5"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid (All 13 Services) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-2">
              <h3 className="text-base font-bold text-forest-950">100% Asset Ownership</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                You own your domain, website code, and creative files. We never hold client assets hostage or charge fee penalties to move hosts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-2">
              <h3 className="text-base font-bold text-forest-950">Sub-2-Second Performance</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Built with modern React and optimized media assets. Your site renders briskly on 4G networks across India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-2">
              <h3 className="text-base font-bold text-forest-950">Conversion-Focused Architecture</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Strategic callouts, prefilled WhatsApp conversation triggers, and sticky mobile calling buttons that turn visits into real customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Not Sure Which Service Fits Your Exact Situation?"
        subtitle="Talk directly with our development team. We will analyze your current presence and recommend only what makes commercial sense for your business."
        primaryCtaText="Get a Free Quote"
        primaryCtaLink="/get-a-quote"
      />
    </>
  );
};
