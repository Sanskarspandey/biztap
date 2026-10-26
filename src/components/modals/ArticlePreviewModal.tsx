import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowRight, MessageSquare, BookOpen, Sparkles } from 'lucide-react';
import { BlogPost } from '../../data/blog';
import { AGENCY } from '../../data/agency';

interface ArticlePreviewModalProps {
  article: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ArticlePreviewModal: React.FC<ArticlePreviewModalProps> = ({
  article,
  isOpen,
  onClose,
  onOpenQuote
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const getCategoryStyles = (color: BlogPost['categoryColor']) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30';
      case 'purple':
        return 'bg-purple-950/60 text-purple-300 border-purple-500/30';
      case 'amber':
        return 'bg-amber-950/60 text-amber-300 border-amber-500/30';
      default:
        return 'bg-blue-900/50 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-preview-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryStyles(
                  article.categoryColor
                )}`}
              >
                {article.category}
              </span>

              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.readTime}</span>
              </span>

              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{article.date}</span>
              </span>
            </div>

            <h2 id="article-preview-title" className="text-xl sm:text-2xl font-bold text-white pt-1 leading-snug">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors flex-shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-5 overflow-y-auto pr-1">
          {/* Excerpt Lead */}
          <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            "{article.excerpt}"
          </div>

          {/* Section preview */}
          {article.contentSections && article.contentSections.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Article Overview & Key Insights</span>
              </h3>
              {article.contentSections.map((sec, idx) => (
                <div key={idx} className="bg-[#131D31]/80 border border-slate-800 rounded-xl p-4 space-y-2">
                  <h4 className="text-sm font-bold text-white">{sec.heading}</h4>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Editorial Note */}
          <div className="text-xs text-slate-400 bg-blue-950/30 border border-blue-900/40 rounded-xl p-3.5 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200 block mb-0.5">Article Preview Notice</span>
              The full deep-dive article is currently scheduled for our upcoming editorial release. Have specific website questions or want to discuss a project for your business? Our team is available directly.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <span>Request a Free Website Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={AGENCY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
