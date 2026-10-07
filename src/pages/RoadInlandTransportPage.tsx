import React from 'react';
import {
  ArrowRight,
  Box,
  Eye,
  MapPin,
  PackageCheck,
  Plane,
  Route,
  Truck,
  Warehouse,
} from 'lucide-react';

interface RoadInlandTransportPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const solutions: { title: string; icon: IconType }[] = [
  { title: 'Door-to-door cargo transportation.', icon: Truck },
  { title: 'Port-to-warehouse and airport-to-destination deliveries.', icon: Warehouse },
  { title: 'FTL and LTL transportation options.', icon: Box },
  { title: 'Domestic cargo movement between logistics points.', icon: Route },
  { title: 'Flexible transport solutions for different cargo requirements.', icon: PackageCheck },
  { title: 'Operational coordination and shipment visibility.', icon: Eye },
];

const approachPoints: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'First-Mile Pickup',
    desc: 'Coordinate cargo movement from the origin point as required.',
    icon: MapPin,
  },
  {
    title: 'Port & Airport Connections',
    desc: 'Connect ports and airports with warehouses and onward destinations.',
    icon: Plane,
  },
  {
    title: 'Flexible Transport',
    desc: 'Support different cargo requirements through suitable transport options.',
    icon: Truck,
  },
  {
    title: 'Last-Mile Delivery',
    desc: 'Coordinate inland movement through to the final destination.',
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
      light ? 'text-[#d4af37]' : 'text-[#b88924]'
    }`}
  >
    <span className="h-[2px] w-8 bg-[#c9a227]" />
    <span>{children}</span>
  </div>
);

export const RoadInlandTransportPage: React.FC<RoadInlandTransportPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[470px] overflow-hidden bg-[#071a33] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17761703/pexels-photo-17761703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="Container truck on a modern road"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.93)_44%,rgba(7,26,51,.60)_74%,rgba(7,26,51,.32)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1360px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[820px]">
            <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold text-slate-300">
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
              <span className="text-[#d4af37]">Road & Inland Transport</span>
            </div>

            <Eyebrow light>Road & Inland Transport</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Reliable Road &
              <span className="block text-[#d4af37]">Inland Transport Solutions</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-200 sm:text-lg">
              Reliable and efficient road transportation connecting ports, airports, warehouses and final destinations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
              >
                GET A QUOTE
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
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f8f6f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.15)]">
              <img
                src="https://images.pexels.com/photos/17761703/pexels-photo-17761703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Modern container truck in transit"
                loading="lazy"
                className="h-[430px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Road Transport
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Reliable Inland Transport</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Connecting Ports, Airports, Warehouses & Destinations
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              Averon coordinates road and inland transportation between key logistics points, supporting cargo movement beyond the port or airport through to the final destination.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#b88924]">
                  <Warehouse className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Port-to-Warehouse</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Transportation support connecting port arrivals with warehouse destinations.
                </p>
              </article>

              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#b88924]">
                  <Plane className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Airport-to-Destination</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Inland transportation support from airport cargo points to onward destinations.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>Our Solutions</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Comprehensive Road Transport Support
              </h2>
            </div>

            <p className="max-w-[500px] text-sm leading-6 text-slate-600">
              Inland transportation support structured around cargo requirements, logistics points and onward delivery needs.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
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

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17761703/pexels-photo-17761703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1900"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-[#071a33]/84" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[850px]">
            <Eyebrow light>Averon Approach</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl">
              From First-Mile Pickup to Last-Mile Delivery
            </h2>

            <p className="mt-5 max-w-[780px] text-sm leading-6 text-slate-300">
              From first-mile pickup to last-mile delivery, our inland transportation solutions support the movement of cargo beyond the port or airport.
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
            src="https://images.pexels.com/photos/17761703/pexels-photo-17761703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1800"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-16"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.86),rgba(7,26,51,.78))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Road Transport Enquiry</Eyebrow>

            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Plan Your Next Road Shipment
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Share your transportation requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              GET A QUOTE
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
