import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Anchor, Plane, ShieldCheck, Truck, Layers, Globe, Shield, Clock, FileText, Headphones } from 'lucide-react';
import { ADVANTAGES_LIST, WORK_STEPS } from '../data/companyData';

interface HomePageProps {
  onNavigate: (page: string, serviceId?: string) => void;
  onOpenTrackModal: () => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const [heroSlide, setHeroSlide] = useState(0);
  const [activeLclStep, setActiveLclStep] = useState(0);

  const heroSlides = [
    {
      subtitle: "INTERNATIONAL FREIGHT FORWARDING • CUSTOMS SOLUTIONS • GLOBAL LOGISTICS",
      title: "Your Gateway to Global Trade",
      description: "Reliable Freight Forwarding & End-to-End Logistics Solutions. Ocean, air, customs and inland logistics solutions coordinated from origin to destination.",
      bgImage: "https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
    },
    {
      subtitle: "AIR FREIGHT • EXPRESS & CHARTER LOGISTICS",
      title: "Fast, Reliable Air Freight Solutions",
      description: "When time is critical, Averon Freight Solutions provides fast, secure and dependable air freight solutions for time-sensitive international shipments.",
      bgImage: "https://images.pexels.com/photos/32037883/pexels-photo-32037883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
    },
    {
      subtitle: "CUSTOMS CLEARANCE • COMPLIANCE • DUTY ADVISORY",
      title: "Smooth Customs. Efficient Cargo Movement.",
      description: "Proactive documentation, customs coordination and tariff compliance to eliminate border delays.",
      bgImage: "https://images.pexels.com/photos/12234106/pexels-photo-12234106.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
    },
    {
      subtitle: "ROAD & INLAND TRANSPORT • FTL & LTL",
      title: "Reliable Inland Transportation Solutions",
      description: "Connecting major sea ports, airports and inland container depots to final delivery destinations.",
      bgImage: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
    }
  ];

  const currentSlide = heroSlides[heroSlide];

  const lclSteps = [
    { num: "1", title: "ORIGIN", desc: "Cargo pickup from factory and initial documentation at exporter door." },
    { num: "2", title: "CONSOLIDATION", desc: "Goods gathered at Averon CFS depot and safely stuffed into shared container." },
    { num: "3", title: "MAIN PORT", desc: "Vessel loading, customs shipping bill filing and ocean transit to destination port." },
    { num: "4", title: "DESTINATION", desc: "Container de-consolidation, destination customs clearance, and duty assessment." },
    { num: "5", title: "CONSIGNEE", desc: "Final door delivery to importer facility with signed proof of delivery." }
  ];

