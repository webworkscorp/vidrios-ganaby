
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Proceso', id: 'proceso' },
    { name: 'Contacto', id: 'agendar' },
  ];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-xl border-b border-white/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <button 
                onClick={(e) => handleScroll(e, 'inicio')} 
                className="transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="https://i.imgur.com/bnV0Rgk.png" 
                  alt="GABANDY Logo" 
                  className={`w-auto object-contain transition-all duration-500 ${
                    isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                  }`}
                />
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleScroll(e, link.id)}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden flex items-center z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-end space-y-1.5 focus:outline-none group"
                aria-label="Menu"
              >
                <span 
                  className={`block h-[2px] bg-white transition-all duration-500 ease-out ${
                    isOpen ? 'w-full rotate-45 translate-y-[8px]' : 'w-7'
                  }`}
                ></span>
                <span 
                  className={`block h-[2px] bg-white transition-all duration-500 ease-out ${
                    isOpen ? 'opacity-0 translate-x-4' : 'w-4'
                  }`}
                ></span>
                <span 
                  className={`block h-[2px] bg-white transition-all duration-500 ease-out ${
                    isOpen ? 'w-full -rotate-45 -translate-y-[8px]' : 'w-9'
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
      <div 
        className={`fixed inset-0 z-[90] bg-secondary transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8">
          <div className="space-y-6">
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-80">Navegación</p>
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                onClick={(e) => handleScroll(e, link.id)}
                className="block w-full text-left py-2 text-4xl font-black text-primary uppercase tracking-tighter hover:text-white transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <a href="tel:89970406" className="text-primary text-xl font-black italic">8997-0406</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
