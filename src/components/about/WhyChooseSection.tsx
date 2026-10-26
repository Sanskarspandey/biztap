import React from 'react';
import {
  Smartphone,
  Target,
  FileCheck2,
  MessageCircle,
  Cpu,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
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
      title: 'Direct WhatsApp Communication',
      description:
        'No endless ticketing queues or impersonal helpdesks. You collaborate directly with our team over WhatsApp and phone for fast feedback and clear progress updates.',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Modern Web Engineering',
      description:
        'Built with production-grade web technologies (React, Vite, Tailwind CSS) for blazing speed, high reliability, and clean semantic structure without heavy plugin bloat.',
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Ongoing Support & Care',
      description:
        'Our responsibility does not end at deployment. We offer dependable technical support, minor copy updates, and assistance whenever your business evolves.',
      icon: Headphones,
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section id="why-choose" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Built for Results</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              BizTap?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            We build websites and digital profiles for real Indian businesses. Practical, reliable, and focused on driving inquiries and phone calls without inflated agency prices.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
