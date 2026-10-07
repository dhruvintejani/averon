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
      light ? 'text-[#d4af37]' : 'text-[#b88924]'
    }`}
  >
    <span className="h-[2px] w-8 bg-[#c9a227]" />
    <span>{children}</span>
  </div>
);

const GlobalMap = () => (
  <div className="relative overflow-hidden border border-white/10 bg-[#061426] p-4 sm:p-7">
    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:34px_34px]" />

    <svg
      viewBox="0 0 960 460"
      className="relative z-10 min-h-[330px] w-full"
      role="img"
      aria-label="Illustrative global trade route map with India as the coordination point"
    >
      <g fill="#173a5d" stroke="#315777" strokeWidth="2">
        <path d="M72 125l96-47 91 22 38 53-43 46-86 0-48 47-59-51z" />
        <path d="M248 224l50 36 21 55-23 84-39-33-17-79z" />
        <path d="M399 106l59-25 45 19-2 37-44 14-50-11z" />
        <path d="M446 154l72 19 47 70-28 116-49-12-31-78-45-64z" />
        <path d="M510 109l105-48 137 19 78 49-38 56-101 5-60 55-84-21-22-51z" />
        <path d="M745 296l63-23 52 36-24 47-66 8-36-34z" />
      </g>

      <g fill="none" stroke="#c9a227" strokeWidth="2.25" opacity=".9">
        <path d="M620 205 Q438 24 170 143" />
        <path d="M620 205 Q485 54 460 123" />
        <path d="M620 205 Q623 67 756 133" />
        <path d="M620 205 Q795 165 804 324" />
        <path d="M620 205 Q516 279 514 301" />
        <path d="M620 205 Q400 255 285 299" />
        <path d="M620 205 Q335 133 104 176" />
      </g>

      <g fill="#d4af37">
        <circle cx="620" cy="205" r="10" />
        <circle cx="170" cy="143" r="5" />
        <circle cx="460" cy="123" r="5" />
        <circle cx="756" cy="133" r="5" />
        <circle cx="804" cy="324" r="5" />
        <circle cx="514" cy="301" r="5" />
        <circle cx="285" cy="299" r="5" />
        <circle cx="104" cy="176" r="5" />
      </g>

      <g
        fill="#f8fafc"
        fontSize="13"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="700"
      >
        <text x="635" y="198">INDIA</text>
        <text x="125" y="132">USA / CANADA</text>
        <text x="420" y="112">EUROPE</text>
        <text x="727" y="121">FAR EAST</text>
        <text x="762" y="386">AUSTRALIA</text>
        <text x="468" y="331">AFRICA</text>
        <text x="251" y="329">LATAM</text>
      </g>
    </svg>

    <div className="relative z-10 mt-2 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-[0.17em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
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
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1900"
            alt="International freight and port operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.92)_44%,rgba(7,26,51,.64)_73%,rgba(7,26,51,.38)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-[1360px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[860px]">
            <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold text-slate-300">
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
      <section className="bg-[#f8f6f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
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
                loading="lazy"
                className="h-[430px] w-full object-cover"
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
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>Major Trade Lanes</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              International Markets We Support
            </h2>

            <div className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {TRADE_LANES.map((lane) => (
                <div key={lane} className="flex items-center gap-3 bg-white px-5 py-4">
                  <CircleDot className="h-4 w-4 shrink-0 text-[#b88924]" strokeWidth={1.7} />
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
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#c9a227]">
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
      <section className="bg-[#f8f6f0] py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.14)]">
              <img
                src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1100"
                alt="International cargo coordination"
                loading="lazy"
                className="h-[430px] w-full object-cover"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
            >
              PLAN YOUR NEXT SHIPMENT
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
