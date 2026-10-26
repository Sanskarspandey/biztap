import React from 'react';
import { MessageSquare, FileText, Layout, Code, CheckCircle2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessSectionProps {
  showFullDetails?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ showFullDetails = false }) => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We discuss your business model, target clientele, current digital bottlenecks, and key service offerings on a phone or WhatsApp call.',
      details: 'We take the time to understand your unique differentiators, competitor landscape, and specific conversion goals.'
    },
    {
      step: '02',
      icon: FileText,
      title: 'Itemized Proposal & Scope',
      description: 'You receive a transparent, written project scope document with proposed page counts, features, timeline estimates, and exact milestone costs.',
      details: 'Zero hidden clauses. You know exactly what is included, what is excluded, and when your deliverables will be ready.'
    },
    {
      step: '03',
      icon: Layout,
      title: 'Architecture & Design',
      description: 'We structure the customer journey, wireframes, and responsive layouts tailored to your brand colors, typography, and industry expectations.',
      details: 'Focused on readability, clear hierarchy, prominent WhatsApp CTAs, and mobile phone convenience.'
    },
    {
      step: '04',
      icon: Code,
      title: 'Standards-Compliant Development',
      description: 'We code your website using modern React, Vite, and Tailwind CSS. Clean, lightweight code that loads in fractions of a second.',
      details: 'Semantic HTML markup, local JSON-LD schema, responsive image compression, and form validation.'
    },
    {
      step: '05',
      icon: CheckCircle2,
      title: 'Staging Review & Revisions',
      description: 'You test the website on a private, interactive staging link. We execute your revision requests to ensure everything is polished.',
      details: 'Test phone calling buttons, WhatsApp links, contact forms, and mobile responsive layout on your own phone.'
    },
    {
      step: '06',
      icon: Rocket,
      title: 'Launch & Asset Handover',
      description: 'We connect your custom domain, configure SSL encryption, submit your sitemap to Google Search Console, and hand over all assets.',
      details: 'Your website is now live, working for your business 24/7. Optional monthly care is available for hassle-free maintenance.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Our Transparent Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            How We Take Your Business From Concept to Live Launch
          </h2>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            A structured, collaborative approach with zero technical jargon. You are kept informed at every stage from discovery to domain handover.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-cream-50/60 rounded-2xl p-7 border border-cream-200/90 shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-forest-900/30 group-hover:text-forest-900/60 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {showFullDetails && (
                    <p className="text-[11px] text-charcoal-500 pt-2 border-t border-cream-200/80 leading-normal">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-cream-200/60 text-[11px] font-semibold text-forest-800 flex items-center gap-1">
                  <span>Milestone {index + 1} of 6</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-bold text-forest-900 hover:text-emerald-600 transition-colors uppercase tracking-wider"
          >
            <span>Read Complete Process & Handover Terms</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
