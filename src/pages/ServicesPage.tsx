import React from 'react';
import { CheckCircle2, ShieldCheck, Anchor, Plane, Truck, Box, Warehouse, Layers } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/companyData';

interface ServicesPageProps {
  selectedServiceId?: string;
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceId = 'ocean-freight',
  onNavigate,
  onOpenQuoteModal
}) => {
  const activeService: ServiceItem = SERVICES_LIST.find(s => s.id === selectedServiceId) || SERVICES_LIST[0];

  const getHeaderIcon = (id: string) => {
    switch (id) {
      case 'ocean-freight': return <Anchor className="w-5 h-5 text-[#d9a74a]" />;
      case 'air-freight': return <Plane className="w-5 h-5 text-[#d9a74a]" />;
      case 'customs-clearance': return <ShieldCheck className="w-5 h-5 text-[#d9a74a]" />;
      case 'road-inland-transport': return <Truck className="w-5 h-5 text-[#d9a74a]" />;
      case 'warehousing-distribution': return <Warehouse className="w-5 h-5 text-[#d9a74a]" />;
      case 'project-cargo': return <Box className="w-5 h-5 text-[#d9a74a]" />;
      case 'supply-chain-management': return <Layers className="w-5 h-5 text-[#d9a74a]" />;
      default: return <Box className="w-5 h-5 text-[#d9a74a]" />;
    }
  };

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* SERVICE HERO */}
      <section className="relative bg-[#071627] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={activeService.heroImage} 
            alt={activeService.title} 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center space-x-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('services')}>Services</span>
            <span>/</span>
            <span className="text-[#d9a74a] font-bold">{activeService.title}</span>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a] block mb-2">
            {activeService.title.toUpperCase()}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif max-w-3xl leading-tight">
            {activeService.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mt-3 leading-relaxed">
            {activeService.fullDesc}
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-2"
            >
              <span>GET A QUOTE →</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-slate-400 hover:border-white text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW + SIDE IMAGE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src={activeService.heroImage} 
                  alt={activeService.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#0b1f3a] text-white px-5 py-3 border-t-2 border-[#d9a74a] flex items-center space-x-2">
                  {getHeaderIcon(activeService.id)}
                  <span className="text-xs font-bold uppercase tracking-wider">{activeService.title}</span>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                GLOBAL {activeService.title.toUpperCase()}
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f3a] font-serif leading-tight">
                Reliable {activeService.title} for Time-Critical & Standard Shipments.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {activeService.solutions.slice(0, 2).map((sol, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-200 rounded space-y-1">
                    <div className="w-7 h-7 bg-amber-50 rounded-full border border-amber-200 flex items-center justify-center text-[#c89332] mb-2">
                      {getHeaderIcon(activeService.id)}
                    </div>
                    <h4 className="text-xs font-bold text-[#0b1f3a]">{sol.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* COMPREHENSIVE SUPPORT GRID */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block mb-1">
                OUR SOLUTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0b1f3a] font-serif">
                Comprehensive {activeService.title} Support
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Logistics solutions structured around your shipment requirements, trade routes, documentation and end-to-end coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeService.features.map((feat, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded hover:border-[#0b1f3a] transition-all space-y-2">
                <div className="w-8 h-8 rounded-full border border-[#d9a74a] bg-amber-50 flex items-center justify-center text-[#c89332]">
                  {getHeaderIcon(activeService.id)}
                </div>
                <h3 className="text-xs font-bold text-[#0b1f3a]">{feat}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AVERON APPROACH SECTION */}
      <section className="py-20 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              AVERON APPROACH
            </span>
            <h2 className="text-3xl font-black text-white font-serif">
              Coordinated for Speed, Security and Reliable Delivery.
            </h2>
            <p className="text-xs text-slate-300">
              From critical deliveries to routine shipments, we coordinate solutions around the required transit time, routing and cargo needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeService.approach.map((app, idx) => (
              <div key={idx} className="p-5 bg-[#061426] border border-slate-800 rounded space-y-2">
                <div className="flex items-center space-x-2 text-[#d9a74a]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{app.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES SWITCHER BAR */}
      <section className="py-12 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 block mb-4">
            EXPLORE OTHER LOGISTICS SERVICES
          </span>
          <div className="flex flex-wrap gap-2">
            {SERVICES_LIST.map((svc) => (
              <button
                key={svc.id}
                onClick={() => onNavigate('service-detail', svc.id)}
                className={`px-4 py-2 rounded text-xs font-bold transition-all border ${
                  svc.id === activeService.id
                    ? 'bg-[#0b1f3a] text-[#d9a74a] border-[#0b1f3a]'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border-slate-300'
                }`}
              >
                {svc.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA */}
      <section className="relative py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              {activeService.title.toUpperCase()} ENQUIRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Request Your {activeService.title} Solution
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Share your shipment requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              GET A QUOTE →
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-slate-400 hover:border-white text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
