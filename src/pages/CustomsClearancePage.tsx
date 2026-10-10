import React from 'react';
import { getPexelsSrcSet } from '../utils/image';
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  Link2,
  Route,
  ShieldCheck,
} from 'lucide-react';

interface CustomsClearancePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const solutions: { title: string; icon: IconType }[] = [
  { title: 'Import and export customs clearance.', icon: ShieldCheck },
  { title: 'Documentation review and compliance coordination.', icon: FileCheck2 },
  { title: 'Tariff classification and duty guidance.', icon: FileText },
  { title: 'Coordination with customs authorities.', icon: Building2 },
  { title: 'Support to minimize avoidable delays.', icon: Clock3 },
  { title: 'End-to-end coordination with freight and destination processes.', icon: Route },
];

const approachPoints: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Documentation Review',
    desc: 'Review and coordinate required shipment documentation.',
    icon: FileCheck2,
  },
  {
    title: 'Customs Authority Coordination',
    desc: 'Coordinate with customs authorities as required.',
    icon: Building2,
  },
  {
    title: 'Tariff & Duty Guidance',
    desc: 'Support tariff classification and duty guidance.',
    icon: ClipboardCheck,
  },
  {
    title: 'Freight Integration',
    desc: 'Coordinate clearance with freight and destination processes.',
    icon: Link2,
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

export const CustomsClearancePage: React.FC<CustomsClearancePageProps> = ({
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
            src="https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900")}
              sizes="100vw"
            alt="Cargo inspection and port clearance operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.93)_44%,rgba(7,26,51,.62)_74%,rgba(7,26,51,.34)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1360px] items-start px-4 pb-14 pt-16 sm:min-h-[480px] sm:px-6 sm:pb-16 sm:pt-20 lg:min-h-[500px] lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-[820px]">
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
              <span className="text-[#d4af37]">Customs Clearance</span>
            </div>

            <Eyebrow light>Customs Clearance</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Smooth Customs.
              <span className="block text-[#d4af37]">Efficient Cargo Movement.</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-200 sm:text-lg">
              Averon Freight Solutions provides customs clearance support to help shipments move efficiently across borders with accurate documentation and coordinated compliance processes.
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
                src="https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200")}
              sizes="100vw"
                alt="Customs and cargo clearance operation"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Customs Clearance
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Customs Clearance</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Professional Customs Coordination for Import & Export Cargo
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              Professional import and export customs coordination with accurate documentation and compliance support.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Import Customs Clearance</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Support for import customs clearance and related coordination.
                </p>
              </article>

              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <FileCheck2 className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Export Customs Clearance</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Support for export customs clearance and documentation coordination.
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
                Coordinated Customs Clearance Support
              </h2>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-slate-600">
              Customs clearance support structured around shipment requirements, trade routes, documentation and end-to-end coordination.
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
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1900"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1900")}
              sizes="100vw"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-16"
          />
          <div className="absolute inset-0 bg-[#071a33]/84" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px]">
            <Eyebrow light>Averon Approach</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl">
              Proactive Documentation. Coordinated Clearance.
            </h2>

            <p className="mt-5 max-w-[780px] text-sm leading-6 text-slate-300">
              With a proactive approach to documentation and customs coordination, we help simplify the clearance process and support smooth cargo movement.
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
            src="https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1800"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1800")}
              sizes="100vw"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-16"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.86),rgba(7,26,51,.78))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Customs Clearance Enquiry</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Keep Your Cargo Moving Across Borders
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
