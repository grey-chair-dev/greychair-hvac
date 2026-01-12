
import React from 'react';

const MaintenancePlan: React.FC = () => {
  return (
    <section id="maintenance" className="py-24 px-4 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">The Shield Maintenance Plan</h2>
          <p className="text-xl text-slate-600">Most emergencies are preventable. Our maintenance plan is a simple, "set-it-and-forget-it" way to protect your home's most expensive systems.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* What's Included */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-black mb-6 text-blue-700 uppercase tracking-widest">What's Included</h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">01.</span>
                Two Precision Tune-ups per year (Spring AC / Fall Heating)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">02.</span>
                15% Discount on all repairs and parts
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">03.</span>
                Front-of-the-line scheduling for emergency calls
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">04.</span>
                No overtime or weekend dispatch fees
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">05.</span>
                Full professional cleaning and safety inspection
              </li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div className="p-8">
            <h3 className="text-xl font-black mb-6 text-slate-900 uppercase tracking-widest">Why It Matters</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Lower Monthly Bills</h4>
                <p className="text-slate-600 text-sm leading-relaxed">A clean system runs more efficiently. Our members typically see a 10-15% reduction in their monthly energy costs.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Extended System Life</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Milford's salt air is tough on outdoor units. Regular cleaning prevents premature corrosion and adds years to your system's life.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Safety Assurance</h4>
                <p className="text-slate-600 text-sm leading-relaxed">We check for carbon monoxide leaks, electrical shorts, and gas line integrity during every visit.</p>
              </div>
            </div>
          </div>

          {/* Who It's Best For */}
          <div className="bg-blue-700 p-8 rounded-2xl text-white flex flex-col justify-center">
            <h3 className="text-xl font-black mb-6 uppercase tracking-widest opacity-80">Who This Is For</h3>
            <div className="space-y-6 mb-10">
              <p className="font-bold text-lg leading-snug">Ideal for busy Milford homeowners who don't want to think about their HVAC, Plumbing, or Electrical systems until something breaks.</p>
              <ul className="space-y-3 text-blue-100 text-sm">
                <li>• Families with older systems (8+ years)</li>
                <li>• Local landlords managing rentals</li>
                <li>• Residents who travel frequently</li>
                <li>• New homeowners wanting peace of mind</li>
              </ul>
            </div>
            <a href="tel:2035550123" className="w-full bg-white text-blue-700 text-center py-4 rounded-xl font-black hover:bg-blue-50 transition-all uppercase tracking-wide shadow-xl">
              Start Protection Plan - $19/mo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlan;