
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl font-black text-secondary uppercase italic leading-tight mb-3">
          Convertimos sus ideas <span className="text-primary not-italic">en realidad</span>
        </h3>
        <p className="text-[10px] text-textMain font-black uppercase tracking-[0.3em] bg-primary/5 inline-block px-4 py-1 border border-primary/20">
          Solicite una cotización sin compromiso
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-secondary shadow-sm">
        {/* Profile Card */}
        <div className="bg-secondary text-white p-8 md:p-10">
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-black text-primary uppercase leading-tight mb-1">Alexander Calderón Fonseca</h4>
            <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Director General & Consultor Técnico</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[8px] font-black uppercase text-primary mb-0.5">Empresa</p>
              <p className="text-base font-black uppercase tracking-tight">GABANDY GLASS TECHNOLOGY</p>
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-primary mb-0.5">Especialidad</p>
              <p className="text-xs font-bold text-gray-400">Expertos en vidrios y procesos de aluminio.</p>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="bg-white p-8 md:p-10 flex flex-col justify-center space-y-6">
          <div className="group cursor-pointer">
            <p className="text-[8px] font-black text-accent uppercase mb-1.5 tracking-widest">Atención Directa</p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-secondary flex items-center justify-center text-base group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                <i className="fa-solid fa-phone"></i>
              </div>
              <a href="tel:89970406" className="text-xl md:text-2xl font-black text-secondary hover:text-primary transition-colors tracking-tighter">8997-0406</a>
            </div>
          </div>

          <div className="group cursor-pointer">
            <p className="text-[8px] font-black text-accent uppercase mb-1.5 tracking-widest">Correo Corporativo</p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-secondary flex items-center justify-center text-base group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <a href="mailto:ventas@vidriosgabandy.com" className="text-sm md:text-base font-black text-secondary hover:text-primary transition-colors break-all uppercase">ventas@vidriosgabandy.com</a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-[10px] font-black text-secondary uppercase mb-4 tracking-widest">Conecte con nosotros</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/50689970406" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-4 bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all shadow-xl font-black uppercase text-[10px] tracking-widest"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1BmURKSjG7/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-4 bg-primary text-secondary hover:bg-secondary hover:text-primary transition-all shadow-xl font-black uppercase text-[10px] tracking-widest"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xl"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
