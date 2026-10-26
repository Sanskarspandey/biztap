import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Layout, Code, CheckCircle2, Rocket, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/sections/CTASection';
import { COMPANY } from '../data/company';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Discovery',
      icon: MessageSquare,
      timeline: 'Day 1',
      summary: 'Understanding your commercial objectives, customer journey, and key services.',
      details: [
        'We conduct an introductory call via phone or WhatsApp to understand your business model, target customer demographic, and primary revenue drivers.',
        'We review any existing website or competitor references to pinpoint where your current online presence falls short.',
        'We identify must-have functionality: whether you need a digital menu, WhatsApp takeaway ordering, appointment slot inquiry, or local Google Map optimization.'
      ]
    },
    {
      num: '02',
      title: 'Requirement Gathering & Content Intake',
      icon: FileText,
      timeline: 'Days 2–3',
      summary: 'Collecting your service rate cards, doctor credentials, photos, and compliance data.',
      details: [
        'We provide simple, structured questionnaires so you do not have to spend hours writing technical documents.',
        'You share your service prices, high-res photos of your facility, clinic council registration, or menu items.',
        'If you do not have professional copywriting, our team drafts crisp, persuasive microcopy tailored to your target audience.'
      ]
    },
    {
      num: '03',
      title: 'Itemized Proposal & Architecture Sign-Off',
      icon: Layout,
      timeline: 'Day 3',
      summary: 'Clear written scope, delivery milestones, and transparent one-time pricing.',
      details: [
        'You receive a formal proposal detailing exact page structures, deliverable features, delivery timelines, and revision rounds.',
        'We agree on proposed pricing before any code is written, ensuring 100% transparency with zero hidden surprises.',
        'Project commences with an initial 50% advance booking deposit.'
      ]
    },
    {
      num: '04',
      title: 'Modern Web Engineering & Clean Code',
      icon: Code,
      timeline: 'Days 4–8 (Starter) / Days 4–14 (Pro/Store)',
      summary: 'Building your responsive website using React, Vite, and semantic SEO markup.',
      details: [
        'We write clean, modular code with zero bloated plugins or security vulnerabilities.',
        'Rigorous mobile-first testing: ensuring every button, form field, and image loads effortlessly on iOS and Android devices.',
        'We integrate WhatsApp click-to-chat triggers, contact forms with validation, and local business JSON-LD schema.'
      ]
    },
    {
      num: '05',
      title: 'Private Staging Preview & Iterative Revisions',
      icon: CheckCircle2,
      timeline: 'Days 8–10',
      summary: 'Review the live site privately on your own smartphone before public release.',
      details: [
        'We send you a private staging link (e.g. preview.biztap.in/your-business) to click around, test forms, and inspect on your own phone.',
        'We execute your requested revision rounds: swapping images, fine-tuning headings, or adjusting service descriptions.',
        'We verify form delivery to ensure all WhatsApp and email notifications fire accurately.'
      ]
    },
    {
      num: '06',
      title: 'Domain Launch, Handover & Ongoing Care',
      icon: Rocket,
      timeline: 'Launch Day',
      summary: 'DNS configuration, SSL encryption, sitemap submission, and code handover.',
      details: [
        'Upon final milestone sign-off and balance settlement, we map your verified custom domain and deploy automated SSL security.',
        'We submit your XML sitemap to Google Search Console to jumpstart local indexing.',
        'Full asset handover: you retain 100% ownership of your domain and codebase with zero vendor lock-in.',
        'Optional monthly maintenance care is available for scheduled backups, security patching, and regular content adjustments.'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Our Process — How BizTap Delivers Websites from Concept to Launch"
        description="Learn about BizTap's 6-stage development process: consultation, requirement gathering, proposal, design, clean coding, revision rounds, and domain launch."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Process' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Transparent Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            How BizTap Takes Your Project from Discovery to Live Launch
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            A reliable, communicative process with zero technical confusion. You are in control of every milestone, from initial wireframes to domain handover.
          </p>
        </div>
      </section>

      {/* Process Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-cream-50/60 rounded-3xl p-8 sm:p-10 border border-cream-200/90 shadow-subtle hover:shadow-premium transition-all grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                {/* Left Step Indicator */}
                <div className="md:col-span-3 space-y-3">
                  <span className="text-4xl sm:text-5xl font-black text-forest-900/40 block">
                    {st.num}
                  </span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-wider">
                    <Icon className="w-4 h-4 text-forest-800" />
                    <span>{st.timeline}</span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-9 space-y-4">
                  <h3 className="text-2xl font-bold text-charcoal-900">{st.title}</h3>
                  <p className="text-sm font-semibold text-forest-950 leading-relaxed">
                    {st.summary}
                  </p>
                  <ul className="space-y-2.5 text-xs text-charcoal-600 pt-2 border-t border-cream-200">
                    {st.details.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-700 flex-shrink-0 mt-1.5"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Handover & Code Ownership Promise */}
      <section className="py-16 bg-cream-100/70 border-y border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-forest-900 text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-charcoal-900">
            Our 100% Asset Ownership Guarantee
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed max-w-xl mx-auto">
            Upon final milestone payment, you receive complete administrative access to your domain and production files. If you ever decide to manage your site independently in the future, you take 100% of your assets with you.
          </p>
          <div className="pt-2">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-subtle"
            >
              <span>Start Your Project With BizTap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};
