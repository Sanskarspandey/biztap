import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { IndustryDetail } from '../../data/industries';
import { getIndustryStartingPrice } from '../../data/pricing';

interface IndustryCardProps {
  industry: IndustryDetail;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const startingPrice = getIndustryStartingPrice(industry.slug);

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="group bg-white rounded-2xl p-6 border border-cream-200/90 shadow-subtle hover:shadow-card-hover hover:border-forest-800/40 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cream-100 text-charcoal-600 border border-cream-200">
            {industry.category}
          </span>
          <span className="text-xs font-bold text-forest-800">
            {startingPrice === 'Custom quote' ? 'Custom Quote' : `From ${startingPrice}`}
          </span>
        </div>

        <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-forest-900 transition-colors flex items-center gap-1.5 mb-2">
          <span>{industry.name}</span>
        </h3>

        <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">
          {industry.shortTagline}
        </p>

        {/* Highlight 2 top features */}
        <div className="space-y-1.5 border-t border-cream-100 pt-3 mb-4">
          {industry.recommendedFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-charcoal-500">
              <Sparkles className="w-3 h-3 text-brand-emerald flex-shrink-0" />
              <span className="truncate">{feat.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-cream-100 flex items-center justify-between text-xs font-bold text-forest-900 group-hover:text-emerald-600 transition-colors">
        <span>Explore Solution & Pricing</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
