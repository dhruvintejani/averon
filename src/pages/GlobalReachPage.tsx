import React from 'react';
import {
  ArrowRight,
  CircleDot,
  Eye,
  Handshake,
  Network,
  Route,
} from 'lucide-react';
import { KEY_IMPORT_ORIGINS, TRADE_LANES } from '../data/companyData';

interface GlobalReachPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const approachItems: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Partner-Network Coverage',
    desc: 'International support through coordinated partner-network coverage.',
    icon: Network,
  },
  {
    title: 'One Point of Contact',
    desc: 'Coordinated communication throughout the shipment lifecycle.',
    icon: Handshake,
  },
  {
    title: 'Route-Focused Planning',
    desc: 'Solutions aligned with cargo, route and shipment requirements.',
    icon: Route,
  },
  {
    title: 'End-to-End Visibility',
    desc: 'Proactive coordination from origin through destination.',
    icon: Eye,
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

const GlobalMap = () => (
  <div className="relative overflow-hidden border border-[#c9a227]/25 bg-[#041325] shadow-[0_32px_90px_rgba(0,0,0,.28)]">
    <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

    <div className="relative aspect-[3/2] overflow-hidden bg-[#041325]">
      <img
        src="/Global%20Logistics%20Network%20Hub.png"
        alt="Illustrative global trade route network with India as the coordination point"
        loading="lazy" decoding="async"
        className="h-full w-full object-contain"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(201,162,39,.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>

    <div className="flex flex-col gap-2 border-t border-white/10 bg-[#061426] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span>Partner-network coverage across major international trade lanes</span>
      <span className="text-[#d4af37]">India coordination point</span>
    </div>
  </div>
);

export const GlobalReachPage: React.FC<GlobalReachPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#071a33] text-white">
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="International freight and port operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_44%,rgba(7,26,51,.64)_73%,rgba(7,26,51,.38)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1360px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[860px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#d4af37]">Global Reach</span>
            </div>

            <Eyebrow light>Global Reach</Eyebrow>

            <h1 className="max-w-[820px] text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              Connecting Businesses Across
              <span className="block text-[#d4af37]">International Trade Routes</span>
            </h1>

            <p className="mt-5 max-w-[760px] text-base leading-7 text-slate-200 sm:text-lg">
              Through our global network, we support shipments across major international trade lanes including USA, Canada, Europe, Mediterranean, Middle East, Far East, Africa, Australia, LATAM and ISC.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL SUPPORT */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-6">
            <Eyebrow>Worldwide Coordination</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[44px]">
              Global Logistics Support with India at the Centre
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              Through our global network, Averon Freight Solutions supports cargo movement across major international trade lanes with coordinated freight-forwarding support.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-slate-600">
              Key import origins include China, Far East, Europe, Dubai, Istanbul and USA.
            </p>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.15)]">
              <img
                src="https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="Container vessel on an international trade route"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-6 py-4 text-white backdrop-blur-sm">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#d4af37]">
                  Global Network
                </div>
                <div className="mt-1 max-w-[300px] text-xs leading-5 text-slate-200">
                  Coordinated support across major international trade lanes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK MAP */}
      <section className="bg-[#071a33] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow light>Network Visual</Eyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
                One Coordination Point. Global Connections.
              </h2>
            </div>

            <p className="max-w-[480px] text-sm leading-6 text-slate-300">
              India is shown as the coordination point, with route lines illustrating partner-network connections to the regions listed by Averon.
            </p>
          </div>

          <GlobalMap />
        </div>
      </section>

      {/* TRADE LANES */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>Major Trade Lanes</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              International Markets We Support
            </h2>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {TRADE_LANES.map((lane) => (
                <div key={lane} className="flex items-center gap-3 bg-white px-5 py-4">
                  <CircleDot className="h-4 w-4 shrink-0 text-[#8b6b1f]" strokeWidth={1.7} />
                  <span className="text-sm font-extrabold text-[#071a33]">{lane}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full border border-slate-200 bg-[#f8f6f0] p-7 sm:p-8">
              <Eyebrow>Key Import Origins</Eyebrow>
              <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-[#071a33]">
                Coordinated Import Movement
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Key import origins include China, Far East, Europe, Dubai, Istanbul and USA.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {KEY_IMPORT_ORIGINS.map((origin) => (
                  <div
                    key={origin.code}
                    className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#8b6b1f]">
                      {origin.code}
                    </span>
                    <span className="text-sm font-extrabold text-[#071a33]">{origin.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVERON APPROACH */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.14)]">
              <img
                src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1100"
                alt="International cargo coordination"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <Eyebrow>Averon Approach</Eyebrow>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Coordinated Across the Shipment Journey
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Averon coordinates international cargo movement through freight planning, documentation, customs coordination, transportation and destination support.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {approachItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="bg-white p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-full border border-[#c9a227]/60 text-[#8b6b1f]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 text-sm font-extrabold text-[#071a33]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1800"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.84),rgba(7,26,51,.76))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <Eyebrow light>Plan Your Next Shipment</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Connect Your Cargo to Global Markets
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
              PLAN YOUR NEXT SHIPMENT
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
