import { Send, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const seoCities = [
    { name: "Paris", state: "TX", slug: "paris-tx" },
    { name: "Broken Bow", state: "OK", slug: "broken-bow-ok" },
    { name: "Idabel", state: "OK", slug: "idabel-ok" },
    { name: "Valliant", state: "OK", slug: "valliant-ok" },
    { name: "Hugo", state: "OK", slug: "hugo-ok" },
    { name: "Antlers", state: "OK", slug: "antlers-ok" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Badges */}
          <div className="lg:col-span-4">
            <img 
              src="/New D&P logo-2.png" 
              alt="D&P Contractors Logo" 
              className="h-14 sm:h-16 w-auto mb-6 object-contain drop-shadow-xl" 
            />
            <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-slate-400 font-inter font-light leading-relaxed mb-8">
              The elite choice for commercial refrigeration and heavy-duty HVAC in Northeast Texas and Southeast Oklahoma.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary mr-3" />
                <span style={{ fontFamily: '"Inter", sans-serif' }} className="text-white font-inter font-light">Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <Clock className="w-6 h-6 text-accent mr-3" />
                <span style={{ fontFamily: '"Inter", sans-serif' }} className="text-white font-inter font-light">24/7 Emergency Dispatch</span>
              </div>
              <div className="flex items-center p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <span style={{ fontFamily: '"Inter", sans-serif' }} className="text-white font-inter font-light">1150 Clement Rd. Paris, TX 75460</span>
              </div>
            </div>
          </div>

          {/* Local SEO Links */}
          <div className="lg:col-span-3">
            <h4 style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-sm font-barlow-condensed font-bold text-white mb-6 uppercase tracking-widest">Service Areas</h4>
            <ul className="space-y-3">
              {seoCities.map((city) => (
                <li key={city.name}>
                  <Link 
                    style={{ fontFamily: '"Inter", sans-serif' }} to={`/service-areas/${city.slug}`}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center group font-inter font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                    Refrigeration in {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Contact Form */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <h4 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-xl font-barlow font-extrabold uppercase tracking-tight text-white mb-6">Request Service</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    style={{ fontFamily: '"Inter", sans-serif' }} type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white transition-all font-inter font-light"
                  />
                  <input
                    style={{ fontFamily: '"Inter", sans-serif' }} type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white transition-all font-inter font-light"
                  />
                </div>
                <input
                  style={{ fontFamily: '"Inter", sans-serif' }} type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white transition-all font-inter font-light"
                />
                <textarea
                  style={{ fontFamily: '"Inter", sans-serif' }} rows={3}
                  placeholder="Describe your issue (e.g., Walk-in cooler not holding temp)"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white transition-all resize-none font-inter font-light"
                ></textarea>
                <button
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Send Request
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center">
          <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-sm text-slate-500 font-inter font-light">
            &copy; {currentYear} D&P Contractors. All rights reserved.
          </p>
          <div style={{ fontFamily: '"Inter", sans-serif' }} className="mt-4 md:mt-0 space-x-6 text-sm text-slate-500 font-inter font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
