
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validatePhone = (value: string) => {
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!value) {
      setPhoneError('Required');
      return false;
    } else if (!phoneRegex.test(value)) {
      setPhoneError('Invalid format');
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
      alert('Thank you. We have received your request.');
    }
  };

  return (
    <section id="book" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Schedule Service</h2>
            <p className="text-lg text-slate-600 mb-8">
              Fill out the form below for non-emergency service requests. We typically respond within 2 hours during business hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-slate-600">(203) 555-0123</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-slate-600">Milford, CT and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-slate-50 p-8 rounded-lg shadow-sm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">First Name</label>
                <input type="text" className="w-full p-2 border border-slate-300 rounded focus:ring-blue-600 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Last Name</label>
                <input type="text" className="w-full p-2 border border-slate-300 rounded focus:ring-blue-600 outline-none" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Service Needed</label>
              <select className="w-full p-2 border border-slate-300 rounded focus:ring-blue-600 outline-none">
                <option>Air Conditioning</option>
                <option>Heating</option>
                <option>Plumbing Repair</option>
                <option>Electrical Repair</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-slate-300 rounded focus:ring-blue-600 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input 
                type="tel" 
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => validatePhone(phone)}
                className={`w-full p-2 border ${phoneError ? 'border-red-500' : 'border-slate-300'} rounded focus:ring-blue-600 outline-none`} 
                required 
              />
              {phoneError && <p className="text-xs font-bold text-red-600 mt-1">{phoneError}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Brief Description</label>
              <textarea className="w-full p-2 border border-slate-300 rounded focus:ring-blue-600 outline-none h-24" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition-colors">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
