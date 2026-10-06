import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
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
    <footer className="bg-[#061325] text-slate-300 font-sans border-t border-slate-800">
      {/* Upper Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-11 bg-[#0b1f3a] rounded flex items-center justify-center border-2 border-[#d9a74a] text-white font-extrabold text-sm tracking-tighter">
                <span className="text-[#d9a74a] text-xs font-mono">AFS</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight font-serif block">AVERON</span>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#d9a74a] block -mt-1">
                  FREIGHT SOLUTIONS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your Gateway to Global Trade
            </p>
            <p className="text-[11px] text-slate-400 leading-normal border-t border-slate-800 pt-3">
              International Freight Forwarding • Customs Solutions • Global Logistics
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d9a74a] mt-0.5 shrink-0" />
                <span className="text-[11px] leading-snug">
                  Office No. 404, 4th Floor, Dev Milan Co-operative Premises Society, Above Woodland Retreat, LBS Marg, Near Tip Top Plaza, Thane West – 400604, Mumbai, Maharashtra, India.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#d9a74a]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#d9a74a] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#d9a74a] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d9a74a] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lcl-consolidation')} className="hover:text-[#d9a74a] transition-colors">
                  LCL Consolidation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('global-reach')} className="hover:text-[#d9a74a] transition-colors">
                  Global Reach
                </button>
              </li>
              <li>
                <button onClick={onOpenTrackModal} className="hover:text-[#d9a74a] transition-colors text-left flex items-center space-x-1">
                  <span>Track Shipment</span>
                  <span className="bg-[#d9a74a] text-slate-950 font-extrabold text-[9px] px-1 rounded">LIVE</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#d9a74a] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#d9a74a]">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES_LIST.map((svc) => (
                <li key={svc.id}>
                  <button 
                    onClick={() => onNavigate('service-detail', svc.id)} 
                    className="hover:text-[#d9a74a] transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Averon */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-800 text-[#d9a74a]">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="space-y-1">
                <a href="tel:+919833464629" className="flex items-center space-x-2 hover:text-[#d9a74a] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#d9a74a]" />
                  <span>+91 98334 64629</span>
                </a>
                <a href="tel:+919833464627" className="flex items-center space-x-2 hover:text-[#d9a74a] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#d9a74a]" />
                  <span>+91 9833464627</span>
                </a>
              </div>

              <div className="space-y-1 pt-1 border-t border-slate-800">
                <a href="mailto:info@averonfs.com" className="flex items-center space-x-2 hover:text-[#d9a74a] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#d9a74a]" />
                  <span>info@averonfs.com</span>
                </a>
                <a href="mailto:sales@averonfs.com" className="flex items-center space-x-2 hover:text-[#d9a74a] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#d9a74a]" />
                  <span>sales@averonfs.com</span>
                </a>
              </div>

              <div className="pt-1 border-t border-slate-800">
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[#d9a74a] transition-colors">
                  <Globe className="w-3.5 h-3.5 text-[#d9a74a]" />
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </div>

              <div className="pt-2">
                <a 
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 bg-slate-800/80 hover:bg-[#d9a74a] hover:text-slate-900 rounded transition-colors text-slate-300"
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
      <div className="bg-[#040e1d] py-4 border-t border-slate-800/80 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            © 2026 Averon Freight Solutions LLP. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <button onClick={() => alert("Privacy Policy: Averon Freight Solutions protects client trade data in accordance with international logistics standards.")} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => alert("Terms & Conditions: Freight forwarding and logistics services governed by standard FIATA and Indian custom house regulations.")} className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
