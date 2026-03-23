import { motion } from 'motion/react';
import { AlertOctagon, PhoneCall } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section 
      className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden"
      style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580983554885-357ed6248552?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-primary/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center p-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 backdrop-blur-sm">
              <AlertOctagon className="w-5 h-5 text-accent mr-2 animate-pulse" />
              <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-red-200 font-barlow-condensed font-bold tracking-widest uppercase text-xs">Critical Response Team</span>
            </div>
            <h2 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-3xl leading-[1.1] sm:text-5xl lg:text-6xl font-barlow font-black uppercase tracking-tight text-white mb-6 drop-shadow-lg tracking-wider px-2 lg:px-0">
              Walk-in Cooler down? <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-accent font-normal">Every minute costs you money.</span>
            </h2>
            <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-xl text-slate-300 font-inter font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We dispatch immediately to Paris, Broken Bow, Idabel, and surrounding areas. Don't lose your inventory.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a
              style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} href="tel:9037851972"
              className="group relative inline-flex items-center justify-center px-10 py-6 text-2xl sm:text-3xl font-barlow font-black uppercase tracking-tight text-white bg-accent rounded-xl transition-all shadow-[0_0_30px_#e80202] hover:shadow-[0_0_50px_#e80202] tracking-wider"
            >
              {/* Radar Pulse Ring */}
              <div className="absolute inset-0 rounded-xl border border-accent/50 animate-[ping_3s_ease-out_infinite] opacity-40 pointer-events-none"></div>
              
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              
              <PhoneCall className="mr-4 w-8 h-8 sm:w-10 sm:h-10 relative z-20" />
              <span className="font-normal relative z-20">(903) 785-1972</span>
            </a>
            <p style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-center text-slate-400 mt-6 sm:mt-8 font-barlow-condensed font-semibold tracking-widest uppercase text-xs">Tap to call 24/7/365</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
