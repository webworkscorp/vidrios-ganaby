
import React from 'react';

const Quality: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <i className="fa-solid fa-microchip text-primary text-2xl"></i>
            <div className="h-[1px] w-12 bg-white/30"></div>
        </div>
        <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-6 tracking-tight">Tecnología en Vidrio</h3>
        <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-10 italic">
          "Aseguramos una inversión duradera mediante el uso de los materiales más robustos del mercado actual."
        </p>
        <div className="flex flex-wrap justify-center gap-2">
            {['Vidrio Templado', 'Aluminio Estructural', 'Aislamiento Térmico', 'Seguridad GABANDY'].map((tag, i) => (
              <span key={i} className="px-4 py-2 border border-white/20 text-[9px] font-black uppercase tracking-widest text-primary/80">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Quality;
