import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { AGENCY } from '../../data/agency';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [quickMessage, setQuickMessage] = useState('');

  // Close on Escape key
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

  const handleSendQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = quickMessage.trim() || 'Hi BizTap, I would like to enquire about your website development services.';
    const url = `https://wa.me/${AGENCY.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSendQuickEmail = () => {
    const text = quickMessage.trim() || 'Hi BizTap, I would like to enquire about your website development services.';
    const subject = encodeURIComponent('BizTap Website Inquiry');
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${AGENCY.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Surface */}
      <div className="relative w-full max-w-md bg-navy-900 border border-slate-700 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h2 id="contact-modal-title" className="text-xl font-bold text-white">
                Contact BizTap
              </h2>
              <p className="text-[11px] text-slate-400">Available for new client projects</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close contact options"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Channels */}
        <div className="space-y-2.5">
          {/* WhatsApp Action Card */}
          <a
            href={AGENCY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/30 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Fastest Response
                </span>
                <span className="text-sm font-bold text-white">
                  WhatsApp: {AGENCY.phone}
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              Chat →
            </span>
          </a>

          {/* Email Action Card */}
          <a
            href={`mailto:${AGENCY.email}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Official Email
                </span>
                <span className="text-sm font-bold text-white break-all">
                  {AGENCY.email}
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
              Write →
            </span>
          </a>

          {/* Phone Call Card */}
          <a
            href={`tel:${AGENCY.phone}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-700 text-slate-200 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Line
                </span>
                <span className="text-sm font-bold text-white">
                  {AGENCY.phone}
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-300 group-hover:translate-x-1 transition-transform">
              Call →
            </span>
          </a>
        </div>

        {/* Quick Message Input */}
        <form onSubmit={handleSendQuickWhatsApp} className="pt-2 border-t border-slate-800 space-y-3">
          <label className="block text-xs font-semibold text-slate-300">
            Send a Quick Inquiry:
          </label>
          <div className="relative">
            <input
              type="text"
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              placeholder="e.g. Need a website for my clinic/business..."
              className="w-full px-3.5 py-2.5 pr-24 rounded-xl bg-slate-950/80 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-bold flex items-center gap-1 transition-colors"
            >
              <Send className="w-3 h-3" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
