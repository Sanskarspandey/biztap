import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AGENCY } from '../../data/agency';

export const ContactInfoCard: React.FC = () => {
  return (
    <div className="bg-[#131D31]/90 backdrop-blur-sm border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl">
      {/* Email Row */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Mail className="w-5 h-5" />
        </div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
            Email
          </span>
          <a
            href={`mailto:${AGENCY.email}`}
            className="block text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors truncate"
            title={`Email ${AGENCY.email}`}
          >
            {AGENCY.email}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800/80" />

      {/* Phone & WhatsApp Section */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Phone className="w-5 h-5" />
        </div>
        <div className="space-y-3.5 flex-1 min-w-0">
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
            Official Contact Numbers
          </span>

          {/* Mumbai */}
          <div className="space-y-1">
            <span className="block text-xs font-bold text-white uppercase tracking-wider">
              Mumbai
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={AGENCY.mumbai.telUrl}
                className="text-sm sm:text-base font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                title="Call BizTap Mumbai"
              >
                {AGENCY.mumbai.phone}
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={AGENCY.mumbai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                title="WhatsApp Mumbai office"
              >
                <span>WhatsApp</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Chennai */}
          <div className="space-y-1 pt-2 border-t border-slate-800/60">
            <span className="block text-xs font-bold text-white uppercase tracking-wider">
              Chennai
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={AGENCY.chennai.telUrl}
                className="text-sm sm:text-base font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                title="Call BizTap Chennai"
              >
                {AGENCY.chennai.phone}
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={AGENCY.chennai.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                title="WhatsApp Chennai office"
              >
                <span>WhatsApp</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80" />

      {/* Location Row */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
            Office Locations
          </span>
          <span className="block text-sm sm:text-base font-semibold text-white">
            Mumbai &amp; Chennai, India
          </span>
          <span className="block text-xs text-slate-400">
            Serving clients across India &amp; globally
          </span>
        </div>
      </div>
    </div>
  );
};
