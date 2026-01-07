
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 overflow-hidden shadow-2xl">
            <img
              src="https://i.imgur.com/8HPSNiq.png"
              alt="Trabajo de Vidrios Gabandy"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-secondary p-6 shadow-xl hidden sm:block">
            <p className="text-4xl font-black leading-none italic">18</p>
            <p className="text-[9px] uppercase tracking-widest font-black">Años de Trayectoria</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Sobre Nosotros</h2>
            <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase leading-tight">
              Socio de Confianza en su Hogar
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed font-medium">
            <p>
              En Vidrios Gabandy, entendemos que su hogar es una de las inversiones más importantes. Por eso, nos dedicamos a ofrecerle soluciones de ventanería que combinan la seguridad, el diseño y la eficiencia, garantizando la tranquilidad y el confort de su familia.
            </p>
            <p>
              Con 18 años de experiencia en el mercado, hemos perfeccionado nuestro trabajo en el suministro e instalación de ventanería, convirtiéndonos en un socio de confianza para nuestros clientes.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary/40 italic">GABANDY GLASS TECHNOLOGY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
