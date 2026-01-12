
import React from 'react';

interface GeneratorServiceProps {
  onBack: () => void;
}

const GeneratorService: React.FC<GeneratorServiceProps> = ({ onBack }) => {
  return (
    <div className="bg-white animate-fade-in">
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
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              Standby Generator Installation & Repair
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Ohio storms shouldn't leave you in the dark. We install and maintain whole-home standby generators throughout Cincinnati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5135550123" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 text-white text-center py-4 px-10 rounded-lg text-xl font-bold shadow-lg transition-all">
                Request an Installation Quote
              </a>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in stagger-2">
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" 
              alt="Whole home generator backup system installation" 
              className="rounded-2xl shadow-xl border border-slate-100 object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">Reliable Power Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Automatic Standby</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Units that turn on automatically the second utility power drops. Keeps your sump pump and HVAC running.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Annual Maintenance</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Don't wait for an Ohio thunderstorm to find out your generator won't start. We perform full testing.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Transfer Switches</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Safe installation for portable generator hookups. Prevent backfeeding and protect line workers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8">Why a Backup Plan Matters in Cincinnati</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-12 font-medium">
            Between winter ice storms and summer squalls, Cincinnati properties face significant power risks. A backup generator protects your home and keeps your family safe.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-slate-800 rounded-xl">
              <h5 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-widest">Licensed Electricians</h5>
              <p className="text-slate-300">All installations are performed by licensed pros to strict Ohio electrical codes.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl">
              <h5 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-widest">Financing Available</h5>
              <p className="text-slate-300">0% interest plans available for full system installations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready for the Next Storm?</h2>
          <p className="text-xl text-slate-400 mb-10">Protect your Cincinnati home and family. Get a free estimate.</p>
          <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide inline-block">
            Call for a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default GeneratorService;