  return (
    <div className="bg-white font-sans text-slate-800">

      {/* HERO SECTION */}
      <section className="relative bg-[#071627] text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentSlide.bgImage} 
            alt="Hero background" 
            className="w-full h-full object-cover object-center opacity-30 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 w-full my-auto">
          <div className="max-w-2xl space-y-6">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#d9a74a] uppercase font-bold border-l-2 border-[#d9a74a] pl-3 py-0.5">
              <span>{currentSlide.subtitle}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-serif">
              {currentSlide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              {currentSlide.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg flex items-center space-x-2"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 border border-slate-400 hover:border-white text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-2 bg-slate-900/40 backdrop-blur-xs"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 flex items-center space-x-4 text-xs text-slate-400 font-mono">
              <span className="text-white font-bold text-sm">0{heroSlide + 1}</span>
              <span className="text-slate-600">/ 04</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="p-1.5 border border-slate-700 hover:border-[#d9a74a] hover:text-[#d9a74a] rounded text-slate-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                  className="p-1.5 border border-slate-700 hover:border-[#d9a74a] hover:text-[#d9a74a] rounded text-slate-300 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Hero Quick Strip (4 Service Tiles) */}
        <div className="relative z-10 bg-[#091e36]/90 backdrop-blur-md border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-slate-200">
            
            <div 
              onClick={() => onNavigate('service-detail', 'ocean-freight')}
              className="p-4 hover:bg-[#0e2744] transition-colors cursor-pointer flex items-start space-x-3 group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-[#d9a74a] group-hover:text-slate-950 transition-colors text-[#d9a74a]">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono font-bold block">01 / INTERNATIONAL</span>
                <h4 className="text-xs font-bold text-white group-hover:text-[#d9a74a] transition-colors">Ocean Freight</h4>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('service-detail', 'air-freight')}
              className="p-4 hover:bg-[#0e2744] transition-colors cursor-pointer flex items-start space-x-3 group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-[#d9a74a] group-hover:text-slate-950 transition-colors text-[#d9a74a]">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono font-bold block">02 / EXPRESS</span>
                <h4 className="text-xs font-bold text-white group-hover:text-[#d9a74a] transition-colors">Air Freight</h4>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('service-detail', 'customs-clearance')}
              className="p-4 hover:bg-[#0e2744] transition-colors cursor-pointer flex items-start space-x-3 group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-[#d9a74a] group-hover:text-slate-950 transition-colors text-[#d9a74a]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono font-bold block">03 / COMPLIANCE</span>
                <h4 className="text-xs font-bold text-white group-hover:text-[#d9a74a] transition-colors">Customs Clearance</h4>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('service-detail', 'road-inland-transport')}
              className="p-4 hover:bg-[#0e2744] transition-colors cursor-pointer flex items-start space-x-3 group"
            >
              <div className="p-2 bg-slate-800 rounded group-hover:bg-[#d9a74a] group-hover:text-slate-950 transition-colors text-[#d9a74a]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-mono font-bold block">04 / DISTRIBUTION</span>
                <h4 className="text-xs font-bold text-white group-hover:text-[#d9a74a] transition-colors">Road Transport</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT AVERON FREIGHT SOLUTIONS SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block">
                ABOUT AVERON FREIGHT SOLUTIONS
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
                Connecting Businesses to <br />
                <span className="gold-gradient-text">Global Markets.</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Averon Freight Solutions LLP is a Mumbai-based freight forwarding and international logistics company led by experienced logistics professionals with 12+ years of combined industry experience.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                We help importers, exporters, manufacturers and traders move cargo across international markets with confidence, transparency and operational excellence.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                From shipment planning and documentation to customs coordination, transportation and final delivery, we provide seamless support throughout the shipment journey.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#0b1f3a] hover:text-[#c89332] uppercase tracking-wider group transition-colors"
                >
                  <span>LEARN MORE ABOUT AVERON</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Grid with Experience Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900" 
                  alt="Averon Logistics Operations" 
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* 12+ Years Badge Card */}
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

