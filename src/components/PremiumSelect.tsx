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
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value)
  );
  const selected = options[selectedIndex] ?? options[0];

  const openMenu = (index = selectedIndex) => {
    setActiveIndex(Math.max(0, Math.min(index, options.length - 1)));
    setIsOpen(true);
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const chooseOption = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    closeMenu(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    requestAnimationFrame(() => {
      optionRefs.current[activeIndex]?.focus();
    });

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen, activeIndex]);

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenu(selectedIndex);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu(selectedIndex);
    } else if (event.key === 'Home') {
      event.preventDefault();
      openMenu(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      openMenu(options.length - 1);
    }
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index + 1) % options.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index - 1 + options.length) % options.length);
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      chooseOption(index);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
    } else if (event.key === 'Tab') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      {name && <input type="hidden" name={name} value={value} />}

      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-label={ariaLabel}
        onKeyDown={handleTriggerKeyDown}
        onClick={() => {
          if (isOpen) {
            closeMenu(false);
          } else {
            openMenu(selectedIndex);
          }
        }}
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
          id={`${id}-listbox`}
          role="listbox"
          aria-label={ariaLabel}
          className="absolute left-0 right-0 z-40 mt-2 overflow-hidden border border-slate-200 bg-white py-1.5 shadow-[0_18px_45px_rgba(7,26,51,.14)]"
        >
          <div className="max-h-64 overflow-y-auto py-1">
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;

              return (
                <button
                  key={option.value}
                  ref={(node) => {
                    optionRefs.current[index] = node;
                  }}
                  id={`${id}-option-${index}`}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={isActive ? 0 : -1}
                  onFocus={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  onClick={() => chooseOption(index)}
                  className={`group flex min-h-11 w-full items-center justify-between gap-3 border-l-2 px-4 text-left text-sm transition-all duration-150 ${
                    isSelected
                      ? 'border-[#c9a227] bg-[#f8f6f0] font-bold text-[#071a33]'
                      : isActive
                        ? 'border-[#c9a227] bg-[#fffaf0] text-[#071a33]'
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
