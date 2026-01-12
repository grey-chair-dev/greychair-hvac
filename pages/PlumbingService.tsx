
import React from 'react';

interface PlumbingServiceProps {
  onBack: () => void;
}

const PlumbingService: React.FC<PlumbingServiceProps> = ({ onBack }) => {
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
              Cincinnati Plumbing & Drain Service
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Clogged drains, leaking pipes, or cold showers—we handle it all. Professional Cincinnati plumbing service with upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5135550123" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-10 rounded-lg text-xl font-bold shadow-lg transition-all">
                Call to Stop the Leak
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
              alt="Plumbing Service Cincinnati" 
              className="rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">Plumbing Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Emergency Drain Cleaning</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Main line backups, slow sinks, or clogged toilets. We have the equipment to clear any block in Hamilton County.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Water Heaters</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Repair and installation for tank and tankless systems. Get hot water back today.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Fixture & Pipe Repair</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Fixing leaks, dripping faucets, and broken valves before they cause water damage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Plumbing Emergency?</h2>
          <p className="text-xl text-slate-400 mb-10">Available 24/7 for plumbing emergencies in the Cincinnati area.</p>
          <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-wide">
            Call (513) 555-0123 for Dispatch
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlumbingService;
