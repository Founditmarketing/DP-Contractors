import { motion } from 'motion/react';
import { MapPin, ShieldCheck, PhoneCall } from 'lucide-react';

interface CityLandingPageProps {
  cityName: string;
  state: string;
}

/**
 * Reusable SEO Landing Page Template
 * Usage: <CityLandingPageTemplate cityName="Broken Bow" state="OK" />
 */
export default function CityLandingPageTemplate({ cityName, state }: CityLandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 pt-40 md:pt-44 lg:pt-48 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        
        {/* Dynamic SEO Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center flex flex-col items-center"
        >
          {/* Ambient Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-barlow-condensed font-bold tracking-widest uppercase mb-8 backdrop-blur-md custom-barlow-menu">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              Service Area: {cityName}, {state}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-barlow font-black uppercase tracking-tight text-white leading-[1.1] mb-8 drop-shadow-2xl custom-barlow-title">
              Commercial Refrigeration in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_10px_rgba(44,69,174,0.8)] px-1">{cityName}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-inter font-light leading-relaxed mb-12 max-w-3xl mx-auto custom-inter-body">
              D&P Contractors provides elite walk-in cooler repair, commercial ice machine service, and heavy-duty HVAC solutions tailored for facilities across {cityName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:9037851972"
                className="inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-barlow-condensed font-bold uppercase tracking-widest text-white bg-accent rounded-xl shadow-[0_0_20px_rgba(232,2,2,0.4)] hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all custom-barlow-menu"
              >
                <PhoneCall className="mr-3 w-5 h-5" />
                Dispatch to {cityName}
              </a>
            </div>
          </div>
        </motion.div>

        {/* SEO Content Blocks (Borderless) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <ShieldCheck className="w-8 h-8 text-white/80" />
            </div>
            <h2 className="text-3xl font-barlow font-black uppercase tracking-tight text-white mb-6 custom-barlow-title">Built For {cityName}</h2>
            <p className="text-slate-400 text-lg font-inter font-light leading-relaxed custom-inter-body">
              When your restaurant or facility in {cityName} experiences a refrigeration failure, you need a local contractor who gets it. We dispatch rapidly to {cityName}, {state} to ensure your perishable inventory is protected around the clock.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-start"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <MapPin className="w-8 h-8 text-white/80" />
            </div>
            <h2 className="text-3xl font-barlow font-black uppercase tracking-tight text-white mb-6 custom-barlow-title">Local Capabilities</h2>
            <ul className="space-y-4 text-slate-300 text-lg font-inter font-light leading-relaxed custom-inter-body">
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Walk-in Cooler Repair & Retrofits</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Commercial Ice Machine Service</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Restaurant Hood & Ventilation</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Industrial HVAC Diagnostics</li>
            </ul>
          </motion.div>
        </div>

      </div>

      {/* Full Width Dynamic City Map */}
      <div className="w-full h-[400px] sm:h-[500px] relative overflow-hidden border-t border-white/10 mt-12 bg-slate-950">
        <iframe
          title={`Service Area Map of ${cityName}, ${state}`}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(85%) contrast(1.2)' }}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(cityName + ', ' + state)}&t=m&z=12&output=embed&iwloc=near`}
          allowFullScreen
          className="w-full h-full pointer-events-none sm:pointer-events-auto"
        />
      </div>
    </div>
  );
}
