import { motion } from 'motion/react';
import { Settings, ShieldCheck, Wrench, PhoneCall } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  title: string;
  description: string;
  content: string[];
  imageSrc: string;
}

export default function ServicePageTemplate({ title, description, content, imageSrc }: ServicePageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-slate-950 pt-40 md:pt-44 lg:pt-48 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Header Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-barlow-condensed font-bold tracking-widest uppercase mb-8 backdrop-blur-md custom-barlow-menu">
              <Settings className="w-4 h-4 mr-2 text-primary" />
              Specialty Service
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-barlow font-black uppercase tracking-tight text-white leading-[1.1] mb-8 drop-shadow-2xl custom-barlow-title">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_10px_rgba(44,69,174,0.8)] px-1" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            
            <div className="space-y-6 mb-12 text-center lg:text-left">
              {content.map((paragraph, index) => (
                <p key={index} className={`font-inter font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 ${index === 0 ? 'text-xl md:text-2xl text-white' : 'text-lg md:text-xl text-slate-400'}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:9037851972"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs md:text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-accent rounded-xl shadow-[0_0_20px_rgba(232,2,2,0.4)] hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all custom-barlow-menu"
              >
                <PhoneCall className="mr-2.5 w-4 h-4" />
                Dispatch Tech Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs md:text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:-translate-y-1 custom-barlow-menu"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative lg:sticky lg:top-32 h-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(44,69,174,0.2)] border border-white/10 mt-12 lg:mt-0 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none"></div>
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto lg:h-full lg:object-cover filter brightness-90 contrast-110 grayscale-[20%] block"
            />
          </motion.div>

        </div>

        {/* Benefits Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-barlow font-bold uppercase tracking-tight text-white mb-4 custom-barlow-title">Unmatched Reliability</h3>
            <p className="text-slate-400 font-inter font-light leading-relaxed custom-inter-body">We use commercial-grade components and precision engineering to ensure your systems never go down during peak operation.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Wrench className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-barlow font-bold uppercase tracking-tight text-white mb-4 custom-barlow-title">Expert Servicing</h3>
            <p className="text-slate-400 font-inter font-light leading-relaxed custom-inter-body">Our technicians are heavily trained specifically on complex commercial and industrial scale {title.toLowerCase()} configurations.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
              <PhoneCall className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-barlow font-bold uppercase tracking-tight text-white mb-4 custom-barlow-title">24/7 Emergency Support</h3>
            <p className="text-slate-400 font-inter font-light leading-relaxed custom-inter-body">When a failure spells disaster for your inventory or business, our dedicated emergency dispatch team deploys immediately.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
