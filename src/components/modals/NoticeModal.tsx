import React, { useEffect } from 'react';
import { X, Sparkles, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { AGENCY } from '../../data/agency';

export interface NoticeModalData {
  isOpen: boolean;
  title: string;
  badge: string;
  description: string;
  upcomingFeatures: string[];
  plannedPhase: string;
}

interface NoticeModalProps {
  data: NoticeModalData;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({
  data,
  onClose,
  onOpenQuote,
}) => {
  const { isOpen, title, badge, description, upcomingFeatures, plannedPhase } = data;

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notice-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-7 overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-blue-400" />
                {badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {plannedPhase}
              </span>
            </div>
            <h2 id="notice-modal-title" className="text-xl sm:text-2xl font-bold text-white pt-1">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-4">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {description}
          </p>

          {upcomingFeatures.length > 0 && (
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                What's included in this section:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {upcomingFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-xs text-slate-400 bg-blue-950/20 border border-blue-900/30 rounded-lg p-3">
            💡 Need a project quote or want to discuss requirements right away? Our team is available now.
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <span>Request a Quote Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={AGENCY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-blue-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
