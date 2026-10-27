import React from 'react';
import { AGENCY } from '../../data/agency';

export const WhatsAppContactCard: React.FC = () => {
  const prefilledMessage = encodeURIComponent(
    "Hi BizTap! I'd like to know more about your website development and digital profile services."
  );
  const whatsappUrlMumbai = `https://wa.me/${AGENCY.mumbai.whatsappNumber}?text=${prefilledMessage}`;
  const whatsappUrlChennai = `https://wa.me/${AGENCY.chennai.whatsappNumber}?text=${prefilledMessage}`;

  return (
    <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 border border-emerald-400/40 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xl shadow-emerald-950/20 text-white relative overflow-hidden group">
      {/* Background glow decoration */}
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 space-y-4">
        {/* Header: WhatsApp Vector & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-white"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Prefer WhatsApp?
            </h3>
            <span className="text-xs text-emerald-100 font-medium">Quick answers from our Mumbai &amp; Chennai teams</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
          Get in touch directly on WhatsApp for quick answers about our website packages, pricing, and project timelines.
        </p>

        {/* Dual Action Buttons: Mumbai & Chennai */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrlMumbai}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-emerald-800 hover:bg-slate-50 active:bg-slate-100 font-bold text-sm rounded-xl shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Chat on WhatsApp with BizTap Mumbai (+91 89280 51768)"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-emerald-700 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Mumbai</span>
          </a>

          <a
            href={whatsappUrlChennai}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-emerald-800 hover:bg-slate-50 active:bg-slate-100 font-bold text-sm rounded-xl shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Chat on WhatsApp with BizTap Chennai (+91 93729 48245)"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-emerald-700 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Chennai</span>
          </a>
        </div>
      </div>
    </div>
  );
};
