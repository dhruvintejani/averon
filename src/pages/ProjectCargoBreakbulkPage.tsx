import React from 'react';
import {
  Anchor,
  Boxes,
  Box,
  Route,
  Ship,
  Truck,
} from 'lucide-react';

interface ProjectCargoBreakbulkPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const solutions: { title: string; icon: IconType }[] = [
  { title: 'Oversized cargo coordination.', icon: Box },
  { title: 'Heavy-lift shipment planning support.', icon: Boxes },
  { title: 'Breakbulk cargo handling coordination.', icon: Ship },
  { title: 'Route and movement planning.', icon: Route },
  { title: 'Coordination across port, transport and destination requirements.', icon: Truck },
];

const approachPoints: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Movement Planning',
    desc: 'Plan the requirements for non-standard cargo movement.',
    icon: Route,
  },
  {
    title: 'Port Coordination',
    desc: 'Coordinate cargo requirements across port stages.',
    icon: Anchor,
  },
  {
    title: 'Transport Coordination',
    desc: 'Connect transport requirements with the wider movement plan.',
    icon: Truck,
  },
  {
    title: 'Destination Coordination',
    desc: 'Support coordination through to destination requirements.',
    icon: Ship,
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

export const ProjectCargoBreakbulkPage: React.FC<ProjectCargoBreakbulkPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* PRE-LAUNCH NOTE: Confirm this service is operationally active before production launch. */}

      {/* HERO */}
      <section className="relative min-h-[400px] overflow-hidden bg-[#071a33] text-white sm:min-h-[440px] lg:min-h-[470px]">
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src="https://images.pexels.com/photos/38414138/pexels-photo-38414138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="Heavy project cargo movement"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.93)_44%,rgba(7,26,51,.62)_74%,rgba(7,26,51,.34)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1360px] items-center px-4 py-12 sm:min-h-[440px] sm:px-6 sm:py-14 lg:min-h-[470px] lg:px-8 lg:py-16">
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
              <span className="text-[#d4af37]">Project Cargo & Breakbulk</span>
            </div>

            <Eyebrow light>Project Cargo & Breakbulk</Eyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Project Cargo &
              <span className="block text-[#d4af37]">Breakbulk</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-200 sm:text-lg">
              Specialized coordination for oversized, heavy-lift and non-containerized shipments.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.15)]">
              <img
                src="https://images.pexels.com/photos/38414138/pexels-photo-38414138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Oversized cargo handling operation"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Project Cargo & Breakbulk
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Specialized Cargo Coordination</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Tailored Coordination for Complex Shipments
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              Specialized coordination for oversized, heavy-lift and non-containerized shipments.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <Box className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Project Cargo</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Coordination for oversized and heavy-lift shipment requirements.
                </p>
              </article>

              <article className="bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                  <Ship className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">Breakbulk</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Coordination for non-containerized cargo movement.
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
                Project Cargo & Breakbulk Support
              </h2>
            </div>

            <p className="max-w-[520px] text-sm leading-6 text-slate-600">
              Coordination structured around cargo requirements, route planning and movement across port, transport and destination stages.
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
            src="https://images.pexels.com/photos/38414138/pexels-photo-38414138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1900"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-18"
          />
          <div className="absolute inset-0 bg-[#071a33]/84" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-[880px]">
            <Eyebrow light>Averon Approach</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl">
              Planned Coordination for Non-Standard Cargo
            </h2>

            <p className="mt-5 max-w-[800px] text-sm leading-6 text-slate-300">
              For non-standard cargo, Averon coordinates the movement requirements across the logistics chain with appropriate planning and operational communication.
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
    </div>
  );
};
