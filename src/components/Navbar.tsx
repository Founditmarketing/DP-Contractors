import { motion } from 'motion/react';
import { Phone, Menu, X, ChevronDown, MapPin, Snowflake, Droplets, Wind, Wrench } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { globalStore } from '../store';

const serviceAreas = [
  { name: "Paris, TX", slug: "paris-tx" },
  { name: "Broken Bow, OK", slug: "broken-bow-ok" },
  { name: "Idabel, OK", slug: "idabel-ok" },
  { name: "Valliant, OK", slug: "valliant-ok" },
  { name: "Hugo, OK", slug: "hugo-ok" },
  { name: "Antlers, OK", slug: "antlers-ok" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const shouldAnimateNav = isHome && !globalStore.hasAppLoaded;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: shouldAnimateNav ? 3.5 : 0, duration: 0.8 }}
      className={`fixed z-50 transition-all duration-500 overflow-hidden md:overflow-visible
        top-4 left-4 right-4 rounded-2xl
        md:top-0 md:left-0 md:right-0 md:rounded-none
        ${isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border border-white/10 md:border-x-0 md:border-t-0 shadow-2xl py-1' 
          : 'glass-nav py-2 border border-white/10 md:border-transparent'}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-[min-height] duration-500 ease-in-out ${isScrolled ? 'min-h-[3.5rem] md:min-h-[4.5rem]' : 'min-h-[4.5rem] md:min-h-[5.5rem]'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/New D&P logo-2.png" 
                alt="D&P Contractors Logo" 
                className={`w-auto object-contain transition-all duration-500 ease-in-out ${isScrolled ? 'h-8 sm:h-12' : 'h-12 sm:h-20'}`} 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-white font-barlow-condensed font-semibold uppercase tracking-widest text-sm transition-colors custom-barlow-menu">Home</Link>
            <Link to="/about" className="text-white/90 hover:text-white font-barlow-condensed font-semibold uppercase tracking-widest text-sm transition-colors custom-barlow-menu">About Us</Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center text-white/90 hover:text-white font-barlow-condensed font-semibold uppercase tracking-widest text-sm transition-colors py-2 custom-barlow-menu">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {showServicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 pt-4 w-[550px] z-50"
                >
                  <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 overflow-hidden">
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/services/walk-in-coolers" onClick={() => setShowServicesDropdown(false)} className="group flex items-start p-3 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <Snowflake className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white mb-1 group-hover:text-primary transition-colors custom-barlow-menu">Walk-In Coolers</h4>
                          <p className="text-xs text-slate-400 font-inter font-light leading-relaxed custom-inter-body">Commercial refrigeration repair & install</p>
                        </div>
                      </Link>
                      <Link to="/services/ice-machines" onClick={() => setShowServicesDropdown(false)} className="group flex items-start p-3 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <Droplets className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white mb-1 group-hover:text-primary transition-colors custom-barlow-menu">Ice Machines</h4>
                          <p className="text-xs text-slate-400 font-inter font-light leading-relaxed custom-inter-body">High-volume descaling & servicing</p>
                        </div>
                      </Link>
                      <Link to="/services/restaurant-ventilation" onClick={() => setShowServicesDropdown(false)} className="group flex items-start p-3 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <Wind className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white mb-1 group-hover:text-primary transition-colors custom-barlow-menu">Restaurant Ventilation</h4>
                          <p className="text-xs text-slate-400 font-inter font-light leading-relaxed custom-inter-body">Grease hood & exhaust systems</p>
                        </div>
                      </Link>
                      <Link to="/services/heavy-duty-hvac" onClick={() => setShowServicesDropdown(false)} className="group flex items-start p-3 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <Wrench className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white mb-1 group-hover:text-primary transition-colors custom-barlow-menu">Heavy-Duty HVAC</h4>
                          <p className="text-xs text-slate-400 font-inter font-light leading-relaxed custom-inter-body">Industrial-scale climate control</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center text-white/90 hover:text-white font-barlow-condensed font-semibold uppercase tracking-widest text-sm transition-colors py-2 custom-barlow-menu">
                Service Areas <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 pt-4 w-[400px] z-50"
                >
                  <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 overflow-hidden">
                    <p className="text-[10px] font-barlow-condensed font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 ml-2 border-b border-white/5 pb-2 custom-barlow-menu">Regional Dispatch Zones</p>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreas.map(area => (
                        <Link key={area.slug} to={`/service-areas/${area.slug}`} onClick={() => setShowDropdown(false)} className="flex items-center p-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700 font-barlow-condensed uppercase tracking-widest group custom-barlow-menu">
                          <MapPin className="w-3.5 h-3.5 mr-2 text-primary group-hover:scale-110 transition-transform" />
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <Link to="/contact" className="text-white/90 hover:text-white font-barlow-condensed font-semibold uppercase tracking-widest text-sm transition-colors custom-barlow-menu">Contact</Link>

            <a
              href="tel:9037851972"
              className="flex items-center bg-accent text-white px-6 py-2.5 rounded-md font-barlow-condensed font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 custom-barlow-menu"
            >
              <Phone className="w-4 h-4 mr-2" />
              24/7 Emergency Repair
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 mr-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-900 border-t border-slate-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-barlow-condensed font-semibold uppercase tracking-widest text-white hover:bg-slate-800 rounded-md custom-barlow-menu">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-barlow-condensed font-semibold uppercase tracking-widest text-white hover:bg-slate-800 rounded-md custom-barlow-menu">About Us</Link>
            
            <div className="px-3 py-2">
              <p className="text-xs font-barlow-condensed font-bold text-slate-500 uppercase tracking-widest mb-2 custom-barlow-menu">Services</p>
              <div className="pl-3 space-y-2 border-l-2 border-primary/30 ml-2">
                <Link to="/services/walk-in-coolers" onClick={() => setIsOpen(false)} className="block text-xs font-barlow-condensed uppercase tracking-widest text-slate-300 hover:text-white custom-barlow-menu">Walk-In Coolers</Link>
                <Link to="/services/ice-machines" onClick={() => setIsOpen(false)} className="block text-xs font-barlow-condensed uppercase tracking-widest text-slate-300 hover:text-white custom-barlow-menu">Ice Machines</Link>
                <Link to="/services/restaurant-ventilation" onClick={() => setIsOpen(false)} className="block text-xs font-barlow-condensed uppercase tracking-widest text-slate-300 hover:text-white custom-barlow-menu">Restaurant Ventilation</Link>
                <Link to="/services/heavy-duty-hvac" onClick={() => setIsOpen(false)} className="block text-xs font-barlow-condensed uppercase tracking-widest text-slate-300 hover:text-white custom-barlow-menu">Heavy-Duty HVAC</Link>
              </div>
            </div>
            <div className="px-3 py-2">
              <p className="text-xs font-barlow-condensed font-bold text-slate-500 uppercase tracking-widest mb-2 custom-barlow-menu">Service Areas</p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map(area => (
                  <Link key={area.slug} to={`/service-areas/${area.slug}`} onClick={() => setIsOpen(false)} className="text-xs font-barlow-condensed uppercase tracking-widest text-slate-300 hover:text-white flex items-center custom-barlow-menu">
                    <MapPin className="w-3 h-3 mr-1 text-primary" /> {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-sm font-barlow-condensed font-semibold uppercase tracking-widest text-white hover:bg-slate-800 rounded-md custom-barlow-menu">Contact</Link>
            <a
              href="tel:9037851972"
              className="flex items-center w-full mt-4 bg-accent text-white px-4 py-4 rounded-md font-barlow-condensed font-bold uppercase tracking-widest text-xs justify-center shadow-md active:scale-95 transition-transform custom-barlow-menu"
            >
              <Phone className="w-5 h-5 mr-2" />
              24/7 Emergency Repair
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
