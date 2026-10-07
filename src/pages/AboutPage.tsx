import React from 'react';
import {
  ArrowRight,
  Eye,
  FileText,
  Handshake,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { CORE_VALUES } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

const valueIcons = {
  Shield: ShieldCheck,
  Clock: Handshake,
  FileText,
  Headphones,
  RotateCw: RefreshCw,
} as const;

const SectionEyebrow = ({
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

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section className="relative min-h-[440px] overflow-hidden bg-[#071a33] text-white sm:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=850&w=1800"
            alt="Container vessel and port operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.90)_42%,rgba(7,26,51,.58)_70%,rgba(7,26,51,.28)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071a33]/55 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1360px] items-center px-4 py-16 sm:min-h-[500px] sm:px-6 lg:px-8">
          <div className="max-w-[740px]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-300">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="transition hover:text-white"
              >
                Home
              </button>
              <span className="text-slate-500">/</span>
              <span className="text-[#d4af37]">About Us</span>
            </div>

            <SectionEyebrow light>About Us</SectionEyebrow>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[58px]">
              About Averon
              <span className="block text-[#d4af37]">Freight Solutions</span>
            </h1>

            <p className="mt-5 text-base font-medium text-slate-200 sm:text-lg">
              Your Gateway to Global Trade
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-6">
            <SectionEyebrow>Our Story</SectionEyebrow>

            <h2 className="max-w-[620px] text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[46px]">
              Averon Freight Solutions LLP
            </h2>

            <div className="mt-7 max-w-[660px] space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                Averon Freight Solutions LLP is a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals with 12+ years of combined industry experience.
              </p>
              <p>
                We are dedicated to facilitating seamless global trade through reliable, efficient and customized logistics solutions.
              </p>
              <p>
                We help importers, exporters, manufacturers and traders move cargo across international markets with confidence, transparency and operational excellence.
              </p>
              <p>
                From shipment planning and documentation to customs coordination, transportation and final delivery, our team provides coordinated support throughout the shipment journey.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.16)]">
              <img
                src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
                alt="International logistics and port operations"
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[390px] lg:h-[470px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 border-t-4 border-[#c9a227] bg-[#071a33]/95 px-7 py-5 text-white backdrop-blur-sm">
                <div className="text-4xl font-extrabold tracking-tight text-[#d4af37]">12+</div>
                <div className="mt-1 max-w-[240px] text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-slate-200">
                  Years of combined industry experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_25%_30%,#ffffff_1px,transparent_1.5px)] [background-size:14px_14px]" />
        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <SectionEyebrow light>Our Purpose</SectionEyebrow>

          <div className="mt-9 grid gap-0 border-y border-white/10 md:grid-cols-2">
            <article className="flex gap-6 py-9 md:border-r md:border-white/15 md:pr-12">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#c9a227] bg-[#0b2342] text-[#d4af37]">
                <Eye className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                  Our Vision
                </div>
                <p className="mt-4 max-w-[520px] text-lg leading-8 text-slate-100">
                  To become a trusted global logistics partner by delivering seamless, innovative and sustainable freight solutions.
                </p>
              </div>
            </article>

            <article className="flex gap-6 border-t border-white/10 py-9 md:border-t-0 md:pl-12">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#c9a227] bg-[#0b2342] text-[#d4af37]">
                <Target className="h-6 w-6" strokeWidth={1.7} />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">
                  Our Mission
                </div>
                <p className="mt-4 max-w-[520px] text-lg leading-8 text-slate-100">
                  To simplify international trade by providing reliable logistics services that help businesses grow confidently across global markets.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <SectionEyebrow>Our Values</SectionEyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Our Core Values
              </h2>
            </div>

            <p className="max-w-[520px] text-sm leading-6 text-slate-600">
              These principles shape how Averon approaches client relationships, shipment coordination and day-to-day logistics support.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5">
            {CORE_VALUES.map((value) => {
              const Icon =
                valueIcons[value.icon as keyof typeof valueIcons] ?? ShieldCheck;

              return (
                <article
                  key={value.title}
                  className="group min-h-[280px] bg-white p-6 transition hover:bg-[#f8f6f0]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-[#c9a227]/60 bg-[#f8f6f0] text-[#b88924] transition group-hover:bg-[#071a33] group-hover:text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-base font-extrabold leading-5 text-[#071a33]">
                    {value.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-8 bg-[#c9a227]" />

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1800"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.82),rgba(7,26,51,.74))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[760px]">
            <SectionEyebrow light>Let’s Work Together</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Discuss Your Logistics Requirements
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
