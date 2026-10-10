import React, { useEffect, useState } from 'react';
import {
  Anchor,
  ArrowRight,
  Box,
  ChevronDown,
  Layers,
  Mail,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenTrackModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenTrackModal,
  onOpenQuoteModal,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const navigate = (page: string, serviceId?: string) => {
    onNavigate(page, serviceId);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const getServiceIcon = (id: string) => {
    const className = 'h-4 w-4 text-[#c9a227]';

    switch (id) {
      case 'ocean-freight':
        return <Anchor className={className} />;
      case 'air-freight':
        return <Plane className={className} />;
      case 'customs-clearance':
        return <ShieldCheck className={className} />;
      case 'road-inland-transport':
        return <Truck className={className} />;
      case 'warehousing-distribution':
        return <Warehouse className={className} />;
      case 'project-cargo':
        return <Box className={className} />;
      case 'supply-chain-management':
        return <Layers className={className} />;
      default:
        return <Box className={className} />;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(7,26,51,0.06)]">
      <div className="border-b border-white/10 bg-[#071a33] px-3 py-1.5 text-[10px] text-slate-200 sm:px-4 sm:py-2 sm:text-[11px]">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-4 lg:gap-6">
            <a href="tel:+919833464629" className="flex shrink-0 items-center gap-1.5 transition-colors hover:text-[#c9a227]">
              <Phone className="h-3.5 w-3.5 text-[#c9a227]" />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">+91 98334 64629</span>
            </a>

            <a href="tel:+919833464627" className="hidden items-center gap-1.5 transition-colors hover:text-[#c9a227] lg:flex">
              <Phone className="h-3.5 w-3.5 text-[#c9a227]" />
              <span>+91 9833464627</span>
            </a>

            <a href="mailto:info@averonfs.com" className="flex min-w-0 items-center gap-1.5 transition-colors hover:text-[#c9a227]">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#c9a227]" />
              <span className="sm:hidden">Email</span>
              <span className="hidden truncate sm:inline">info@averonfs.com</span>
            </a>
          </div>

          <a
            href={COMPANY_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1.5 transition-colors hover:text-[#c9a227] md:flex"
          >
            <svg className="h-3.5 w-3.5 fill-[#c9a227]" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-[66px] max-w-[1360px] items-center justify-between gap-4 px-3 sm:h-[72px] sm:px-6 xl:h-[76px] xl:px-8">
        <button
          type="button"
          className="group flex shrink-0 items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-4"
          onClick={() => navigate('home')}
          aria-label="Go to Averon home page"
        >
          <img
            src="/averon-logo.png"
            alt="Averon Freight Solutions LLP"
            className="h-[42px] w-auto max-w-[176px] object-contain transition-transform duration-300 group-hover:scale-[1.025] sm:h-[48px] sm:max-w-[205px] xl:h-[52px] xl:max-w-[225px]"
          />
        </button>

        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm font-semibold text-slate-700 xl:flex 2xl:gap-7">
          {[
            ['home', 'Home'],
            ['about', 'About Us'],
          ].map(([page, label]) => (
            <button
              key={page}
              type="button"
              onClick={() => navigate(page)}
              className={`rounded-md border-b-2 px-1.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227] hover:bg-[#f8f6f0] hover:text-[#071a33] ${
                currentPage === page
                  ? 'border-[#c9a227] text-[#071a33]'
                  : 'border-transparent'
              }`}
            >
              {label}
            </button>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => navigate('services')}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
              className={`flex items-center gap-1 rounded-md border-b-2 px-1.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227] hover:bg-[#f8f6f0] hover:text-[#071a33] ${
                currentPage.startsWith('service')
                  ? 'border-[#c9a227] text-[#071a33]'
                  : 'border-transparent'
              }`}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            {isServicesOpen && (
              <div role="menu" className="absolute left-0 top-[calc(100%+8px)] z-50 w-[350px] overflow-hidden rounded-xl border border-slate-200 border-t-2 border-t-[#c9a227] bg-white py-2 shadow-[0_24px_60px_rgba(7,26,51,0.18)]">
                <div className="border-b border-slate-100 px-4 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Logistics & Transport Solutions
                </div>
                {SERVICES_LIST.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="menuitem"
                    onClick={() => navigate('service-detail', service.id)}
                    className="group flex w-full items-center gap-3 border-l-2 border-transparent px-4 py-3 text-left text-slate-700 transition-all duration-200 hover:border-[#c9a227] hover:bg-[#fffaf0] hover:pl-5 hover:text-[#071a33]"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f8f6f0] transition-all duration-200 group-hover:bg-[#071a33] group-hover:shadow-[0_6px_18px_rgba(7,26,51,.18)]">
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-800">{service.title}</div>
                      <div className="line-clamp-1 text-[10px] text-slate-500">{service.shortDesc}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {[
            ['lcl-consolidation', 'LCL Consolidation'],
            ['global-reach', 'Global Reach'],
            ['contact', 'Contact Us'],
          ].map(([page, label]) => (
            <button
              key={page}
              type="button"
              onClick={() => navigate(page)}
              className={`rounded-md border-b-2 px-1.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a227] hover:bg-[#f8f6f0] hover:text-[#071a33] ${
                currentPage === page
                  ? 'border-[#c9a227] text-[#071a33]'
                  : 'border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={onOpenTrackModal}
            className={`flex min-h-10 items-center gap-2 border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
              currentPage === 'track-shipment'
                ? 'border-[#071a33] bg-[#071a33] text-white'
                : 'border-slate-300 bg-slate-50 text-slate-700 hover:-translate-y-0.5 hover:border-[#c9a227] hover:bg-white hover:text-[#071a33] hover:shadow-[0_8px_22px_rgba(7,26,51,.10)]'
            }`}
          >
            <Truck className={`h-4 w-4 ${currentPage === 'track-shipment' ? 'text-[#d4af37]' : 'text-[#071a33]'}`} />
            <span>Track Shipment</span>
          </button>

          <button type="button" onClick={onOpenQuoteModal} className="flex min-h-10 items-center gap-1.5 bg-[#c9a227] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#071a33] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4af37] hover:shadow-[0_10px_24px_rgba(201,162,39,.26)]">
            <span>Get a Quote</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-slate-700 transition-all duration-200 hover:bg-[#f8f6f0] hover:text-[#071a33] xl:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full max-h-[calc(100dvh-98px)] overflow-y-auto border-t border-slate-200 bg-white shadow-[0_22px_50px_rgba(7,26,51,0.16)] xl:hidden">
          <div className="mx-auto max-w-[1360px] px-4 py-4 sm:px-6">
            <div className="grid gap-1">
              <button type="button" onClick={() => navigate('home')} className={`min-h-11 rounded-md border-b border-slate-100 px-2 text-left text-sm font-semibold transition-all hover:bg-[#f8f6f0] hover:pl-3 ${currentPage === 'home' ? 'text-[#b88924]' : 'text-slate-800'}`}>Home</button>
              <button type="button" onClick={() => navigate('about')} className={`min-h-11 rounded-md border-b border-slate-100 px-2 text-left text-sm font-semibold transition-all hover:bg-[#f8f6f0] hover:pl-3 ${currentPage === 'about' ? 'text-[#b88924]' : 'text-slate-800'}`}>About Us</button>

              <div className="border-b border-slate-100 py-3">
                <button type="button" onClick={() => navigate('services')} className="mb-3 flex min-h-9 w-full items-center justify-between text-left text-sm font-semibold text-slate-800">
                  <span>Services</span>
                  <ArrowRight className="h-4 w-4 text-[#b88924]" />
                </button>

                <div className="grid gap-1 border-l-2 border-[#c9a227] pl-3 sm:grid-cols-2 sm:gap-x-5">
                  {SERVICES_LIST.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => navigate('service-detail', service.id)}
                      className="flex min-h-10 items-center gap-2 rounded-md px-2 py-1 text-left text-xs font-medium leading-5 text-slate-600 transition-all hover:bg-[#fffaf0] hover:pl-3 hover:text-[#071a33]"
                    >
                      {getServiceIcon(service.id)}
                      <span>{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {[
                ['lcl-consolidation', 'LCL Consolidation'],
                ['global-reach', 'Global Reach'],
                ['contact', 'Contact Us'],
              ].map(([page, label]) => (
                <button key={page} type="button" onClick={() => navigate(page)} className={`min-h-11 rounded-md border-b border-slate-100 px-2 text-left text-sm font-semibold transition-all hover:bg-[#f8f6f0] hover:pl-3 ${currentPage === page ? 'text-[#b88924]' : 'text-slate-800'}`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  onOpenTrackModal();
                  setIsMobileMenuOpen(false);
                }}
                className="flex min-h-12 w-full items-center justify-center gap-2 border border-slate-300 bg-slate-50 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#071a33]"
              >
                <Truck className="h-4 w-4" />
                <span>Track Shipment</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpenQuoteModal();
                  setIsMobileMenuOpen(false);
                }}
                className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#c9a227] px-4 text-xs font-bold uppercase tracking-[0.08em] text-[#071a33]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
