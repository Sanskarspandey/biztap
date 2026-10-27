import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { INDUSTRIES } from '../../data/industries';
import { SERVICES } from '../../data/services';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  requiredService: string;
  approxBudget: string;
  projectDescription: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}

const INITIAL_FORM: FormData = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  industry: '',
  requiredService: '',
  approxBudget: '',
  projectDescription: '',
  preferredContact: 'WhatsApp',
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your 10-digit phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.requiredService) errs.requiredService = 'Please select a service';
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project or requirements';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct formatted message
    const message = `*New Website Enquiry via BizTap Website*
----------------------------------------
*Name:* ${formData.name}
*Business:* ${formData.businessName || 'Not specified'}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Industry:* ${formData.industry || 'Not specified'}
*Service Required:* ${formData.requiredService}
*Approx. Budget:* ${formData.approxBudget || 'Flexible / Need advice'}
*Preferred Contact:* ${formData.preferredContact}
*Project Details:*
${formData.projectDescription}
----------------------------------------`;

    setSubmittedMessage(message);

    // Provide instant WhatsApp action
    const waUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setSubmittedMessage(null);
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-premium">
      {submittedMessage ? (
        <div className="text-center py-8 space-y-5 animate-in fade-in duration-200">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-forest-950">Inquiry Prepared Successfully!</h3>
            <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been compiled and forwarded to our direct WhatsApp line. If your browser blocked popups, click the button below to send it immediately.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
            <a
              href={`https://wa.me/${COMPANY.mumbai.whatsappNumber}?text=${encodeURIComponent(submittedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Mumbai</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY.chennai.whatsappNumber}?text=${encodeURIComponent(submittedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chennai</span>
            </a>

            <a
              href={`mailto:${COMPANY.email}?subject=BizTap Project Enquiry - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(submittedMessage)}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </a>
          </div>

          <button
            onClick={handleReset}
            className="text-xs text-charcoal-500 underline hover:text-charcoal-800 pt-4 block mx-auto"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-cream-200 pb-4 mb-4">
            <h3 className="text-xl font-bold text-forest-950">Send an Inquiry to BizTap</h3>
            <p className="text-xs text-charcoal-500 mt-1">
              Share your requirements below. We typically respond within 2 business hours.
            </p>
          </div>

          {/* Row 1: Name and Business Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-charcoal-700 mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                  errors.name ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="businessName" className="block text-xs font-bold text-charcoal-700 mb-1">
                Business / Clinic / Brand Name
              </label>
              <input
                type="text"
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Apex Health Clinic"
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50/40 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
              />
            </div>
          </div>

          {/* Row 2: Phone and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-charcoal-700 mb-1">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                  errors.phone ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-charcoal-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@business.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                  errors.email ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Row 3: Industry and Required Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="industry" className="block text-xs font-bold text-charcoal-700 mb-1">
                Your Industry / Sector
              </label>
              <select
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50/40 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
              >
                <option value="">Select your industry (Optional)</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind.slug} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
                <option value="Other Industry">Other Industry</option>
              </select>
            </div>

            <div>
              <label htmlFor="requiredService" className="block text-xs font-bold text-charcoal-700 mb-1">
                Required Service <span className="text-red-500">*</span>
              </label>
              <select
                id="requiredService"
                value={formData.requiredService}
                onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                  errors.requiredService ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                }`}
              >
                <option value="">Select required service</option>
                <option value="Complete Website (Starter / Pro / Premium)">Complete Website Development</option>
                <option value="NFC Smart Review Card (₹3,000)">NFC Smart Review Card (₹3,000)</option>
                <option value="Digital Business Profile (₹4,999)">Digital Business Profile (₹4,999)</option>
                <option value="Website + Smart Profile Bundle (From ₹11,999)">Website + Smart Profile Bundle</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="E-Commerce Store">E-Commerce Storefront</option>
                <option value="Custom Business Web Application">Custom Web Application</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.requiredService && (
                <p className="text-[11px] text-red-500 mt-1">{errors.requiredService}</p>
              )}
            </div>
          </div>

          {/* Row 4: Budget and Preferred Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="approxBudget" className="block text-xs font-bold text-charcoal-700 mb-1">
                Approximate Budget Range
              </label>
              <select
                id="approxBudget"
                value={formData.approxBudget}
                onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50/40 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
              >
                <option value="">Select budget range</option>
                <option value="₹3,000 – ₹5,000 (NFC Card / Basic Profile)">₹3,000 – ₹5,000 (NFC / Profile)</option>
                <option value="₹7,999 – ₹15,000 (Starter to Pro Website)">₹7,999 – ₹15,000 (Starter Website)</option>
                <option value="₹15,000 – ₹30,000 (Comprehensive Institution / Store)">₹15,000 – ₹30,000 (Comprehensive)</option>
                <option value="₹30,000+ (Custom Portal / Enterprise)">₹30,000+ (Custom Software)</option>
                <option value="Flexible / Need Guidance">Flexible / Need Guidance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 mb-1">
                Preferred Way to Connect
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['WhatsApp', 'Phone Call', 'Email'] as const).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContact: method })}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-colors ${
                      formData.preferredContact === method
                        ? 'bg-forest-900 text-white border-forest-900 shadow-sm'
                        : 'bg-white text-charcoal-700 border-cream-300 hover:bg-cream-100'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-xs font-bold text-charcoal-700 mb-1">
              Project Description / Specific Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder="Tell us about your business goals, target launch timeline, and any specific features you need (e.g. appointment booking, digital menu, WhatsApp orders)..."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 leading-relaxed ${
                errors.projectDescription
                  ? 'border-red-400 bg-red-50/30'
                  : 'border-cream-300 bg-cream-50/40'
              }`}
            />
            {errors.projectDescription && (
              <p className="text-[11px] text-red-500 mt-1">{errors.projectDescription}</p>
            )}
          </div>

          {/* Notice of transparent submission */}
          <div className="bg-cream-100/70 p-3 rounded-xl border border-cream-200 text-[11px] text-charcoal-600 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
            <span>
              Submitting opens a pre-composed message directly to our official WhatsApp line (Mumbai: +91 89280 51768 / Chennai: +91 93729 48245) or email, ensuring zero lost inquiries or unmonitored databases.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-forest-900 hover:bg-forest-800 shadow-subtle hover:shadow-premium transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
          >
            <span>Submit Project Inquiry</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
};
