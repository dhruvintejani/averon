import React from 'react';
import { TRADE_LANES, KEY_IMPORT_ORIGINS } from '../data/companyData';
import { CheckCircle2 } from 'lucide-react';

interface GlobalReachPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const GlobalReachPage: React.FC<GlobalReachPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* PAGE HERO HEADER */}
      <section className="relative bg-[#071627] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600" 
            alt="Global Shipping Routes" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center space-x-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-[#d9a74a] font-bold">Global Reach</span>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a] block mb-2">
            GLOBAL REACH
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-serif max-w-3xl leading-tight">
            Connecting Businesses Across <br /> International Trade Routes
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mt-3 leading-relaxed">
            Through our global network, we support shipments across major international trade lanes including USA, Canada, Europe, Mediterranean, Middle East, Far East, Africa, Australia, LATAM and ISC.
          </p>
        </div>
      </section>

      {/* INDIA AT THE CENTRE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                WORLDWIDE COORDINATION
              </span>

              <h2 className="text-3xl font-black text-[#0b1f3a] font-serif leading-tight">
                Global Logistics Support <br /> with India at the Centre.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through our global network, Averon Freight Solutions supports cargo movement across major international trade lanes while coordinating each shipment through a single, connected logistics process.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Key import origins include China, Far East, Europe, Dubai, Istanbul and USA.
              </p>
            </div>

            {/* Vessel Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900" 
                  alt="Ocean Freight Global Network" 
                  className="w-full h-80 sm:h-96 object-cover"
                />

                <div className="absolute bottom-4 left-4 bg-[#0b1f3a]/95 text-white p-4 rounded border-l-4 border-[#d9a74a] shadow-xl space-y-1 max-w-xs">
                  <div className="text-xs font-bold text-[#d9a74a] uppercase">Global Network</div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    International trade-lane support through coordinated partner coverage.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ONE COORDINATION POINT - WORLD MAP */}
      <section className="py-20 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block mb-1">
                NETWORK VISUAL
              </span>
              <h2 className="text-3xl font-black text-white font-serif">
                One Coordination Point. Global Connections.
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              India is shown as the central coordination point, with route lines indicating the international regions listed by the client.
            </p>
          </div>

          {/* World Map Graphical Board */}
          <div className="relative bg-[#051120] rounded-xl border border-slate-800 p-6 md:p-10 overflow-hidden shadow-2xl min-h-[380px] flex items-center justify-center">
            
            {/* World Map Dots / Routes Canvas simulation */}
            <svg className="w-full h-80 opacity-50" viewBox="0 0 1000 500" fill="none">
              {/* World outline paths simulation */}
              <circle cx="500" cy="220" r="10" fill="#d9a74a" />
              
              {/* Lines connecting India to global ports */}
              <line x1="500" y1="220" x2="250" y2="150" stroke="#d9a74a" strokeWidth="2" strokeDasharray="5 5" />
              <line x1="500" y1="220" x2="200" y2="280" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />
              <line x1="500" y1="220" x2="420" y2="120" stroke="#d9a74a" strokeWidth="2" strokeDasharray="5 5" />
              <line x1="500" y1="220" x2="680" y2="180" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />
              <line x1="500" y1="220" x2="780" y2="300" stroke="#d9a74a" strokeWidth="2" strokeDasharray="5 5" />
              <line x1="500" y1="220" x2="400" y2="300" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />

              {/* Hub Dots */}
              <circle cx="250" cy="150" r="6" fill="#38bdf8" />
              <circle cx="200" cy="280" r="6" fill="#38bdf8" />
              <circle cx="420" cy="120" r="6" fill="#d9a74a" />
              <circle cx="680" cy="180" r="6" fill="#d9a74a" />
              <circle cx="780" cy="300" r="6" fill="#38bdf8" />
              <circle cx="400" cy="300" r="6" fill="#38bdf8" />
            </svg>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1f3a] text-white px-5 py-2.5 rounded-lg border-2 border-[#d9a74a] shadow-2xl text-center">
              <span className="text-xs font-black text-[#d9a74a] tracking-widest block uppercase">INDIA</span>
              <span className="text-[10px] font-extrabold text-slate-200 uppercase tracking-wider block">COORDINATION POINT</span>
            </div>

            {/* Region labels over map */}
            <div className="absolute top-16 left-12 bg-slate-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-300 border border-slate-700">
              USA & CANADA
            </div>
            <div className="absolute top-10 left-[380px] bg-slate-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-slate-700">
              EUROPE & ISTANBUL
            </div>
            <div className="absolute bottom-20 left-[350px] bg-slate-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-300 border border-slate-700">
              MIDDLE EAST / DUBAI
            </div>
            <div className="absolute top-24 right-20 bg-slate-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-slate-700">
              CHINA & FAR EAST
            </div>
            <div className="absolute bottom-16 right-16 bg-slate-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-300 border border-slate-700">
              AUSTRALIA & PACIFIC
            </div>

          </div>

          <div className="text-center font-mono text-[10px] text-slate-400">
            Partner network coverage across major international trade lanes.
          </div>

        </div>
      </section>

      {/* TRADE LANES & KEY ORIGINS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Major Trade Lanes Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block mb-1">
                  MAJOR TRADE LANES
                </span>
                <h3 className="text-2xl font-black text-[#0b1f3a] font-serif">
                  International Markets We Support
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Averon supports shipments across the regions listed by the client through its global network and coordinated freight-forwarding relationships.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                {TRADE_LANES.map((lane) => (
                  <div key={lane} className="p-3 bg-slate-50 border border-slate-200 rounded flex items-center space-x-2 text-xs font-bold text-[#0b1f3a]">
                    <div className="w-2 h-2 rounded-full bg-[#d9a74a]"></div>
                    <span>{lane}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Import Origins Card */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                KEY IMPORT ORIGINS
              </span>
              <h3 className="text-xl font-bold text-[#0b1f3a]">
                Coordinated Import Movement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Key import origins provided by the client are shown below. Shipment planning and execution are coordinated around the specific route, cargo and logistics requirement.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {KEY_IMPORT_ORIGINS.map((orig) => (
                  <div key={orig.code} className="p-3 bg-white border border-slate-200 rounded flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-[#d9a74a]">{orig.code}</span>
                    <span className="text-xs font-bold text-[#0b1f3a]">{orig.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AVERON APPROACH - SHIPMENT JOURNEY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900" 
                  alt="Cargo Vessel" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Approach Points */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                AVERON APPROACH
              </span>

              <h2 className="text-3xl font-black text-[#0b1f3a] font-serif leading-tight">
                Coordinated Across the Shipment Journey.
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                Averon's role is to keep international cargo movement connected through freight planning, documentation, customs coordination, transportation and destination support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <div className="flex items-center space-x-2 text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#c89332]" />
                    <span className="text-xs font-bold">Partner-Network Coverage</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    International support without implying owned infrastructure in every market.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <div className="flex items-center space-x-2 text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#c89332]" />
                    <span className="text-xs font-bold">One Point of Contact</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Coordinated communication throughout the shipment lifecycle.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <div className="flex items-center space-x-2 text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#c89332]" />
                    <span className="text-xs font-bold">Route-Focused Planning</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Solutions aligned with cargo, route and shipment requirements.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <div className="flex items-center space-x-2 text-[#0b1f3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#c89332]" />
                    <span className="text-xs font-bold">End-to-End Visibility</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Proactive coordination from origin through destination.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              PLAN YOUR NEXT SHIPMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Connect Your Cargo to Global Markets
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
