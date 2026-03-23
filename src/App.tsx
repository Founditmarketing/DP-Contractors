/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import DynamicServicesShowcase from './components/DynamicServicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreaCommandCenter from './components/ServiceAreaCommandCenter';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';
import CityLandingPageTemplate from './components/CityLandingPageTemplate';
import FloatingEmergencyButton from './components/FloatingEmergencyButton';
import ContactPage from './components/ContactPage';
import ServicePageTemplate from './components/ServicePageTemplate';
import AboutPage from './components/AboutPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <DynamicServicesShowcase />
      <WhyChooseUs />
      <ServiceAreaCommandCenter />
      <EmergencyBanner />
    </>
  );
}

function CityPageWrapper() {
  const { citySlug } = useParams();
  
  // Basic mapping to convert slug back to City and State
  const cityMap: Record<string, { name: string, state: string }> = {
    'paris-tx': { name: 'Paris', state: 'TX' },
    'broken-bow-ok': { name: 'Broken Bow', state: 'OK' },
    'idabel-ok': { name: 'Idabel', state: 'OK' },
    'valliant-ok': { name: 'Valliant', state: 'OK' },
    'hugo-ok': { name: 'Hugo', state: 'OK' },
    'antlers-ok': { name: 'Antlers', state: 'OK' },
  };

  const cityData = citySlug ? cityMap[citySlug] : null;

  if (!cityData) {
    return <div className="min-h-screen flex items-center justify-center text-white">City not found</div>;
  }

  return <CityLandingPageTemplate cityName={cityData.name} state={cityData.state} />;
}

function ServicePageWrapper() {
  const { serviceSlug } = useParams();
  
  const servicesMap: Record<string, { title: string, description: string, content: string[], imageSrc: string }> = {
    'walk-in-coolers': { 
      title: 'Walk-In Coolers', 
      description: 'Precision repair, maintenance, and installation for commercial walk-in coolers and freezers. We protect your perishable inventory with heavy-duty thermal solutions and rapid-response repairs.', 
      content: [
        "When your walk-in cooler goes down, every minute costs you money and directly threatens your perishable inventory. We understand the high-stakes, critical nature of commercial refrigeration and respond with the professional urgency your business demands.",
        "Our specialized technicians are heavily trained specifically on industrial-grade refrigeration units. We handle everything from sudden compressor failure and dangerous refrigerant leaks to complete system retrofits, expansion valve replacements, and brand-new engineered installations.",
        "With deep, proven experience servicing high-volume restaurants, grocery stores, and medical facilities across the Northeast Texas and Southeast Oklahoma region, D&P Contractors guarantees your most critical assets remain flawlessly protected."
      ],
      imageSrc: '/dandppic1.jpg' 
    },
    'ice-machines': { 
      title: 'Commercial Ice Machines', 
      description: 'High-volume ice machine servicing, deep cleaning, and installation. We ensure your restaurant, hotel, or facility never runs out of sanitary, perfectly-formed ice.', 
      content: [
        "A reliable commercial ice machine is the silent workhorse of the hospitality, food service, and medical industries. When it stops producing, starts scaling, or begins crushing your ice quality, your entire operation grinds to a halt.",
        "We possess comprehensive, elite-level diagnostic capabilities for all major commercial ice machine brands including Hoshizaki, Manitowoc, and Scotsman. From addressing complex freezing faults and water supply flow issues to performing advanced, health-code-compliant deep descaling and sanitization, we bring your equipment back to optimal high-yield production.",
        "Whether you need an emergency repair in the dead of summer, preventative maintenance to avoid a catastrophic breakdown, or are looking to install a new modular unit to scale with your growth, our team provides the technical precision required for absolutely flawless performance."
      ],
      imageSrc: '/dandppic6.png' 
    },
    'restaurant-ventilation': { 
      title: 'Restaurant Ventilation', 
      description: 'Custom grease hood installations, exhaust fan repairs, and make-up air balancing to ensure your commercial kitchen remains compliant, safe, and flawlessly ventilated.', 
      content: [
        "Commercial kitchen ventilation systems are critical infrastructure for fire safety, strict health code compliance, and the overall physical comfort of your line staff. A failing exhaust fan or an improperly balanced make-up air unit instantly creates a hazardous, smoke-filled, and oppressive working environment.",
        "D&P Contractors specializes in the intensive maintenance, heavy-duty repair, and custom installation of commercial restaurant grease hoods, high-velocity upblast exhaust fans, and sophisticated roof-mounted make-up air systems.",
        "We proactively and expertly diagnose hidden airflow imbalances, repair catastrophic high-heat motor failures, and handle incredibly complex industrial ducting problems, keeping your kitchen breathing safely and legally through your toughest dinner rushes."
      ],
      imageSrc: '/dandppic4.jpg' 
    },
    'heavy-duty-hvac': { 
      title: 'Heavy-Duty HVAC', 
      description: 'Industrial-grade heating, ventilation, and air conditioning solutions built to handle extreme thermal loads. We keep massive facilities comfortable and operational 365 days a year.', 
      content: [
        "Industrial manufacturing plants, massive warehouses, and large-scale commercial facilities generate extreme thermal loads that will immediately break and destroy standard residential or light-commercial HVAC equipment.",
        "Our Heavy-Duty HVAC division is deliberately structured and equipped to service, maintain, and install complex multi-ton commercial rooftop units (RTUs), massive liquid chillers, and incredibly intricate multi-zone climate control systems designed for massive square footages.",
        "From comprehensive preventative maintenance contracts specifically designed to extend the life of your massive capital equipment, to deploying rapid-response emergency teams for catastrophic thermal failures in critical manufacturing environments, D&P Contractors delivers completely unrivaled heavy-duty industrial climate control."
      ],
      imageSrc: '/dandppic5.png' 
    },
  };

  const serviceData = serviceSlug ? servicesMap[serviceSlug] : null;

  if (!serviceData) {
    return <div className="min-h-screen flex items-center justify-center text-white bg-slate-950">Service not found</div>;
  }

  return <ServicePageTemplate title={serviceData.title} description={serviceData.description} content={serviceData.content} imageSrc={serviceData.imageSrc} />;
}

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-950 font-inter selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:serviceSlug" element={<ServicePageWrapper />} />
          <Route path="/service-areas/:citySlug" element={<CityPageWrapper />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />}
      <FloatingEmergencyButton />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


