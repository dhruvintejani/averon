import React, { useEffect, useState } from 'react';
import { getPexelsSrcSet } from '../utils/image';
import { getPathForRoute } from '../utils/routes';
import {
  Anchor,
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Eye,
  Factory,
  FileCheck2,
  Flag,
  Globe2,
  Handshake,
  Headphones,
  MapPin,
  MessageSquareText,
  Network,
  PackageCheck,
  PackageOpen,
  Pause,
  Play,
  Plane,
  Route,
  Send,
  ShieldCheck,
  Ship,
  SlidersHorizontal,
  Truck,
  UserRoundCheck,
  Warehouse,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenTrackModal: () => void;
  onOpenQuoteModal: () => void;
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const heroSlides = [
  {
    eyebrow: 'OCEAN FREIGHT',
    title: 'Connecting Your Cargo to Global Markets',
    description:
      'Reliable FCL & LCL ocean freight solutions with professional coordination from origin to destination.',
    cta: 'GET A QUOTE',
    image:
      'https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    serviceId: 'ocean-freight',
    action: 'quote' as const,
  },
  {
    eyebrow: 'AIR FREIGHT',
    title: 'When Time Matters, Move by Air',
    description:
      'Fast, secure and reliable air freight solutions for time-sensitive international shipments.',
    cta: 'GET AN AIR FREIGHT QUOTE',
    image:
      'https://images.pexels.com/photos/32642359/pexels-photo-32642359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    serviceId: 'air-freight',
    action: 'quote' as const,
  },
  {
    eyebrow: 'CUSTOMS CLEARANCE',
    title: 'Smooth Customs. Efficient Cargo Movement.',
    description:
      'Professional import and export customs coordination with accurate documentation and compliance support.',
    cta: 'TALK TO OUR TEAM',
    image:
      'https://images.pexels.com/photos/28438249/pexels-photo-28438249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    serviceId: 'customs-clearance',
    action: 'contact' as const,
  },
  {
    eyebrow: 'ROAD & INLAND TRANSPORT',
    title: 'Connecting Ports, Warehouses & Destinations',
    description:
      'Reliable first-mile, last-mile and inland transportation to keep your supply chain moving.',
    cta: 'ENQUIRE NOW',
    image:
      'https://images.pexels.com/photos/17761703/pexels-photo-17761703.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920',
    serviceId: 'road-inland-transport',
    action: 'contact' as const,
  },
];

const deliverables: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Global Freight Solutions',
    desc: 'Connecting cargo across major international trade routes.',
    icon: Globe2,
  },
  {
    title: 'End-to-End Logistics Support',
    desc: 'From origin coordination to destination delivery.',
    icon: Route,
  },
  {
    title: 'Customs & Trade Compliance',
    desc: 'Documentation and customs coordination for smoother cargo movement.',
    icon: FileCheck2,
  },
  {
    title: 'Supply Chain Efficiency',
    desc: 'Integrated transportation and logistics coordination.',
    icon: Network,
  },
];

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
    icon: Network,
  },
];

const lclSteps: { title: string; icon: IconType }[] = [
  { title: 'Origin', icon: MapPin },
  { title: 'Consolidation', icon: PackageOpen },
  { title: 'Main Port', icon: Anchor },
  { title: 'Destination', icon: Ship },
  { title: 'Consignee', icon: PackageCheck },
];

