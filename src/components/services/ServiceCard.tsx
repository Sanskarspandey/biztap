import React from 'react';
import {
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  User,
  Gamepad2,
  Camera,
  Utensils,
  Dumbbell,
  Scissors,
  Calculator,
  Scale,
  Settings,
  HardHat,
  Hotel,
  Home,
  Store,
  Sparkles,
  Check,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  onSeeDemo: (service: ServiceItem) => void;
  onGetQuote: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSeeDemo,
  onGetQuote
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-white" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-white" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-white" />;
      case 'User':
        return <User className="w-6 h-6 text-white" />;
      case 'Gamepad2':
      case 'Gamepad':
        return <Gamepad2 className="w-6 h-6 text-white" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-white" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-white" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-white" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-white" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-white" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-white" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-white" />;
      case 'Hotel':
        return <Hotel className="w-6 h-6 text-white" />;
      case 'Home':
        return <Home className="w-6 h-6 text-white" />;
      case 'Store':
        return <Store className="w-6 h-6 text-white" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <article
      className={`group relative bg-[#131D31]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:-translate-y-1 ${service.accentBorder}`}
    >
      {/* Top Subtle Border Highlight matching reference screenshots */}
      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-full`} />

      <div>
        {/* Colorful Gradient Icon Box */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-5 transition-transform group-hover:scale-105`}
        >
          {renderIcon(service.iconName)}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {service.title}
        </h3>

        {/* Price Badge */}
        <div className="mt-2.5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/70 border border-blue-500/30 text-blue-300 shadow-sm">
            {service.priceBadge}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mt-4 font-normal min-h-[4rem]">
          {service.description}
        </p>

        {/* 4 Feature Bullets with blue checkmark */}
        <div className="mt-5 pt-4 border-t border-slate-800/70 space-y-2.5">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="font-medium text-slate-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* Scope Note */}
        {service.scopeNote && (
          <p className="mt-3 text-[11px] text-slate-500 italic leading-snug">
            {service.scopeNote}
          </p>
        )}
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => onGetQuote(service)}
          className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          title={`Get a free quote for ${service.title}`}
        >
          <span>Get Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {service.exampleUrl ? (
          <a
            href={service.exampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
            title={`Explore website inspiration for ${service.title}`}
          >
            <span>Explore Website Inspiration</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onSeeDemo(service)}
            className="w-full py-2 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
            title={`Explore website inspiration for ${service.title}`}
          >
            <span>Explore Website Inspiration</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </button>
        )}
      </div>
    </article>
  );
};
