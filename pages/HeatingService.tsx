
import React from 'react';

interface HeatingServiceProps {
  onBack: () => void;
}

const HeatingService: React.FC<HeatingServiceProps> = ({ onBack }) => {
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
              Cincinnati Heating & Furnace Repair
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              A cold house is more than an inconvenience in Ohio—it's an emergency. We provide same-day repair for furnaces, boilers, and heat pumps across the Greater Cincinnati area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5135550123" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 text-white text-center py-4 px-10 rounded-lg text-xl font-bold shadow-lg transition-all">
                Call to Restore My Heat
              </a>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in stagger-2">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
              alt="Technician inspecting a boiler system in Cincinnati" 
              className="rounded-2xl shadow-xl border border-slate-100 object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase tracking-tight">Heating Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Boiler Service</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Repair and maintenance for gas and oil boilers. We handle leaks, pressure issues, and ignition failures in older Cincinnati homes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Furnace Repair</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Fast diagnostic for forced-air systems. We stock common parts to get your heat back on in one visit.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg mb-4 text-slate-900 uppercase">Heat Pumps</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Specialized service for high-efficiency heat pump systems, ensuring they perform even in sub-zero Ohio temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need Heat Now?</h2>
          <p className="text-xl text-slate-400 mb-10">Technicians are on call 24/7 for no-heat emergencies in Cincinnati.</p>
          <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide inline-block">
            Call for Same-Day Dispatch
          </a>
        </div>
      </section>
    </div>
  );
};

export default HeatingService;
