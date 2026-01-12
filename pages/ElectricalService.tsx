
import React from 'react';

interface ElectricalServiceProps {
  onBack: () => void;
}

const ElectricalService: React.FC<ElectricalServiceProps> = ({ onBack }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-700 font-semibold text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </button>
      </div>

      <header className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              Cincinnati Electrical Repair & Upgrades
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Safe, code-compliant electrical work by licensed professionals. Serving the entire Greater Cincinnati region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5135550123" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-10 rounded-lg text-xl font-bold shadow-lg transition-all">
                Talk to an Electrician Now
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800" 
              alt="Electrical Service Cincinnati" 
              className="rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">Electrical Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Panel Upgrades</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Replacing outdated fuse boxes or undersized panels to handle modern home power demands safely in older Ohio homes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Troubleshooting</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Finding the source of flickering lights, tripping breakers, or burning smells.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Safety & Code</h4>
              <p className="text-slate-600 text-sm leading-relaxed">GFCI installation, smoke detector wiring, and full-house safety inspections.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Electrical Emergency?</h2>
          <p className="text-xl text-slate-400 mb-10">Don't take risks with DIY electrical work. Licensed Ohio techs are available now.</p>
          <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-wide">
            Call (513) 555-0123 for Repair
          </a>
        </div>
      </section>
    </div>
  );
};

export default ElectricalService;
