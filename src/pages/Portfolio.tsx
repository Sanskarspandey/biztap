import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Filter, Info } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { DemoModal } from '../components/common/DemoModal';
import { CTASection } from '../components/sections/CTASection';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolio';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Hospitality & Dining', 'Health & Fitness', 'Medical & Dental', 'Legal Services', 'Beauty & Grooming', 'Education & Academics'];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.aspects.some((a) => a.value.includes(selectedFilter) || a.label.includes(selectedFilter)));

  return (
    <>
      <SEO
        title="Our Work & Demos — Website Concepts & Prototypes | BizTap"
        description="Explore BizTap's portfolio of web concepts, interactive demos, and blueprints for cafés, gyms, clinics, salons, and law chambers."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Our Work' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60 border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
            Design & Engineering Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
            Explore Our Interactive Blueprints & Concepts
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            We showcase real, interactive concept demos engineered to conversion benchmarks. Inspect our architectural standards across hospitality, healthcare, fitness, and professional services.
          </p>

          {/* Honest Disclosure Banner */}
          <div className="bg-amber-50/90 rounded-2xl p-4 border border-amber-200/90 max-w-xl mx-auto text-xs text-amber-950 flex items-start gap-3 text-left">
            <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Authenticity Commitment:</strong> In accordance with BizTap policy, these showcase projects are fully functional architectural concepts and staging demos. We never invent fake client testimonials or falsely claim third-party trademarks.
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  selectedFilter === cat
                    ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                    : 'bg-cream-50 text-charcoal-700 border-cream-200 hover:bg-cream-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onOpenDemo={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Want a Custom Website Like These For Your Business?"
        subtitle="We will review your business requirements and build a high-performance web presence tailored to your exact industry standards."
        primaryCtaText="Get a Free Quote"
        primaryCtaLink="/get-a-quote"
      />

      {/* Interactive Demo Scope Modal */}
      <DemoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
};
