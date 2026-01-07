import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-16 border-t-4 border-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">
          <div className="md:col-span-2">
            <div className="mb-8 block">
              <img 
                src="https://i.imgur.com/bnV0Rgk.png" 
                alt="GABANDY Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm text-xs font-bold uppercase tracking-tight mb-8">
              Soluciones de ventanería con 18 años de experiencia. Seguridad y diseño para su hogar.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">Enlaces</h4>
            <ul className="space-y-4 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
              <li><button onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-white transition-colors block text-left">Inicio</button></li>
              <li><button onClick={(e) => handleScroll(e, 'nosotros')} className="hover:text-white transition-colors block text-left">Nosotros</button></li>
              <li><button onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-white transition-colors block text-left">Servicios</button></li>
              <li><button onClick={(e) => handleScroll(e, 'agendar')} className="hover:text-white transition-colors block text-left text-primary">Agendar</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">Contacto</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-2">Llámenos</p>
                <a href="tel:89970406" className="text-primary text-2xl font-black hover:text-white transition-colors tracking-tighter italic">8997-0406</a>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-gray-500 mb-4">Redes Sociales</p>
                <div className="flex items-center space-x-6">
                  <a 
                    href="https://wa.me/50689970406" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-white transition-colors inline-flex justify-center items-center"
                    aria-label="WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp text-4xl"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1BmURKSjG7/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-white transition-colors inline-flex justify-center items-center"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f text-4xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">
          <p>&copy; {currentYear} GABANDY GLASS TECHNOLOGY. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;