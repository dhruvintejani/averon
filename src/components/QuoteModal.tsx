import React, { useEffect, useState } from 'react';
import { ArrowRight, Calculator, X } from 'lucide-react';
import { PremiumSelect } from './PremiumSelect';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullContact?: () => void;
}

const inputClass =
  'w-full border border-slate-300 bg-white px-3.5 py-3 text-sm text-[#14263d] outline-none transition placeholder:text-slate-400 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]';

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

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Brevo submission will replace this mailto fallback after the client provides API keys.
    const subject = encodeURIComponent(
      `Freight Quote Request - ${formData.companyName || formData.fullName}`
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Company Name: ${formData.companyName}`,
        `Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone}`,
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
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div className="max-h-[94dvh] w-full overflow-y-auto rounded-t-2xl border border-slate-200 bg-white shadow-2xl sm:max-w-3xl sm:rounded-lg">
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

        <form onSubmit={handleSubmit} className="space-y-5 p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-full-name">Full Name *</label>
              <input id="quote-full-name" name="fullName" autoComplete="name" required type="text" placeholder="Your full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-company-name">Company Name *</label>
              <input id="quote-company-name" name="companyName" autoComplete="organization" required type="text" placeholder="Company name" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-email">Email *</label>
              <input id="quote-email" name="email" autoComplete="email" required type="email" placeholder="name@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-phone">Phone / WhatsApp *</label>
              <input id="quote-phone" name="phone" autoComplete="tel" required type="tel" placeholder="+91" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="quote-origin">Origin – POL *</label>
              <input id="quote-origin" name="origin" required type="text" placeholder="Origin / port of loading" value={formData.origin} onChange={(e) => setFormData({ ...formData, origin: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="quote-destination">Destination – POD *</label>
              <input id="quote-destination" name="destination" required type="text" placeholder="Destination / port of discharge" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} className={inputClass} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className={labelClass} htmlFor="quote-mode">Mode</label>
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
              <label className={labelClass} htmlFor="quote-type">Shipment Type</label>
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
              <label className={labelClass} htmlFor="quote-incoterm">Incoterm</label>
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
            <textarea id="quote-details" name="details" rows={4} placeholder="Commodity, packages, weight, volume, dimensions or additional requirements..." value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} className={inputClass} />
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37] sm:w-auto">
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
