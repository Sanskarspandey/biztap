import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, Mail, AlertCircle } from 'lucide-react';
import { AGENCY } from '../../data/agency';
import { SERVICES } from '../../data/services';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialRequirement?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialRequirement
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [websiteType, setWebsiteType] = useState('School Websites');
  const [requirements, setRequirements] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setWebsiteType(initialService);
      }
      if (initialRequirement) {
        setRequirements(initialRequirement);
      }
    }
  }, [isOpen, initialService, initialRequirement]);

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

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    if (!email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildMessage = () => {
    return `*Website Quote Request — BizTap*
----------------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Website Type:* ${websiteType}
*Project Requirements:*
${requirements.trim() || 'Standard package quotation requested.'}
----------------------------------------`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = buildMessage();
    const url = `https://wa.me/${AGENCY.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSendEmail = () => {
    if (!validate()) return;
    const msg = buildMessage();
    const subject = encodeURIComponent(`BizTap Website Quote Request — ${name}`);
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${AGENCY.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Surface */}
      <div className="relative w-full max-w-lg bg-navy-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Free Consultation
            </span>
            <h2 id="quote-modal-title" className="text-2xl font-extrabold text-white mt-0.5">
              Request a Project Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} noValidate className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Full Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-slate-700'
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                WhatsApp Phone <span className="text-blue-400">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-slate-700'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@business.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-400' : 'border-slate-700'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Website Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Website Category
            </label>
            <select
              value={websiteType}
              onChange={(e) => setWebsiteType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.priceBadge})
                </option>
              ))}
              <option value="General Business Website">General Business Website</option>
              <option value="Other / Bespoke Web App">Other / Bespoke Web App</option>
            </select>
          </div>

          {/* Requirements Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Project Description / Specific Needs
            </label>
            <textarea
              rows={3}
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Tell us about your requirements, reference websites, or target launch timeline..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
            />
          </div>

          {/* Notice */}
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>
              Submitting sends your formatted request directly to our official WhatsApp line (+91 9372948245) or email for an immediate itemized quote.
            </span>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