      {/* WHAT WE DELIVER SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
              Your cargo. Our commitment.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 transition-all space-y-3 group">
              <div className="w-10 h-10 bg-[#0b1f3a] rounded flex items-center justify-center text-[#d9a74a]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Global Freight Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting cargo across major international trade routes with speed and reliability.
              </p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 transition-all space-y-3 group">
              <div className="w-10 h-10 bg-[#0b1f3a] rounded flex items-center justify-center text-[#d9a74a]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">End-to-End Logistics Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From origin coordination to final destination delivery without gaps.
              </p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 transition-all space-y-3 group">
              <div className="w-10 h-10 bg-[#0b1f3a] rounded flex items-center justify-center text-[#d9a74a]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Customs & Trade Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Documentation and customs coordination for smoother, compliant cargo movement.
              </p>
            </div>

            <div className="p-6 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 transition-all space-y-3 group">
              <div className="w-10 h-10 bg-[#0b1f3a] rounded flex items-center justify-center text-[#d9a74a]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Supply Chain Efficiency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated transportation and logistics coordination tailored to your business model.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-left max-w-2xl mb-12 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
              Built to move your cargo forward.
            </h2>
            <p className="text-xs text-slate-600">
              A single point of coordination for the entire movement of your cargo — from the first mile at origin to final delivery.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 01 */}
            <div 
              onClick={() => onNavigate('service-detail', 'ocean-freight')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">01</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Ocean Freight — FCL & LCL
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full Container Load and Less than Container Load services across major global trade routes.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div 
              onClick={() => onNavigate('service-detail', 'air-freight')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">02</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Air Freight
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Time-sensitive, high-value cargo moved via airline capacity for urgent and standard shipments.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div 
              onClick={() => onNavigate('service-detail', 'customs-clearance')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">03</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Customs Clearance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Documentation review, tariff classification and customs guidance to prevent delays at the border.
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div 
              onClick={() => onNavigate('service-detail', 'road-inland-transport')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">04</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Road & Inland Transport
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reliable haulage connecting ports, airports and warehouses to final delivery points.
                </p>
              </div>
            </div>

            {/* Card 05 */}
            <div 
              onClick={() => onNavigate('service-detail', 'warehousing-distribution')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">05</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Warehousing & Distribution
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible storage, consolidation and onward distribution between shipping legs.
                </p>
              </div>
            </div>

            {/* Card 06 */}
            <div 
              onClick={() => onNavigate('service-detail', 'project-cargo')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">06</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Project Cargo & Breakbulk
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized handling for oversized, heavy-lift and non-containerized shipments.
                </p>
              </div>
            </div>

            {/* Card 07 */}
            <div 
              onClick={() => onNavigate('service-detail', 'supply-chain-management')}
              className="bg-white p-6 rounded border border-slate-200 hover:shadow-md hover:border-[#0b1f3a] transition-all cursor-pointer flex flex-col justify-between h-56 group sm:col-span-2 lg:col-span-2"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-2">07</span>
                <h3 className="text-sm font-extrabold text-[#0b1f3a] group-hover:text-[#c89332] transition-colors mb-2">
                  Supply Chain Management
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coordinated planning across modes, vendors and carriers with one forwarding partner.
                </p>
              </div>
              <div className="pt-4 text-right">
                <span className="text-xs font-bold text-[#0b1f3a] group-hover:text-[#c89332] uppercase tracking-wider inline-flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-2.5 bg-[#0b1f3a] hover:bg-[#102a4e] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors inline-flex items-center space-x-2"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* LCL CONSOLIDATION SPECIALIZATION SECTION */}
      <section className="py-20 bg-[#0c2340] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a]">
                OUR SPECIALIZATION
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-serif">
                LCL Consolidation
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                We provide flexible LCL consolidation solutions across major international trade routes, helping shippers optimize cargo movement while maintaining reliable coordination and shipment visibility.
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                Our LCL services support import and export shipments with coordinated origin handling, consolidation, main-port movement, destination handling and final delivery.
              </p>

              <button
                onClick={() => onNavigate('lcl-consolidation')}
                className="px-5 py-2.5 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors"
              >
                EXPLORE LCL SOLUTIONS
              </button>
            </div>

            {/* Right Process Diagram Box */}
            <div className="lg:col-span-7 bg-[#071728] p-8 rounded-lg border border-slate-700/80 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block">
                HOW LCL CONSOLIDATION WORKS
              </span>

              {/* 5 Connected Circle Steps */}
              <div className="grid grid-cols-5 gap-2 text-center relative py-4">
                {lclSteps.map((step, idx) => (
                  <div 
                    key={step.num}
                    onClick={() => setActiveLclStep(idx)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-extrabold transition-all ${
                      activeLclStep === idx
                        ? 'border-[#d9a74a] bg-[#d9a74a] text-slate-950 scale-110 shadow-lg'
                        : 'border-slate-600 bg-slate-800 text-white group-hover:border-slate-400'
                    }`}>
                      {step.num}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider text-slate-300 mt-2 block">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Detail Card */}
              <div className="p-4 bg-slate-900/90 rounded border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-[#d9a74a] uppercase tracking-wider">
                  STEP 0{activeLclStep + 1}: {lclSteps[activeLclStep].title}
                </div>
                <p className="text-xs text-slate-300">
                  {lclSteps[activeLclStep].desc}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 font-mono text-center tracking-wider uppercase border-t border-slate-800">
                ONE COORDINATED MOVEMENT — Origin • Consolidation • Main Port • Destination • Consignee
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GLOBAL REACH SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
                GLOBAL REACH
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
                Connecting Businesses Across International Trade Routes.
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                With a strong global network, we support shipments across major international trade lanes including USA, Canada, Europe, Mediterranean, Middle East, Far East, Africa, Australia, LATAM and ISC.
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                Key import origins include China, Far East, Europe, Dubai, Istanbul and USA with central coordination managed from India.
              </p>

              <button
                onClick={() => onNavigate('global-reach')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#0b1f3a] hover:text-[#c89332] uppercase tracking-wider group"
              >
                <span>TALK TO OUR LOGISTICS TEAM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Dark Map Visual Card */}
            <div className="lg:col-span-7 bg-[#08182b] p-6 rounded-lg border border-slate-800 text-white relative overflow-hidden">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                INTERNATIONAL TRADE NETWORK
              </div>

              {/* Graphic Map Representation */}
              <div className="relative h-64 bg-[#051120] rounded border border-slate-800 flex items-center justify-center p-4">
                <svg className="w-full h-full opacity-40" viewBox="0 0 800 400" fill="none">
                  <path d="M150,120 Q300,50 450,180 T700,120" stroke="#d9a74a" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <path d="M200,280 Q400,200 450,180 T650,280" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4"/>
                  <path d="M450,180 L100,200 M450,180 L600,100" stroke="#60a5fa" strokeWidth="1"/>
                  <circle cx="450" cy="180" r="8" fill="#d9a74a" />
                  <circle cx="150" cy="120" r="5" fill="#38bdf8" />
                  <circle cx="700" cy="120" r="5" fill="#38bdf8" />
                  <circle cx="200" cy="280" r="5" fill="#38bdf8" />
                  <circle cx="650" cy="280" r="5" fill="#38bdf8" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b1f3a] text-white px-3 py-1.5 rounded border border-[#d9a74a] shadow-xl text-center">
                  <span className="text-[10px] font-extrabold text-[#d9a74a] uppercase tracking-wider block">INDIA</span>
                  <span className="text-[9px] font-semibold text-slate-300">COORDINATION POINT</span>
                </div>
              </div>

              <div className="mt-3 text-[10px] text-slate-400 font-mono text-center">
                ILLUSTRATIVE PARTNER-NETWORK ROUTES
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE AVERON / OUR ADVANTAGE GRID */}
      <section className="py-20 bg-[#0a1b33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a]">
              WHY CHOOSE AVERON
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-serif">
              Our Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES_LIST.map((adv) => (
              <div key={adv.id} className="p-5 bg-[#061426] border border-slate-800 rounded hover:border-[#d9a74a] transition-colors space-y-2">
                <span className="text-xs font-mono font-bold text-[#d9a74a] block">{adv.id}</span>
                <h3 className="text-sm font-extrabold text-white">{adv.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE WORK (01 TO 08) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
              From Enquiry to Final Delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_STEPS.map((ws) => (
              <div key={ws.step} className="p-5 bg-slate-50 border border-slate-200 rounded space-y-2">
                <span className="text-2xl font-black text-[#d9a74a] font-serif block">{ws.step}</span>
                <h3 className="text-xs font-extrabold text-[#0b1f3a]">{ws.title}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center font-mono text-[11px] text-slate-500 uppercase tracking-widest">
            ONE POINT OF CONTACT THROUGHOUT THE SHIPMENT LIFECYCLE.
          </div>

        </div>
      </section>

      {/* COMMITMENT TO EXCELLENCE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
              Commitment to Excellence
            </h2>
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              At Averon Freight Solutions, we understand that logistics is more than moving cargo — it is about delivering trust, reliability and business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d9a74a] flex items-center justify-center mx-auto text-[#0b1f3a]">
                <Shield className="w-6 h-6 text-[#c89332]" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0b1f3a]">Cargo Safety</h3>
            </div>

            <div className="p-6 bg-white rounded border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d9a74a] flex items-center justify-center mx-auto text-[#0b1f3a]">
                <Clock className="w-6 h-6 text-[#c89332]" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0b1f3a]">Cost Efficiency</h3>
            </div>

            <div className="p-6 bg-white rounded border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d9a74a] flex items-center justify-center mx-auto text-[#0b1f3a]">
                <FileText className="w-6 h-6 text-[#c89332]" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0b1f3a]">Transparent Communication</h3>
            </div>

            <div className="p-6 bg-white rounded border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d9a74a] flex items-center justify-center mx-auto text-[#0b1f3a]">
                <Headphones className="w-6 h-6 text-[#c89332]" />
              </div>
              <h3 className="text-xs font-extrabold text-[#0b1f3a]">Continuous Customer Support</h3>
            </div>

          </div>

        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] tracking-tight font-serif">
              Supporting Businesses Across Global Trade.
            </h2>
            <p className="text-xs text-slate-600">
              Our logistics solutions support importers, exporters, manufacturers and traders moving cargo across international markets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["Importers", "Exporters", "Manufacturers", "Traders"].map((item) => (
              <div key={item} className="p-4 bg-slate-50 border border-slate-200 rounded-full text-center flex items-center justify-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d9a74a]"></div>
                <span className="text-xs font-extrabold text-[#0b1f3a]">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* READY TO MOVE YOUR CARGO FORWARD - CTA BANNER */}
      <section className="relative py-16 bg-[#08182b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9a74a] font-bold block">
              READY TO MOVE FORWARD?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Let's Move Your Cargo Forward
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
