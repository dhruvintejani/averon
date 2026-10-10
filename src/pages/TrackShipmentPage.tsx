import React, { useState } from 'react';
import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Eye,
  Headphones,
  Mail,
  MessageSquareText,
  PackageCheck,
  PackageOpen,
  PackageSearch,
  Phone,
  Route,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { FormFieldError } from '../components/FormFieldError';

interface TrackShipmentPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const benefits: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'End-to-End Visibility',
    desc: 'Proactive coordination from origin to destination.',
    icon: Eye,
  },
  {
    title: 'Fast Response Times',
    desc: 'Quick coordination for quotations, bookings and shipment updates.',
    icon: Clock3,
  },
  {
    title: 'Dedicated Customer Support',
    desc: 'A responsive team supporting you throughout the shipment lifecycle.',
    icon: Headphones,
  },
  {
    title: 'Transparent Communication',
    desc: 'Clear operational communication and shipment-status coordination.',
    icon: MessageSquareText,
  },
];

const processSteps: { num: string; title: string; desc: string; icon: IconType }[] = [
  {
    num: '01',
    title: 'Quotation & Confirmation',
    desc: 'Quotation and confirmation are coordinated for the shipment requirement.',
    icon: ClipboardCheck,
  },
  {
    num: '02',
    title: 'Cargo Pickup',
    desc: 'Origin pickup and cargo movement are coordinated as required.',
    icon: PackageOpen,
  },
  {
    num: '03',
    title: 'Shipment Status Coordination',
    desc: 'Shipment status and operational updates are coordinated manually with the Averon team.',
    icon: Route,
  },
  {
    num: '04',
    title: 'Final Delivery',
    desc: 'Cargo is coordinated through to the final destination.',
    icon: PackageCheck,
  },
];

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

export const TrackShipmentPage: React.FC<TrackShipmentPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [trackingRef, setTrackingRef] = useState('');
  const [submittedRef, setSubmittedRef] = useState('');
  const [trackingError, setTrackingError] = useState('');

  const handleTrack = (event: React.FormEvent) => {
    event.preventDefault();
    const value = trackingRef.trim();

    if (!value) {
      setTrackingError('Please enter your tracking number or shipment reference.');
      setSubmittedRef('');
      requestAnimationFrame(() => {
        document.getElementById('tracking-reference')?.focus();
      });
      return;
    }

    setTrackingError('');
    setSubmittedRef(value);
  };

  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[440px] overflow-hidden bg-[#071a33] text-white sm:min-h-[480px] lg:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src="/images/1000006197.jpg"
            alt="International container terminal"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_44%,rgba(7,26,51,.62)_74%,rgba(7,26,51,.36)_100%)]" />
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
              <span className="text-[#d4af37]">Shipment Status</span>
            </div>

            <Eyebrow light>Manual Shipment Status</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Request a Shipment Status Update
            </h1>

            <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-200 sm:text-lg">
              This page provides a manual shipment-status enquiry workflow. Live tracking is not connected. Use your shipment reference and the Averon team can assist with the latest operational update.
            </p>
          </div>
        </div>
      </section>

      {/* TRACKING LOOKUP */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Manual Status Enquiry</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Use Your Shipment Reference
              </h2>
            </div>

            <p className="max-w-[540px] text-sm leading-6 text-slate-600">
              Enter the shipment reference provided for your cargo. This form does not query a live tracking API; it prepares the reference for manual status follow-up with the Averon team.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.06)] sm:p-8 lg:col-span-8">
              <div className="mb-6 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8b6b1f]">
                Shipment Reference
              </div>

              <form onSubmit={handleTrack} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      id="tracking-reference"
                      name="trackingReference"
                      type="text"
                      value={trackingRef}
                      onChange={(event) => {
                        setTrackingRef(event.target.value);
                        if (trackingError) setTrackingError('');
                      }}
                      placeholder="Enter tracking number or shipment reference"
                      aria-invalid={Boolean(trackingError)}
                      aria-describedby={trackingError ? 'tracking-reference-error' : undefined}
                      className={`h-12 w-full border bg-white pl-11 pr-4 text-sm text-[#14263d] outline-none transition placeholder:text-slate-400 ${
                        trackingError
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : 'border-slate-300 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]'
                      }`}
                    />
                  </div>
                  <FormFieldError id="tracking-reference-error" message={trackingError} />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-[#c9a227] px-7 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
                >
                  REQUEST STATUS
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-7 border-t border-slate-200 pt-6">
                {!submittedRef ? (
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f8f6f0] text-[#071a33]">
                      <PackageSearch className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#071a33]">No shipment selected</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        Enter a reference above to prepare a manual shipment-status enquiry.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="border-l-4 border-[#c9a227] bg-[#f8f6f0] p-5">
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8b6b1f]">
                      Reference for Manual Status Enquiry
                    </div>
                    <div className="mt-1 break-all text-lg font-extrabold text-[#071a33]">
                      {submittedRef}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Live tracking is not connected. Contact the Averon team with this reference using the details shown alongside to request the latest operational update.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <aside className="bg-[#071a33] p-7 text-white shadow-[0_18px_45px_rgba(7,26,51,.16)] lg:col-span-4">
              <Eyebrow light>Need Assistance?</Eyebrow>
              <h3 className="text-2xl font-extrabold leading-tight">
                One Point of Contact Throughout the Shipment Lifecycle
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Averon helps coordinate shipment communication, bookings and operational updates through one connected point of contact.
              </p>

              <div className="mt-7 space-y-4 border-t border-white/10 pt-6 text-sm">
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
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#071a33] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow light>Shipment Visibility</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
                Stay Informed Throughout the Journey
              </h2>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-slate-300">
              Averon’s shipment approach emphasizes coordinated communication, visibility and responsive support from origin to destination.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-[#0b2342] p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227] text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Shipment Lifecycle</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                From Confirmation to Final Delivery
              </h2>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-slate-600">
              Averon coordinates each stage of cargo movement with one point of contact and practical operational support.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.num} className="relative bg-white p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-2xl font-extrabold text-[#8b6b1f]">{step.num}</span>
                  </div>

                  <h3 className="mt-6 text-sm font-extrabold text-[#071a33]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{step.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 border-l-4 border-[#c9a227] bg-[#f8f6f0] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#071a33]">
            One point of contact throughout the shipment lifecycle.
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.14)] lg:col-span-6">
            <img
              src="/images/1000000436.jpg"
              alt="Container vessel moving international cargo"
              loading="lazy" decoding="async"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[390px]"
            />
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Averon Support</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Coordinated Support Beyond the Tracking Screen
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Shipment visibility works alongside freight planning, documentation, customs coordination, transportation and final delivery support.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                'Origin-to-destination coordination',
                'Proactive shipment updates',
                'Documentation and customs support',
                'Responsive customer communication',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-slate-200 pt-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#8b6b1f]" />
                  <span className="text-sm font-semibold text-[#071a33]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-16 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/1000012790.jpg"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.84),rgba(7,26,51,.76))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Need Shipment Support?</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Talk to Our Logistics Team
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              For shipment status, operational updates or logistics coordination, contact Averon Freight Solutions.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              GET A QUOTE
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center gap-2 border border-white/45 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              CONTACT US
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