const advantages: { title: string; desc: string; icon: IconType }[] = [
  {
    title: 'Personalized Service',
    desc: 'Logistics solutions tailored to your shipment requirements.',
    icon: UserRoundCheck,
  },
  {
    title: 'Competitive Freight Rates',
    desc: 'Cost-conscious solutions aligned with your cargo and trade requirements.',
    icon: BadgeDollarSign,
  },
  {
    title: 'End-to-End Visibility',
    desc: 'Proactive coordination from origin to destination.',
    icon: Eye,
  },
  {
    title: 'Strong Carrier Relationships',
    desc: 'Reliable freight and transportation options through established relationships.',
    icon: Handshake,
  },
  {
    title: 'Flexible Logistics Solutions',
    desc: 'Solutions designed around different cargo, routes and shipment requirements.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Dedicated Customer Support',
    desc: 'A responsive team supporting you throughout the shipment lifecycle.',
    icon: Headphones,
  },
  {
    title: 'Fast Response Times',
    desc: 'Quick coordination for quotations, bookings and shipment updates.',
    icon: Clock3,
  },
  {
    title: 'Compliance & Documentation Expertise',
    desc: 'Professional support for documentation and customs requirements.',
    icon: ClipboardCheck,
  },
];

const workSteps: { num: string; title: string; desc: string; icon: IconType }[] = [
  {
    num: '01',
    title: 'Inquiry & Requirement Analysis',
    desc: 'We understand the shipment, route, cargo and service requirement.',
    icon: ClipboardCheck,
  },
  {
    num: '02',
    title: 'Freight Solution Design',
    desc: 'We plan a suitable logistics solution based on the shipment requirement.',
    icon: Route,
  },
  {
    num: '03',
    title: 'Quotation & Confirmation',
    desc: 'We provide the quotation and coordinate confirmation.',
    icon: FileCheck2,
  },
  {
    num: '04',
    title: 'Cargo Pickup',
    desc: 'Origin pickup and cargo movement are coordinated as required.',
    icon: PackageOpen,
  },
  {
    num: '05',
    title: 'Customs Processing',
    desc: 'Documentation and customs processes are coordinated.',
    icon: ShieldCheck,
  },
  {
    num: '06',
    title: 'Transportation',
    desc: 'Cargo moves through the selected transport mode.',
    icon: Truck,
  },
  {
    num: '07',
    title: 'Shipment Tracking',
    desc: 'Shipment status and operational updates are coordinated.',
    icon: Eye,
  },
  {
    num: '08',
    title: 'Final Delivery',
    desc: 'Cargo is coordinated through to the final destination.',
    icon: Flag,
  },
];

const commitments: { title: string; icon: IconType }[] = [
  { title: 'Cargo Safety', icon: ShieldCheck },
  { title: 'Cost Efficiency', icon: CircleDollarSign },
  { title: 'Transparent Communication', icon: MessageSquareText },
  { title: 'Continuous Customer Support', icon: Headphones },
];

const audiences: { title: string; icon: IconType }[] = [
  { title: 'Importers', icon: PackageOpen },
  { title: 'Exporters', icon: Send },
  { title: 'Manufacturers', icon: Factory },
  { title: 'Traders', icon: BriefcaseBusiness },
];

const SectionEyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`mb-3 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] ${
    light ? 'text-[#d4af37]' : 'text-[#8b6b1f]'
  }`}>
    <span className="h-[2px] w-8 bg-[#c9a227]" />
    <span>{children}</span>
  </div>
);

