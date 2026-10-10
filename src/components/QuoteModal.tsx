import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calculator, X } from 'lucide-react';
import { PremiumSelect } from './PremiumSelect';
import { FormFieldError } from './FormFieldError';
import { PhoneNumberField, formatInternationalPhone, isValidPhoneNumber } from './PhoneNumberField';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullContact?: () => void;
}

const inputClass = (hasError = false) =>
  `w-full border bg-white px-3.5 py-3 text-sm text-[#14263d] outline-none transition placeholder:text-slate-400 ${
    hasError
      ? 'border-rose-400 ring-2 ring-rose-100'
      : 'border-slate-300 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]'
  }`;

const labelClass =
  'mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#071a33]';

const modeOptions = [
  { value: 'Ocean Freight', label: 'Ocean Freight' },
  { value: 'Air Freight', label: 'Air Freight' },
  { value: 'Road Freight', label: 'Road & Inland Transport' },
  { value: 'Customs Clearance Only', label: 'Customs Clearance Only' },
];

const typeOptions = [
  { value: 'FCL', label: 'FCL — Full Container Load' },
  { value: 'LCL', label: 'LCL — Less than Container Load' },
  { value: 'Air Cargo', label: 'Air Cargo' },
  { value: 'Project Cargo', label: 'Project Cargo / Breakbulk' },
  { value: 'Other', label: 'Other / Not Sure' },
];

const incotermOptions = [
  { value: 'FOB', label: 'FOB — Free on Board' },
  { value: 'CIF', label: 'CIF — Cost, Insurance & Freight' },
  { value: 'EXW', label: 'EXW — Ex Works' },
  { value: 'DDP', label: 'DDP — Delivered Duty Paid' },
  { value: 'DAP', label: 'DAP — Delivered at Place' },
  { value: 'Other', label: 'Other / Not Sure' },
];

