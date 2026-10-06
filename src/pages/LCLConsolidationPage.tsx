import React, { useState } from 'react';
import { Box, Ship, Eye, Clock, ShieldCheck, UserCheck, Truck, Globe } from 'lucide-react';

interface LCLConsolidationPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const LCLConsolidationPage: React.FC<LCLConsolidationPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    { num: "01", title: "ORIGIN", detail: "Ex-works pickup, cargo consolidation booking, and export document clearance." },
    { num: "02", title: "CONSOLIDATION", detail: "Cargo receiving at Averon CFS depot, professional palletizing, and container stuffing." },
    { num: "03", title: "MAIN PORT", detail: "Port terminal handling, customs shipping bill pass, and ocean voyage." },
    { num: "04", title: "DESTINATION", detail: "Container unstuffed at destination CFS, customs entry pass, and duty clearance." },
    { num: "05", title: "CONSIGNEE", detail: "Last-mile inland trucking and final door delivery with signed POD." }
  ];

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* PAGE HERO HEADER */}
      <section className="relative bg-[#071627] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/15346128/pexels-photo-15346128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600" 
            alt="LCL Consolidation Port" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center space-x-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-[#d9a74a] font-bold">LCL Consolidation</span>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a] block mb-2">
            LCL CONSOLIDATION
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-serif">
            LCL Consolidation
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mt-3 leading-relaxed">
            Averon Freight Solutions specializes in LCL consolidation for import and export shipments across major international trade routes. We coordinate cargo movement from origin through consolidation, main-port movement, destination handling and final delivery, helping shippers move smaller consignments with organized end-to-end support.
          </p>

          <div className="pt-6">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              DISCUSS YOUR LCL SHIPMENT →
            </button>
          </div>
        </div>
      </section>

      {/* FLEXIBLE COORDINATION FOR SMALLER SHIPMENTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                LCL CONSOLIDATION
              </span>

              <h2 className="text-3xl font-black text-[#0b1f3a] font-serif leading-tight">
                Flexible Coordination <br /> for Smaller Shipments
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LCL consolidation helps businesses move smaller consignments efficiently across international trade routes while maintaining reliable coordination and shipment visibility.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Averon supports import and export LCL movements with coordinated origin handling, consolidation, main-port movement, destination handling and final delivery.
              </p>
            </div>

            {/* Container Stacking Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/30115463/pexels-photo-30115463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900" 
                  alt="LCL Containers" 
                  className="w-full h-80 sm:h-96 object-cover"
                />

                <div className="absolute bottom-4 left-4 bg-[#0b1f3a]/95 text-white p-4 rounded border-l-4 border-[#d9a74a] shadow-xl space-y-1">
                  <div className="flex items-center space-x-2 text-[#d9a74a]">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Import & Export</span>
                  </div>
                  <div className="text-xs font-bold">LCL Coordination</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT ACROSS THE SHIPMENT JOURNEY */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              OUR LCL SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] font-serif">
              Coordinated Support Across the Shipment Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Import and export LCL coordination.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Full logistics management for both inbound and outbound consolidated shipments.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Origin cargo pickup and consolidation support.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Door-to-CFS collection and expert cargo packing for ocean voyage.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Main-port and destination coordination.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Direct vessel booking with trusted container ocean liners.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Documentation and customs coordination.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                HBL/MBL issuance, shipping bill generation and customs clearance.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Inland transportation and delivery support.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                De-consolidation depot dispatch and rapid last-mile trucking.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#c89332]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Proactive shipment updates & communication.</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Real-time tracking of milestones from stuffing to final delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONSOLIDATION FLOW */}
      <section className="py-20 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block mb-1">
              CONSOLIDATION FLOW
            </span>
            <h2 className="text-3xl font-black text-white font-serif">
              Consolidation Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-4 relative">
            {flowSteps.map((step, idx) => (
              <div 
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activeStep === idx
                    ? 'bg-[#0d2847] border-[#d9a74a] shadow-lg'
                    : 'bg-[#061426] border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#d9a74a] flex items-center justify-center text-[#d9a74a] font-bold text-xs mb-3">
                  {step.num}
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center font-mono text-[11px] text-slate-400 uppercase tracking-widest border-t border-slate-800 pt-6">
            ONE COORDINATED MOVEMENT — FROM THE SHIPPER'S DOOR TO THE CONSIGNEE'S DOOR.
          </div>

        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE AVERON FOR LCL */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              WHY BUSINESSES CHOOSE AVERON FOR LCL
            </span>
            <h2 className="text-3xl font-black text-[#0b1f3a] font-serif">
              Why Businesses Choose Averon for LCL
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#d9a74a] flex items-center justify-center mx-auto text-[#c89332]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">End-to-End Visibility</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Proactive coordination from origin to destination.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#d9a74a] flex items-center justify-center mx-auto text-[#c89332]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Personalized Service</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Logistics solutions tailored to shipment requirements.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#d9a74a] flex items-center justify-center mx-auto text-[#c89332]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Fast Response Times</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Quick coordination for quotations, bookings and updates.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#d9a74a] flex items-center justify-center mx-auto text-[#c89332]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-[#0b1f3a]">Compliance Support</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Professional support for documentation and customs requirements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              LET'S MOVE YOUR CARGO FORWARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Discuss Your LCL Shipment
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
