import React from 'react';
import { Code2 } from 'lucide-react';

export interface LogoProps {
  className?: string;
  variant?: string;
  showTagline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href="/"
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="BizTap Home"
    >
      {/* Icon Badge - Modern developer/code symbol inside rounded-square container */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-900/40 to-slate-900 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:border-blue-400 transition-colors flex-shrink-0">
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300 transition-colors stroke-[2.2]" />
      </div>

      {/* Wordmark: Biz in White, Tap in Electric Blue */}
      <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight">
        <span className="text-white">Biz</span>
        <span className="text-blue-500 ml-0.5">Tap</span>
      </div>
    </a>
  );
};
