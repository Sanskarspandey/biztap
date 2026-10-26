import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip bubble (can be dismissed) */}
      {!dismissed && (
        <div className="bg-white rounded-xl shadow-premium border border-cream-300 p-3 max-w-[240px] text-xs text-charcoal-800 relative animate-in fade-in slide-in-from-bottom-3 duration-200">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-1.5 right-1.5 text-charcoal-400 hover:text-charcoal-700 p-1"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-forest-900 mb-0.5">Need a quick quote?</p>
          <p className="text-charcoal-600 text-[11px] leading-relaxed">
            Message us directly on WhatsApp for instant pricing & project scope.
          </p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-premium hover:shadow-card-hover transition-all transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Open WhatsApp conversation"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Chat with BizTap on WhatsApp</span>
        {/* Subtle ping animation */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
};
