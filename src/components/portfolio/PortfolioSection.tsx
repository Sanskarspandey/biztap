import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  ArrowRight,
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../../data/portfolio';

interface PortfolioSectionProps {
  onSelectProject?: (project: PortfolioProject) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject
}) => {
  const handleProjectInquiry = (project: PortfolioProject) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', '#contact');
      }
    }
  };

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 scroll-mt-24 z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-blue-300">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Blueprints & Concepts</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Work & Demos
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Inspect our production-grade architecture blueprints across dining, healthcare, fitness, and professional legal practices.
          </p>

          {/* Honest Disclosure Banner */}
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200/90 max-w-xl mx-auto flex items-start gap-2.5 text-left font-normal">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-amber-300 font-semibold">Honest Disclosure:</strong> These featured projects are functional architectural concepts engineered to live conversion benchmarks. BizTap does not claim fabricated client relationships or unverified third-party endorsements.
            </span>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-950/80 text-[11px] font-bold text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.industry}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-300 font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Key Features Pill List */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Architectural Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => handleProjectInquiry(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer group-hover:bg-blue-600 group-hover:text-white"
                >
                  <span>Build Something Like This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
