import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionEntry {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-forest-800/30 shadow-subtle'
                : 'bg-white/80 border-cream-200 hover:border-cream-300'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
              aria-expanded={isOpen}
            >
              <span className={`text-base font-bold pr-4 ${isOpen ? 'text-forest-950' : 'text-charcoal-900'}`}>
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? 'bg-forest-100 text-forest-900 rotate-180' : 'bg-cream-100 text-charcoal-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-charcoal-600 leading-relaxed border-t border-cream-100 animate-in fade-in duration-150">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
