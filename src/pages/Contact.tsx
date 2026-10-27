import React from 'react';
import { Phone, Mail, MessageSquare, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact BizTap — Direct WhatsApp & Consultation"
        description="Get in touch with BizTap for web development, NFC smart review cards, and digital profiles. Mumbai: +91 89280 51768, Chennai: +91 93729 48245, Email: sanskar.p.work@gmail.com."
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-cream-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-cream-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-forest-800 bg-forest-50 px-3 py-1 rounded-full border border-forest-200">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-950 tracking-tight leading-tight">
              Let’s Discuss Your Business’s Digital Growth.
            </h1>
            <p className="text-base text-charcoal-600 leading-relaxed max-w-xl mx-auto">
              Have a question about website packages or NFC smart cards? Message us directly on WhatsApp, email us, or fill out the enquiry form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Details & Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950">Official WhatsApp Support</h3>
                    <p className="text-xs text-charcoal-600">Quick response from our Mumbai &amp; Chennai teams</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-forest-950">Mumbai:</span>
                    <a href={COMPANY.mumbai.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-bold">
                      {COMPANY.mumbai.phone} ↗
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-forest-950">Chennai:</span>
                    <a href={COMPANY.chennai.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-bold">
                      {COMPANY.chennai.phone} ↗
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href={COMPANY.mumbai.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Mumbai</span>
                  </a>
                  <a
                    href={COMPANY.chennai.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Chennai</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone & Email Card */}
              <div className="bg-white rounded-2xl p-6 border border-cream-300 shadow-subtle space-y-4">
                <h3 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider">
                  Direct Inquiries & Calling
                </h3>

                <div className="space-y-3.5 text-xs text-charcoal-700">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center text-forest-800 flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <span className="block text-charcoal-500 text-[11px] font-semibold">Phone Support:</span>
                      <div>
                        <span className="font-bold text-charcoal-900 block">Mumbai</span>
                        <a href={COMPANY.mumbai.telUrl} className="text-forest-900 font-semibold hover:underline">
                          {COMPANY.mumbai.phone}
                        </a>
                      </div>
                      <div className="pt-1 border-t border-cream-200">
                        <span className="font-bold text-charcoal-900 block">Chennai</span>
                        <a href={COMPANY.chennai.telUrl} className="text-forest-900 font-semibold hover:underline">
                          {COMPANY.chennai.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center text-forest-800">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-charcoal-500 text-[11px]">Email Address:</span>
                      <a href={`mailto:${COMPANY.email}`} className="font-bold text-charcoal-900 hover:text-forest-900">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center text-forest-800">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-charcoal-500 text-[11px]">Working Hours:</span>
                      <span className="font-medium text-charcoal-800">{COMPANY.workingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cream-100 flex items-center justify-center text-forest-800">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-charcoal-500 text-[11px]">Delivery & Geographic Coverage:</span>
                      <span className="font-medium text-charcoal-800">{COMPANY.serviceArea}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Honest Policy Notice */}
              <div className="bg-cream-100/70 rounded-2xl p-5 border border-cream-200 text-xs text-charcoal-600 space-y-2">
                <span className="font-bold text-forest-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Transparent Operations
                </span>
                <p className="leading-relaxed">
                  We don’t use generic spam bots or sell your phone number to third-party telemarketers. When you reach out to BizTap, you talk directly with experienced web specialists.
                </p>
              </div>
            </div>

            {/* Right Column: Validated Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
