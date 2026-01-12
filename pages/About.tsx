
import React from 'react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </button>
      </div>

      <header className="py-16 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              The Grey Chair Standard.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Since 1994, we’ve built our reputation on a simple promise: we show up, we fix it, and we stand by the work. Cincinnati's local expertise.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black mb-8 text-slate-900">30 Years in Cincinnati.</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                Grey Chair HVAC started with a commitment to straightforward service. We aren't a national chain. We are your neighbors. When you call, you speak with a dispatcher sitting right here in Cincinnati, OH.
              </p>
              <p>
                We understand the specific demands of Ohio living. From the high humidity in Hyde Park to the historic heating systems in Blue Ash, we’ve seen it all and fixed it all.
              </p>
              <p>
                Our technicians are full-time employees. They aren't contractors on commission. They are professionals who take pride in providing reliable repairs that last in the Tri-State area.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl font-black text-slate-900 mb-2 italic">30</div>
              <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">Years in Business</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl font-black text-slate-900 mb-2 italic">12k+</div>
              <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">Homeowners Served</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl font-black text-slate-900 mb-2 italic">100%</div>
              <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">Local Ownership</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl font-black text-slate-900 mb-2 italic">24/7</div>
              <p className="font-bold text-slate-500 uppercase text-xs tracking-widest">Support Line</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">Our Simple Standards</h2>
          <div className="space-y-12 text-left">
            <div className="flex gap-6">
              <span className="text-slate-400 font-black text-2xl">01</span>
              <div>
                <h4 className="font-bold text-xl mb-2">No Hidden Costs</h4>
                <p className="text-slate-400">The price we quote is the price you pay. No hourly surprises.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-slate-400 font-black text-2xl">02</span>
              <div>
                <h4 className="font-bold text-xl mb-2">Punctual Arrival</h4>
                <p className="text-slate-400">We provide specific windows and respect your time in Cincinnati.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-slate-400 font-black text-2xl">03</span>
              <div>
                <h4 className="font-bold text-xl mb-2">No Commissioned Sales</h4>
                <p className="text-slate-400">Our techs fix what is broken. They are not paid to sell you a new system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 px-4 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Experience Matters.</h2>
          <p className="text-xl text-slate-400 mb-10">Call the local team that Cincinnati has trusted for 30 years.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:5135550123" className="bg-white text-slate-900 py-5 px-12 rounded-lg text-2xl font-black shadow-2xl hover:bg-slate-50 transition-all">
              Call (513) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
