import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building, Briefcase } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { IndustryCard } from '../components/cards/IndustryCard';
import { CTASection } from '../components/sections/CTASection';
import { INDUSTRIES } from '../data/industries';

export const IndustriesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Service', 'Professional', 'Retail', 'Hospitality', 'Institutional'];

  const filteredIndustries = selectedCategory === 'All'
    ? INDUSTRIES
    : INDUSTRIES.filter((ind) => ind.category === selectedCategory);

  return (
    <>
      <SEO
        title="Industry Solutions — Tailored Website Architectures | BizTap"
        description="Explore 15 dedicated industry website solutions engineered for Indian clinics, schools, restaurants, salons, builders, CA firms, lawyers, and retail stores."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Industries Directory' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Tailored Industry Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Websites Built for Your Specific Business Realities
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            A doctor needs patient trust and slot booking; a restaurant needs a mouthwatering menu and table reservations; an advocate requires strict Bar Council compliance. We don’t force every business into the same generic template.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/pricing"
              className="px-6 py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-subtle flex items-center gap-1.5"
            >
              <span>Compare All Starting Prices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Directory Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedCategory === cat
                    ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                    : 'bg-cream-50 text-charcoal-700 border-cream-200 hover:bg-cream-100'
                }`}
              >
                {cat === 'All' ? 'All 15 Industries' : cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't See Your Exact Niche Listed?"
        subtitle="We build bespoke web solutions for specialized business models. Tell us about your operations and we will craft a tailored architecture."
        primaryCtaText="Discuss Custom Business Scope"
        primaryCtaLink="/industries/custom-business"
      />
    </>
  );
};
