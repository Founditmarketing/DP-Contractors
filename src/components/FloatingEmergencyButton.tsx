import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, X, PhoneCall, Send } from 'lucide-react';

export default function FloatingEmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-50 hover:z-[60] flex items-center justify-center"
          >
            {/* Subtle Continuous Radar Pulse Background */}
            <div className="absolute w-full h-full rounded-full bg-accent/40 animate-ping" style={{ animationDuration: '3s' }}></div>
            
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full shadow-[0_0_20px_rgba(232,2,2,0.6)] hover:shadow-[0_0_40px_rgba(232,2,2,0.8)] transition-shadow duration-300 group"
              aria-label="Emergency Service"
            >
              <Zap className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-slate-950 hover:bg-white/10 border border-white/5 text-white transition-all hover:rotate-90"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top Half: Call to Action (Urgent) */}
              <div className="relative p-5 sm:p-10 border-b border-white/5 bg-slate-900 overflow-hidden flex-shrink-0 text-center">
                {/* Red ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none z-0"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-accent/10 border border-accent/20 mb-3 sm:mb-4 text-accent shadow-[0_0_20px_rgba(232,2,2,0.2)]">
                    <Zap className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-barlow font-black text-white uppercase tracking-tight mb-1 sm:mb-2 custom-barlow-title">
                    Emergency Call Now
                  </h2>
                  <p className="text-slate-400 font-inter text-xs sm:text-base mb-4 sm:mb-6 leading-relaxed max-w-sm mx-auto custom-inter-body hidden sm:block">
                    Minutes matter when equipment fails. Tap below to speak directly with our 24/7 dispatch team.
                  </p>
                  
                  <a
                    href="tel:9037851972"
                    className="inline-flex items-center justify-center w-full py-3 sm:py-5 text-lg sm:text-xl font-barlow-condensed font-bold uppercase tracking-widest text-white bg-accent rounded-xl shadow-[0_0_20px_rgba(232,2,2,0.4)] hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all custom-barlow-menu"
                  >
                    <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    (903) 785-1972
                  </a>
                </div>
              </div>

              {/* Bottom Half: Contact Form (Standard) */}
              <div className="p-5 sm:p-10 bg-slate-950 overflow-y-auto">
                <h3 className="text-lg sm:text-2xl font-barlow font-black text-white uppercase tracking-tight mb-3 sm:mb-6 custom-barlow-title">
                  Or Request Service
                </h3>
                
                <form 
                  className="space-y-3 sm:space-y-4" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    alert("Service request dispatched successfully."); 
                    setIsOpen(false); 
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-barlow-condensed font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-1.5 ml-1 custom-barlow-menu">Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-slate-900 border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white font-inter text-xs sm:text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 shadow-inner custom-inter-body" 
                        placeholder="e.g. John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-barlow-condensed font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-1.5 ml-1 custom-barlow-menu">Phone</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full bg-slate-900 border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white font-inter text-xs sm:text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 shadow-inner custom-inter-body" 
                        placeholder="(555) 555-5555" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-barlow-condensed font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-1.5 ml-1 custom-barlow-menu">Service</label>
                    <div className="relative">
                      <select className="w-full bg-slate-900 border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-slate-300 font-inter text-xs sm:text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer shadow-inner custom-inter-body">
                        <option>Walk-In Coolers</option>
                        <option>Ice Machines</option>
                        <option>Restaurant Ventilation</option>
                        <option>Heavy-Duty HVAC</option>
                        <option>Other Emergency</option>
                      </select>
                      <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-barlow-condensed font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-1.5 ml-1 custom-barlow-menu">Issue Description</label>
                    <textarea 
                      required 
                      rows={2} 
                      className="w-full bg-slate-900 border border-white/5 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white font-inter text-xs sm:text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-slate-600 shadow-inner custom-inter-body" 
                      placeholder="Briefly describe the equipment..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-2 sm:mt-4 py-3 sm:py-4 bg-white text-slate-950 font-barlow-condensed font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center hover:-translate-y-0.5 custom-barlow-menu"
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Submit Request
                  </button>
                </form>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
