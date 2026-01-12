
import React from 'react';

const Financing: React.FC = () => {
  return (
    <section id="financing" className="py-24 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
              Flexible Financing for Home Essentials
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Unexpected repairs shouldn't drain your savings. We offer straightforward financing options to help you manage the cost of necessary repairs or system replacements.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900">Simple Application</h4>
                  <p className="text-slate-600 text-sm">Apply online or through your technician. Decisions usually take less than 60 seconds.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900">No Hidden Fees</h4>
                  <p className="text-slate-600 text-sm">Transparent terms with no prepayment penalties or surprise annual charges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="font-bold text-slate-900">Fixed Monthly Payments</h4>
                  <p className="text-slate-600 text-sm">Predictable rates that won't change over the life of your plan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Common Options</h3>
            <div className="space-y-6 mb-10">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-4xl font-black text-blue-700 mb-1">0% Interest</div>
                <p className="font-bold text-slate-900 mb-2">For up to 18 Months</p>
                <p className="text-slate-500 text-sm">Best for immediate repairs that you want to pay off quickly without added costs.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-4xl font-black text-blue-700 mb-1">Low Payment</div>
                <p className="font-bold text-slate-900 mb-2">Plans starting at $85/mo</p>
                <p className="text-slate-500 text-sm">Best for full system replacements or major HVAC and electrical upgrades.</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              *Subject to credit approval. Financing provided by our third-party lending partners. Terms vary based on project size and credit history. Your technician will provide a full written disclosure before you commit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;
