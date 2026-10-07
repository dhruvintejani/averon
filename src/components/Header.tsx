import React, { useState } from 'react';
import { Phone, Mail, Truck, ArrowRight, Menu, X, ChevronDown, Anchor, Plane, ShieldCheck, Truck as TruckIcon, Warehouse, Box, Layers } from 'lucide-react';
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
  onOpenQuoteModal
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ocean-freight': return <Anchor className="w-4 h-4 text-[#c9a227]" />;
      case 'air-freight': return <Plane className="w-4 h-4 text-[#c9a227]" />;
      case 'customs-clearance': return <ShieldCheck className="w-4 h-4 text-[#c9a227]" />;
      case 'road-inland-transport': return <TruckIcon className="w-4 h-4 text-[#c9a227]" />;
      case 'warehousing-distribution': return <Warehouse className="w-4 h-4 text-[#c9a227]" />;
      case 'project-cargo': return <Box className="w-4 h-4 text-[#c9a227]" />;
      case 'supply-chain-management': return <Layers className="w-4 h-4 text-[#c9a227]" />;
      default: return <Box className="w-4 h-4 text-[#c9a227]" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(7,26,51,0.06)]">
      {/* Top Bar */}
      <div className="bg-[#071a33] text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-[11px] sm:text-xs">
            <a href="tel:+919833464629" className="flex items-center space-x-1.5 hover:text-[#c9a227] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c9a227]" />
              <span>+91 98334 64629</span>
            </a>
            <a href="tel:+919833464627" className="hidden md:flex items-center space-x-1.5 hover:text-[#c9a227] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c9a227]" />
              <span>+91 9833464627</span>
            </a>
            <a href="mailto:info@averonfs.com" className="flex items-center space-x-1.5 hover:text-[#c9a227] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c9a227]" />
              <span>info@averonfs.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <a 
              href={COMPANY_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-[#c9a227] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-[#c9a227]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex justify-between items-center gap-5">
        {/* Brand Logo */}
        <button
          type="button"
          className="flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a227] focus-visible:ring-offset-4"
          onClick={() => onNavigate('home')}
          aria-label="Go to Averon home page"
        >
          <img
            src="/averon-logo.webp"
            alt="Averon Freight Solutions LLP"
            className="h-[48px] w-auto max-w-[205px] object-contain sm:h-[52px] sm:max-w-[225px]"
          />
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-5 2xl:gap-7 text-sm font-semibold text-slate-700">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage === 'home' ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
          >
            Home
          </button>
          
          <button 
            onClick={() => onNavigate('about')}
            className={`hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage === 'about' ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              onClick={() => onNavigate('services')}
              className={`flex items-center space-x-1 hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage.startsWith('service') ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 w-80 bg-white shadow-[0_22px_50px_rgba(7,26,51,0.16)] border border-slate-200 border-t-2 border-t-[#c9a227] py-3 z-50 animate-fadeIn">
                <div className="px-4 pb-2 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Logistics & Transport Solutions
                </div>
                {SERVICES_LIST.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => {
                      onNavigate('service-detail', svc.id);
                      setIsServicesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 flex items-center space-x-3 hover:bg-slate-50 transition-colors text-slate-700 hover:text-[#071a33] group"
                  >
                    <div className="p-1.5 bg-slate-100 rounded group-hover:bg-[#071a33]">
                      {getServiceIcon(svc.id)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{svc.title}</div>
                      <div className="text-[10px] text-slate-500 line-clamp-1">{svc.shortDesc}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => onNavigate('lcl-consolidation')}
            className={`hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage === 'lcl-consolidation' ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
          >
            LCL Consolidation
          </button>

          <button 
            onClick={() => onNavigate('global-reach')}
            className={`hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage === 'global-reach' ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
          >
            Global Reach
          </button>

          <button 
            onClick={() => onNavigate('contact')}
            className={`hover:text-[#071a33] transition-colors py-2 border-b-2 ${currentPage === 'contact' ? 'text-[#071a33] border-[#c9a227]' : 'border-transparent'}`}
          >
            Contact Us
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden xl:flex items-center gap-2">
          <button
            onClick={onOpenTrackModal}
            className="flex items-center space-x-2 px-3.5 py-2 border border-slate-300 rounded text-slate-700 hover:text-[#071a33] hover:border-[#071a33] font-semibold text-xs tracking-wider uppercase transition-colors bg-slate-50"
          >
            <Truck className="w-4 h-4 text-[#071a33]" />
            <span>TRACK SHIPMENT</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="flex items-center space-x-1.5 px-4 py-2 bg-[#c9a227] hover:bg-[#b88924] font-bold text-xs uppercase tracking-wider rounded transition-all shadow-sm text-slate-900"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 rounded text-slate-700 hover:bg-slate-100"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button 
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Home
          </button>
          <button 
            onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            About Us
          </button>
          
          <div className="py-2 border-b border-slate-100">
            <div className="font-semibold text-slate-800 mb-2 flex justify-between items-center">
              <span>Services</span>
            </div>
            <div className="pl-3 space-y-2 border-l-2 border-[#c9a227] my-1">
              {SERVICES_LIST.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => {
                    onNavigate('service-detail', svc.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-xs text-slate-600 font-medium py-1 hover:text-[#071a33]"
                >
                  {svc.title}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => { onNavigate('lcl-consolidation'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            LCL Consolidation
          </button>

          <button 
            onClick={() => { onNavigate('global-reach'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Global Reach
          </button>

          <button 
            onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            className="block w-full text-left font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Contact Us
          </button>

          <div className="pt-3 flex flex-col space-y-2">
            <button
              onClick={() => { onOpenTrackModal(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-slate-300 rounded text-slate-700 font-semibold text-xs tracking-wider uppercase bg-slate-50"
            >
              <Truck className="w-4 h-4 text-[#071a33]" />
              <span>TRACK SHIPMENT</span>
            </button>

            <button
              onClick={() => { onOpenQuoteModal(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-[#c9a227] text-slate-900 font-bold text-xs uppercase tracking-wider rounded"
            >
              <span>GET A QUOTE →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
