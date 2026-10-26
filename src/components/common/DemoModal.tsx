import React from 'react';
import { X, Check, ArrowRight, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { PortfolioProject } from '../../data/portfolio';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface DemoModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const requestUrl = getWhatsAppUrl(
    `Hi BizTap, I am interested in building a website similar to the ${project.title} (${project.industry}) concept.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream-200 p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-cream-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-cream-200 pb-5 mb-5 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800">
              {project.badge}
            </span>
            <span className="text-xs text-charcoal-500 font-medium">{project.industry}</span>
          </div>
          <h3 className="text-2xl font-extrabold text-charcoal-900">{project.title}</h3>
          <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">{project.tagline}</p>
        </div>

        {/* Concept Scope Notice */}
        <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200 text-xs text-amber-900 mb-6">
          <strong>Transparency Notice:</strong> This project is a verified BizTap design concept & interactive architectural demo. It is not an active third-party client site.
        </div>

        {/* Body Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
            Project Architecture & Strategy
          </h4>
          <p className="text-xs text-charcoal-700 leading-relaxed">{project.description}</p>

          {/* Key Features */}
          <div className="bg-cream-50 p-4 rounded-xl border border-cream-200 space-y-2">
            <span className="text-xs font-bold text-charcoal-900 block mb-1">
              Included Functional Capabilities:
            </span>
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                <Check className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Aspects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            {project.aspects.map((asp, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-cream-100/60 border border-cream-200">
                <span className="text-[10px] text-charcoal-400 block font-semibold uppercase">
                  {asp.label}
                </span>
                <span className="font-bold text-charcoal-800 text-xs mt-0.5 block">
                  {asp.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
          <a
            href={requestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-forest-900 hover:bg-forest-800 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Request a Similar Website for Your Business</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl font-semibold text-xs text-charcoal-700 hover:bg-cream-100 border border-cream-300 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
