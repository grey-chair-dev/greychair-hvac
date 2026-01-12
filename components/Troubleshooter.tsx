
import React, { useState } from 'react';
import { getTroubleshootingAdvice } from '../services/geminiService';

const Troubleshooter: React.FC = () => {
  const [issue, setIssue] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue.trim()) return;
    
    setLoading(true);
    const result = await getTroubleshootingAdvice(issue);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <section className="bg-slate-100 py-16 px-4 rounded-3xl shadow-inner max-w-5xl mx-auto my-16 border border-slate-200 animate-fade-in-up">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-black mb-4 text-slate-900 text-center md:text-left tracking-tight">AI Instant Diagnostic</h2>
        <p className="text-slate-600 mb-8 text-center md:text-left text-lg leading-relaxed">
          Describe what you're hearing, smelling, or seeing. Our diagnostic tool will provide an immediate assessment based on CT safety standards.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-sm border border-slate-300 transition-all focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600">
            {loading && <div className="scanning-line z-10"></div>}
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Example: My AC is leaking water inside and making a loud buzzing sound."
              className="w-full p-6 bg-transparent outline-none h-40 text-slate-800 transition-all text-lg relative z-0"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-black hover:scale-[1.01] active:scale-[0.99] text-white font-black py-4 px-8 rounded-xl transition-all disabled:opacity-50 text-xl shadow-lg flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Analyzing Situation...
              </>
            ) : 'Get Expert Assessment'}
          </button>
        </form>

        {advice && (
          <div className="mt-10 p-8 bg-white border-2 border-blue-600 rounded-2xl shadow-xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4 text-blue-700">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <h3 className="font-black text-2xl tracking-tight">Diagnostic Summary</h3>
            </div>
            <div className="text-slate-700 whitespace-pre-line leading-relaxed text-lg border-b pb-6 mb-6">
              {advice}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2035550123" className="bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] text-white text-center font-black py-4 px-6 rounded-xl transition-all flex-1 text-lg shadow-md">
                Call Now for Dispatch
              </a>
              <button onClick={() => { setAdvice(null); setIssue(''); }} className="bg-slate-50 text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold py-4 px-6 rounded-xl transition-all">
                New Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Troubleshooter;