
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="bg-secondary p-8 md:p-12">
          <h2 className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-4">Nuestro Proceso</h2>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-10 tracking-tight">Gestión Integral</h3>
          
          <div className="space-y-8">
            {[
              { num: '01', title: 'Asesoría Inicial', desc: 'Le ayudamos a elegir el mejor producto para su espacio.' },
              { num: '02', title: 'Instalación Profesional', desc: 'Ejecución técnica con precisión y limpieza.' },
              { num: '03', title: 'Postventa', desc: 'Servicio de seguimiento que le brinda total seguridad.' }
            ].map((step, i) => (
              <div key={i} className="flex items-start space-x-6">
                <span className="text-lg font-black text-primary leading-none italic">{step.num}</span>
                <div className="pt-0.5">
                  <h4 className="text-[10px] font-black text-white uppercase mb-1 tracking-[0.2em]">{step.title}</h4>
                  <p className="text-gray-400 text-[11px] font-medium leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center bg-gray-50 p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-black text-secondary uppercase mb-6">
            Inversión <span className="text-primary italic">Duradera</span>
          </h3>
          <div className="text-sm text-gray-700 leading-relaxed font-medium space-y-4">
            <p>
              Utilizamos materiales de alta calidad para asegurar que su inversión sea duradera y que el resultado final supere sus expectativas.
            </p>
            <p className="font-black text-secondary text-[10px] border-t border-gray-200 pt-6 uppercase tracking-widest">
              Nos encargamos de todo el proceso, desde la toma de medidas hasta la entrega final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
