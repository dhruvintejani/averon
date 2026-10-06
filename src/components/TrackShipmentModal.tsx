import React, { useState } from 'react';
import { X, Search, Truck, CheckCircle2, Clock, MapPin, Ship, Plane, ShieldCheck } from 'lucide-react';
import { SAMPLE_TRACKING_DATA, TrackingStatus } from '../data/companyData';

interface TrackShipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackShipmentModal: React.FC<TrackShipmentModalProps> = ({ isOpen, onClose }) => {
  const [searchCode, setSearchCode] = useState('');
  const [activeShipment, setActiveShipment] = useState<TrackingStatus | null>(SAMPLE_TRACKING_DATA[0]);
  const [notFound, setNotFound] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;

    const found = SAMPLE_TRACKING_DATA.find(
      s => s.trackingNumber.toLowerCase() === searchCode.trim().toLowerCase() ||
           s.containerId.toLowerCase().includes(searchCode.trim().toLowerCase())
    );

    if (found) {
      setActiveShipment(found);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  const selectSample = (sample: TrackingStatus) => {
    setActiveShipment(sample);
    setSearchCode(sample.trackingNumber);
    setNotFound(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-[#0b1f3a] text-white p-5 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#d9a74a] rounded text-slate-950 font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Shipment Tracking</h3>
              <p className="text-xs text-slate-300">Averon Real-Time Cargo Operations Tracking</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search bar & Sample pills */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Enter Tracking No. (e.g. AFS-2026-8849, AWB 020-9481720)..."
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-[#0b1f3a] hover:bg-[#102a4e] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-1"
              >
                <span>SEARCH</span>
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Sample Active Shipments:</span>
              {SAMPLE_TRACKING_DATA.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => selectSample(sample)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors border ${
                    activeShipment?.id === sample.id
                      ? 'bg-[#0b1f3a] text-[#d9a74a] border-[#0b1f3a]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                  }`}
                >
                  {sample.trackingNumber} ({sample.mode})
                </button>
              ))}
            </div>

            {notFound && (
              <div className="text-xs text-rose-600 font-semibold p-2 bg-rose-50 border border-rose-200 rounded">
                No matching shipment found for "{searchCode}". Try clicking one of the sample tracking codes above.
              </div>
            )}
          </div>

          {/* Active Shipment Display */}
          {activeShipment && (
            <div className="space-y-6">
              
              {/* Summary Card */}
              <div className="bg-[#0b1f3a] text-white rounded-lg p-5 shadow-sm space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d9a74a] font-bold block">
                      TRACKING ID: {activeShipment.trackingNumber}
                    </span>
                    <h4 className="text-xl font-extrabold text-white mt-0.5">
                      {activeShipment.type}
                    </h4>
                    <p className="text-xs text-slate-300 flex items-center space-x-2 mt-1">
                      {activeShipment.mode === 'Air Freight' ? <Plane className="w-3.5 h-3.5 text-[#d9a74a]" /> : <Ship className="w-3.5 h-3.5 text-[#d9a74a]" />}
                      <span>Vessel/Flight: <strong className="text-white">{activeShipment.vesselFlight}</strong></span>
                      <span>• Container/AWB: <strong className="text-[#d9a74a]">{activeShipment.containerId}</strong></span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                      activeShipment.status === 'In Transit' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      activeShipment.status === 'Customs Cleared' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      ● {activeShipment.status}
                    </span>
                    <div className="text-[11px] text-slate-300 mt-1">
                      ESTIMATED ARRIVAL: <strong className="text-white">{activeShipment.eta}</strong>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{activeShipment.origin}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d9a74a]" />
                      <span>{activeShipment.destination}</span>
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 via-[#d9a74a] to-amber-400 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${activeShipment.progressPercent}%` }}
                    />
                  </div>
                  <div className="text-right text-[10px] text-slate-400 font-mono">
                    Voyage Progress: {activeShipment.progressPercent}% Complete
                  </div>
                </div>
              </div>

              {/* Timeline Steps */}
              <div>
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#0b1f3a]" />
                  <span>Shipment Milestone History</span>
                </h5>

                <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  {activeShipment.timeline.map((item, idx) => (
                    <div key={idx} className="relative flex items-start space-x-4 pl-1 group">
                      {/* Step node dot */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 text-white font-bold text-[10px] ${
                        item.completed 
                          ? 'bg-emerald-600 ring-4 ring-emerald-100' 
                          : item.active 
                          ? 'bg-[#d9a74a] ring-4 ring-amber-100 animate-pulse' 
                          : 'bg-slate-300'
                      }`}>
                        {item.completed ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                      </div>

                      {/* Detail Card */}
                      <div className={`flex-1 p-3.5 rounded-lg border text-xs transition-all ${
                        item.active 
                          ? 'bg-amber-50/60 border-amber-200 shadow-sm' 
                          : item.completed 
                          ? 'bg-white border-slate-200' 
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}>
                        <div className="flex justify-between items-start mb-1">
                          <h6 className={`font-bold ${item.completed || item.active ? 'text-slate-900' : 'text-slate-500'}`}>
                            {item.stage}
                          </h6>
                          <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.date}</span>
                        </div>
                        <div className="text-[11px] font-semibold text-slate-600 mb-1 flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#d9a74a]" />
                          <span>{item.location}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap justify-between items-center text-xs gap-3">
                <div className="flex items-center space-x-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified updates by Averon Operations Control Desk</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 bg-[#0b1f3a] text-white rounded font-bold text-xs hover:bg-[#102a4e]"
                >
                  Close Tracker
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
