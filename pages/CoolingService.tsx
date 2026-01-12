
import React from 'react';

interface CoolingServiceProps {
  onBack: () => void;
}

const CoolingService: React.FC<CoolingServiceProps> = ({ onBack }) => {
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
              Emergency AC Repair in Cincinnati
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              AC units fail when it's hottest in Ohio. We specialize in fast, same-day repairs for Cincinnati homeowners. Upfront flat-rate pricing on every call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5135550123" className="bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-10 rounded-lg text-xl font-bold shadow-lg transition-all">
                Call for Same-Day Repair
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
              alt="Professional AC Repair Cincinnati" 
              className="rounded-2xl shadow-xl border border-slate-100"
            />
          </div>
        </div>
      </header>

      {/* Symptoms */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">System Red Flags</h2>
            <p className="text-lg text-slate-600 font-medium">If your unit is showing any of these signs, it's cheaper to fix it now before it fails completely.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-2 text-red-700 uppercase tracking-wide">Warm Air Blowing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Usually indicates a refrigerant leak or compressor issue. Requires a professional diagnostic.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-2 text-red-700 uppercase tracking-wide">Short Cycling</h4>
              <p className="text-slate-600 text-sm leading-relaxed">The unit turns on and off too frequently. This wears out motors and spikes your electric bill.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-2 text-red-700 uppercase tracking-wide">Water Leaks</h4>
              <p className="text-slate-600 text-sm leading-relaxed">A clogged condensate line can cause severe water damage to your home.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-2 text-red-700 uppercase tracking-wide">Noises</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Grinding, squealing, or buzzing noises usually mean a component is about to fail.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h4 className="font-bold text-lg mb-2 text-red-700 uppercase tracking-wide">Frozen Coils</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Ice on the unit means airflow is blocked. Turn it off immediately and call us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Our Same-Day Guarantee</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12 font-medium">
            We understand that a hot house is dangerous. If you call before 12 PM, we guarantee a NATE certified technician will be at your Cincinnati home by end-of-day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-12">
            <div className="text-left">
              <h5 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-widest">Pricing</h5>
              <p className="text-lg">Flat-rate diagnostics. No hourly surprises.</p>
            </div>
            <div className="text-left">
              <h5 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-widest">Warranty</h5>
              <p className="text-lg">1-Year labor guarantee on all repairs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">AC Still Not Cooling?</h2>
          <p className="text-xl text-slate-400 mb-10">Get a professional on site today in the Cincinnati area.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-wide">
              Call for Dispatch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoolingService;
