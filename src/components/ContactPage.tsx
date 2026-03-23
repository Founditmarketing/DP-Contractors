import { motion } from 'motion/react';
import { PhoneCall, Mail, MapPin, Clock, Send, ShieldCheck, ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-40 md:pt-44 lg:pt-48 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-barlow-condensed font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <PhoneCall className="w-4 h-4 mr-2 text-primary" />
            24/7 Dispatch Available
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-barlow font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">D&P Contractors</span>
          </h1>
          <p className="text-xl text-slate-300 font-inter font-light leading-relaxed">
            Need emergency refrigeration repair or a quote for a commercial HVAC installation? Our dispatchers are standing by.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Information (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Phone Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-accent/30 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <PhoneCall className="w-24 h-24 text-accent" />
              </div>
              <div className="relative z-10">
                <h3 className="text-sm font-barlow-condensed font-bold tracking-widest uppercase text-slate-400 mb-2">Emergency Dispatch</h3>
                <a href="tel:9037851972" className="text-4xl sm:text-5xl font-barlow font-black text-white tracking-widest hover:text-accent transition-colors block mb-4">
                  (903) 785-1972
                </a>
                <p className="text-slate-400 font-inter font-light text-sm">Tap to call our 24/7 designated emergency line.</p>
              </div>
            </div>

            {/* Email & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400 mb-1">Email Us</h3>
                <p className="text-white font-inter text-sm break-all">service@dpcontractorstx.com</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400 mb-1">Headquarters</h3>
                <p className="text-white font-inter text-sm">123 Industrial Blvd<br />Paris, TX 75460</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <div>
                  <h3 className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">Regular Hours</h3>
                  <p className="text-white font-inter text-sm">Mon-Fri: 8AM - 5PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-6 h-6 text-accent mr-3" />
                <div>
                  <h3 className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">After Hours</h3>
                  <p className="text-white font-inter text-sm flex items-center"><span className="w-2 h-2 rounded-full bg-accent animate-ping mr-2"></span>24/7 Standby</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secure Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden h-full flex flex-col justify-center">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <h3 className="text-3xl font-barlow font-black uppercase tracking-tight text-white mb-2">Request Service</h3>
              <p className="text-slate-400 font-inter font-light text-sm mb-8">Fill out the form below and our dispatcher will contact you shortly.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">First Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">Last Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">Phone</label>
                    <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">Facility / Business Name</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600" placeholder="Optional" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">Service Required</label>
                  <div className="relative">
                    <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer" defaultValue="">
                      <option value="" disabled>Select a Service</option>
                      <option value="emergency">24/7 Emergency Repair</option>
                      <option value="walk-in-coolers">Walk-In Coolers & Freezers</option>
                      <option value="ice-machines">Commercial Ice Machines</option>
                      <option value="restaurant-ventilation">Restaurant Ventilation</option>
                      <option value="heavy-duty-hvac">Heavy-Duty HVAC</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-barlow-condensed font-bold tracking-widest uppercase text-slate-400">How can we help?</label>
                  <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-inter focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600 resize-none" placeholder="Describe your refrigeration or HVAC issue..."></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 font-barlow-condensed font-bold uppercase tracking-widest text-white bg-primary rounded-lg transition-all shadow-[0_0_20px_rgba(44,69,174,0.3)] hover:shadow-[0_0_35px_rgba(44,69,174,0.6)] hover:-translate-y-1">
                  Submit Request
                  <Send className="w-4 h-4 ml-3" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Service Areas Simple List */}
      <div className="border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-barlow font-black uppercase tracking-tight text-white mb-4">Service Jurisdiction</h2>
            <p className="text-slate-400 font-inter font-light">Rapid-response commercial HVAC & refrigeration dispatch zones.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Paris, TX", "Broken Bow, OK", "Idabel, OK", "Valliant, OK", "Hugo, OK", "Antlers, OK"].map(city => (
              <div key={city} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-center hover:bg-slate-900 hover:border-primary/50 transition-all group">
                <MapPin className="w-5 h-5 text-slate-500 group-hover:text-primary mx-auto mb-2 transition-colors" />
                <span className="text-sm font-barlow-condensed font-bold tracking-widest uppercase text-slate-300">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Width Radius Map */}
        <div className="w-full h-[400px] border-t border-white/5 relative">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none z-10"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060933.243575677!2d-96.4447738012643!3d33.82424884391264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864a78735df60ae1%3A0xe21d83dfa30bf183!2sParis%2C%20TX!5e0!3m2!1sen!2sus!4v1709664321000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) contrast(110%) brightness(85%) grayscale(20%)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