const RouteMapGraphic = () => (
  <div className="relative overflow-hidden border border-[#c9a227]/25 bg-[#041325] shadow-[0_28px_70px_rgba(7,26,51,.22)]">
    <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

    <div className="relative aspect-[3/2] overflow-hidden bg-[#041325]">
      <img
        src="/Global%20Logistics%20Network%20Hub.png"
        alt="Illustrative global logistics network with India as the coordination point"
        loading="lazy" decoding="async"
        className="h-full w-full object-contain"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>

    <div className="flex flex-col gap-2 border-t border-white/10 bg-[#061426] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span>Illustrative partner-network routes</span>
      <span className="text-[#d4af37]">India coordination point</span>
    </div>
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [heroSlide, setHeroSlide] = useState(0);
  const [isHeroManuallyPaused, setIsHeroManuallyPaused] = useState(false);
  const [isHeroInteractionPaused, setIsHeroInteractionPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener('change', updatePreference);

    return () => media.removeEventListener('change', updatePreference);
  }, []);

  const isAutoRotationPaused =
    isHeroManuallyPaused || isHeroInteractionPaused || prefersReducedMotion;

  useEffect(() => {
    if (isAutoRotationPaused) return;

    const timer = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isAutoRotationPaused]);

  const currentSlide = heroSlides[heroSlide];

  const handleHeroPrimaryAction = () => {
    if (currentSlide.action === 'quote') {
      onOpenQuoteModal();
      return;
    }

    onNavigate('contact');
  };

  return (
    <div className="bg-white text-[#14263d]">
      {/* HERO */}
      <section
        className="relative min-h-[600px] overflow-hidden bg-[#071a33] text-white sm:min-h-[640px] lg:min-h-[720px]"
        aria-roledescription="carousel"
        aria-label="Averon freight services"
        onMouseEnter={() => setIsHeroInteractionPaused(true)}
        onMouseLeave={() => setIsHeroInteractionPaused(false)}
        onFocusCapture={() => setIsHeroInteractionPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsHeroInteractionPaused(false);
          }
        }}
      >
        <div className="absolute inset-0">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src={currentSlide.image}
            srcSet={getPexelsSrcSet(currentSlide.image)}
            sizes="100vw"
            alt=""
            className="h-full w-full object-cover object-center transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98)_0%,rgba(7,26,51,.90)_38%,rgba(7,26,51,.52)_67%,rgba(7,26,51,.22)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#071a33] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1360px] items-start px-4 pb-10 pt-14 sm:min-h-[640px] sm:px-6 sm:pb-12 sm:pt-16 lg:min-h-[720px] lg:px-8 lg:pb-14 lg:pt-20">
          <div className="max-w-[780px]">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#d4af37]">
              <span className="h-[2px] w-10 bg-[#c9a227]" />
              <span>{currentSlide.eyebrow}</span>
            </div>

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
              International Freight Forwarding • Customs Solutions • Global Logistics
            </p>

            <div
              id="home-hero-slide"
              className="flex h-[176px] items-start sm:h-[122px] lg:h-[142px]"
              aria-live={isAutoRotationPaused ? 'polite' : 'off'}
              aria-atomic="true"
            >
              <h1 className="max-w-[760px] text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px]">
                {currentSlide.title}
              </h1>
            </div>

            <div className="mt-5 flex h-[112px] items-start sm:h-[84px] lg:h-[64px]">
              <p className="max-w-[650px] text-base leading-7 text-slate-200 sm:text-lg">
                {currentSlide.description}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleHeroPrimaryAction}
                className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center gap-2 bg-[#c9a227] px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071a33] transition hover:bg-[#d4af37]"
              >
                {currentSlide.cta}
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={getPathForRoute('services')}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('services');
                }}
                className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center gap-2 border border-white/45 bg-[#071a33]/35 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                EXPLORE OUR SERVICES
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => {
                      setHeroSlide(index);
                      setIsHeroManuallyPaused(true);
                    }}
                    aria-controls="home-hero-slide"
                    aria-current={index === heroSlide ? 'true' : undefined}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    className={`h-[3px] transition-all ${
                      index === heroSlide ? 'w-11 bg-[#d4af37]' : 'w-5 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous hero slide"
                  onClick={() => {
                    setHeroSlide((current) =>
                      current === 0 ? heroSlides.length - 1 : current - 1
                    );
                    setIsHeroManuallyPaused(true);
                  }}
                  className="grid h-9 w-9 place-items-center border border-white/25 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next hero slide"
                  onClick={() => {
                    setHeroSlide((current) => (current + 1) % heroSlides.length);
                    setIsHeroManuallyPaused(true);
                  }}
                  className="grid h-9 w-9 place-items-center border border-white/25 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsHeroManuallyPaused((paused) => !paused)}
                disabled={prefersReducedMotion}
                className="grid h-9 w-9 place-items-center border border-white/25 text-white transition hover:border-[#d4af37] hover:text-[#d4af37] disabled:cursor-not-allowed disabled:opacity-60"
                aria-label={
                  prefersReducedMotion
                    ? 'Automatic hero slides are disabled because reduced motion is enabled'
                    : isHeroManuallyPaused
                      ? 'Resume automatic hero slides'
                      : 'Pause automatic hero slides'
                }
                aria-pressed={isHeroManuallyPaused}
              >
                {isHeroManuallyPaused || prefersReducedMotion ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>

              <span className="text-xs font-bold tracking-[0.18em] text-slate-300" aria-label={`Slide ${heroSlide + 1} of ${heroSlides.length}`}>
                0{heroSlide + 1} / 0{heroSlides.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-6">
            <SectionEyebrow>About Averon Freight Solutions</SectionEyebrow>
            <h2 className="max-w-[650px] text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#071a33] sm:text-4xl lg:text-[46px]">
              Connecting Businesses to Global Markets
            </h2>

            <div className="mt-7 max-w-[660px] space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                Averon Freight Solutions LLP is a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals with 12+ years of combined industry experience.
              </p>
              <p>
                We help importers, exporters, manufacturers and traders move cargo across international markets through reliable, efficient and customized logistics solutions.
              </p>
              <p>
                From freight planning and documentation to customs coordination, transportation and final delivery, we provide seamless support throughout the shipment journey.
              </p>
            </div>

            <a
              href={getPathForRoute('about')}
              onClick={(event) => {
                event.preventDefault();
                onNavigate('about');
              }}
              className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#071a33] transition hover:text-[#8b6b1f]"
            >
              LEARN MORE ABOUT AVERON
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden bg-[#071a33] shadow-[0_24px_70px_rgba(7,26,51,.16)]">
              <img
                src="https://images.pexels.com/photos/36652833/pexels-photo-36652833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/36652833/pexels-photo-36652833.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200")}
              sizes="100vw"
                alt="International cargo port operations"
                loading="lazy" decoding="async"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-5 border-t-4 border-[#c9a227] bg-[#071a33] px-7 py-5 text-white shadow-xl sm:left-8">
              <div className="text-4xl font-extrabold tracking-tight text-[#d4af37]">12+</div>
              <div className="mt-1 max-w-[220px] text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-slate-200">
                Years of combined industry experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionEyebrow>What We Deliver</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Coordinated support across the movement of your cargo
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group bg-white p-7 transition hover:bg-[#f8f6f0]">
                  <div className="mb-5 grid h-12 w-12 place-items-center border border-[#c9a227]/50 text-[#8b6b1f] transition group-hover:bg-[#071a33] group-hover:text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#071a33]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f4f6f8] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionEyebrow>Our Services</SectionEyebrow>
              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                A single point of coordination for the entire movement of your cargo — from the first mile at origin to final delivery.
              </h2>
            </div>

            <a
              href={getPathForRoute('services')}
              onClick={(event) => {
                event.preventDefault();
                onNavigate('services');
              }}
              className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#071a33] transition hover:text-[#8b6b1f]"
            >
              VIEW ALL SERVICES
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={getPathForRoute('service-detail', service.id)}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate('service-detail', service.id);
                  }}
                  className={`group min-h-[245px] border border-slate-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c9a227] hover:shadow-[0_18px_46px_rgba(7,26,51,.10)] ${
                    index >= 4 ? 'lg:col-span-1' : ''
                  }`}
                >
                  <div className="mb-9 flex items-start justify-between">
                    <div className="grid h-11 w-11 place-items-center bg-[#071a33] text-[#d4af37]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-xs font-extrabold tracking-[0.16em] text-[#8b6b1f]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-6 text-[#071a33]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#8b6b1f]">
                    Explore service
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* LCL SPECIALIZATION */}
      <section className="bg-[#071a33] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionEyebrow light>Our Specialization</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              LCL Consolidation
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-300">
              <p>
                We provide flexible LCL consolidation solutions across major international trade routes, helping shippers optimize cargo movement while maintaining reliable coordination and shipment visibility.
              </p>
              <p>
                Our LCL services support import and export shipments with coordinated origin handling, consolidation, main-port movement, destination handling and final delivery.
              </p>
            </div>

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
                    <div className="mx-0 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#c9a227] bg-[#071a33] text-[#d4af37] md:mx-auto">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="mt-0 text-[11px] font-extrabold uppercase tracking-[0.11em] text-white md:mt-4">
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

      {/* GLOBAL REACH */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionEyebrow>Global Reach</SectionEyebrow>
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Connecting Businesses Across International Trade Routes
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              With a strong global network, we support shipments across major international trade lanes including USA, Canada, Europe, Mediterranean, Middle East, Far East, Africa, Australia, LATAM and ISC.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Key import origins include China, Far East, Europe, Dubai, Istanbul and USA.
            </p>

            <a
              href={getPathForRoute('contact')}
              onClick={(event) => {
                event.preventDefault();
                onNavigate('contact');
              }}
              className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#071a33] transition hover:text-[#8b6b1f]"
            >
              TALK TO OUR LOGISTICS TEAM
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <RouteMapGraphic />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1920"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1920")}
              sizes="100vw"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#071a33]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionEyebrow light>Why Choose Averon</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Our Advantage
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="border border-white/12 bg-[#081d35]/90 p-6 backdrop-blur-sm transition hover:border-[#c9a227]/65 hover:bg-[#0a2442]"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-[#c9a227] text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-sm font-extrabold leading-5 text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionEyebrow>How We Work</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              From Enquiry to Final Delivery
            </h2>
          </div>

          <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.num} className="relative border-t border-slate-200 pt-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center border border-[#c9a227]/55 text-[#8b6b1f]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="text-2xl font-extrabold text-[#8b6b1f]">{step.num}</span>
                  </div>
                  <h3 className="text-sm font-extrabold leading-5 text-[#071a33]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{step.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 border-y border-slate-200 py-5 text-center text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#071a33]">
            One point of contact throughout the shipment lifecycle.
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="bg-[#f8f6f0] py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <SectionEyebrow>Our Commitment</SectionEyebrow>
              <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
                Commitment to Excellence
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">
                At Averon Freight Solutions, we understand that logistics is more than moving cargo — it is about delivering trust, reliability and business continuity.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
              {commitments.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-white p-6">
                    <Icon className="h-6 w-6 text-[#8b6b1f]" strokeWidth={1.7} />
                    <h3 className="mt-5 text-sm font-extrabold leading-5 text-[#071a33]">{item.title}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-14 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionEyebrow>Who We Serve</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#071a33] sm:text-4xl">
              Supporting Businesses Across Global Trade
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Our logistics solutions support importers, exporters, manufacturers and traders moving cargo across international markets.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex items-center gap-5 border border-slate-200 bg-white p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#071a33] text-[#d4af37]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-base font-extrabold text-[#071a33]">{item.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1920"
              srcSet={getPexelsSrcSet("https://images.pexels.com/photos/32399137/pexels-photo-32399137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1920")}
              sizes="100vw"
            alt=""
            loading="lazy" decoding="async"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.98),rgba(7,26,51,.80),rgba(7,26,51,.72))]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1360px] flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow light>Ready to Move Forward?</SectionEyebrow>
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-white sm:text-4xl">
              Let’s Move Your Cargo Forward
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
            <a
              href={getPathForRoute('contact')}
              onClick={(event) => {
                event.preventDefault();
                onNavigate('contact');
              }}
              className="inline-flex min-h-12 w-full items-center sm:w-auto justify-center gap-2 border border-white/45 px-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              CONTACT US
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
