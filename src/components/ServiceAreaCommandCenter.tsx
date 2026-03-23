import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Clock, PhoneCall, AlertCircle, Zap } from 'lucide-react';

const serviceZones = [
  { city: "Paris", state: "TX", zipCodes: ["75460", "75461", "75462"], eta: "15-30 mins", slug: "paris-tx" },
  { city: "Broken Bow", state: "OK", zipCodes: ["74728"], eta: "60-90 mins", slug: "broken-bow-ok" },
  { city: "Idabel", state: "OK", zipCodes: ["74745"], eta: "45-60 mins", slug: "idabel-ok" },
  { city: "Valliant", state: "OK", zipCodes: ["74764"], eta: "45-60 mins", slug: "valliant-ok" },
  { city: "Hugo", state: "OK", zipCodes: ["74743"], eta: "30-45 mins", slug: "hugo-ok" },
  { city: "Antlers", state: "OK", zipCodes: ["74523"], eta: "60-90 mins", slug: "antlers-ok" },
];

export default function ServiceAreaCommandCenter() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof serviceZones[0] | null | 'not-found'>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchQuery: string) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    
    if (!normalizedQuery) {
      setResult(null);
      setHasSearched(false);
      return;
    }

    setHasSearched(true);

    const match = serviceZones.find(zone => 
      zone.city.toLowerCase().includes(normalizedQuery) ||
      zone.zipCodes.some(zip => zip.includes(normalizedQuery))
    );

    if (match) {
      setResult(match);
    } else {
      setResult('not-found');
    }
  };

  // Auto-search as user types (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 2) {
        handleSearch(query);
      } else if (query.length === 0) {
        setResult(null);
        setHasSearched(false);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleCityClick = (city: string) => {
    setQuery(city);
    setHasSearched(true);
    const match = serviceZones.find(z => z.city === city);
    setResult(match || 'not-found');
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Deep Industrial Blueprint Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      {/* Intense Ambient Red/Ice Glows linking to the Hero theme */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full flex blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full flex blur-[120px] pointer-events-none z-0"></div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-90 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
          >
            <MapPin className="w-5 h-5 text-white mr-2" />
            <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-white font-barlow-condensed font-bold tracking-widest uppercase text-xs">Command Center</span>
          </motion.div>
          
          <motion.h2 
            style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl leading-[1.1] sm:text-5xl lg:text-6xl font-barlow font-black uppercase tracking-tight text-white tracking-wider mb-6 drop-shadow-lg px-2"
          >
            Serving Northeast Texas & Southeast Oklahoma
          </motion.h2>
          
          <motion.p
            style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-blue-100 font-barlow-condensed font-semibold tracking-widest uppercase text-sm"
          >
            Equipment down? Find your city to see priority dispatch times.
          </motion.p>
        </div>

        {/* Search Input */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-3xl mx-auto z-20"
        >
          <div className="relative flex items-center group shadow-xl">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-6 flex items-center pointer-events-none z-10">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-12 sm:pl-16 pr-[95px] sm:pr-40 py-4 sm:py-6 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-inter font-light text-[15px] sm:text-lg shadow-[0_0_40px_rgba(44,69,174,0.1)] focus:border-primary/50 focus:bg-slate-900/90 focus:shadow-[0_0_50px_rgba(44,69,174,0.3)] outline-none transition-all duration-500 placeholder:text-slate-500 hover:border-white/20"
              placeholder="City or Zip... (e.g. Paris)"
            />
            <button
              onClick={() => handleSearch(query)}
              className="absolute right-2 sm:right-3 top-2 sm:top-3 bottom-2 sm:bottom-3 px-4 sm:px-8 bg-primary text-white font-barlow-condensed font-bold uppercase tracking-widest text-[0.65rem] sm:text-sm rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(44,69,174,0.5)] hover:shadow-[0_0_25px_rgba(44,69,174,0.8)] flex items-center justify-center whitespace-nowrap z-10"
            >
              Check ETA
            </button>
          </div>
        </motion.div>

        {/* Result Dropdown */}
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {hasSearched && result && (
              <motion.div
                key={result === 'not-found' ? 'not-found' : result.city}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-100"
              >
                {result !== 'not-found' ? (
                  <div className="p-6 sm:p-8 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start mb-3">
                          <span className="relative flex h-4 w-4 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                          </span>
                          <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-green-600 font-barlow-condensed font-bold uppercase tracking-widest text-xs">Priority Zone</span>
                        </div>
                        <h3 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-2xl sm:text-3xl font-barlow font-black uppercase tracking-tight text-slate-900 mb-2 flex items-center justify-center sm:justify-start tracking-wider">
                          <MapPin className="w-7 h-7 text-primary mr-2" />
                          {result.city}, {result.state}
                        </h3>
                        <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-xl text-slate-600 font-inter font-light flex items-center justify-center sm:justify-start">
                          <Clock className="w-6 h-6 text-slate-400 mr-2" />
                          Est. Arrival: <strong className="text-slate-900 ml-2 text-2xl font-normal">{result.eta}</strong>
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 w-full sm:w-auto">
                        <a
                          style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} href="tel:9037851972"
                          className="flex flex-col items-center justify-center w-full px-8 py-4 bg-accent text-white font-barlow-condensed font-bold uppercase tracking-widest text-sm rounded-xl shadow-[0_0_20px_rgba(232,2,2,0.4)] hover:shadow-[0_0_30px_rgba(232,2,2,0.6)] hover:-translate-y-1 transition-all animate-vibrate"
                        >
                          <span className="flex items-center">
                            <PhoneCall className="w-5 h-5 mr-2" />
                            Dispatch Tech Now
                          </span>
                          <span style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-xs font-barlow-condensed font-semibold mt-1 opacity-90 tracking-widest">(903) 785-1972</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 text-center bg-slate-50">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                      <AlertCircle className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 style={{ fontFamily: '"Barlow", sans-serif', textTransform: 'uppercase' }} className="text-2xl font-barlow font-extrabold uppercase tracking-tight text-slate-900 mb-3 tracking-wider">
                      Location Outside Standard Zones
                    </h3>
                    <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-lg text-slate-600 font-inter font-light mb-6 max-w-lg mx-auto leading-relaxed">
                      We serve Northeast TX and Southeast OK. Call us immediately to verify dispatch to your exact location.
                    </p>
                    <a
                      style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} href="tel:9037851972"
                      className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-barlow-condensed font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:bg-slate-800 transition-all"
                    >
                      <PhoneCall className="w-5 h-5 mr-2" />
                      Call to Verify: (903) 785-1972
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Select Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <p style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-center text-blue-200 font-barlow-condensed font-semibold mb-6 uppercase tracking-widest text-xs">Quick Select City</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {serviceZones.map((zone) => (
              <button
                key={zone.slug}
                onClick={() => handleCityClick(zone.city)}
                className="group relative bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 overflow-hidden transition-all duration-300 hover:bg-slate-900/80 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(232,2,2,0.2)] hover:-translate-y-1 text-left flex items-center justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 style={{ fontFamily: '"Barlow Condensed", sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-sm font-barlow-condensed font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors duration-300">
                    {zone.city}
                  </h3>
                  <p style={{ fontFamily: '"Inter", sans-serif' }} className="text-xs text-slate-400 font-inter font-light mt-1">{zone.state}</p>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Zap className="w-4 h-4 text-blue-300 group-hover:text-accent transition-colors duration-300" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
