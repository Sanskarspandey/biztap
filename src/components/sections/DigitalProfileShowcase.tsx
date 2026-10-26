import React from 'react';
import { Smartphone, Download, MessageSquare, Phone, MapPin, Globe, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPackageWhatsAppUrl } from '../../utils/whatsapp';

export const DigitalProfileShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-cream-100/70 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Phone Simulation */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-charcoal-950 p-3 shadow-2xl border-4 border-charcoal-800 relative">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-charcoal-800 rounded-full mx-auto mb-3"></div>

              {/* Mobile Screen Content */}
              <div className="bg-[#FCFBF7] rounded-[28px] p-5 text-charcoal-900 overflow-hidden text-center space-y-4">
                {/* Profile Header */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-forest-900 border-2 border-emerald-400 flex items-center justify-center text-white text-xl font-extrabold shadow-sm mb-2">
                    BT
                  </div>
                  <h4 className="text-base font-extrabold text-forest-950">
                    Dr. Sanskar Pandey
                  </h4>
                  <p className="text-xs text-charcoal-500 font-medium">
                    Apex Health & Wellness Clinic
                  </p>
                  <span className="text-[10px] font-bold text-forest-800 bg-forest-100 px-2 py-0.5 rounded-full mt-1">
                    Verified Digital Profile
                  </span>
                </div>

                {/* Primary Action Button: Save Contact */}
                <button
                  type="button"
                  className="w-full py-2.5 px-3 bg-forest-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-forest-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Save to Contacts (.vCard)</span>
                </button>

                {/* Quick Action Grid */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-charcoal-600">
                  <div className="bg-white p-2 rounded-xl border border-cream-200 flex flex-col items-center gap-1 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <span>WhatsApp</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-cream-200 flex flex-col items-center gap-1 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>Call</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-cream-200 flex flex-col items-center gap-1 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>Map</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-cream-200 flex flex-col items-center gap-1 shadow-xs">
                    <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <span>Website</span>
                  </div>
                </div>

                {/* Simulated Service Tiles */}
                <div className="space-y-1.5 text-left text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">
                    Services & Consultations
                  </span>
                  <div className="bg-white p-2.5 rounded-xl border border-cream-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[11px] text-charcoal-900">General Consultation</p>
                      <p className="text-[10px] text-charcoal-500">In-clinic & Video</p>
                    </div>
                    <span className="text-[11px] font-extrabold text-forest-800">₹600</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-cream-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[11px] text-charcoal-900">Preventive Health Check</p>
                      <p className="text-[10px] text-charcoal-500">Includes Blood Work</p>
                    </div>
                    <span className="text-[11px] font-extrabold text-forest-800">₹1,499</span>
                  </div>
                </div>

                {/* Footer Brand Watermark */}
                <div className="pt-2 text-[10px] text-charcoal-400 flex items-center justify-center gap-1">
                  <span>Powered by</span>
                  <span className="font-bold text-forest-900">BizTap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-900 text-xs font-bold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" /> Mobile Digital Identity
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-charcoal-900 leading-tight">
              Replace Obsolete Paper Cards With an Always Updated Digital Profile.
            </h2>

            <p className="text-base text-charcoal-600 leading-relaxed max-w-xl">
              Paper visiting cards get crumpled, lost, and require expensive reprints whenever your phone number, service list, or clinic address updates. A BizTap Smart Digital Profile gives you a dynamic mobile presence you can share via tap, QR code, or link.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">One-Tap Save to Phone Contacts</h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Clients download your complete vCard directly into their iOS or Android phonebook without manually typing a single digit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">Always Up-to-Date Without Re-printing</h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Change your consultation hours, add festival offers, or update fees online. Your physical card and shared links update instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">1 Physical NFC Card Included</h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Every profile package includes a custom-printed physical NFC matte card delivered directly to your doorstep.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={getPackageWhatsAppUrl('Smart Profile Starter', '₹4,999')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-forest-900 hover:bg-forest-800 text-white transition-all shadow-subtle flex items-center gap-2"
              >
                <span>Get Smart Profile (From ₹4,999)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/services/digital-business-profiles"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-charcoal-800 hover:text-forest-900 bg-white hover:bg-cream-100 border border-cream-300 transition-colors"
              >
                View Full Profile Inclusions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
