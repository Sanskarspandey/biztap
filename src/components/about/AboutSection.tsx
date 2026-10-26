import React from 'react';
import {
  Smartphone,
  Target,
  FileCheck2,
  MessageCircle,
  Cpu,
  Headphones,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const whyChooseUs = [
    {
      title: 'Business-Focused Design',
      description:
        'Every page layout, service menu, and contact trigger is engineered to guide visitors toward inquiries, phone calls, and WhatsApp chats rather than just looking decorative.',
      icon: Target,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Mobile-First Experiences',
      description:
        'Over 80% of local web traffic in India browses on smartphones. We design touch-friendly interfaces optimized for fast loading on cellular connections.',
      icon: Smartphone,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Transparent Project Scope',
      description:
        'Every package comes with a clear itemized deliverable checklist and agreed milestone schedule. What you see is what you receive — with zero surprise renewal traps.',
      icon: FileCheck2,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Clear Communication',
      description:
        'No endless ticketing queues. You collaborate directly with our team over WhatsApp and email for fast feedback cycles and clear status updates.',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Practical Digital Solutions',
      description:
        'Built with production-grade web technologies (React, Vite, Tailwind CSS) for blazing speed, high reliability, and clean semantic structure without heavy plugin bloat.',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Ongoing Support Options',
      description:
        'Our responsibility does not end at deployment. We offer dependable technical support, minor copy updates, and assistance whenever your business evolves.',
      icon: Headphones,
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Why BizTap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Choose BizTap?
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            We focus on practical, measurable fundamentals that make your business easier to find, easier to trust, and easier to contact.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whyChooseUs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#131D31]/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md`}
                >
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
