import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Heart, CheckCircle2, ArrowRight, Smartphone, Zap, Eye, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About BizTap — Empowering Indian SMEs with Real Digital Assets"
        description="Learn about BizTap's mission, philosophy, and dedication to building transparent, high-converting websites and NFC review solutions for local businesses."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            About BizTap
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            We Help Indian Businesses Build Digital Assets They Truly Own.
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            BizTap is a digital solutions agency founded with a single mission: to provide small and medium-sized businesses in India with transparent, high-performance websites and contactless NFC solutions without the usual agency fluff, hidden charges, or vendor lock-in.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-cream-50/70 rounded-3xl p-8 sm:p-10 border border-cream-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-900 text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-900">Our Mission</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                To bridge the digital gap for local Indian business owners—clinics, retail shops, salons, schools, restaurants, and professional practices—by delivering websites that load fast, look authoritative, and actively convert local visitors into loyal paying customers.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-charcoal-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Eliminate confusing technical jargon and hidden recurring fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Make customer communication frictionless through direct WhatsApp triggers</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-cream-50/70 rounded-3xl p-8 sm:p-10 border border-cream-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-forest-900 text-white flex items-center justify-center">
                <Eye className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-900">Our Vision</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We envision an Indian market where small and independent businesses don’t have to depend entirely on predatory marketplace aggregators taking 25–35% cuts. We empower business owners to build their own brand equity, collect authentic customer reviews, and cultivate direct customer loyalty.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-charcoal-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Client ownership of domain, code, and customer records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Modern, standards-based web engineering built for longevity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus on Indian SMEs */}
      <section className="py-20 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Our Core Philosophy
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Why We Exclusively Serve Small & Medium-Sized Businesses
            </h2>
            <p className="text-sm text-charcoal-600 max-w-2xl mx-auto">
              Large corporations have multi-crore IT budgets and in-house engineering teams. Local businesses, doctors, and retailers often face a difficult choice: unreliable freelancers who disappear mid-project, or bloated agencies charging exorbitant retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Zero Technical Bloat</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                We avoid heavy, outdated WordPress themes packed with 40 plugins that slow down loading and break during updates. We write clean, modern code that renders instantly on mobile networks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Strict Professional Ethics</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                We respect council guidelines for healthcare practitioners, Bar Council of India norms for advocates, and ICAI regulations for Chartered Accountants. Your compliance and reputation are safe with us.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5 text-forest-800" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Conversion Over Complexity</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                A flashy animated feature that confuses a visitor is useless. We design clean visual hierarchies that guide prospective clients directly to your phone number, location, and WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection showFullDetails={true} />

      {/* CTA Section */}
      <CTASection
        title="Ready to Partner with BizTap?"
        subtitle="Connect with us directly on WhatsApp or submit a project enquiry. We look forward to learning about your business."
        primaryCtaText="Get a Free Quote"
        primaryCtaLink="/get-a-quote"
      />
    </>
  );
};
