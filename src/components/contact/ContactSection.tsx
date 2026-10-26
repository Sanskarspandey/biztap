import React from 'react';
import { ContactForm } from './ContactForm';
import { WhatsAppContactCard } from './WhatsAppContactCard';
import { ContactInfoCard } from './ContactInfoCard';
import { ResponseTimeCard } from './ResponseTimeCard';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold text-blue-300 uppercase tracking-widest">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Ready to Take Your <br className="hidden sm:inline" />
            <span className="text-blue-500">Business</span>{' '}
            <span className="text-amber-400">Online?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us what your business needs, and we'll help you find the right digital solution. Get a free initial consultation with no obligation.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
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
    </section>
  );
};
