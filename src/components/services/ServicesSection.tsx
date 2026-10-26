import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { SERVICES, SERVICE_TRUST_PILLS, ServiceItem } from '../../data/services';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem, isDemoRequest?: boolean) => void;
  onOpenQuote?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService
}) => {
  return (
    <section id="services" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Digital Solutions for Every Business</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Websites &amp; Solutions Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Your Growth
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Stop losing potential clients to competitors with outdated presences. BizTap creates stunning, fast, and mobile-friendly websites engineered to turn visitors into paying customers.
          </p>

          {/* Trust Highlights Pill Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-slate-300">
            {SERVICE_TRUST_PILLS.map((pill, idx) => (
              <div key={idx} className="flex items-center gap-1.5 font-medium">
                <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Specialized Industry Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSeeDemo={(svc) => onSelectService(svc, true)}
              onGetQuote={(svc) => onSelectService(svc, false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
