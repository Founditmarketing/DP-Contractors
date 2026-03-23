import { motion } from 'motion/react';
import { Clock, Wrench, ShieldCheck } from 'lucide-react';
import { ElementType } from 'react';

interface TrustFactor {
  title: string;
  description: string;
  icon: ElementType;
}

const trustFactors: TrustFactor[] = [
  {
    title: "Rapid Response 24/7",
    description: "Because inventory loss isn't an option.",
    icon: Clock,
  },
  {
    title: "Specialized Expertise",
    description: "We don't just do AC; we are commercial refrigeration masters.",
    icon: Wrench,
  },
  {
    title: "Uncompromising Quality",
    description: "Ethical business, done right the first time.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section 
      className="pt-36 pb-36 lg:pt-48 lg:pb-48 bg-slate-900 relative overflow-hidden text-white"
      style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)' }}
    >
      {/* Industrial Background to match Emergency Banner */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580983554885-357ed6248552?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-primary/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(44,69,174,0.15)] border border-slate-800 order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            <img 
              src="/dandppic3.png" 
              alt="D&P Contractors Technician" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-700">
                <p className="text-white font-inter font-light text-xl custom-inter-body">"When the walk-in goes down, we step up."</p>
                <p className="text-primary font-barlow-condensed font-semibold mt-2 uppercase tracking-widest text-xs custom-barlow-menu">D&P Contractors Guarantee</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-barlow font-black uppercase tracking-tight text-white mb-4 tracking-wider custom-barlow-title">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">D&P</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-inter font-light custom-inter-body">
                We understand the unique demands of commercial facilities. Our team is built on a foundation of technical mastery and unwavering reliability.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {trustFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative pl-6 py-4 cursor-default"
                >
                  {/* Glowing Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out shadow-[0_0_10px_#2c45ae]"></div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                        <factor.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white mb-2 group-hover:text-blue-100 transition-colors duration-300 custom-barlow-menu">
                        {factor.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed font-inter font-light custom-inter-body">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
