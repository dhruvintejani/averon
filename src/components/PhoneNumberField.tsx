import React from 'react';
import { Phone } from 'lucide-react';
import { PremiumSelect } from './PremiumSelect';

export const COUNTRY_DIAL_OPTIONS = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'USA / Canada (+1)' },
  { value: '+44', label: 'United Kingdom (+44)' },
  { value: '+971', label: 'UAE (+971)' },
  { value: '+65', label: 'Singapore (+65)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+64', label: 'New Zealand (+64)' },
  { value: '+49', label: 'Germany (+49)' },
  { value: '+33', label: 'France (+33)' },
  { value: '+31', label: 'Netherlands (+31)' },
  { value: '+32', label: 'Belgium (+32)' },
  { value: '+39', label: 'Italy (+39)' },
  { value: '+34', label: 'Spain (+34)' },
  { value: '+90', label: 'Turkey (+90)' },
  { value: '+86', label: 'China (+86)' },
  { value: '+852', label: 'Hong Kong (+852)' },
  { value: '+81', label: 'Japan (+81)' },
  { value: '+82', label: 'South Korea (+82)' },
  { value: '+62', label: 'Indonesia (+62)' },
  { value: '+60', label: 'Malaysia (+60)' },
  { value: '+66', label: 'Thailand (+66)' },
  { value: '+84', label: 'Vietnam (+84)' },
  { value: '+966', label: 'Saudi Arabia (+966)' },
  { value: '+974', label: 'Qatar (+974)' },
  { value: '+973', label: 'Bahrain (+973)' },
  { value: '+968', label: 'Oman (+968)' },
  { value: '+965', label: 'Kuwait (+965)' },
  { value: '+27', label: 'South Africa (+27)' },
  { value: '+254', label: 'Kenya (+254)' },
  { value: '+20', label: 'Egypt (+20)' },
  { value: '+55', label: 'Brazil (+55)' },
  { value: '+52', label: 'Mexico (+52)' },
  { value: '+880', label: 'Bangladesh (+880)' },
  { value: '+92', label: 'Pakistan (+92)' },
  { value: '+94', label: 'Sri Lanka (+94)' },
  { value: '+977', label: 'Nepal (+977)' },
];

interface PhoneNumberFieldProps {
  id: string;
  countryCode: string;
  number: string;
  onCountryCodeChange: (value: string) => void;
  onNumberChange: (value: string) => void;
  error?: string;
}

export const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  id,
  countryCode,
  number,
  onCountryCodeChange,
  onNumberChange,
  error,
}) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="grid grid-cols-[132px_minmax(0,1fr)] gap-2 sm:grid-cols-[175px_minmax(0,1fr)]">
        <PremiumSelect
          id={`${id}-country`}
          name="countryCode"
          ariaLabel="Country calling code"
          value={countryCode}
          options={COUNTRY_DIAL_OPTIONS}
          onChange={onCountryCodeChange}
        />

        <div className="relative">
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            id={id}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            value={number}
            onChange={(event) => onNumberChange(event.target.value)}
            placeholder="Phone number"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={`min-h-12 w-full border bg-white py-3 pl-10 pr-3.5 text-sm text-[#14263d] outline-none transition placeholder:text-slate-400 ${
              error
                ? 'border-rose-400 ring-2 ring-rose-100'
                : 'border-slate-300 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export const formatInternationalPhone = (countryCode: string, number: string) => {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  return `${countryCode} ${cleanNumber}`.trim();
};

export const isValidPhoneNumber = (number: string) => {
  const digits = number.replace(/[^0-9]/g, '');
  return digits.length >= 6 && digits.length <= 15;
};
