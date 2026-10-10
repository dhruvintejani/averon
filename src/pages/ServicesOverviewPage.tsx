import React from 'react';
import {
  Anchor,
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Eye,
  Handshake,
  Layers,
  PackageCheck,
  PackageOpen,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
} from 'lucide-react';

interface ServicesOverviewPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const services: { id: string; title: string; desc: string; icon: IconType }[] = [
  {
    id: 'ocean-freight',
    title: 'Ocean Freight — FCL & LCL',
    desc: 'Full Container Load and Less than Container Load services across major global trade routes.',
    icon: Ship,
  },
  {
    id: 'air-freight',
    title: 'Air Freight',
    desc: 'Time-sensitive, high-value cargo moved via airline capacity for urgent and standard shipments.',
    icon: Plane,
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    desc: 'Documentation review, tariff classification and customs guidance to prevent delays at the border.',
    icon: ShieldCheck,
  },
  {
    id: 'road-inland-transport',
    title: 'Road & Inland Transport',
    desc: 'Reliable haulage connecting ports, airports and warehouses to final delivery points.',
    icon: Truck,
  },
  {
    id: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    desc: 'Flexible storage, consolidation and onward distribution between shipping legs.',
    icon: Warehouse,
  },
  {
    id: 'supply-chain-management',
    title: 'Supply Chain Management',
    desc: 'Coordinated planning across shipments, modes and vendors with one forwarding partner.',
    icon: Layers,
  },
];

const lclSteps: { title: string; icon: IconType }[] = [
  { title: 'Origin', icon: PackageOpen },
  { title: 'Consolidation', icon: Layers },
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
    icon: ClipboardCheck,
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

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[450px] overflow-hidden bg-[#071a33] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1800"
            alt="International freight and logistics port"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_42%,rgba(7,26,51,.66)_72%,rgba(7,26,51,.42)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[1360px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[760px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#d4af37]">Services</span>
            </div>

            <Eyebrow light>Our Services</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
              Freight & Logistics
              <span className="block text-[#d4af37]">Solutions</span>
            </h1>

            <p className="mt-5 max-w-[700px] text-base leading-7 text-slate-200 sm:text-lg">
              A single point of coordination for the entire movement of your cargo — from the first mile at origin to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.14)] lg:col-span-6">
            <img
              src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
              alt="International cargo movement"
              loading="lazy"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[390px]"
            />
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>End-to-End Logistics Support</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Built Around the Movement of Your Cargo
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              Averon Freight Solutions coordinates freight and logistics support across ocean, air, customs, inland transportation, warehousing and wider supply-chain requirements.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Our service structure is designed to connect each stage of the shipment journey with clear communication and one coordinated point of contact.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Our Services
              </h2>
            </div>

            <p className="max-w-[520px] text-sm leading-6 text-slate-600">
              Seven logistics services covering international freight, customs, inland movement, storage and coordinated shipment planning.
            </p>
          </div>

          <div className="border-y border-slate-200">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => onNavigate('service-detail', service.id)}
                  className="group grid w-full grid-cols-[56px_1fr] gap-4 border-b border-slate-200 px-2 py-6 text-left transition last:border-b-0 hover:bg-[#f8f6f0] lg:grid-cols-[56px_minmax(220px,.8fr)_1.5fr_auto] lg:items-center lg:gap-6 lg:px-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 bg-white text-[#b88924] transition group-hover:bg-[#071a33] group-hover:text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <div>
                    <div className="text-[10px] font-extrabold tracking-[0.17em] text-[#c9a227]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-1 text-base font-extrabold text-[#071a33]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="col-span-2 text-sm leading-6 text-slate-600 lg:col-span-1">
                    {service.desc}
                  </p>

                  <div className="col-span-2 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#071a33] transition group-hover:text-[#b88924] lg:col-span-1">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* LCL */}
      <section className="bg-[#071a33] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow light>Our Specialization</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl">
              LCL Consolidation
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-300">
              We provide flexible LCL consolidation solutions across major international trade routes, helping shippers optimize cargo movement while maintaining reliable coordination and shipment visibility.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-300">
              Our LCL services support import and export shipments with coordinated origin handling, consolidation, main-port movement, destination handling and final delivery.
            </p>

            <button
              type="button"
              onClick={() => onNavigate('lcl-consolidation')}
              className="mt-8 inline-flex min-h-11 w-full items-center sm:w-auto gap-2 bg-[#c9a227] px-5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              EXPLORE LCL SOLUTIONS
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#0b2342] p-6 sm:p-8 lg:col-span-7">
            <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,transparent,transparent_31px,#fff_32px),repeating-linear-gradient(90deg,transparent,transparent_63px,#fff_64px)]" />
            <div className="relative z-10 mb-8 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Consolidation Flow
            </div>

            <div className="relative z-10 grid gap-6 md:grid-cols-5 sm:gap-2">
              {lclSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative flex items-center gap-4 md:block md:text-center">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#c9a227] bg-[#071a33] text-[#d4af37] md:mx-auto">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.11em] md:mt-4">
                      {step.title}
                    </div>

                    {index < lclSteps.length - 1 && (
                      <div className="absolute left-[calc(50%+28px)] top-6 hidden h-px w-[calc(100%-56px)] bg-[#c9a227]/55 sm:block">
                        <ArrowRight className="absolute -right-1 -top-[7px] h-3.5 w-3.5 text-[#c9a227]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-9 border-t border-white/10 pt-5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
              Origin → Consolidation → Main Port → Destination → Consignee
            </div>
          </div>
        </div>
      </section>

      {/* COORDINATION */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow>Why Averon</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              One Coordinated Point of Contact
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Averon focuses on clear coordination, visibility and responsive communication across the shipment journey.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-white p-6">
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
      <section className="relative overflow-hidden bg-[#071a33] py-16 text-white">
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
            <h2 className="text-3xl font-extrabold sm:text-4xl">Tell Us About Your Shipment</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Share your shipment requirements with our team and we will work with you on a suitable logistics solution.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex min-h-12 w-full items-center sm:w-auto gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              GET A QUOTE
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-12 w-full items-center sm:w-auto gap-2 border border-white/45 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
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
