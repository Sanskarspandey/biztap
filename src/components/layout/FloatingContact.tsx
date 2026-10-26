import React from 'react';
import { MessageSquare } from 'lucide-react';
import { AGENCY } from '../../data/agency';

interface FloatingContactProps {
  onOpenContact: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenContact }) => {
  return (
    <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-30 flex flex-col items-center gap-3">
      {/* Top Floating Button: Blue Contact Modal Trigger */}
      <button
        type="button"
        onClick={onOpenContact}
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-[0_4px_14px_rgba(37,99,235,0.4)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/40 cursor-pointer"
        aria-label="Open contact options: WhatsApp, Email, Call"
        title="Contact BizTap"
      >
        <MessageSquare className="w-5 h-5 text-white" />
      </button>

      {/* Bottom Floating Button: Direct Green WhatsApp Trigger */}
      <a
        href={AGENCY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Chat directly with BizTap on WhatsApp (+91 9372948245)"
        title="Chat on WhatsApp"
      >
        {/* Clean WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 fill-white stroke-none"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </aside>
  );
};
