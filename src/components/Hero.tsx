import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import HeroIceBackground from './HeroIceBackground';
import LoadingScreen from './LoadingScreen';

import { globalStore } from '../store';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [loadingComplete, setLoadingComplete] = useState(globalStore.hasAppLoaded);
  
  const handleLoadComplete = () => {
    globalStore.hasAppLoaded = true;
    setLoadingComplete(true);
  };
  
  const words = ["Elite", "Commercial", "Refrigeration & HVAC."];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroIceBackground />
      
      {/* Subtle Dark Overlay Exclusively for Mobile Visibility */}
      <div className="absolute inset-0 bg-slate-950/50 md:hidden z-[1] pointer-events-none"></div>

      {!loadingComplete && <LoadingScreen onComplete={handleLoadComplete} />}

      {loadingComplete && (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center w-full">
          <div className="max-w-4xl mx-auto w-full">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse mr-2"></span>
            <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-white/90 text-xs font-barlow-condensed font-bold tracking-widest uppercase">Serving Northeast TX & Southeast OK</span>
          </motion.div>

          <motion.h1
            style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl font-barlow font-black uppercase tracking-tight text-white leading-[1.1] mb-6 px-1"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={child} className="inline-block mr-3 lg:mr-4">
                {word === "Refrigeration & HVAC." ? (
                  <span className="inline-flex flex-wrap justify-center items-center gap-x-2 lg:gap-x-3 mt-2 sm:mt-0">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_10px_rgba(44,69,174,0.8)]">
                      Refrigeration
                    </span>
                    <span className="text-white">&</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_10px_rgba(44,69,174,0.8)]">
                      HVAC.
                    </span>
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            style={{ fontFamily: '"Inter", sans-serif' }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 text-base min-[400px]:text-lg sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-inter font-light px-2 sm:px-4"
          >
            Keeping restaurants, warehouses, and businesses running flawlessly from <strong className="text-white font-normal">Paris, TX</strong> to <strong className="text-white font-normal">Broken Bow, OK</strong>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-primary rounded-md transition-all shadow-[0_0_20px_rgba(44,69,174,0.5)] hover:shadow-[0_0_35px_rgba(44,69,174,0.8)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Request a Free Quote</span>
            </Link>
            
            <a
              style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-transparent border-2 border-white/30 rounded-md hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      )}
    </section>
  );
}
