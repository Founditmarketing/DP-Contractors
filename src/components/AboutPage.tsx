import { motion } from 'motion/react';
import { Clock, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const trustFactors = [
  {
    title: "Rapid Response 24/7",
    description: "Because inventory loss isn't an option. We deploy emergency teams instantly to protect your most critical assets.",
    icon: Clock,
  },
  {
    title: "Specialized Expertise",
    description: "We don't just do AC; we are commercial refrigeration masters with decades of heavy-duty HVAC experience.",
    icon: Wrench,
  },
  {
    title: "Uncompromising Quality",
    description: "Ethical business, done right the first time. We use premium parts and precision engineering.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-40 md:pt-44 lg:pt-48 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <motion.div 
            style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-barlow-condensed font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
            Our Legacy
          </motion.div>
          <motion.h1 
            style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-barlow font-black uppercase tracking-tight text-white leading-[1.1] mb-8"
          >
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Integrity.<br/></span> Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Steel.</span>
          </motion.h1>
          <motion.p 
            style={{ fontFamily: '"Inter", sans-serif' }} initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-inter font-light leading-relaxed"
          >
            We are the premier commercial service, installation, and sales company serving Paris, TX and the surrounding Northeast Texas region. When other professionals fail, they call us.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(44,69,174,0.15)] order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/dandppic3.png" 
              alt="D&P Contractors Professional" 
              className="w-full h-full object-cover filter brightness-90 contrast-[1.15] grayscale-[15%]"
            />
            {/* Stamp Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:-translate-x-0 w-[85%] sm:w-auto text-center lg:text-left z-20 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-700/50">
              <p style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-3xl font-barlow font-black text-white">35+</p>
              <p style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-primary font-barlow-condensed font-semibold uppercase tracking-widest text-xs">Years of Mastery</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div style={{ fontFamily: '"Inter", sans-serif' }} className="space-y-8 text-lg text-slate-400 font-inter font-light leading-relaxed">
              <p className="text-2xl text-white font-normal leading-snug tracking-tight">
                D&P Contractors knows that purchasing and installing equipment is just the beginning of a lifelong relationship. 
              </p>
              <p>
                Our valued customers depend on straight, non-negotiable answers about complex industrial equipment from a professional and highly reliable source. We pride ourselves on expertly matching your facility with the exact mechanical equipment required for both current and future operational loads.
              </p>
              <p>
                Owner Dan Blount brings over 35 years of hardcore, hands-on experience working directly on massive commercial refrigeration and heavy-duty heating systems. Our elite crew is rigorously trained, highly dependable, and equipped with the specialized diagnostics and tools to accurately perform commercial repairs that residential contractors simply cannot handle.
              </p>
              <p>
                Beyond installations, we maintain an extensive mechanical inventory and have vast supply-chain resources allowing us to rapidly locate and deploy critical parts for aging or obscure industrial equipment.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 "Client-First Integrity",
                 "Unrivaled Craftsmanship",
                 "Heavy-Duty Specialization",
                 "Local Texas Roots"
               ].map((value, i) => (
                 <div style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} key={i} className="flex items-center justify-center lg:justify-start text-sm font-barlow-condensed font-bold uppercase tracking-widest text-slate-300">
                   <CheckCircle2 className="w-4 h-4 mr-3 text-primary shrink-0" />
                   {value}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values / Why Choose Us Blocks */}
        <div className="border-t border-white/5 pt-24 mb-32">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-3xl md:text-4xl font-barlow font-black uppercase tracking-tight text-white mb-4">Why Choose D&P</h2>
            <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-slate-400 font-inter font-light max-w-2xl mx-auto">We understand the massive requirements of commercial-scale facilities. Our squad is built entirely on a foundation of technical superiority.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {trustFactors.map((factor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors relative overflow-hidden group text-center md:text-left"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center md:origin-left duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors mx-auto md:mx-0">
                  <factor.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-xl font-barlow font-bold uppercase tracking-widest text-white mb-4">{factor.title}</h3>
                <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-slate-400 font-inter font-light leading-relaxed">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-slate-900/50 mix-blend-overlay"></div>
          
          <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-3xl lg:text-4xl font-barlow font-black uppercase tracking-tight text-white mb-4">
                The Last HVAC Company You Will Call.
              </h2>
              <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-lg text-slate-300 font-inter font-light max-w-xl">
                Ready to experience uncompromising quality for your commercial facilities? Connect with our dedicated professionals today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} href="tel:9037851972"
                className="inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-accent rounded-xl shadow-[0_0_20px_rgba(232,2,2,0.4)] hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all"
              >
                Call (903) 785-1972
              </a>
              <Link
                style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:-translate-y-1 group"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
