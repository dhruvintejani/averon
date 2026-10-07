import React from 'react';
import {
  Anchor,
  ArrowRight,
  Box,
  Clock3,
  Eye,
  FileCheck2,
  Handshake,
  Headphones,
  MapPin,
  PackageCheck,
  PackageOpen,
  Ship,
  Truck,
} from 'lucide-react';

interface LCLConsolidationPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const supportItems: { title: string; icon: IconType }[] = [
  { title: 'Import and export LCL coordination.', icon: Box },
  { title: 'Origin cargo pickup and consolidation support.', icon: PackageOpen },
  { title: 'Main-port and destination coordination.', icon: Ship },
  { title: 'Documentation and customs coordination.', icon: FileCheck2 },
  { title: 'Inland transportation and delivery support.', icon: Truck },
  { title: 'Proactive shipment updates and operational communication.', icon: Headphones },
];

const flowSteps: { title: string; icon: IconType }[] = [
  { title: 'Origin', icon: MapPin },
  { title: 'Consolidation', icon: PackageOpen },
  { title: 'Main Port', icon: Anchor },
  { title: 'Destination', icon: Ship },
  { title: 'Consignee', icon: PackageCheck },
];

const benefits: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'End-to-End Visibility',
    desc: 'Proactive coordination from origin to destination.',
    icon: Eye,
  },
  {
    title: 'Personalized Service',
    desc: 'Logistics solutions tailored to your shipment requirements.',
    icon: Handshake,
  },
  {
    title: 'Fast Response Times',
    desc: 'Quick coordination for quotations, bookings and shipment updates.',
    icon: Clock3,
  },
  {
    title: 'Compliance Support',
    desc: 'Professional support for documentation and customs requirements.',
    icon: FileCheck2,
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
      light ? 'text-[#d4af37]' : 'text-[#b88924]'
    }`}
  >
    <span className="h-[2px] w-8 bg-[#c9a227]" />
    <span>{children}</span>
  </div>
);

export const LCLConsolidationPage: React.FC<LCLConsolidationPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#071a33] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/15346128/pexels-photo-15346128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="LCL cargo movement at an international port"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_43%,rgba(7,26,51,.58)_72%,rgba(7,26,51,.3)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1360px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[780px]">
            <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#d4af37]">LCL Consolidation</span>
            </div>

            <Eyebrow light>LCL Consolidation</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              LCL Consolidation
            </h1>

            <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-200 sm:text-lg">
              Averon Freight Solutions specializes in LCL consolidation for import and export shipments across major international trade routes.
            </p>

            <p className="mt-4 max-w-[720px] text-sm leading-6 text-slate-300">
              We coordinate cargo movement from origin through consolidation, main-port movement, destination handling and final delivery, helping shippers move smaller consignments with organized end-to-end support.
            </p>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              DISCUSS YOUR LCL SHIPMENT
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#f8f6f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <Eyebrow>LCL Consolidation</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Flexible Coordination for Smaller Shipments
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                LCL consolidation helps businesses move smaller consignments efficiently across international trade routes while maintaining reliable coordination and shipment visibility.
              </p>
              <p>
                Averon supports import and export LCL movements with coordinated origin handling, consolidation, main-port movement, destination handling and final delivery.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.15)]">
              <img
                src="https://images.pexels.com/photos/30115463/pexels-photo-30115463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Container consolidation and cargo handling"
                loading="lazy"
                className="h-[430px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Import & Export
                </div>
                <div className="mt-1 text-sm font-extrabold">LCL Coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCL SUPPORT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <Eyebrow>Our LCL Support</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Coordinated Support Across the Shipment Journey
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-white p-7 transition hover:bg-[#f8f6f0]">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#b88924]">
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

      {/* CONSOLIDATION FLOW */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,transparent,transparent_31px,#fff_32px),repeating-linear-gradient(90deg,transparent,transparent_63px,#fff_64px)]" />

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <Eyebrow light>Consolidation Flow</Eyebrow>

          <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
            Consolidation Flow
          </h2>

          <div className="mt-12 grid gap-7 sm:grid-cols-5 sm:gap-2">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative flex items-center gap-4 sm:block sm:text-center">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[#c9a227] bg-[#0b2342] text-[#d4af37] sm:mx-auto">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <div className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-white sm:mt-4">
                    {step.title}
                  </div>

                  {index < flowSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+34px)] top-7 hidden h-px w-[calc(100%-68px)] bg-[#c9a227]/55 sm:block">
                      <ArrowRight className="absolute -right-1 -top-[7px] h-3.5 w-3.5 text-[#c9a227]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#d4af37]">
            One coordinated movement — from the shipper’s door to the consignee’s door.
          </div>
        </div>
      </section>

      {/* WHY AVERON */}
      <section className="bg-[#f8f6f0] py-20 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow>Why Businesses Choose Averon for LCL</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Why Businesses Choose Averon for LCL
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-white p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#b88924]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-16 text-white sm:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1800"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.84),rgba(7,26,51,.76))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Let’s Move Your Cargo Forward</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Discuss Your LCL Shipment
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Share your shipment requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              DISCUSS YOUR LCL SHIPMENT
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
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
