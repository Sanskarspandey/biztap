import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, X, ArrowRight, MessageSquare, Clock, ShieldCheck, Sparkles, Layers, AlertCircle } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { PricingCard } from '../../components/cards/PricingCard';
import { Accordion } from '../../components/common/Accordion';
import { CTASection } from '../../components/sections/CTASection';
import { INDUSTRIES } from '../../data/industries';
import { INDUSTRY_PRICING } from '../../data/pricing';
import { getIndustryWhatsAppUrl } from '../../utils/whatsapp';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = INDUSTRIES.find((i) => i.slug === slug);
  const pricingData = slug ? INDUSTRY_PRICING[slug] : null;

  if (!industry || !pricingData) {
    return <Navigate to="/industries" replace />;
  }

  const faqItems = industry.faqs.map((f, idx) => ({
    id: `ind-faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  const whatsappInquiryUrl = getIndustryWhatsAppUrl(industry.name);

  return (
    <>
      <SEO
        title={`${industry.name} Website Design & Packages | BizTap`}
        description={industry.heroSubheadline}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-cream-50/50 to-cream-100/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold uppercase tracking-wider">
            <span>{industry.category} Vertical Solution</span>
            <span>•</span>
            <span className="text-emerald-700 font-extrabold">Starting at {pricingData.startingPrice}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            {industry.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            {industry.heroSubheadline}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-subtle transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss {industry.name} Website</span>
            </a>

            <Link
              to={`/get-a-quote?context=${encodeURIComponent(industry.name)}`}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-cream-100 text-charcoal-800 font-bold text-xs uppercase tracking-wider rounded-xl border border-cream-300 shadow-subtle transition-colors flex items-center justify-center gap-2"
            >
              <span>Build Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Problems & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Problems We Solve
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Common Bottlenecks in {industry.name} & How Our Websites Fix Them
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.businessProblems.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-50/70 rounded-2xl p-6 border border-cream-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                    <AlertCircle className="w-4 h-4" /> The Problem
                  </div>
                  <p className="text-xs font-semibold text-charcoal-800 leading-relaxed mb-4">
                    "{item.problem}"
                  </p>

                  <div className="pt-4 border-t border-cream-200">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800 mb-2">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> The BizTap Solution
                    </div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Website Features */}
      <section className="py-20 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Feature Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Recommended Website Features for {industry.name}
            </h2>
            <p className="text-sm text-charcoal-600">
              Tested interactive components designed specifically for your industry's customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.recommendedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-cream-200 shadow-subtle flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4 border border-forest-200">
                  <Sparkles className="w-5 h-5 text-forest-800" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed flex-1">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Page Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Information Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Example Recommended Page Structure
            </h2>
            <p className="text-sm text-charcoal-600">
              How we logically map out pages to guide visitors from initial interest to conversion.
            </p>
          </div>

          <div className="space-y-3">
            {industry.examplePageStructure.map((page, idx) => (
              <div
                key={idx}
                className="bg-cream-50/70 rounded-xl p-4 sm:p-5 border border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-forest-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold text-charcoal-900">{page.pageName} Page</span>
                </div>
                <span className="text-xs text-charcoal-600 sm:text-right max-w-md">
                  {page.purpose}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Tiers (Starter, Pro, Premium) */}
      <section className="py-20 bg-cream-100/50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Proposed Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Package Options for {industry.name}
            </h2>
            <p className="text-sm text-charcoal-600">
              Transparent, progressively more capable packages. All delivery estimates are clearly labeled as estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pricingData.tiers.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                contextName={industry.name}
              />
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="bg-white rounded-2xl border border-cream-300 shadow-premium overflow-hidden">
            <div className="p-6 bg-cream-50 border-b border-cream-200">
              <h3 className="text-lg font-bold text-charcoal-900">
                Detailed Plan Feature Matrix
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Side-by-side comparison of inclusions across Starter, Professional, and Premium.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-cream-200 bg-cream-100/40 text-charcoal-700">
                    <th className="p-4 font-bold">Feature / Deliverable</th>
                    <th className="p-4 font-bold text-center w-28">Starter</th>
                    <th className="p-4 font-bold text-center w-28 text-forest-900 bg-forest-50/50">Professional</th>
                    <th className="p-4 font-bold text-center w-28">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-100">
                  {industry.featureComparison.map((f, idx) => (
                    <tr key={idx} className="hover:bg-cream-50/50 transition-colors">
                      <td className="p-4">
                        <span className="font-bold text-charcoal-900 block">{f.name}</span>
                        <span className="text-[11px] text-charcoal-500">{f.description}</span>
                      </td>
                      <td className="p-4 text-center">
                        {f.starter ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center bg-forest-50/30">
                        {f.pro ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {f.premium ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[3]" />
                        ) : (
                          <X className="w-4 h-4 text-charcoal-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specific Add-Ons */}
      {industry.addOns && industry.addOns.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                Recommended Extras
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                Optional Upgrades for {industry.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {industry.addOns.map((addon, idx) => (
                <div
                  key={idx}
                  className="bg-cream-50/70 rounded-2xl p-5 border border-cream-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-extrabold text-forest-900 block mb-1">
                      {addon.price}
                    </span>
                    <h3 className="text-sm font-bold text-charcoal-900 mb-2">{addon.name}</h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry FAQs */}
      <section className="py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Questions & Answers
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900">
              {industry.name} FAQs
            </h2>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Related Industries Navigation */}
      <section className="py-12 bg-white border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
              Related Industry Solutions:
            </span>
            <div className="flex flex-wrap gap-2">
              {industry.relatedIndustries.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/industries/${rel.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-forest-100 text-charcoal-700 hover:text-forest-900 text-xs font-semibold border border-cream-200 transition-colors"
                >
                  {rel.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Build Your ${industry.name} Website?`}
        subtitle="Schedule a consultation call or message us on WhatsApp with your requirements. We provide itemized, honest proposals tailored to your facility."
        primaryCtaText={`Get a Quote for ${industry.name}`}
        primaryCtaLink={`/get-a-quote?context=${encodeURIComponent(industry.name)}`}
      />
    </>
  );
};
