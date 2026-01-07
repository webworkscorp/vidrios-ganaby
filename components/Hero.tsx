
import React from 'react';

const Hero: React.FC = () => {
  const scrollToAgendar = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('agendar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/ROIZ8WX.jpeg"
          alt="Vidrios Gabandy"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/40 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-primary z-20 shadow-lg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="inline-block px-3 py-1 bg-primary text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            18 Años de Experiencia
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tight">
            SEGURIDAD Y <span className="text-primary block italic">DISEÑO EN VIDRIO</span>
          </h1>
          <p className="text-base text-gray-300 mb-8 max-w-lg font-medium leading-relaxed">
            Suministro e instalación técnica de ventanería. Protegemos su hogar con soluciones eficientes y duraderas.
          </p>
          
          <div className="pt-2">
            <button
              onClick={scrollToAgendar}
              className="inline-block px-8 py-4 bg-primary text-secondary text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Agendar consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
