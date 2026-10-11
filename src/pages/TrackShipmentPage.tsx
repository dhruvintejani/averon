import React from 'react';
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
  ExternalLink,
  Phone,
  Route,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { FRESA_TRACKING_URL, TRACKING_PROVIDER_NAME } from '../config/tracking';

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
    title: 'Track & Trace',
    desc: 'Use Averon’s official FRESA Track & Trace portal for the shipment information available through the tracking service.',
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
              <span className="text-[#d4af37]">Track & Trace</span>
            </div>

            <Eyebrow light>FRESA Track & Trace</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Track Your Shipment
            </h1>

            <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-200 sm:text-lg">
              Open Averon’s official FRESA Track & Trace portal to access the shipment tracking information available for your cargo.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICIAL TRACK & TRACE */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Official Tracking Portal</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Continue to FRESA Track & Trace
              </h2>
            </div>

            <p className="max-w-[540px] text-sm leading-6 text-slate-600">
              Select the button below to open the official tracking portal in a new tab. The tracking experience is provided by FRESA Technologies.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(7,26,51,.06)] sm:p-8 lg:col-span-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8b6b1f]">
                    {TRACKING_PROVIDER_NAME}
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#071a33]">
                    Track Your Shipment Securely
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Open the FRESA tracking portal and use the tracking tools provided there for your Averon shipment.
                  </p>
                </div>

                <a
                  href={FRESA_TRACKING_URL}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-[#c9a227] px-7 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37] sm:w-auto"
                  aria-label="Open FRESA Track and Trace in a new tab"
                >
                  TRACK SHIPMENT
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
                The tracking portal opens in a new browser tab and is operated by FRESA Technologies. Averon’s website does not simulate or generate shipment statuses.
              </div>
            </div>

            <aside className="bg-[#071a33] p-7 text-white shadow-[0_18px_45px_rgba(7,26,51,.16)] lg:col-span-4">
              <Eyebrow light>Need Assistance?</Eyebrow>
              <h3 className="text-2xl font-extrabold leading-tight">
                Need Help With a Shipment Update?
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                If you need assistance beyond the information shown in FRESA, contact the Averon team with your shipment reference.
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
