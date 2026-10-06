import React from 'react';
import { Shield, Clock, FileText, Headphones, RotateCw, Eye, Target } from 'lucide-react';
import { CORE_VALUES } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#c89332]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#c89332]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#c89332]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#c89332]" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-[#c89332]" />;
      default: return <Shield className="w-5 h-5 text-[#c89332]" />;
    }
  };

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* PAGE HERO HEADER */}
      <section className="relative bg-[#071627] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600" 
            alt="Container port header" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center space-x-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-[#d9a74a] font-bold">About Us</span>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a] block mb-2">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-serif">
            About Averon <br /> Freight Solutions
          </h1>

          <p className="text-sm text-slate-300 font-medium mt-3">
            Your Gateway to Global Trade
          </p>
        </div>
      </section>

      {/* MOVING GLOBAL TRADE WITH COORDINATED SUPPORT */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                ABOUT AVERON FREIGHT SOLUTIONS
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif leading-tight">
                Moving Global Trade <br /> with Coordinated Support.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Averon Freight Solutions LLP is a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals with 12+ years of combined industry experience.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We are dedicated to facilitating seamless global trade through reliable, efficient and customized logistics solutions.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We help importers, exporters, manufacturers and traders move cargo across international markets with confidence, transparency and operational excellence.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From shipment planning and documentation to customs coordination, transportation and final delivery, our team provides coordinated support throughout the shipment journey.
              </p>
            </div>

            {/* Right Image Container with Experience Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900" 
                  alt="Averon Experience" 
                  className="w-full h-80 sm:h-96 object-cover"
                />

                <div className="absolute bottom-0 left-0 bg-[#0b1f3a] text-white p-6 shadow-2xl border-t-4 border-[#d9a74a] max-w-[260px]">
                  <div className="text-3xl font-black text-[#d9a74a]">12+</div>
                  <div className="text-[11px] font-extrabold tracking-wider uppercase text-slate-200 mt-1">
                    YEARS OF COMBINED INDUSTRY EXPERIENCE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR FOUNDATION: VISION & MISSION */}
      <section className="py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold">
              OUR FOUNDATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Vision */}
            <div className="pt-6 md:pt-0 md:pr-8 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#d9a74a] bg-[#0b223d] flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-[#d9a74a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Our <span className="text-[#d9a74a]">Vision</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To become a trusted global logistics partner by delivering seamless, innovative and sustainable freight solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="pt-6 md:pt-0 md:pl-8 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full border border-[#d9a74a] bg-[#0b223d] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#d9a74a]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Our <span className="text-[#d9a74a]">Mission</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To simplify international trade by providing reliable logistics services that help businesses grow confidently across global markets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block mb-1">
                OUR VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
                Our Core Values
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              These principles shape how Averon approaches client relationships, shipment coordination and day-to-day logistics support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded space-y-3 hover:bg-slate-100/80 transition-all">
                <div className="w-10 h-10 rounded-full border border-[#d9a74a] bg-white flex items-center justify-center">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-xs font-extrabold text-[#0b1f3a]">{val.title}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="relative py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              LET'S MOVE YOUR CARGO FORWARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Discuss Your Logistics Requirements
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
