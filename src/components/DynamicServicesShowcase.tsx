import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Snowflake, Droplets, Wind, Settings, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const servicesData = [
  {
    id: 'coolers',
    title: 'Walk-In Coolers',
    icon: Snowflake,
    headline: 'Protect Your Inventory with Precision Cooling',
    description: 'When thousands of dollars of perishable inventory are on the line, every minute counts. We provide rapid-response diagnostics and heavy-duty repair for commercial refrigeration systems.',
    bullets: [
      'Emergency 24/7 Diagnostics & Repair',
      'Compressor Replacement & Retrofitting',
      'Freon Leak Detection & Repair',
      'Evaporator Coil Maintenance',
      'Precision Temperature Calibration'
    ],
    cta: 'Request Walk-In Repair'
  },
  {
    id: 'ice-machines',
    title: 'Ice Machines',
    icon: Droplets,
    headline: 'Flawless Ice Production for High-Volume Operations',
    description: 'Consistent, clean ice is critical for the hospitality industry. We repair and maintain all major commercial ice makers to ensure you never run out during a rush.',
    bullets: [
      'Preventative Maintenance Contracts',
      'Scale & Mineral Build-up Removal',
      'Bin Control & Sensor Diagnostics',
      'Water Valve & Pump Replacements',
      'Emergency Troubleshooting'
    ],
    cta: 'Request Ice Machine Service'
  },
  {
    id: 'ventilation',
    title: 'Restaurant Ventilation',
    icon: Wind,
    headline: 'Commercial Hood & Exhaust Systems',
    description: 'Keep your kitchen safe, code-compliant, and comfortable. We specialize in the repair and optimization of commercial kitchen exhaust and make-up air systems.',
    bullets: [
      'Make-Up Air Unit (MUA) Repair',
      'Exhaust Fan Motor Replacements',
      'Belt, Bearing & Pulley Service',
      'System Balancing & Airflow Optimization',
      'Emergency Motor Swaps'
    ],
    cta: 'Request Ventilation Service'
  },
  {
    id: 'hvac',
    title: 'Heavy-Duty HVAC',
    icon: Settings,
    headline: 'Industrial Climate Control Systems',
    description: 'From 20-ton rooftop units to complex split systems, we keep your commercial space perfectly conditioned regardless of the brutal Texas and Oklahoma weather.',
    bullets: [
      'Rooftop Unit (RTU) Repair & Replacement',
      'Commercial Split System Upgrades',
      'Ductwork Diagnostics & Repair',
      'Thermostat & Control Wiring',
      'Comprehensive Preventative Maintenance'
    ],
    cta: 'Request HVAC Dispatch'
  }
];

export default function DynamicServicesShowcase() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-10 lg:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10"
          >
            <Settings className="w-5 h-5 text-accent mr-2" />
            <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-white/80 font-barlow-condensed font-semibold tracking-widest uppercase text-sm">Our Capabilities</span>
          </motion.div>
          
          <motion.h2 
            style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-barlow font-black text-white uppercase tracking-tight text-center"
          >
            Specialty Refrigeration <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary drop-shadow-[0_0_10px_rgba(44,69,174,0.8)]">&</span> HVAC
          </motion.h2>
        </div>

        {/* 12-Column Asymmetrical Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Right Column: Interactive Tab Menu (Col 9-12) */}
          <div className="col-span-1 lg:col-span-4 lg:col-start-9 grid grid-cols-2 lg:flex lg:flex-col justify-start gap-2 lg:gap-4 z-20 mb-2 lg:mb-0">
            {servicesData.map((service) => {
              const isActive = service.id === activeServiceId;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group w-full relative text-center lg:text-left lg:py-4 flex flex-col transition-all duration-300 cursor-pointer ${
                    !isActive ? 'lg:hover:translate-x-3 hover:scale-[1.02] lg:hover:scale-100' : ''
                  }`}
                >
                  <div className={`flex items-center justify-center lg:justify-start w-full relative px-2 lg:pl-6 lg:pr-4 py-4 lg:py-0 rounded-xl lg:rounded-none border lg:border-none transition-colors overflow-hidden ${isActive ? 'bg-primary/20 border-primary/30 lg:bg-transparent lg:border-transparent' : 'bg-slate-900/60 border-white/5 lg:bg-transparent lg:border-transparent'}`}>
                    
                    {/* Animated LayoutId Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeServiceIndicator"
                        className="absolute hidden lg:block left-0 top-0 bottom-0 w-1 lg:w-1 bg-accent shadow-[0_0_10px_#e80202]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <h3 style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className={`font-barlow-condensed font-bold uppercase tracking-wider lg:tracking-widest transition-all duration-300 text-[0.8rem] min-[375px]:text-sm sm:text-base lg:text-xl drop-shadow-md ${isActive ? 'lg:text-3xl text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {service.id === 'hvac' ? (
                        <>
                          <span className="lg:hidden">Heavy-Duty<br/>HVAC</span>
                          <span className="hidden lg:inline">Heavy-Duty HVAC</span>
                        </>
                      ) : service.title}
                    </h3>

                    {/* Interactive Arrow Indicator (Desktop Only) */}
                    <ChevronRight 
                      className={`hidden lg:block w-6 h-6 transition-all duration-300 absolute right-4 ${
                        isActive 
                          ? 'opacity-100 text-accent translate-x-0 rotate-180' 
                          : 'opacity-0 -translate-x-4 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0 rotate-0'
                      }`} 
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Left Column: Dynamic Display (Col 1-8) */}
          <div className="col-span-1 lg:col-span-8 lg:col-start-1 lg:row-start-1 relative min-h-[400px] flex items-start lg:pl-10 lg:pr-16">
            
            {/* Ambient Spotlight Glow under text */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-white/5 border border-white/10 mb-4 lg:mb-6 backdrop-blur-md">
                  <ActiveIcon className="w-5 h-5 lg:w-7 lg:h-7 text-white/80" />
                </div>
                
                <h3 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-2xl md:text-3xl lg:text-4xl font-barlow font-black text-white uppercase tracking-tight leading-tight mb-6 lg:mb-8 drop-shadow-2xl">
                  {activeService.headline}
                </h3>
                
                <ul className="space-y-4 mb-10">
                  {activeService.bullets.map((bullet, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-4 flex-shrink-0 opacity-80" />
                      <span style={{ fontFamily: '"Inter", sans-serif' }} className="font-inter text-slate-300 text-lg leading-snug">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  href="tel:9037851972"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white bg-accent rounded-lg shadow-[0_0_20px_rgba(232,2,2,0.3)] hover:shadow-[0_0_35px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all"
                >
                  {activeService.cta}
                  <ArrowRight className="ml-3 w-4 h-4" />
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
