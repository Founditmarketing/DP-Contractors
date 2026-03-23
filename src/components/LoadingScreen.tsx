import React, { useState, useEffect } from 'react';
import { Fan } from 'lucide-react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'idle' | 'spinning' | 'dissolving'>('idle');

  useEffect(() => {
    // Wait slightly on red screen with fan OFF
    const spinTimer = setTimeout(() => setPhase('spinning'), 800);
    
    // Fan has spun up, start dissolving the red heat background to reveal the cool ice
    const dissolveTimer = setTimeout(() => setPhase('dissolving'), 2500);
    
    // Dissolve transition finished, unmount the loading screen to trigger hero animations
    const completeTimer = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(dissolveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-all duration-[1500ms] ease-in-out overflow-hidden ${
        phase === 'dissolving' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* High-end ambient heat glow that fades out as the fan engages */}
      <div 
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-slate-950/90 to-slate-950 transition-opacity duration-[1500ms] ${
          phase === 'idle' ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative flex items-center justify-center mb-12">
        {/* Sleek, industrial outer turbine ring */}
        <motion.div 
          animate={{ rotate: phase !== 'idle' ? 360 * 5 : 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 border-[1px] border-white/10 rounded-full scale-[1.7] border-dashed"
        ></motion.div>
        
        {/* Precision inner track */}
        <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-[1.25]"></div>

        {/* Central Hub / Motor glowing red initially, turning cool blue */}
        <div className={`absolute inset-0 m-auto w-3 h-3 rounded-full border border-white/20 z-10 transition-colors duration-1000 ${
          phase === 'idle' 
            ? 'bg-slate-800 shadow-[0_0_15px_rgba(232,2,2,0.6)]' 
            : 'bg-primary shadow-[0_0_20px_rgba(44,69,174,0.8)]'
        }`}></div>
        
        {/* Precision Fan Blade */}
        <motion.div
          animate={{ rotate: phase !== 'idle' ? 360 * 20 : 0 }}
          transition={{ 
            duration: 3.5, 
            ease: "easeIn" 
          }}
          className="relative z-0"
        >
          <Fan 
            strokeWidth={1}
            className={`w-24 h-24 transition-colors duration-1000 ${
              phase === 'idle' ? 'text-white/60' : 'text-blue-200/90'
            }`} 
          />
        </motion.div>
      </div>
      
      {/* High-end Typography Panel */}
      <div className={`text-center relative z-10 transition-all duration-700 w-full max-w-sm px-6 ${
        phase === 'dissolving' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <h2 className="text-xs md:text-sm font-inter font-light text-white/80 tracking-[0.4em] uppercase mb-5">
          System Initialization
        </h2>
        
        {/* Precision minimalist loading bar */}
        <div className="w-full h-[1px] bg-white/5 mb-5 relative overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className={`absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-colors duration-1000 ${
              phase === 'idle' ? 'via-accent/40' : 'via-primary/50'
            }`}
          />
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-1000 shadow-[0_0_10px_currentColor] ${
            phase === 'idle' ? 'bg-accent animate-pulse' : 'bg-blue-400'
          }`}></div>
          <p className="text-white/40 font-inter text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
            {phase === 'idle' ? 'Thermostatic diagnostics' : 'Engaging elite cooling protocol'}
          </p>
        </div>
      </div>
    </div>
  );
}
