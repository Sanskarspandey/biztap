import React, { useEffect } from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { WhatsAppContactCard } from '../components/contact/WhatsAppContactCard';
import { ContactInfoCard } from '../components/contact/ContactInfoCard';
import { ResponseTimeCard } from '../components/contact/ResponseTimeCard';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Page SEO metadata
    const prevTitle = document.title;
    document.title = 'Contact BizTap | Website Development & Digital Business Solutions';

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Contact BizTap for professional website development and digital business solutions for businesses across India.'
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-28 sm:pt-36 pb-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section One: Page Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-blue-300 uppercase tracking-widest">
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Ready to Take Your <br className="hidden sm:inline" />
            <span className="text-blue-500">Business</span>{' '}
            <span className="text-amber-400">Online?</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Let's discuss your project. Tell us what your business needs, and we'll help you find the right digital solution. Get a free initial consultation with no obligation.
          </p>
        </div>

        {/* Section Two: Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Contact Form (~58% width on desktop) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Information Cards Stack (~38% width on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Contact Card */}
            <WhatsAppContactCard />

            {/* Direct Contact Details */}
            <ContactInfoCard />

            {/* Response Time Card */}
            <ResponseTimeCard />
          </div>
        </div>
      </div>
    </div>
  );
};
