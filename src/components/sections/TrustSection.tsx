import React from 'react';
import { ShieldCheck, Zap, Lock, Smartphone, HeartHandshake, Eye } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Asset Ownership',
      description: 'Your domain is registered in your name and you retain complete rights to your codebase. We believe in zero vendor lock-in.',
    },
    {
      icon: Eye,
      title: 'Transparent Published Pricing',
      description: 'We publish our proposed starting prices openly. No bait-and-switch quotes or surprise recurring fees after you sign up.',
    },
    {
      icon: Smartphone,
      title: 'Engineered Mobile-First',
      description: 'Over 80% of your customers visit from smartphones. Every layout is optimized for mobile touchscreens, 4G speeds, and rapid loading.',
    },
    {
      icon: Zap,
      title: 'Sub-2-Second Load Times',
      description: 'Built with modern React and clean semantic markup rather than bloated, slow CMS plugins that frustrate visitors.',
    },
    {
      icon: HeartHandshake,
      title: 'Direct WhatsApp Support',
      description: 'No frustrating ticket queues or automated bots. Communicate directly with real web developers on WhatsApp.',
    },
    {
      icon: Lock,
      title: 'Compliant & Ethical Standards',
      description: 'Strict adherence to medical ethics, Bar Council rules, ICAI norms, and Google Review guidelines for long-term safety.',
    },
  ];

  return (
    <section className="py-16 bg-cream-100/60 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Why Businesses Choose BizTap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 mt-3 tracking-tight">
            Built on Transparency, Clean Code & Genuine Business Results
          </h2>
          <p className="text-sm text-charcoal-600 mt-2">
            We don’t promise overnight miracles or invent fake statistics. We build high-performing digital foundations that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-cream-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-4 border border-forest-200">
                  <Icon className="w-5 h-5 text-forest-800" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed flex-1">
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
