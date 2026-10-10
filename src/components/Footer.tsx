import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { getPathForRoute } from '../utils/routes';

interface FooterProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenTrackModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTrackModal,
}) => {
  const navigateFromLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: string,
    serviceId?: string
  ) => {
    event.preventDefault();
    onNavigate(page, serviceId);
  };

  return (
    <footer className="border-t border-white/10 bg-[#071a33] text-slate-300">
      <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 xl:grid-cols-4">
          <div className="space-y-4">
            <a
              href="/"
              className="group inline-flex rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071a33]"
              onClick={(event) => navigateFromLink(event, 'home')}
              aria-label="Go to Averon home page"
            >
              <img
                src="/SVG%20Final/AFS%20-%20Horizontal%20for%20Dark%20BG.svg"
                alt="Averon Freight Solutions LLP"
                loading="lazy"
                decoding="async"
                className="h-[50px] w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.025] sm:h-[58px] sm:max-w-[245px]"
              />
            </a>
            <p className="text-sm font-semibold text-white">Your Gateway to Global Trade</p>
            <p className="max-w-[300px] text-[11px] leading-5 text-slate-400">
              International Freight Forwarding • Customs Solutions • Global Logistics
            </p>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-300 sm:block sm:space-y-2.5">
              {[
                ['home', 'Home'],
                ['about', 'About Us'],
                ['services', 'Services'],
                ['lcl-consolidation', 'LCL Consolidation'],
                ['global-reach', 'Global Reach'],
                ['contact', 'Contact Us'],
              ].map(([page, label]) => (
                <li key={page}>
                  <a
                    href={getPathForRoute(page)}
                    onClick={(event) => navigateFromLink(event, page)}
                    className="inline-flex min-h-7 items-center text-left transition-colors hover:text-[#d4af37]"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/shipment-status"
                  onClick={(event) => {
                    event.preventDefault();
                    onOpenTrackModal();
                  }}
                  className="inline-flex min-h-7 items-center text-left transition-colors hover:text-[#d4af37]"
                >
                  Shipment Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">Services</h2>
            <ul className="grid gap-2 text-xs text-slate-300">
              {SERVICES_LIST.filter((service) => service.id !== 'project-cargo').map((service) => (
                <li key={service.id}>
                  <a
                    href={getPathForRoute('service-detail', service.id)}
                    onClick={(event) => navigateFromLink(event, 'service-detail', service.id)}
                    className="inline-flex min-h-7 items-center text-left leading-5 transition-colors hover:text-[#d4af37]"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 border-b border-white/10 pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4af37]">Contact</h2>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="space-y-2">
                {COMPANY_INFO.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex min-h-7 items-center gap-2 transition-colors hover:text-[#d4af37]">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-2 border-t border-white/10 pt-3">
                {COMPANY_INFO.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="flex min-h-7 items-center gap-2 break-all transition-colors hover:text-[#d4af37]">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>{email}</span>
                  </a>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3">
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex min-h-7 items-center gap-2 transition-colors hover:text-[#d4af37]">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </div>

              <a href={COMPANY_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-slate-200 transition-colors hover:border-[#c9a227] hover:bg-[#c9a227] hover:text-[#071a33]" aria-label="Averon Freight Solutions on LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#051426] py-4 text-[10px] text-slate-400 sm:text-[11px]">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-3 px-4 text-left sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Averon Freight Solutions LLP. All Rights Reserved.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href="/privacy-policy"
              onClick={(event) => navigateFromLink(event, 'privacy-policy')}
              className="transition hover:text-[#d4af37]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(event) => navigateFromLink(event, 'terms-conditions')}
              className="transition hover:text-[#d4af37]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
