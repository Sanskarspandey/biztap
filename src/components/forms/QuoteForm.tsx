import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calculator, Check, ArrowRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { INDUSTRIES } from '../../data/industries';
import { INDUSTRY_PRICING, ADDON_SERVICES } from '../../data/pricing';
import { COMPANY } from '../../data/company';
import { formatINR } from '../../utils/formatters';

export const QuoteForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preSelectedPlan = searchParams.get('plan') || '';
  const preSelectedContext = searchParams.get('context') || '';

  const [selectedIndustry, setSelectedIndustry] = useState<string>('clinics');
  const [selectedTier, setSelectedTier] = useState<string>('pro');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Contact details
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle URL pre-selection
  useEffect(() => {
    if (preSelectedContext) {
      const match = INDUSTRIES.find(
        (i) => i.name.toLowerCase().includes(preSelectedContext.toLowerCase()) || i.slug === preSelectedContext
      );
      if (match) setSelectedIndustry(match.slug);
    }
  }, [preSelectedContext]);

  const industryData = INDUSTRY_PRICING[selectedIndustry] || INDUSTRY_PRICING['clinics'];
  const currentTierObj =
    industryData.tiers.find((t) => t.id.includes(selectedTier)) || industryData.tiers[1] || industryData.tiers[0];

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  // Calculate live estimate if numeric
  const basePrice = typeof currentTierObj?.price === 'number' ? currentTierObj.price : 0;
  const isCustomPrice = typeof currentTierObj?.price !== 'number';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!clientName.trim()) errs.clientName = 'Your name is required';
    if (!phone.trim()) errs.phone = 'WhatsApp phone number is required';
    if (!email.trim()) errs.email = 'Email address is required';
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*Formal Quote Request — BizTap*
----------------------------------------
*Client Name:* ${clientName}
*Business:* ${businessName || 'Not specified'}
*Phone:* ${phone}
*Email:* ${email}
*Industry:* ${industryData.industryName}
*Selected Package:* ${currentTierObj.name} (${currentTierObj.priceDisplay})
*Selected Add-Ons:* ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None selected'}
*Client Notes:* ${notes || 'Standard package requested'}
----------------------------------------`;

    setIsSuccess(true);
    const waUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl border border-cream-300 shadow-premium p-6 sm:p-10">
      {isSuccess ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="text-2xl font-bold text-forest-950">Quote Request Compiled!</h3>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto">
            We have routed your selected configuration to WhatsApp (Mumbai: {COMPANY.mumbai.phone} / Chennai: {COMPANY.chennai.phone}). Our team will review your specifications and reply with an itemized project agreement.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-forest-800 underline font-semibold"
            >
              Configure Another Quote
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Section 1: Choose Industry */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-forest-900 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-charcoal-900">
                Select Your Industry Vertical
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {INDUSTRIES.map((ind) => {
                const isSelected = selectedIndustry === ind.slug;
                return (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => setSelectedIndustry(ind.slug)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-forest-900 bg-forest-50/80 ring-1 ring-forest-900 shadow-sm'
                        : 'border-cream-300 bg-white hover:bg-cream-50'
                    }`}
                  >
                    <span className="block text-xs font-bold text-charcoal-900 truncate">
                      {ind.name}
                    </span>
                    <span className="block text-[11px] text-forest-800 font-semibold mt-0.5">
                      From {ind.slug in INDUSTRY_PRICING ? INDUSTRY_PRICING[ind.slug].startingPrice : 'Custom'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Choose Tier */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-forest-900 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-charcoal-900">
                Select Package Tier for {industryData.industryName}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industryData.tiers.map((tier) => {
                const isSelected = currentTierObj.id === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => {
                      if (tier.id.includes('starter') || tier.id.includes('mvp')) setSelectedTier('starter');
                      else if (tier.id.includes('pro') || tier.id.includes('platform')) setSelectedTier('pro');
                      else setSelectedTier('premium');
                    }}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                      isSelected
                        ? 'border-forest-900 bg-forest-50/50 shadow-subtle ring-2 ring-forest-900'
                        : 'border-cream-200 bg-white hover:border-cream-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-charcoal-900">{tier.name}</span>
                      {tier.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest-100 text-forest-800">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-extrabold text-forest-950 mb-2">
                      {tier.priceDisplay}
                    </div>
                    <p className="text-xs text-charcoal-600 line-clamp-2 mb-3">
                      {tier.description}
                    </p>
                    <div className="text-[11px] text-charcoal-500 font-medium">
                      Pages: {tier.pages}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Select Optional Add-Ons */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-forest-900 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="text-base font-bold text-charcoal-900">
                Choose Optional Add-Ons & Care Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDON_SERVICES.slice(0, 6).map((addon) => {
                const isChecked = selectedAddons.includes(addon.name);
                return (
                  <div
                    key={addon.name}
                    onClick={() => toggleAddon(addon.name)}
                    className={`cursor-pointer p-3.5 rounded-xl border flex items-start justify-between gap-3 transition-colors ${
                      isChecked
                        ? 'border-emerald-600 bg-emerald-50/50'
                        : 'border-cream-200 bg-white hover:bg-cream-50'
                    }`}
                  >
                    <div>
                      <span className="block text-xs font-bold text-charcoal-900">{addon.name}</span>
                      <span className="block text-[11px] text-charcoal-500 mt-0.5">{addon.description}</span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-forest-900 block">{addon.price}</span>
                      <div
                        className={`w-5 h-5 rounded-md border mt-1 flex items-center justify-center ml-auto ${
                          isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-cream-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Contact Information */}
          <div className="pt-4 border-t border-cream-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-forest-900 text-white text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h3 className="text-base font-bold text-charcoal-900">
                Where Should We Send Your Proposal?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Dr. Anand Verma"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                    formErrors.clientName ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                  }`}
                />
                {formErrors.clientName && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.clientName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Business / Brand Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Verma Multispeciality Dental"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50/40 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  WhatsApp Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                    formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@vermadental.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800 ${
                    formErrors.email ? 'border-red-400 bg-red-50/30' : 'border-cream-300 bg-cream-50/40'
                  }`}
                />
                {formErrors.email && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Additional Scope Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any specific reference websites or immediate target launch date..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 bg-cream-50/40 text-sm text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
                />
              </div>
            </div>
          </div>

          {/* Estimate summary & Submit */}
          <div className="bg-forest-950 text-white rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Proposed Configuration Estimate
              </span>
              <div className="text-3xl font-extrabold text-white mt-1">
                {isCustomPrice ? 'Custom Quote Scope' : formatINR(basePrice)}
              </div>
              <p className="text-xs text-cream-300 mt-1">
                Includes {currentTierObj.name} • {industryData.industryName}
                {selectedAddons.length > 0 && ` + ${selectedAddons.length} selected add-on(s)`}
              </p>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-extrabold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-charcoal-950" />
              <span>Request Detailed Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-charcoal-950" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
