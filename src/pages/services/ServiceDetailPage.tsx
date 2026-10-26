import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowRight, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Accordion } from '../../components/common/Accordion';
import { CTASection } from '../../components/sections/CTASection';
import { NFCShowcase } from '../../components/sections/NFCShowcase';
import { SERVICES } from '../../data/services';
import { getServiceWhatsAppUrl } from '../../utils/whatsapp';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const faqItems = service.faqs.map((f, idx) => ({
    id: `srv-faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  const whatsappInquiryUrl = getServiceWhatsAppUrl(service.title);

  return (
    <>
      <SEO
        title={`${service.title} — BizTap Digital Agency`}
        description={service.heroSubheadline}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-cream-50/50 to-cream-100/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold uppercase tracking-wider">
            <span>{service.badge}</span>
            <span>•</span>
            <span className="text-emerald-700 font-extrabold">{service.pricingOverview.startingPrice}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            {service.heroSubheadline}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-subtle transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss {service.title} on WhatsApp</span>
            </a>

            <Link
              to={`/get-a-quote?context=${encodeURIComponent(service.title)}`}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-cream-100 text-charcoal-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-cream-300 shadow-subtle transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Detailed Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* If this is the NFC card service page, include the full physical NFC showcase right up front */}
      {service.slug === 'nfc-smart-review-cards' && <NFCShowcase />}

      {/* Detailed Service Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              The Strategic Approach
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Understanding Our {service.title} Deliverables
            </h2>
          </div>

          <div className="space-y-4 text-sm text-charcoal-700 leading-relaxed">
            {service.explanation.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Business Value
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Key Advantages for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyBenefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-cream-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-charcoal-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Suitable For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Features Included */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                Inclusions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                Core Deliverables & Specifications
              </h2>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50/70 border border-cream-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-charcoal-800 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable Customers */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                Ideal Fit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                Who Is This For?
              </h2>

              <div className="space-y-3 pt-2">
                {service.suitableFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-cream-200 shadow-xs">
                    <Sparkles className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span className="text-xs text-charcoal-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Overview Box */}
              <div className="bg-forest-950 text-white rounded-2xl p-6 border border-forest-800 space-y-3 shadow-premium mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Pricing Overview
                </span>
                <div className="text-2xl font-extrabold text-white">
                  {service.pricingOverview.startingPrice}
                </div>
                <p className="text-xs text-cream-200 leading-relaxed">
                  {service.pricingOverview.pricingNote}
                </p>
                <div className="space-y-1 pt-2 border-t border-forest-800 text-[11px] text-cream-300">
                  {service.pricingOverview.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (4 Steps) */}
      <section className="py-20 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              The Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              How the Service Operates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((st) => (
              <div key={st.step} className="bg-white rounded-2xl p-6 border border-cream-200 shadow-subtle space-y-3">
                <span className="text-2xl font-black text-forest-900/30">0{st.step}</span>
                <h3 className="text-base font-bold text-charcoal-900">{st.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900">
              {service.title} FAQs
            </h2>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-cream-50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
              Related Services:
            </span>
            <div className="flex flex-wrap gap-2">
              {service.relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/services/${rel.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-forest-100 text-charcoal-700 hover:text-forest-900 text-xs font-semibold border border-cream-200 transition-colors"
                >
                  {rel.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Get Started With ${service.title}`}
        subtitle="Connect with our development team directly on WhatsApp or submit a proposal request for a fast, itemized project estimate."
        primaryCtaText={`Inquire About ${service.title}`}
        primaryCtaLink={`/get-a-quote?context=${encodeURIComponent(service.title)}`}
      />
    </>
  );
};
