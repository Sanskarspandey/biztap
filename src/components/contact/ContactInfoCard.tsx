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

      {/* Phone & WhatsApp Row */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Phone className="w-5 h-5" />
        </div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
            Phone & WhatsApp
          </span>
          <a
            href={AGENCY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors"
            title="Chat with BizTap on WhatsApp"
          >
            {AGENCY.phone}
          </a>
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
            Location
          </span>
          <span className="block text-sm sm:text-base font-semibold text-white">
            Mumbai, Maharashtra, India
          </span>
        </div>
      </div>
    </div>
  );
};
