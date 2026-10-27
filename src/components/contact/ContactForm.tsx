import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  MessageSquare,
  Mail,
  Copy,
  Check,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { AGENCY } from '../../data/agency';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  interestedIn: string;
  budget: string;
  preferredOffice: 'Mumbai' | 'Chennai';
  message: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  interestedIn: '',
  budget: '',
  preferredOffice: 'Mumbai',
  message: '',
};

const SERVICE_OPTIONS = [
  'School & College Websites',
  'Clinic & Healthcare Websites',
  'Salon & Beauty Websites',
  'Gym & Fitness Websites',
  'Restaurant & Café Websites',
  'E-commerce Websites',
  'Photography Portfolio Websites',
  'CA & Accounting Firm Websites',
  'Lawyer & Law Firm Websites',
  'Construction & Builder Websites',
  'Hotel & Hospitality Websites',
  'Real Estate Websites',
  'Personal Portfolio Websites',
  'Retail Business Websites',
  'Custom Business Website',
  'Website Redesign',
  'Other / Custom Requirement',
];

const BUDGET_OPTIONS = [
  'Under ₹5,000',
  '₹5,000–₹10,000',
  '₹10,000–₹25,000',
  '₹25,000–₹50,000',
  '₹50,000+',
  'Not Sure Yet',
];

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [whatsappUrlMumbai, setWhatsappUrlMumbai] = useState<string>('');
  const [whatsappUrlChennai, setWhatsappUrlChennai] = useState<string>('');
  const [emailUrl, setEmailUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g. you@example.com).';
    }

    if (values.phone.trim() && !/^[0-9+() -]{7,18}$/.test(values.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (e.g. +91 98765 43210).';
    }

    if (!values.message.trim()) {
      errs.message = 'Please tell us about your business or project requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const prepareEnquiry = () => {
    const lines: string[] = ["Hi BizTap! I'd like to discuss a project.", ''];
    lines.push(`Preferred Office: ${values.preferredOffice}`);
    lines.push(`Name: ${values.name.trim()}`);
    if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
    if (values.phone.trim()) lines.push(`Phone: ${values.phone.trim()}`);
    if (values.businessName.trim()) lines.push(`Business: ${values.businessName.trim()}`);
    if (values.interestedIn.trim()) lines.push(`Interested In: ${values.interestedIn.trim()}`);
    if (values.budget.trim()) lines.push(`Budget: ${values.budget.trim()}`);
    lines.push('');
    lines.push('Project Details:');
    lines.push(values.message.trim());

    const formatted = lines.join('\n');
    const selectedOffice = values.preferredOffice === 'Chennai' ? AGENCY.chennai : AGENCY.mumbai;
    const waUrl = `https://wa.me/${selectedOffice.whatsappNumber}?text=${encodeURIComponent(formatted)}`;
    const waUrlMumbai = `https://wa.me/${AGENCY.mumbai.whatsappNumber}?text=${encodeURIComponent(formatted)}`;
    const waUrlChennai = `https://wa.me/${AGENCY.chennai.whatsappNumber}?text=${encodeURIComponent(formatted)}`;

    const subject = encodeURIComponent(
      `Project Enquiry (${values.preferredOffice}): ${values.name.trim()} (${values.interestedIn || 'Website Solution'})`
    );
    const body = encodeURIComponent(formatted);
    const mailto = `mailto:${AGENCY.email}?subject=${subject}&body=${body}`;

    setSubmittedMessage(formatted);
    setWhatsappUrl(waUrl);
    setWhatsappUrlMumbai(waUrlMumbai);
    setWhatsappUrlChennai(waUrlChennai);
    setEmailUrl(mailto);

    return { waUrl, mailto, formatted };
  };

  const handleSubmit = (e: React.FormEvent, channel: 'whatsapp' | 'email' | 'prepare' = 'prepare') => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const { waUrl, mailto } = prepareEnquiry();

    setTimeout(() => {
      setIsSubmitting(false);
      try {
        if (channel === 'whatsapp') {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        } else if (channel === 'email') {
          window.location.href = mailto;
        }
      } catch {
        // Handled by explicit in-form buttons
      }
    }, 350);
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setSubmittedMessage(null);
    setWhatsappUrl('');
    setWhatsappUrlMumbai('');
    setWhatsappUrlChennai('');
    setEmailUrl('');
    setErrors({});
    setCopied(false);
  };

  return (
    <div className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 shadow-xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8 space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-sm text-slate-400">
          Fill out the form and our Mumbai or Chennai team will get back to you shortly.
        </p>
      </div>

      {submittedMessage ? (
        /* Transparent Handoff State (Honest fallback - No false "sent" claim) */
        <div
          role="region"
          aria-live="polite"
          className="space-y-6 py-2 animate-in fade-in duration-300"
        >
          <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3">
            <div className="flex items-center gap-2.5 text-blue-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Enquiry Details Prepared</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              We've prefilled your project details. Choose your preferred city WhatsApp line or email below to send your enquiry directly to BizTap.
            </p>
            <p className="text-xs text-amber-300/90 font-medium">
              Note: Please tap &ldquo;Send&rdquo; inside WhatsApp or your email client to complete sending your message.
            </p>
          </div>

          {/* Formatted Message Preview Box */}
          <div className="p-4 rounded-xl bg-[#0B1426] border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-56 overflow-y-auto">
            {submittedMessage}
          </div>

          {/* Actions: Send via WhatsApp Mumbai, Chennai, or Email */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={whatsappUrlMumbai}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[190px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/30 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Mumbai</span>
            </a>

            <a
              href={whatsappUrlChennai}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[190px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/30 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chennai</span>
            </a>

            <a
              href={emailUrl}
              className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-800 border border-slate-700 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
              title="Copy message to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Edit / Send another enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        /* Contact Form */
        <form onSubmit={(e) => handleSubmit(e, 'prepare')} noValidate className="space-y-5">
          {/* Field 1: Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
            >
              Your Name <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={values.name}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500/40'
                  : 'border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-blue-500/30'
              }`}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Row: Email & Phone Side-by-Side on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 2: Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/40'
                    : 'border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-blue-500/30'
                }`}
              />
              {errors.email && (
                <p
                  id="contact-email-error"
                  className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Field 3: Phone Number */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-red-500/40'
                    : 'border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-blue-500/30'
                }`}
              />
              {errors.phone && (
                <p
                  id="contact-phone-error"
                  className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium"
                >
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row: Business Name & Interested In */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 4: Business Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-business"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Business Name
              </label>
              <input
                id="contact-business"
                name="businessName"
                type="text"
                value={values.businessName}
                onChange={handleChange}
                placeholder="Your business name"
                className="w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white placeholder-slate-500 border border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm focus:outline-none"
              />
            </div>

            {/* Field 5: Interested In */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-interested"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
              >
                Interested In
              </label>
              <div className="relative">
                <select
                  id="contact-interested"
                  name="interestedIn"
                  value={values.interestedIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white border border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0B1426] text-slate-400">
                    Select a service...
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0B1426] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Field 6: Estimated Budget */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-budget"
              className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
            >
              Estimated Budget
            </label>
            <div className="relative">
              <select
                id="contact-budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white border border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0B1426] text-slate-400">
                  Select budget range...
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0B1426] text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Field 7: Preferred Office / City */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-office"
              className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
            >
              Contact Preference
            </label>
            <div className="grid grid-cols-2 gap-3" id="contact-office">
              <button
                type="button"
                onClick={() => setValues((prev) => ({ ...prev, preferredOffice: 'Mumbai' }))}
                className={`py-3 px-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  values.preferredOffice === 'Mumbai'
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                    : 'bg-[#0B1426] border-slate-700/80 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${values.preferredOffice === 'Mumbai' ? 'bg-blue-400' : 'bg-slate-600'}`} />
                  Mumbai
                </span>
                <span className="text-[11px] text-blue-400 font-mono">+91 89280 51768</span>
              </button>
              <button
                type="button"
                onClick={() => setValues((prev) => ({ ...prev, preferredOffice: 'Chennai' }))}
                className={`py-3 px-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  values.preferredOffice === 'Chennai'
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm ring-1 ring-blue-500/50'
                    : 'bg-[#0B1426] border-slate-700/80 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${values.preferredOffice === 'Chennai' ? 'bg-blue-400' : 'bg-slate-600'}`} />
                  Chennai
                </span>
                <span className="text-[11px] text-blue-400 font-mono">+91 93729 48245</span>
              </button>
            </div>
          </div>

          {/* Field 8: Your Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
            >
              Your Message <span className="text-red-400" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Tell us about your business, what you need, your preferred timeline, and any features you have in mind..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1426] text-white placeholder-slate-500 border transition-all text-sm focus:outline-none focus:ring-2 leading-relaxed ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500/40'
                  : 'border-slate-700/80 hover:border-slate-600 focus:border-blue-500 focus:ring-blue-500/30'
              }`}
            />
            {errors.message && (
              <p
                id="contact-message-error"
                className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Dual Submission Triggers: WhatsApp & Email options */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={(e) => handleSubmit(e, 'whatsapp')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-950/30 transition-all disabled:opacity-60 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isSubmitting ? 'Preparing...' : `Send to WhatsApp (${values.preferredOffice})`}</span>
            </button>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={(e) => handleSubmit(e, 'email')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-900/30 transition-all disabled:opacity-60 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{isSubmitting ? 'Preparing...' : 'Send via Email'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
