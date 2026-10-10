import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export interface PremiumSelectOption {
  value: string;
  label: string;
}

interface PremiumSelectProps {
  id: string;
  name?: string;
  value: string;
  options: PremiumSelectOption[];
  onChange: (value: string) => void;
  ariaLabel?: string;
}

export const PremiumSelect: React.FC<PremiumSelectProps> = ({
  id,
  name,
  value,
  options,
  onChange,
  ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      {name && <input type="hidden" name={name} value={value} />}

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={() => setIsOpen((open) => !open)}
        className={`group flex min-h-12 w-full items-center justify-between gap-3 border bg-white px-4 text-left text-sm font-semibold text-[#14263d] shadow-[0_1px_0_rgba(7,26,51,.03)] outline-none transition-all duration-200 ${
          isOpen
            ? 'border-[#c9a227] ring-2 ring-[#c9a227]/15'
            : 'border-slate-300 hover:border-[#c9a227]/80 hover:bg-[#fffdf8]'
        }`}
      >
        <span className="truncate">{selected?.label}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f8f6f0] text-[#071a33] transition-all duration-200 group-hover:bg-[#071a33] group-hover:text-[#d4af37] ${
            isOpen ? 'rotate-180 bg-[#071a33] text-[#d4af37]' : ''
          }`}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 z-40 mt-2 overflow-hidden border border-slate-200 bg-white py-1.5 shadow-[0_18px_45px_rgba(7,26,51,.14)]"
        >
          <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`group flex min-h-11 w-full items-center justify-between gap-3 border-l-2 px-4 text-left text-sm transition-all duration-150 ${
                    isSelected
                      ? 'border-[#c9a227] bg-[#f8f6f0] font-bold text-[#071a33]'
                      : 'border-transparent text-slate-700 hover:border-[#c9a227] hover:bg-[#fffaf0] hover:pl-5 hover:text-[#071a33]'
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#071a33] text-[#d4af37]">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
