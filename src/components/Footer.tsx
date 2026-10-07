import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenTrackModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTrackModal
}) => {
  return (
    <footer className="bg-[#071a33] text-slate-300 font-sans border-t border-white/10">
      {/* Upper Footer Content */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <button
              type="button"
              className="inline-flex bg-white p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071a33]"
              onClick={() => onNavigate('home')}
              aria-label="Go to Averon home page"
            >
              <img
                src="/averon-logo.png"
                alt="Averon Freight Solutions LLP"
                className="h-[58px] w-auto max-w-[245px] object-contain"
              />
            </button>

            <p className="text-sm font-semibold text-white">Your Gateway to Global Trade</p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              International Freight Forwarding • Customs Solutions • Global Logistics
            </p>
          </div>

        {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#c9a227]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#c9a227] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#c9a227] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#c9a227] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lcl-consolidation')} className="hover:text-[#c9a227] transition-colors">
                  LCL Consolidation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('global-reach')} className="hover:text-[#c9a227] transition-colors">
                  Global Reach
                </button>
              </li>
              <li>
                <button onClick={onOpenTrackModal} className="hover:text-[#c9a227] transition-colors text-left flex items-center space-x-1">
                  <span>Track Shipment</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#c9a227] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#c9a227]">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES_LIST.map((svc) => (
                <li key={svc.id}>
                  <button 
                    onClick={() => onNavigate('service-detail', svc.id)} 
                    className="hover:text-[#c9a227] transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Averon */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#c9a227]">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="space-y-1">
                <a href="tel:+919833464629" className="flex items-center space-x-2 hover:text-[#c9a227] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#c9a227]" />
                  <span>+91 98334 64629</span>
                </a>
                <a href="tel:+919833464627" className="flex items-center space-x-2 hover:text-[#c9a227] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#c9a227]" />
                  <span>+91 9833464627</span>
                </a>
              </div>

              <div className="space-y-1 pt-1 border-t border-slate-800">
                <a href="mailto:info@averonfs.com" className="flex items-center space-x-2 hover:text-[#c9a227] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#c9a227]" />
                  <span>info@averonfs.com</span>
                </a>
                <a href="mailto:sales@averonfs.com" className="flex items-center space-x-2 hover:text-[#c9a227] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#c9a227]" />
                  <span>sales@averonfs.com</span>
                </a>
              </div>

              <div className="pt-1 border-t border-slate-800">
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[#c9a227] transition-colors">
                  <Globe className="w-3.5 h-3.5 text-[#c9a227]" />
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 bg-slate-800/80 hover:bg-[#c9a227] hover:text-slate-900 rounded transition-colors text-slate-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-[#051426] py-4 border-t border-white/10 text-[11px] text-slate-400">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            © 2026 Averon Freight Solutions LLP. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
