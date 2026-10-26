import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Check, Sparkles, Smartphone, CreditCard, ShieldCheck, Star } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { TrustSection } from '../components/sections/TrustSection';
import { NFCShowcase } from '../components/sections/NFCShowcase';
import { DigitalProfileShowcase } from '../components/sections/DigitalProfileShowcase';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';
import { IndustryCard } from '../components/cards/IndustryCard';
import { ServiceCard } from '../components/cards/ServiceCard';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { PricingCard } from '../components/cards/PricingCard';
import { Accordion } from '../components/common/Accordion';
import { DemoModal } from '../components/common/DemoModal';
import { INDUSTRIES } from '../data/industries';
import { SERVICES } from '../data/services';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolio';
import { NFC_PACKAGES } from '../data/pricing';
import { FAQS } from '../data/faq';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Home: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  // Top featured industries
  const featuredIndustries = INDUSTRIES.slice(0, 6);
  // Top featured services
  const featuredServices = SERVICES.slice(0, 6);
  // Homepage FAQs (first 6 items)
  const homeFaqs = FAQS.slice(0, 6);

  return (
    <>
      <SEO
        title="BizTap — Your Business Deserves a Better Digital Presence"
        description="From professional websites to NFC-powered Google review cards, BizTap helps Indian businesses connect with customers and grow online with confidence."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-cream-50/50 to-cream-100/60 border-b border-cream-200">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-forest-100/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-100/30 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Messaging */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100/80 border border-forest-200 text-forest-900 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
                <span>Tap. Connect. Grow. • Pan-India Agency</span>
              </div>

              {/* Suggested headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-950 leading-[1.12]">
                Your Business Deserves a{' '}
                <span className="text-forest-900 underline decoration-brand-emerald decoration-4 underline-offset-8">
                  Better Digital Presence.
                </span>
              </h1>

              {/* Supporting copy */}
              <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From professional websites to NFC-powered review experiences, BizTap helps businesses connect with customers and present themselves online with confidence.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  to="/get-a-quote"
                  className="w-full sm:w-auto px-8 py-4 bg-forest-900 hover:bg-forest-800 text-white font-extrabold text-sm rounded-xl shadow-premium hover:shadow-card-hover transition-all flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-cream-100 text-charcoal-800 font-bold text-sm rounded-xl border border-cream-300 shadow-subtle transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Trust Micro-Checklist */}
              <div className="pt-4 border-t border-cream-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-charcoal-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  Transparent published pricing
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  100% Domain & code ownership
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  Fast delivery across India
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Visual card stack container */}
                <div className="bg-white rounded-3xl p-6 shadow-premium border border-cream-300 relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-cream-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-[11px] font-mono text-charcoal-400">biztap.in/live-demo</span>
                  </div>

                  {/* Device Simulation Preview */}
                  <div className="bg-forest-950 text-white rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-emerald-400">
                      <span className="font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> High-Converting Website
                      </span>
                      <span>Sub-2s Speed</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Modern Web Presence Engineered for Local Growth
                    </h3>
                    <p className="text-xs text-cream-200/80 leading-relaxed">
                      Custom responsive layout with direct WhatsApp booking triggers and local SEO schema.
                    </p>
                    <div className="pt-2 flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-white/10 text-cream-100">
                        100% Mobile Ready
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400">
                        Zero Plugin Bloat
                      </span>
                    </div>
                  </div>

                  {/* Mini NFC Card Highlight */}
                  <div className="bg-cream-50 p-4 rounded-xl border border-cream-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-900 text-white flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-charcoal-900">
                          NFC Smart Review Card
                        </h4>
                        <p className="text-[11px] text-charcoal-500">One tap opens Google Review</p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-forest-900">₹3,000</span>
                  </div>
                </div>

                {/* Decorative floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-forest-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-premium flex items-center gap-2 border border-forest-800 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>WhatsApp Lead Integrations Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Differentiation Section */}
      <TrustSection />

      {/* Main Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                What We Build
              </span>
              <h2 className="text-3xl font-extrabold text-charcoal-900 mt-2 tracking-tight">
                Complete Digital Solutions for Growing Businesses
              </h2>
              <p className="text-sm text-charcoal-600 mt-1 max-w-xl">
                Every service is built with business outcomes in mind: driving calls, walk-ins, and direct WhatsApp sales inquiries.
              </p>
            </div>

            <Link
              to="/services"
              className="text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <span>View All 13 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries Section */}
      <section className="py-20 bg-cream-100/50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                Tailored Industry Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-charcoal-900 mt-2 tracking-tight">
                Websites Engineered for Your Exact Industry
              </h2>
              <p className="text-sm text-charcoal-600 mt-1 max-w-xl">
                A clinic has vastly different requirements than a restaurant or a school. We craft dedicated architectures with transparent industry pricing.
              </p>
            </div>

            <Link
              to="/industries"
              className="text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Explore All 15 Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIndustries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* NFC Smart Review Card Feature Showcase */}
      <NFCShowcase />

      {/* Digital Business Profile Feature Showcase */}
      <DigitalProfileShowcase />

      {/* Featured Website & Profile Package Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Clear & Transparent Inclusions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Featured NFC & Smart Profile Packages
            </h2>
            <p className="text-sm text-charcoal-600">
              Honest pricing with zero hidden software subscriptions. Clearly distinguishing one-time development from optional maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NFC_PACKAGES.map((pkg) => (
              <PricingCard key={pkg.id} tier={pkg} contextName="BizTap Hardware / Smart Profile" />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cream-100 hover:bg-forest-100 text-forest-900 font-bold text-xs uppercase tracking-wider rounded-xl border border-cream-300 transition-colors"
            >
              <span>View Full Website & Industry Pricing Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio / Concept Work */}
      <section className="py-20 bg-cream-100/50 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
                Our Work & Concept Demos
              </span>
              <h2 className="text-3xl font-extrabold text-charcoal-900 mt-2 tracking-tight">
                Interactive Demos Built to Conversion Standards
              </h2>
              <p className="text-sm text-charcoal-600 mt-1 max-w-xl">
                Explore our concepts including Brew & Bloom (Café) and IronForge Athletics (Gym). Transparently labeled as interactive demos.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <span>View All Concept Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenDemo={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How Our Process Works */}
      <ProcessSection />

      {/* Authentic Satisfaction Standards / FAQ */}
      <section className="py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Clear Answers
            </span>
            <h2 className="text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-charcoal-600">
              Everything you need to know about pricing, timelines, domain ownership, and NFC cards.
            </p>
          </div>

          <Accordion items={homeFaqs} />

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors uppercase tracking-wider"
            >
              Have More Questions? View Our Complete FAQ Section →
            </Link>
          </div>
        </div>
      </section>

      {/* Final Conversion-Focused CTA */}
      <CTASection
        title="Ready to Elevate Your Business's Digital Presence?"
        subtitle="Schedule a free consultation call or message us on WhatsApp with your requirements. We provide itemized, honest proposals with zero pressure."
        primaryCtaText="Get a Free Quote"
        primaryCtaLink="/get-a-quote"
      />

      {/* Demo Modal */}
      <DemoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
};
