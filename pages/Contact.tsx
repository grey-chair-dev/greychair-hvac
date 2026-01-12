
import React, { useState } from 'react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (value: string) => {
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!value) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!phoneRegex.test(value)) {
      setPhoneError('Enter a valid 10-digit phone number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (phoneError) validatePhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePhone(phone)) {
      alert('Request submitted. We will contact you shortly.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              Schedule Your Repair
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
              Grey Chair HVAC serves all of Cincinnati and surrounding Tri-State areas. Tell us the problem. We'll send a truck.
            </p>

            <div className="space-y-10">
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Immediate Emergency?</h3>
                <p className="text-slate-600 mb-6 font-medium">No heat in winter or high power loss? Call our Cincinnati 24/7 dispatch line now.</p>
                <a href="tel:5135550123" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-xl hover:bg-black transition-all shadow-lg uppercase tracking-wide">
                  (513) 555-0123
                </a>
              </div>

              <div className="space-y-6 font-medium">
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <h4 className="text-slate-900 uppercase text-xs tracking-widest">2-Hour Response Window</h4>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <h4 className="text-slate-900 uppercase text-xs tracking-widest">Upfront Flat-Rate Pricing</h4>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <h4 className="text-slate-900 uppercase text-xs tracking-widest">1-Year Labor Guarantee</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Service Request</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Your Name</label>
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(513) 555-0000" 
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => validatePhone(phone)}
                    className={`w-full p-4 bg-white border ${phoneError ? 'border-red-500' : 'border-slate-300'} rounded-xl focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all`} 
                    required 
                  />
                  {phoneError && <p className="mt-1 text-xs font-bold text-red-600">{phoneError}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Service Needed</label>
                <select className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all font-medium appearance-none">
                  <option>AC Repair</option>
                  <option>Heating Service</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Issue Description</label>
                <textarea 
                  placeholder="Tell us what is happening." 
                  className="w-full p-4 bg-white border border-slate-300 rounded-xl focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all h-32 font-medium"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-black py-5 rounded-xl text-xl hover:bg-black transition-all shadow-xl uppercase tracking-widest">
                Book My Repair
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
