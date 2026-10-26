import React from 'react';
import { ArrowRight, MessageSquare, Layers, Sparkles } from 'lucide-react';
import { PortfolioProject } from '../../data/portfolio';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface PortfolioCardProps {
  project: PortfolioProject;
  onOpenDemo?: (project: PortfolioProject) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onOpenDemo }) => {
  const requestSimilarUrl = getWhatsAppUrl(
    `Hi BizTap, I saw your ${project.title} (${project.industry}) concept demo. I want to build a similar website for my business.`
  );

  return (
    <div className="bg-white rounded-2xl border border-cream-200/90 shadow-subtle hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between">
      {/* Visual Header / Mockup Banner */}
      <div className="bg-gradient-to-br from-charcoal-900 to-forest-950 p-6 text-white relative min-h-[170px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-cream-100">
            {project.badge}
          </span>
          <span className="text-xs text-cream-300 font-medium">{project.industry}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-1">{project.title}</h3>
          <p className="text-xs text-cream-200 line-clamp-2 leading-relaxed opacity-90">
            {project.tagline}
          </p>
        </div>

        {/* Subtle decorative dot pattern */}
        <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none">
          <div className="w-16 h-16 rounded-full border-2 border-emerald-400"></div>
        </div>
      </div>

      {/* Body content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Deliverables / Features */}
          <div className="space-y-1.5 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 block mb-2">
              Key Features:
            </span>
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                <Sparkles className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cream-100 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-cream-100 text-charcoal-600 border border-cream-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-cream-100 space-y-2">
          {onOpenDemo && (
            <button
              onClick={() => onOpenDemo(project)}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-forest-900 bg-forest-50 hover:bg-forest-100 border border-forest-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Demo Scope & Blueprint</span>
            </button>
          )}

          <a
            href={requestSimilarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-forest-900 hover:bg-forest-800 transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Request a Similar Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};
