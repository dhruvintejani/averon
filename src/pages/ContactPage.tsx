import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, CheckCircle, MailCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    mode: 'Ocean Freight',
    type: 'FCL',
    incoterm: 'FOB',
    cargoDetails: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* PAGE HERO HEADER */}
      <section className="relative bg-[#071627] text-white py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/39621578/pexels-photo-39621578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600" 
            alt="Contact Container Terminal" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071627] via-[#071627]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center space-x-2">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavigate('home')}>Home</span>
            <span>/</span>
            <span className="text-[#d9a74a] font-bold">Contact Us</span>
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#d9a74a] block mb-2">
            CONTACT AVERON
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Tell Us About Your Shipment
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl mt-3 leading-relaxed">
            Share your shipment requirements with our team and we will work with you on a suitable logistics solution.
          </p>
        </div>
      </section>

      {/* REQUEST A QUOTE & CONTACT FORM SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block mb-1">
                REQUEST A QUOTE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] font-serif">
                Start With Your Shipment Details.
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Provide the information available to you. Our team can use it to understand the route, cargo and service requirement before coordinating the next step.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Form Box */}
            <div className="lg:col-span-7 bg-white p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332] block">
                SHIPMENT ENQUIRY
              </span>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-slate-900">{formData.fullName || 'Valued Partner'}</strong>. Our specialized freight forwarding desk is reviewing your requirements from <strong className="text-slate-900">{formData.origin || 'POL'}</strong> to <strong className="text-slate-900">{formData.destination || 'POD'}</strong>.
                  </p>
                  <p className="text-xs text-emerald-800 font-semibold bg-emerald-100/60 p-2 rounded">
                    We will get back to you at {formData.email} or {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-[#0b1f3a] text-white font-bold text-xs uppercase rounded hover:bg-[#102a4e]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        FULL NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        COMPANY NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Company name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        EMAIL *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="+91 Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        ORIGIN – POL *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Origin / port of loading"
                        value={formData.origin}
                        onChange={(e) => setFormData({...formData, origin: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        DESTINATION – POD *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Destination / port of discharge"
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        SHIPMENT MODE
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({...formData, mode: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                      >
                        <option value="Ocean Freight">Ocean / Air / Road</option>
                        <option value="Ocean Freight">Ocean Freight</option>
                        <option value="Air Freight">Air Freight</option>
                        <option value="Road Freight">Road Freight</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        SHIPMENT TYPE
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                      >
                        <option value="FCL">FCL / LCL / Air Cargo / Other</option>
                        <option value="FCL">Full Container Load (FCL)</option>
                        <option value="LCL">Less Container Load (LCL)</option>
                        <option value="Air Freight">Air Freight</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        INCOTERM
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({...formData, incoterm: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                      >
                        <option value="FOB">EXW / FOB / CIF / DDP / Other</option>
                        <option value="FOB">FOB</option>
                        <option value="CIF">CIF</option>
                        <option value="EXW">EXW</option>
                        <option value="DDP">DDP</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        CARGO DETAILS
                      </label>
                      <input
                        type="text"
                        placeholder="Commodity, packages, weight, volume, dimensions"
                        value={formData.cargoDetails}
                        onChange={(e) => setFormData({...formData, cargoDetails: e.target.value})}
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Additional requirements"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      REQUEST A QUOTE →
                    </button>

                    <a
                      href="tel:+919833464629"
                      className="px-6 py-3 bg-[#0b1f3a] hover:bg-[#102a4e] text-white font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center space-x-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d9a74a]" />
                      <span>CALL OUR TEAM</span>
                    </a>
                  </div>

                </form>
              )}
            </div>

            {/* Right Contact Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Talk to Our Team Navy Box */}
              <div className="bg-[#08182b] text-white p-7 rounded-lg shadow-md space-y-6 border border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d9a74a] block">
                  DIRECT CONTACT
                </span>

                <h3 className="text-2xl font-black text-white font-serif">
                  Talk to Our Team
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  For shipment enquiries, quotations and logistics coordination, contact Averon Freight Solutions directly.
                </p>

                <div className="space-y-4 text-xs pt-2 border-t border-slate-800">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-[#d9a74a] mt-0.5 shrink-0" />
                    <div>
                      <a href="tel:+919833464629" className="block hover:text-[#d9a74a] font-bold">+91 98334 64629</a>
                      <a href="tel:+919833464627" className="block hover:text-[#d9a74a] font-bold">+91 9833464627</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-[#d9a74a] mt-0.5 shrink-0" />
                    <div>
                      <a href="mailto:info@averonfs.com" className="block hover:text-[#d9a74a]">info@averonfs.com</a>
                      <a href="mailto:sales@averonfs.com" className="block hover:text-[#d9a74a]">sales@averonfs.com</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-[#d9a74a] shrink-0" />
                    <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#d9a74a] font-mono">
                      {COMPANY_INFO.website}
                    </a>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={COMPANY_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 bg-slate-800 hover:bg-[#d9a74a] hover:text-slate-900 rounded transition-colors text-slate-200"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Image Location Box */}
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <img 
                  src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800" 
                  alt="Averon Mumbai Office Location" 
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89332] font-bold block">
                    OFFICE
                  </span>
                  <h4 className="text-sm font-bold text-[#0b1f3a]">
                    Averon Freight Solutions LLP
                  </h4>
                  <div className="flex items-start space-x-2 text-xs text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-[#c89332] mt-0.5 shrink-0" />
                    <p className="leading-snug">
                      Office No. 404, 4th Floor, Dev Milan Co-operative Premises Society, Above Woodland Retreat, LBS Marg, Near Tip Top Plaza, Thane West – 400604, Mumbai, Maharashtra, India.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c89332]">
              WHAT HAPPENS NEXT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1f3a] font-serif">
              From Enquiry to the Right Logistics Solution.
            </h2>
            <p className="text-xs text-slate-500">
              A simple, coordinated first step to understand the shipment and move the conversation forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#d9a74a] bg-amber-50 flex items-center justify-center text-[#c89332]">
                <MailCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#c89332] block">01</span>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Share Your Requirement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send the route, cargo and service information available for your shipment.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#d9a74a] bg-amber-50 flex items-center justify-center text-[#c89332]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#c89332] block">02</span>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Requirement Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Averon team reviews the shipment details and coordinates the suitable freight approach.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded space-y-3">
              <div className="w-10 h-10 rounded-full border border-[#d9a74a] bg-amber-50 flex items-center justify-center text-[#c89332]">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-[#c89332] block">03</span>
              <h3 className="text-sm font-extrabold text-[#0b1f3a]">Coordinate the Next Step</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Move forward with quotation, documentation and shipment coordination as required.
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
              Ready to Discuss Your Shipment?
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Share your shipment requirements with Averon Freight Solutions and our team will work with you on a suitable logistics solution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919833464629"
              className="px-6 py-3 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              CALL +91 98334 64629 →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
