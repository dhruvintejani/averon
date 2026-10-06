import React, { useState } from 'react';
import { X, CheckCircle, Calculator } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullContact?: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, onNavigateToFullContact }) => {
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
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-[#0b1f3a] text-white p-5 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#d9a74a] rounded text-slate-950 font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Request Freight Rate Quote</h3>
              <p className="text-xs text-slate-300">Averon Freight Solutions Rapid Quotation Desk</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received Successfully!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName || 'Valued Client'}</strong>. Our specialized freight coordinators are analyzing your route from <strong className="text-slate-900">{formData.origin || 'Origin'}</strong> to <strong className="text-slate-900">{formData.destination || 'Destination'}</strong>.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-medium">
                Reference ID: <span className="font-mono font-bold text-[#0b1f3a]">RFQ-2026-{(Math.random()*10000).toFixed(0)}</span> • Estimated response within 2 hours.
              </div>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#0b1f3a] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#102a4e]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    FULL NAME *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    COMPANY NAME *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    EMAIL *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="+91 Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    ORIGIN - POL *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Origin / port of loading (e.g. Shanghai)"
                    value={formData.origin}
                    onChange={(e) => setFormData({...formData, origin: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    DESTINATION - POD *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Destination / port of discharge (e.g. Nhava Sheva)"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    MODE
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({...formData, mode: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                  >
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Road Freight">Road Freight</option>
                    <option value="Customs Clearance Only">Customs Clearance Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    SHIPMENT TYPE
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                  >
                    <option value="FCL">FCL Container</option>
                    <option value="LCL">LCL Cargo</option>
                    <option value="Air Cargo">Air Cargo</option>
                    <option value="Project Cargo">Project / Breakbulk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    INCOTERM
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({...formData, incoterm: e.target.value})}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] bg-white"
                  >
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost Insurance Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                    <option value="DAP">DAP (Delivered at Place)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                  CARGO DETAILS & MESSAGE
                </label>
                <textarea
                  rows={3}
                  placeholder="Commodity, weight (kg), volume (CBM), dimensions or additional requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#d9a74a] hover:bg-[#c89332] text-slate-950 font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
                >
                  <span>REQUEST A QUOTE →</span>
                </button>

                {onNavigateToFullContact && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateToFullContact();
                    }}
                    className="text-xs text-[#0b1f3a] font-bold hover:underline"
                  >
                    Open Full Contact Page
                  </button>
                )}
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
