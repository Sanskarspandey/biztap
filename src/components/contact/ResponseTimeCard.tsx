import React from 'react';
import { Zap } from 'lucide-react';

export const ResponseTimeCard: React.FC = () => {
  return (
    <div className="bg-[#131D31]/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 text-center space-y-1 shadow-lg">
      <div className="inline-flex items-center justify-center gap-1.5 text-blue-400 font-bold text-sm sm:text-base">
        <Zap className="w-4 h-4 fill-blue-400 text-blue-400" />
        <span>Quick Response</span>
      </div>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
        We aim to respond to enquiries within one business day.
      </p>
    </div>
  );
};
