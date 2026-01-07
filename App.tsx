import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import QuickAppointment from './components/QuickAppointment';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="inicio" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="nosotros" className="py-20 lg:py-32 scroll-mt-20">
          <About />
        </section>

        <section id="servicios" className="pt-20 pb-10 bg-neutralBg scroll-mt-20">
          <Services />
        </section>

        <section id="proceso" className="pt-10 pb-20 bg-white scroll-mt-20">
          <Process />
        </section>

        <section id="agendar" className="scroll-mt-20 bg-secondary">
          <QuickAppointment />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;