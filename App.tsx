
import React, { useState, useEffect } from 'react';
import EmergencyBanner from './components/EmergencyBanner';
import Troubleshooter from './components/Troubleshooter';
import CoolingService from './pages/CoolingService';
import HeatingService from './pages/HeatingService';
import PlumbingService from './pages/PlumbingService';
import ElectricalService from './pages/ElectricalService';
import GeneratorService from './pages/GeneratorService';
import About from './pages/About';
import Contact from './pages/Contact';
import ReviewsList from './components/ReviewsList';
import MaintenancePlan from './components/MaintenancePlan';
import Financing from './components/Financing';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'cooling' | 'heating' | 'plumbing' | 'electrical' | 'generator' | 'about' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderHome = () => (
    <div className="animate-fade-in">
      {/* Hero Section - Cincinnati Version */}
      <header className="relative bg-[#a1a8b3] text-white pt-24 pb-32 px-4 overflow-hidden min-h-[90vh] flex items-center">
        {/* Grayscale Background Overlay */}
        <div className="absolute inset-0 opacity-10 grayscale mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=1600" 
            alt="HVAC technician at work" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-block bg-[#3b82f6]/20 text-[#2563eb] border border-[#2563eb]/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-10 animate-fade-in-up">
                Grey Chair: Cincinnati's Trusted Choice Since 1994
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black mb-10 leading-[0.85] tracking-tighter text-white/90 uppercase animate-fade-in-up stagger-1">
                AC DOWN? PIPE LEAKING?<br />WE SHOW UP TODAY.
              </h1>
              
              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-snug animate-fade-in-up stagger-2">
                Serving the Greater Cincinnati area for 30 years. No high-pressure sales. No hidden fees. Just experienced technicians who fix the problem.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up stagger-3">
                <a href="tel:5135550123" className="bg-[#6d88c7] hover:bg-[#5a76b5] text-white text-center py-5 px-10 rounded-sm text-xl font-black transition-all shadow-md flex items-center justify-center gap-3 active:scale-95 uppercase">
                  Call for Immediate Dispatch
                </a>
              </div>

              {/* Hero Footer */}
              <div className="hidden sm:grid grid-cols-3 gap-8 text-xs text-white/50 font-black uppercase tracking-widest animate-fade-in-up stagger-4">
                <span>OH License #48231</span>
                <span>Licensed Professionals</span>
                <span>Upfront Flat-Rate Pricing</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-3">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl border-t-4 border-slate-600">
                <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Fast Service Request</h2>
                <p className="text-slate-500 text-sm mb-8 font-medium italic">Grey Chair techs on call in Cincinnati right now.</p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Request sent. We will call you within 15 minutes.'); }}>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">Your Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">Best Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(513) 555-0000" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 outline-none transition-all text-slate-900 font-bold placeholder:text-slate-300" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-slate-600/20 focus:border-slate-600 outline-none transition-all text-slate-900 font-bold appearance-none">
                      <option>AC Repair</option>
                      <option>Heating Service</option>
                      <option>Plumbing / Leak</option>
                      <option>Electrical Issue</option>
                      <option>Standby Generator</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white font-black py-5 rounded-sm text-xl hover:bg-black transition-all shadow-xl uppercase tracking-widest active:scale-[0.98] mt-4">
                    Get Priority Dispatch
                  </button>
                  <p className="text-center text-[10px] text-slate-400 uppercase tracking-tight font-bold mt-4">
                    No credit card required to book
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Markers */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-30 grayscale contrast-125">
            <span className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">A+ Rating - BBB</span>
            <span className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">NATE Certified HVAC</span>
            <span className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">Master Plumbers</span>
            <span className="font-black text-slate-900 text-xs uppercase tracking-[0.2em]">Licensed Electricians</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">Licensed HVAC, Plumbing, and Electrical</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">Serving Cincinnati, Blue Ash, and West Chester. One standard of service.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heating */}
            <div className="group p-8 border border-slate-200 rounded-xl hover:border-slate-600 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col bg-white">
              <div className="text-slate-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Heating</h3>
              <p className="text-slate-600 mb-6 text-[15px] flex-grow leading-relaxed font-medium">Same-day furnace and boiler repairs. We keep Cincinnati homes warm through Ohio winters.</p>
              <ul className="space-y-3 text-slate-500 mb-8 text-sm font-bold uppercase tracking-tight">
                <li>• Boiler Repair</li>
                <li>• Furnace Maintenance</li>
                <li>• Heat Pump Service</li>
                <li>• 24/7 Support</li>
              </ul>
              <button onClick={() => setCurrentView('heating')} className="w-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-900 font-black py-4 rounded-lg transition-all text-sm uppercase tracking-widest">Fix My Heating</button>
            </div>

            {/* Cooling */}
            <div className="group p-8 border border-slate-200 rounded-xl hover:border-slate-600 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col bg-white">
              <div className="text-slate-600 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Cooling</h3>
              <p className="text-slate-600 mb-6 text-[15px] flex-grow leading-relaxed font-medium">Expert AC repair and high-efficiency upgrades. We service all major brands in Hamilton County.</p>
              <ul className="space-y-3 text-slate-500 mb-8 text-sm font-bold uppercase tracking-tight">
                <li>• Central AC Repair</li>
                <li>• Ductless Mini-Splits</li>
                <li>• Tune-ups</li>
                <li>• Smart Controls</li>
              </ul>
              <button onClick={() => setCurrentView('cooling')} className="w-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-900 font-black py-4 rounded-lg transition-all text-sm uppercase tracking-widest">Fix My AC</button>
            </div>

            {/* Plumbing */}
            <div className="group p-8 bg-slate-900 text-white rounded-xl shadow-xl hover:-translate-y-1 transition-all flex flex-col">
              <div className="text-slate-300 mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.96 1.414H4a2 2 0 01-2-2V4a2 2 0 012-2h10.33a2 2 0 011.96 1.414l.727 2.903a2 2 0 001.96 1.414l2.387-.477a2 2 0 011.022.547l1.714 1.714a2 2 0 010 2.828l-1.714 1.714z"/></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Plumbing</h3>
              <p className="text-slate-300 mb-6 text-[15px] flex-grow leading-relaxed font-medium">From clogged drains in Hyde Park to new water heaters in Blue Ash. We show up.</p>
              <ul className="space-y-3 text-slate-400 mb-8 text-sm font-bold uppercase tracking-tight">
                <li>• Drain Cleaning</li>
                <li>• Water Heaters</li>
                <li>• Leak Repair</li>
                <li>• Sump Pumps</li>
              </ul>
              <button onClick={() => setCurrentView('plumbing')} className="w-full bg-white hover:bg-slate-100 text-slate-900 font-black py-4 rounded-lg transition-all text-sm uppercase tracking-widest">Stop the Leak</button>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section id="process" className="py-24 bg-slate-50 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight text-center md:text-left uppercase">What Happens When You Call</h2>
            <p className="text-xl text-slate-600 text-center md:text-left font-medium leading-relaxed">We believe in clear expectations. Local Cincinnati service.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="relative group animate-fade-in-up stagger-1">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-tight">1. Talk to a Local Person</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed font-medium">No automated menus. You speak with a Cincinnati dispatcher who can help immediately.</p>
            </div>
            <div className="relative group animate-fade-in-up stagger-2">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-tight">2. Upfront Quote</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed font-medium">We provide a flat-rate cost for the repair before any work starts. You approve the price first.</p>
            </div>
            <div className="relative group animate-fade-in-up stagger-3">
              <div className="absolute -left-6 top-0 w-1.5 h-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-tight">3. Fixed and Guaranteed</h4>
              <p className="text-slate-600 text-[15px] leading-relaxed font-medium">Most repairs are finished in one visit. All work is backed by our 1-year labor guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <MaintenancePlan />
      <Financing />

      {/* Troubleshooter */}
      <section id="troubleshooter" className="px-4 bg-white">
        <div className="max-w-7xl mx-auto pt-24 text-center animate-fade-in-up">
            <h2 className="text-3xl font-black mb-4 tracking-tight text-slate-900 uppercase">Not Sure If You Need a Technician?</h2>
            <p className="text-slate-600 text-lg font-medium">Describe the problem. Get an immediate Cincinnati-based assessment.</p>
        </div>
        <Troubleshooter />
      </section>

      {/* Review Section */}
      <section id="reviews" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">Verified Reviews from Cincinnati Neighbors</h2>
            <p className="text-slate-600 text-lg font-medium">Local service you can trust. Check our feedback in Hyde Park and Blue Ash.</p>
          </div>
          <ReviewsList />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-slate-900 py-24 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-white leading-tight uppercase">Need Professional Repair Today?</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium">Grey Chair technicians are currently active in Cincinnati. Call now.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:5135550123" className="bg-white text-slate-900 py-6 px-16 rounded-sm text-2xl font-black shadow-2xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide">
              Call (513) 555-0123
            </a>
            <button 
              onClick={() => setCurrentView('contact')}
              className="bg-slate-800 text-white py-6 px-16 rounded-sm text-2xl font-black border border-slate-700 hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide"
            >
              Book Service Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen selection:bg-slate-100 flex flex-col">
      <EmergencyBanner />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 py-6 px-8 sticky top-9 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentView('home')} 
            className="text-2xl font-black tracking-tighter text-slate-900 hover:text-slate-600 transition-colors uppercase"
          >
            GREY CHAIR HVAC
          </button>
          
          <div className="hidden md:flex gap-10 text-[13px] font-black text-slate-600 uppercase tracking-tight">
            <button onClick={() => setCurrentView('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <button onClick={() => setCurrentView('cooling')} className="hover:text-slate-900 transition-colors">AC Repair</button>
            <button onClick={() => setCurrentView('generator')} className="hover:text-slate-900 transition-colors">Generators</button>
            <button onClick={() => setCurrentView('about')} className="hover:text-slate-900 transition-colors">Our Story</button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-slate-900 transition-colors">Book Online</button>
          </div>
          
          <a 
            href="tel:5135550123" 
            className="bg-slate-900 text-white px-8 py-3 rounded-sm font-black text-[13px] hover:bg-black hover:shadow-lg transition-all active:scale-95 uppercase tracking-widest"
          >
            Call Now
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {currentView === 'home' && renderHome()}
        {currentView === 'cooling' && <CoolingService onBack={() => setCurrentView('home')} />}
        {currentView === 'heating' && <HeatingService onBack={() => setCurrentView('home')} />}
        {currentView === 'plumbing' && <PlumbingService onBack={() => setCurrentView('home')} />}
        {currentView === 'electrical' && <ElectricalService onBack={() => setCurrentView('home')} />}
        {currentView === 'generator' && <GeneratorService onBack={() => setCurrentView('home')} />}
        {currentView === 'about' && <About onBack={() => setCurrentView('home')} />}
        {currentView === 'contact' && <Contact onBack={() => setCurrentView('home')} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black mb-8 tracking-tighter uppercase">GREY CHAIR HVAC</div>
            <p className="text-slate-400 mb-10 max-w-sm leading-relaxed text-[15px] font-medium">
              Family owned since 1994. Providing professional HVAC, plumbing, and electrical repairs for Cincinnati and surrounding Ohio communities. Licensed & Insured.
            </p>
          </div>
          <div>
            <h4 className="font-black text-xs mb-8 text-white uppercase tracking-[0.2em] opacity-40">Services</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-[13px] uppercase tracking-tight">
              <li><button onClick={() => setCurrentView('heating')} className="hover:text-white transition-colors">Heating Repair</button></li>
              <li><button onClick={() => setCurrentView('cooling')} className="hover:text-white transition-colors">AC Repair</button></li>
              <li><button onClick={() => setCurrentView('generator')} className="hover:text-white transition-colors">Generators</button></li>
              <li><button onClick={() => setCurrentView('plumbing')} className="hover:text-white transition-colors">Plumbing</button></li>
              <li><button onClick={() => setCurrentView('electrical')} className="hover:text-white transition-colors">Electrical</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs mb-8 text-white uppercase tracking-[0.2em] opacity-40">Contact</h4>
            <ul className="space-y-6 text-slate-400 font-bold text-[13px] uppercase tracking-tight">
              <li>Cincinnati, OH 45202</li>
              <li>(513) 555-0123</li>
              <li className="text-slate-200">Available 24/7</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center text-slate-600 text-[11px] uppercase tracking-[0.2em] font-black">
          <p>© 2024 Grey Chair HVAC & Electrical. OH License #48231. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
