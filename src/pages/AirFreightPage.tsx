import React from 'react';
import {
  ArrowRight,
  Clock3,
  FileCheck2,
  Globe2,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
} from 'lucide-react';

interface AirFreightPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const solutions: { title: string; icon: IconType }[] = [
  { title: 'Express and standard air freight services.', icon: Plane },
  { title: 'Worldwide import and export cargo handling.', icon: Globe2 },
  { title: 'Priority solutions for urgent and high-value shipments.', icon: Clock3 },
  { title: 'End-to-end shipment coordination and documentation.', icon: Route },
  { title: 'Customs clearance support.', icon: ShieldCheck },
  { title: 'Shipment tracking and proactive updates.', icon: PackageCheck },
];

const approachPoints: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Enquiry & Planning',
    desc: 'Understand timing, routing and cargo requirements.',
    icon: Clock3,
  },
  {
    title: 'Booking & Confirmation',
    desc: 'Coordinate the selected air freight movement.',
    icon: Plane,
  },
  {
    title: 'Documentation',
    desc: 'Support shipment documentation and coordination.',
    icon: FileCheck2,
  },
  {
    title: 'Destination Support',
    desc: 'Coordinate onward movement and shipment updates.',
    icon: Route,
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

export const AirFreightPage: React.FC<AirFreightPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#071a33] text-white sm:min-h-[440px] lg:min-h-[470px]">
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src="https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="Cargo aircraft at an international airport"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.93)_44%,rgba(7,26,51,.62)_74%,rgba(7,26,51,.34)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1360px] items-center px-4 py-12 sm:min-h-[440px] sm:px-6 sm:py-14 lg:min-h-[470px] lg:px-8 lg:py-16">
          <div className="max-w-[800px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="transition hover:text-white"
              >
                Services
              </button>
              <span>/</span>
              <span className="text-[#d4af37]">Air Freight</span>
            </div>

            <Eyebrow light>Air Freight</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Fast, Reliable
              <span className="block text-[#d4af37]">Air Freight Solutions</span>
            </h1>

            <p className="mt-5 max-w-[740px] text-base leading-7 text-slate-200 sm:text-lg">
              When speed is essential, Averon Freight Solutions provides fast, secure and dependable air freight solutions for time-sensitive and standard international shipments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.15)]">
              <img
                src="https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Air freight cargo aircraft operations"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Air Freight
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Global Air Freight</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Reliable Air Freight for Time-Critical Shipments
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              We coordinate air freight solutions around the required transit time, routing and cargo needs for urgent, high-value and standard international shipments.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <Clock3 className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Express Shipments</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Priority solutions for urgent shipment requirements.
                </p>
              </article>

              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <Plane className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Standard Air Freight</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Standard air freight solutions for international cargo movement.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Our Solutions</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Comprehensive Air Freight Support
              </h2>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-slate-600">
              Air freight solutions structured around shipment requirements, transit needs, documentation and end-to-end coordination.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white p-7 transition hover:bg-[#f8f6f0]">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold leading-5 text-[#071a33]">
                    {item.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1900"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#071a33]/84" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px]">
            <Eyebrow light>Averon Approach</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl">
              Coordinated for Speed, Security and Reliable Delivery
            </h2>

            <p className="mt-5 max-w-[760px] text-sm leading-6 text-slate-300">
              From critical deliveries to routine shipments, we coordinate air freight solutions around the required transit time, routing and cargo needs.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {approachPoints.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-[#0b2342]/95 p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-[#c9a227] text-[#d4af37]">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{item.desc}</p>
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
            src="https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1800"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-16"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.86),rgba(7,26,51,.78))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Air Freight Enquiry</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Request Your Air Freight Solution
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Share your shipment requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
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
