import { motion } from 'motion/react';
import { Snowflake, Fan, Wind, ThermometerSnowflake } from 'lucide-react';

const services = [
  {
    title: 'Walk-In Coolers & Freezers',
    description: 'Critical temperature control for restaurants and warehouses. We build, repair, and maintain heavy-duty walk-ins to protect your inventory.',
    icon: Snowflake,
    highlight: true,
  },
  {
    title: 'Commercial Ice Machines',
    description: 'High-yield ice machine installation, deep cleaning, and rapid repair for hospitality and healthcare facilities.',
    icon: Fan,
    highlight: false,
  },
  {
    title: 'Restaurant Ventilation',
    description: 'Custom hood installations, exhaust fan repair, and make-up air systems to keep your commercial kitchen safe and compliant.',
    icon: Wind,
    highlight: false,
  },
  {
    title: 'Heavy-Duty HVAC',
    description: 'Rooftop units (RTUs), split systems, and industrial heating/cooling solutions designed for massive square footage.',
    icon: ThermometerSnowflake,
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glowing background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-barlow font-black uppercase tracking-tight text-white sm:text-5xl tracking-wider custom-barlow-title"
          >
            Specialty <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Refrigeration</span> & HVAC
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 font-inter font-light leading-relaxed custom-inter-body"
          >
            We specialize in the heavy-duty equipment that keeps your business operational. When your walk-in goes down, we step up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2, 
                rotateY: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{ perspective: 1000 }}
              className={`relative group bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300
                ${service.highlight 
                  ? 'border-primary/50 shadow-[0_0_30px_rgba(44,69,174,0.2)]' 
                  : 'border-slate-800 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(44,69,174,0.2)]'
                }`}
            >
              {/* Hover Illumination Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg
                  ${service.highlight ? 'bg-primary text-white' : 'bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'}
                `}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-barlow-condensed font-bold uppercase tracking-widest text-white mb-4 custom-barlow-menu">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-inter font-light custom-inter-body">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
