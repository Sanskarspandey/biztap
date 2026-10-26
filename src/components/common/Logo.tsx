import React from 'react';

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
      {/* Icon Badge - Matches reference <V> diamond/hexagon emblem */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600/30 via-blue-900/40 to-slate-900 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:border-blue-400 transition-colors">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <B> code glyph matching reference <V> */}
          <path
            d="M7 8L3.5 12L7 16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 8L20.5 12L17 16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8H13C14.1 8 15 8.9 15 10C15 10.8 14.5 11.5 13.8 11.8C14.8 12.1 15.5 13 15.5 14C15.5 15.1 14.6 16 13.5 16H10"
            stroke="#60A5FA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark: Biz in White, Tap in Electric Blue */}
      <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight">
        <span className="text-white">Biz</span>
        <span className="text-blue-500 ml-0.5">Tap</span>
      </div>
    </a>
  );
};