type QuoteErrorKey = 'fullName' | 'companyName' | 'email' | 'phone' | 'origin' | 'destination';
type QuoteErrors = Partial<Record<QuoteErrorKey, string>>;

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFullContact,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    mode: 'Ocean Freight',
    type: 'FCL',
    incoterm: 'FOB',
    details: '',
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [errors, setErrors] = useState<QuoteErrors>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

    requestAnimationFrame(() => {
      modalRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => !element.hasAttribute('disabled'));

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const clearError = (key: QuoteErrorKey) => {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validateForm = () => {
    const next: QuoteErrors = {};

    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!formData.companyName.trim()) next.companyName = 'Please enter your company name.';

    const email = formData.email.trim();
    if (!email) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      next.phone = 'Please enter your phone or WhatsApp number.';
    } else if (!isValidPhoneNumber(formData.phone)) {
      next.phone = 'Please enter a valid phone number.';
    }

    if (!formData.origin.trim()) next.origin = 'Please enter the shipment origin.';
    if (!formData.destination.trim()) next.destination = 'Please enter the shipment destination.';

    return next;
  };

  const focusFirstError = (nextErrors: QuoteErrors) => {
    const order: QuoteErrorKey[] = ['fullName', 'companyName', 'email', 'phone', 'origin', 'destination'];
    const first = order.find((key) => nextErrors[key]);
    if (!first) return;

    requestAnimationFrame(() => {
      document.getElementById(`quote-${first}`)?.focus();
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      focusFirstError(nextErrors);
      return;
    }

    setErrors({});

    // Brevo submission will replace this mailto fallback after the client provides API keys.
    const subject = encodeURIComponent(
      `Freight Quote Request - ${formData.companyName || formData.fullName}`
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Company Name: ${formData.companyName}`,
        `Email: ${formData.email}`,
        `Phone / WhatsApp: ${formatInternationalPhone(countryCode, formData.phone)}`,
        `Origin - POL: ${formData.origin}`,
        `Destination - POD: ${formData.destination}`,
        `Mode: ${formData.mode}`,
        `Shipment Type: ${formData.type}`,
        `Incoterm: ${formData.incoterm}`,
        `Cargo Details: ${formData.details || '-'}`,
      ].join('\n')
    );

    window.location.href = `mailto:sales@averonfs.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      aria-describedby="quote-email-fallback-note"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div ref={modalRef} className="max-h-[94dvh] w-full overflow-y-auto rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:max-w-3xl sm:rounded-lg">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#071a33] px-4 py-4 text-white sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center bg-[#c9a227] text-[#071a33]">
              <Calculator className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 id="quote-modal-title" className="text-base font-extrabold sm:text-lg">Request a Freight Quote</h3>
              <p className="mt-0.5 text-[10px] leading-4 text-slate-300 sm:text-xs">Share the shipment details available to you.</p>
            </div>
          </div>

          <button type="button" onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Close quote form">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-fullName">Full Name *</label>
              <input
                id="quote-fullName"
                name="fullName"
                autoComplete="name"
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  clearError('fullName');
                }}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'quote-fullName-error' : undefined}
                className={inputClass(Boolean(errors.fullName))}
              />
              <FormFieldError id="quote-fullName-error" message={errors.fullName} />
            </div>

            <div>
              <label className={labelClass} htmlFor="quote-companyName">Company Name *</label>
              <input
                id="quote-companyName"
                name="companyName"
                autoComplete="organization"
                type="text"
                placeholder="Company name"
                value={formData.companyName}
                onChange={(e) => {
                  setFormData({ ...formData, companyName: e.target.value });
                  clearError('companyName');
                }}
                aria-invalid={Boolean(errors.companyName)}
                aria-describedby={errors.companyName ? 'quote-companyName-error' : undefined}
                className={inputClass(Boolean(errors.companyName))}
              />
              <FormFieldError id="quote-companyName-error" message={errors.companyName} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-email">Email *</label>
              <input
                id="quote-email"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  clearError('email');
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'quote-email-error' : undefined}
                className={inputClass(Boolean(errors.email))}
              />
              <FormFieldError id="quote-email-error" message={errors.email} />
            </div>

            <div>
              <label className={labelClass} htmlFor="quote-phone">Phone / WhatsApp *</label>
              <PhoneNumberField
                id="quote-phone"
                countryCode={countryCode}
                number={formData.phone}
                onCountryCodeChange={setCountryCode}
                onNumberChange={(value) => {
                  setFormData({ ...formData, phone: value });
                  clearError('phone');
                }}
                error={errors.phone}
              />
              <FormFieldError id="quote-phone-error" message={errors.phone} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-origin">Origin – POL *</label>
              <input
                id="quote-origin"
                name="origin"
                type="text"
                placeholder="Origin / port of loading"
                value={formData.origin}
                onChange={(e) => {
                  setFormData({ ...formData, origin: e.target.value });
                  clearError('origin');
                }}
                aria-invalid={Boolean(errors.origin)}
                aria-describedby={errors.origin ? 'quote-origin-error' : undefined}
                className={inputClass(Boolean(errors.origin))}
              />
              <FormFieldError id="quote-origin-error" message={errors.origin} />
            </div>

            <div>
              <label className={labelClass} htmlFor="quote-destination">Destination – POD *</label>
              <input
                id="quote-destination"
                name="destination"
                type="text"
                placeholder="Destination / port of discharge"
                value={formData.destination}
                onChange={(e) => {
                  setFormData({ ...formData, destination: e.target.value });
                  clearError('destination');
                }}
                aria-invalid={Boolean(errors.destination)}
                aria-describedby={errors.destination ? 'quote-destination-error' : undefined}
                className={inputClass(Boolean(errors.destination))}
              />
              <FormFieldError id="quote-destination-error" message={errors.destination} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass}>Mode</label>
              <PremiumSelect
                id="quote-mode"
                name="mode"
                ariaLabel="Freight mode"
                value={formData.mode}
                options={modeOptions}
                onChange={(value) => setFormData({ ...formData, mode: value })}
              />
            </div>

            <div>
              <label className={labelClass}>Shipment Type</label>
              <PremiumSelect
                id="quote-type"
                name="type"
                ariaLabel="Shipment type"
                value={formData.type}
                options={typeOptions}
                onChange={(value) => setFormData({ ...formData, type: value })}
              />
            </div>

            <div>
              <label className={labelClass}>Incoterm</label>
              <PremiumSelect
                id="quote-incoterm"
                name="incoterm"
                ariaLabel="Incoterm"
                value={formData.incoterm}
                options={incotermOptions}
                onChange={(value) => setFormData({ ...formData, incoterm: value })}
              />
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="quote-details">Cargo Details & Message</label>
            <textarea
              id="quote-details"
              name="details"
              rows={4}
              placeholder="Commodity, packages, weight, volume, dimensions or additional requirements..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className={inputClass()}
            />
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="border-l-4 border-rose-400 bg-rose-50 px-4 py-3 text-xs font-semibold leading-5 text-rose-700" role="alert">
              Please check the highlighted fields above. Your quote request has not been submitted yet.
            </div>
          )}

          <p id="quote-email-fallback-note" className="border-l-4 border-[#c9a227] bg-[#f8f6f0] px-4 py-3 text-xs leading-5 text-slate-700">
            Until Brevo email delivery is connected, this form depends on a configured email application. <strong>Request a Quote</strong> attempts to open your default email app with these details prefilled; you must press Send there to complete the enquiry. If no email app is configured, contact Averon directly by email or phone.
          </p>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37] sm:w-auto"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </button>

            {onNavigateToFullContact && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToFullContact();
                }}
                className="min-h-11 text-xs font-bold text-[#071a33] transition hover:text-[#b88924]"
              >
                Open Full Contact Page
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
