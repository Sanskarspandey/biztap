import React, { useState } from 'react';
import { Search, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Accordion } from '../components/common/Accordion';
import { CTASection } from '../components/sections/CTASection';
import { FAQS } from '../data/faq';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Pricing & Payments',
    'Process & Timelines',
    'Ownership & Hosting',
    'NFC & Smart Cards',
    'Support & Maintenance',
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions — BizTap Help & Information"
        description="Clear answers regarding website development costs, delivery timelines, domain ownership, NFC review card compatibility, and ongoing maintenance."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Transparent Answers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with BizTap. If you have an unusual question not covered here, reach out to us directly.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search question (e.g. domain, timeline, NFC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 bg-white text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
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
                {cat}
              </button>
            ))}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 text-charcoal-500 text-sm">
              No questions found matching your search. Message us directly on WhatsApp!
            </div>
          ) : (
            <Accordion items={filteredFaqs} allowMultiple={true} />
          )}

          {/* Direct WhatsApp Box if question not found */}
          <div className="mt-16 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-200 text-center space-y-4">
            <h3 className="text-lg font-bold text-charcoal-900">
              Still have a specific question about your project?
            </h3>
            <p className="text-xs text-charcoal-600 max-w-md mx-auto">
              Our development leads are available on WhatsApp to answer any commercial or technical inquiries.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={COMPANY.mumbai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Mumbai ({COMPANY.mumbai.phone})</span>
              </a>
              <a
                href={COMPANY.chennai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chennai ({COMPANY.chennai.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};
