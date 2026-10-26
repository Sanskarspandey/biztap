import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceDetail } from '../../data/services';

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white rounded-2xl p-6 border border-cream-200/90 shadow-subtle hover:shadow-card-hover hover:border-forest-800/40 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-forest-50 text-forest-800 border border-forest-200">
            {service.badge}
          </span>
          <span className="text-xs font-bold text-forest-900">
            {service.pricingOverview.startingPrice}
          </span>
        </div>

        <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-forest-900 transition-colors mb-2">
          {service.title}
        </h3>

        <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">
          {service.shortDescription}
        </p>

        {/* 2 Key benefits */}
        <div className="space-y-1.5 border-t border-cream-100 pt-3 mb-4">
          {service.keyBenefits.slice(0, 2).map((b, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-charcoal-500">
              <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
              <span className="truncate">{b.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-cream-100 flex items-center justify-between text-xs font-bold text-forest-900 group-hover:text-emerald-600 transition-colors">
        <span>View Details & Pricing</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
