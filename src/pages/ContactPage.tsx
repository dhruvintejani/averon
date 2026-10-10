import React, { useState } from 'react';
import {
  ArrowRight,
  ClipboardCheck,
  Globe,
  Mail,
  MapPin,
  Phone,
  Route,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PremiumSelect } from '../components/PremiumSelect';
import { FormFieldError } from '../components/FormFieldError';
import { PhoneNumberField, isValidPhoneNumber } from '../components/PhoneNumberField';
import { sendEnquiry } from '../utils/enquiry';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

const Eyebrow = ({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => (
  <div
    className={`mb-3 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] ${
      light ? 'text-[#d4af37]' : 'text-[#8b6b1f]'
    }`}
  >
    <span className="h-[2px] w-8 bg-[#c9a227]" />
    <span>{children}</span>
  </div>
);

const inputClass = (hasError = false) =>
  `w-full border bg-white px-3.5 py-3 text-sm text-[#14263d] outline-none transition placeholder:text-slate-400 ${
    hasError
      ? 'border-rose-400 ring-2 ring-rose-100'
      : 'border-slate-300 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]'
  }`;

const labelClass =
  'mb-1.5 block text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#071a33]';

const shipmentModeOptions = [
  { value: 'Ocean', label: 'Ocean Freight' },
  { value: 'Air', label: 'Air Freight' },
  { value: 'Road', label: 'Road & Inland Transport' },
];

const shipmentTypeOptions = [
  { value: 'FCL', label: 'FCL — Full Container Load' },
  { value: 'LCL', label: 'LCL — Less than Container Load' },
  { value: 'Air Cargo', label: 'Air Cargo' },
  { value: 'Other', label: 'Other / Not Sure' },
];

const incotermOptions = [
  { value: 'EXW', label: 'EXW — Ex Works' },
  { value: 'FOB', label: 'FOB — Free on Board' },
  { value: 'CIF', label: 'CIF — Cost, Insurance & Freight' },
  { value: 'DDP', label: 'DDP — Delivered Duty Paid' },
  { value: 'Other', label: 'Other / Not Sure' },
];

const LinkedInMark = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

type ContactErrorKey = 'fullName' | 'companyName' | 'email' | 'phone' | 'origin' | 'destination';
type ContactErrors = Partial<Record<ContactErrorKey, string>>;

const officeMapLocation = `${COMPANY_INFO.name}, ${COMPANY_INFO.address}`;
const officeMapQuery = encodeURIComponent(officeMapLocation);
const officeMapEmbedUrl =
  `https://maps.google.com/maps?hl=en&q=${officeMapQuery}&z=18&ie=UTF8&iwloc=B&output=embed`;
const officeMapLink = COMPANY_INFO.googleMaps;

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    mode: 'Ocean',
    type: 'FCL',
    incoterm: 'FOB',
    cargoDetails: '',
    message: '',
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [errors, setErrors] = useState<ContactErrors>({});
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const clearError = (key: ContactErrorKey) => {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validateForm = () => {
    const next: ContactErrors = {};

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

  const focusFirstError = (nextErrors: ContactErrors) => {
    const order: ContactErrorKey[] = ['fullName', 'companyName', 'email', 'phone', 'origin', 'destination'];
    const first = order.find((key) => nextErrors[key]);
    if (!first) return;

    requestAnimationFrame(() => {
      document.getElementById(`contact-${first}`)?.focus();
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmissionMessage('');
    setSubmissionError('');

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      focusFirstError(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await sendEnquiry({
        enquiryType: 'contact',
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        countryCode,
        phone: formData.phone,
        origin: formData.origin,
        destination: formData.destination,
        mode: formData.mode,
        type: formData.type,
        incoterm: formData.incoterm,
        cargoDetails: formData.cargoDetails,
        message: formData.message,
        website,
      });

      setSubmissionMessage(result.message);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        origin: '',
        destination: '',
        mode: 'Ocean',
        type: 'FCL',
        incoterm: 'FOB',
        cargoDetails: '',
        message: '',
      });
      setCountryCode('+91');
      setWebsite('');
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry right now. Please try again shortly or contact Averon directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSteps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Send the route, cargo and service information available for your shipment.',
      icon: Send,
    },
    {
      num: '02',
      title: 'Requirement Review',
      desc: 'The Averon team reviews the shipment details and coordinates the suitable freight approach.',
      icon: ClipboardCheck,
    },
    {
      num: '03',
      title: 'Coordinate the Next Step',
      desc: 'Move forward with quotation, documentation and shipment coordination as required.',
      icon: Route,
    },
  ];

  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[440px] overflow-hidden bg-[#071a33] text-white sm:min-h-[480px] lg:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src="/images/1000003852.jpg"
            alt="International cargo terminal"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_44%,rgba(7,26,51,.62)_74%,rgba(7,26,51,.34)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1360px] items-start px-4 pb-14 pt-16 sm:min-h-[480px] sm:px-6 sm:pb-16 sm:pt-20 lg:min-h-[500px] lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-[780px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#d4af37]">Contact Us</span>
            </div>

            <Eyebrow light>Contact Averon</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Tell Us About Your Shipment
            </h1>

            <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-200 sm:text-lg">
              Share your shipment requirements with our team and we will work with you on a suitable logistics solution.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE FORM + CONTACT */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Request a Quote</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Start With Your Shipment Details
              </h2>
            </div>

            <p className="max-w-[520px] text-sm leading-6 text-slate-600">
              Provide the information available to you. Our team can use it to understand the route, cargo and service requirement before coordinating the next step.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.06)] sm:p-8 lg:col-span-8"
            >
              <div className="mb-7 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8b6b1f]">
                Shipment Enquiry
              </div>

              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-fullName">Full Name *</label>
                  <input
                    id="contact-fullName"
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
                    aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                    className={inputClass(Boolean(errors.fullName))}
                  />
                  <FormFieldError id="contact-fullName-error" message={errors.fullName} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-companyName">Company Name *</label>
                  <input
                    id="contact-companyName"
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
                    aria-describedby={errors.companyName ? 'contact-companyName-error' : undefined}
                    className={inputClass(Boolean(errors.companyName))}
                  />
                  <FormFieldError id="contact-companyName-error" message={errors.companyName} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
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
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass(Boolean(errors.email))}
                  />
                  <FormFieldError id="contact-email-error" message={errors.email} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-phone">Phone / WhatsApp *</label>
                  <PhoneNumberField
                    id="contact-phone"
                    countryCode={countryCode}
                    number={formData.phone}
                    onCountryCodeChange={setCountryCode}
                    onNumberChange={(value) => {
                      setFormData({ ...formData, phone: value });
                      clearError('phone');
                    }}
                    error={errors.phone}
                  />
                  <FormFieldError id="contact-phone-error" message={errors.phone} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-origin">Origin – POL *</label>
                  <input
                    id="contact-origin"
                    name="origin"
                    type="text"
                    placeholder="Origin / port of loading"
                    value={formData.origin}
                    onChange={(e) => {
                      setFormData({ ...formData, origin: e.target.value });
                      clearError('origin');
                    }}
                    aria-invalid={Boolean(errors.origin)}
                    aria-describedby={errors.origin ? 'contact-origin-error' : undefined}
                    className={inputClass(Boolean(errors.origin))}
                  />
                  <FormFieldError id="contact-origin-error" message={errors.origin} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-destination">Destination – POD *</label>
                  <input
                    id="contact-destination"
                    name="destination"
                    type="text"
                    placeholder="Destination / port of discharge"
                    value={formData.destination}
                    onChange={(e) => {
                      setFormData({ ...formData, destination: e.target.value });
                      clearError('destination');
                    }}
                    aria-invalid={Boolean(errors.destination)}
                    aria-describedby={errors.destination ? 'contact-destination-error' : undefined}
                    className={inputClass(Boolean(errors.destination))}
                  />
                  <FormFieldError id="contact-destination-error" message={errors.destination} />
                </div>

                <div>
                  <label className={labelClass}>Shipment Mode</label>
                  <PremiumSelect
                    id="contact-shipment-mode"
                    name="shipmentMode"
                    ariaLabel="Shipment mode"
                    value={formData.mode}
                    options={shipmentModeOptions}
                    onChange={(value) => setFormData({ ...formData, mode: value })}
                  />
                </div>

                <div>
                  <label className={labelClass}>Shipment Type</label>
                  <PremiumSelect
                    id="contact-shipment-type"
                    name="shipmentType"
                    ariaLabel="Shipment type"
                    value={formData.type}
                    options={shipmentTypeOptions}
                    onChange={(value) => setFormData({ ...formData, type: value })}
                  />
                </div>

                <div>
                  <label className={labelClass}>Incoterm</label>
                  <PremiumSelect
                    id="contact-incoterm"
                    name="incoterm"
                    ariaLabel="Incoterm"
                    value={formData.incoterm}
                    options={incotermOptions}
                    onChange={(value) => setFormData({ ...formData, incoterm: value })}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-cargoDetails">Cargo Details</label>
                  <textarea
                    id="contact-cargoDetails"
                    name="cargoDetails"
                    rows={3}
                    placeholder="Commodity, packages, weight, volume, dimensions if available"
                    value={formData.cargoDetails}
                    onChange={(e) => setFormData({ ...formData, cargoDetails: e.target.value })}
                    className={inputClass()}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Optional additional requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClass()}
                  />
                </div>
              </div>

              {Object.keys(errors).length > 0 && (
                <div className="mt-6 border-l-4 border-rose-400 bg-rose-50 px-4 py-3 text-xs font-semibold leading-5 text-rose-700" role="alert">
                  Please check the highlighted fields above. Your enquiry has not been submitted yet.
                </div>
              )}

              {submissionMessage && (
                <div className="mt-6 border-l-4 border-emerald-500 bg-emerald-50 px-4 py-3 text-xs font-semibold leading-5 text-emerald-800" role="status" aria-live="polite">
                  {submissionMessage}
                </div>
              )}

              {submissionError && (
                <div className="mt-6 border-l-4 border-rose-500 bg-rose-50 px-4 py-3 text-xs font-semibold leading-5 text-rose-700" role="alert">
                  {submissionError}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST A QUOTE'}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="tel:+919833464629"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#071a33] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#0b2342] sm:w-auto"
                >
                  <Phone className="h-4 w-4 text-[#d4af37]" />
                  CALL OUR TEAM
                </a>
              </div>
            </form>

            <div className="space-y-6 lg:col-span-4">
              <div className="bg-[#071a33] p-7 text-white shadow-[0_18px_45px_rgba(7,26,51,.16)]">
                <Eyebrow light>Direct Contact</Eyebrow>
                <h3 className="text-2xl font-extrabold">Talk to Our Team</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  For shipment enquiries, quotations and logistics coordination, contact Averon Freight Solutions directly.
                </p>

                <div className="mt-6 space-y-5 border-t border-white/10 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                    <div>
                      {COMPANY_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block font-semibold text-white transition hover:text-[#d4af37]"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                    <div>
                      {COMPANY_INFO.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-slate-200 transition hover:text-[#d4af37]"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 shrink-0 text-[#d4af37]" />
                    <a
                      href={`https://${COMPANY_INFO.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200 transition hover:text-[#d4af37]"
                    >
                      {COMPANY_INFO.website}
                    </a>
                  </div>

                  <a
                    href={COMPANY_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Averon Freight Solutions on LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-slate-200 transition hover:border-[#c9a227] hover:text-[#d4af37]"
                  >
                    <LinkedInMark />
                  </a>
                </div>
              </div>

              <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_14px_36px_rgba(7,26,51,.06)]">
                <div className="relative h-56 w-full bg-slate-100 sm:h-64">
                  <iframe
                    title="Averon Freight Solutions office location on Google Maps"
                    src={officeMapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#8b6b1f]">
                    Office Location
                  </div>
                  <h4 className="mt-2 text-sm font-extrabold text-[#071a33]">
                    Averon Freight Solutions LLP
                  </h4>

                  <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8b6b1f]" />
                    <p>{COMPANY_INFO.address}</p>
                  </div>

                  <a
                    href={officeMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border border-[#071a33]/15 bg-[#f8f6f0] px-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:border-[#c9a227] hover:bg-white"
                  >
                    OPEN IN GOOGLE MAPS
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Eyebrow>What Happens Next</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              From Enquiry to the Right Logistics Solution
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              A simple, coordinated first step to understand the shipment and move the conversation forward.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
            {nextSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.num} className="bg-white p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-extrabold text-[#8b6b1f]">{step.num}</span>
                  </div>

                  <h3 className="mt-6 text-base font-extrabold text-[#071a33]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-16 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/1000004213.jpg"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.84),rgba(7,26,51,.76))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Let’s Move Your Cargo Forward</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Ready to Discuss Your Shipment?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Share your shipment requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
            </p>
          </div>

          <a
            href="tel:+919833464629"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
          >
            CALL +91 98334 64629
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
