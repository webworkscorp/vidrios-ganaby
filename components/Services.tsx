
import React from 'react';

const servicesData = [
  {
    icon: 'fa-window-maximize',
    name: "Ventanales Modernos",
    description: "Inundan de luz cada espacio, mejorando la estética y amplitud."
  },
  {
    icon: 'fa-shield-halved',
    name: "Aislamiento Eficiente",
    description: "Ventanas que aíslan el ruido exterior y regulan la temperatura."
  },
  {
    icon: 'fa-sliders',
    name: "Soluciones a Medida",
    description: "Productos adaptados a sus necesidades, presupuesto y estilo de vida."
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12 border-l-4 border-primary pl-6">
        <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2">Servicios</h2>
        <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase leading-none">
          Soluciones a su Medida
        </h3>
        <p className="mt-4 text-sm text-gray-600 font-medium leading-relaxed max-w-2xl">
          Le ofrecemos desde ventanales modernos hasta sistemas que regulan la temperatura, siempre adaptándonos a su presupuesto y necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => (
          <div key={idx} className="bg-white p-8 border border-gray-100 shadow-sm hover:border-primary/20 transition-all duration-300">
            <div className="text-primary mb-6">
              <i className={`fa-solid ${service.icon} text-2xl`}></i>
            </div>
            <h4 className="text-xs font-black text-secondary uppercase mb-3 tracking-widest">{service.name}</h4>
            <div className="w-8 h-[2px] bg-primary mb-4"></div>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
