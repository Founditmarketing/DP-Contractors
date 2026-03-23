import { motion } from 'motion/react';

const cities = [
  "Paris, TX",
  "Broken Bow, OK",
  "Idabel, OK",
  "Valliant, OK",
  "Hugo, OK",
  "Antlers, OK"
];

export default function Ticker() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-3 overflow-hidden relative flex items-center z-20">
      {/* Gradient Masks for smooth fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double the content to create a seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-slate-400 font-barlow-condensed font-semibold uppercase tracking-widest px-4 text-sm custom-barlow-menu">SERVING:</span>
            {cities.map((city, index) => (
              <div key={`${i}-${index}`} className="flex items-center">
                <span className="text-white font-barlow-condensed font-bold uppercase tracking-widest px-4 text-sm custom-barlow-menu">{city}</span>
                <span className="text-primary px-2">•</span>
              </div>
            ))}
            <span className="text-slate-400 font-barlow-condensed font-semibold uppercase tracking-widest px-4 text-sm italic custom-barlow-menu">and everywhere in between</span>
            <span className="text-primary px-2 mr-8">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
