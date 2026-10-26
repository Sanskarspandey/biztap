import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS, FAQItem } from '../../data/faq';

interface FAQSectionProps {
  onScrollToContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onScrollToContact }) => {
  // First item open by default matching reference screenshot
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onScrollToContact) {
      onScrollToContact();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    }
  };

  const renderAnswerContent = (item: FAQItem) => {
    if (item.id === 'faq-1') {
      return (
        <p>
          Our pricing depends on your industry and the features you need. Starter plans begin at ₹8,999 for schools and ₹9,999 for shops. Beauty parlours start at ₹4,999. Each plan includes free hosting for the first 3 months. Tell us your requirements in our{' '}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
          >
            contact form
          </a>{' '}
          for an itemized project estimate.
        </p>
      );
    }
    return <p>{item.answer}</p>;
  };

  const whatsappMessage = encodeURIComponent(
    'Hi BizTap! I have a few questions about your website development services.'
  );
  const whatsappUrl = `https://wa.me/919372948245?text=${whatsappMessage}`;

  return (
    <section id="faq" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Section Header - Matches Reference Screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before getting started. Can't find an answer?{' '}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2 transition-colors"
            >
              Chat with us on WhatsApp.
            </a>
          </p>
        </div>

        {/* Vertically Stacked Accordion (Centered, max-width ~810px) */}
        <div className="max-w-[810px] mx-auto space-y-3.5">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-[#131D31]/90 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-slate-700 shadow-xl shadow-blue-950/20'
                    : 'border-slate-800/80 hover:border-slate-700/70'
                }`}
              >
                {/* Semantic Accessible Accordion Trigger Button */}
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => handleToggle(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                >
                  <span className="font-bold text-base sm:text-lg text-white leading-snug">
                    {item.question}
                  </span>

                  {/* Plus / Minus State Indicator Icon */}
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                        : 'bg-blue-950/70 border-blue-500/30 text-blue-400'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Animated Collapsible Answer Region */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-300 leading-relaxed font-normal border-t border-slate-800/60 pt-4">
                      {renderAnswerContent(item)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Understated Help Prompt at Bottom of FAQ */}
        <div className="pt-8 text-center space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Still have questions?</h3>
            <p className="text-sm text-slate-400">Let's discuss what your business needs.</p>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all cursor-pointer"
            >
              <span>Chat with Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
