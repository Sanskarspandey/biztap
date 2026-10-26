import React from 'react';
import { Check, X, Clock, RefreshCw, Layers, ArrowRight, MessageSquare } from 'lucide-react';
import { PricingTier } from '../../data/pricing';
import { getPackageWhatsAppUrl } from '../../utils/whatsapp';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  tier: PricingTier;
  contextName?: string;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  contextName = '',
  isPopular = false,
}) => {
  const isCustom = tier.priceDisplay.toLowerCase().includes('custom');
  const popular = isPopular || tier.isPopular;

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
        popular
          ? 'bg-white border-2 border-forest-900 shadow-premium ring-1 ring-forest-900/10'
          : 'bg-white/90 border border-cream-200/90 hover:border-cream-300 shadow-subtle hover:shadow-premium'
      } p-6 sm:p-7`}
    >
      {/* Popular or Custom Badge */}
      {(popular || tier.badge) && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-forest-900 text-white shadow-sm">
            {tier.badge || 'Most Popular'}
          </span>
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="border-b border-cream-100 pb-5 mb-5">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-xl font-bold text-charcoal-900">{tier.name}</h3>
          </div>
          <p className="text-xs text-charcoal-500 leading-relaxed min-h-[36px]">
            {tier.description}
          </p>

          {/* Price Block */}
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-forest-950 tracking-tight">
              {tier.priceDisplay}
            </span>
            {!isCustom && (
              <span className="text-xs text-charcoal-500 font-medium">
                {tier.billingType === 'annual' ? '/ year' : 'one-time proposed'}
              </span>
            )}
          </div>
          <span className="inline-block mt-1 text-[11px] text-charcoal-400">
            *Subject to finalized feature scope
          </span>
        </div>

        {/* Package Specs Pills */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-charcoal-600 bg-cream-50/80 p-3 rounded-xl border border-cream-200/60 mb-5">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
            <span className="truncate">{tier.pages}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
            <span className="truncate">{tier.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <RefreshCw className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
            <span>{tier.revisions}</span>
          </div>
        </div>

        {/* Inclusions */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
            What’s Included:
          </h4>
          <ul className="space-y-2.5 text-xs text-charcoal-700">
            {tier.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Exclusions */}
          {tier.exclusions && tier.exclusions.length > 0 && (
            <div className="pt-3 border-t border-cream-100">
              <h5 className="text-[11px] font-semibold text-charcoal-400 mb-2">Exclusions:</h5>
              <ul className="space-y-1.5 text-xs text-charcoal-400">
                {tier.exclusions.map((excl, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-charcoal-300 flex-shrink-0 mt-0.5" />
                    <span className="line-through">{excl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-cream-100 space-y-2 mt-auto">
        <a
          href={getPackageWhatsAppUrl(tier.name, tier.priceDisplay, contextName)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            popular
              ? 'bg-forest-900 hover:bg-forest-800 text-white shadow-sm'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{isCustom ? 'Discuss Custom Scope' : 'Get Started via WhatsApp'}</span>
        </a>

        <Link
          to={`/get-a-quote?plan=${encodeURIComponent(tier.name)}&context=${encodeURIComponent(contextName)}`}
          className="w-full py-2 px-3 text-center text-xs font-semibold text-charcoal-600 hover:text-forest-900 rounded-lg hover:bg-cream-100 transition-colors flex items-center justify-center gap-1"
        >
          <span>Request Detailed Proposal</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};
