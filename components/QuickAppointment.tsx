
import React, { useState } from 'react';

const QuickAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Vidrios Gabandy, mi nombre es ${formData.name}. Consulta: ${formData.description}`;
    const whatsappUrl = `https://wa.me/50689970406?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', description: '' });
    }, 4000);
  };

  return (
    <div className="bg-secondary py-24 border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Contacto Directo</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic leading-tight">
            ¿Desea una <span className="text-primary not-italic underline decoration-1 underline-offset-8">consulta?</span>
          </h3>
          <p className="mt-6 text-gray-400 text-sm font-medium tracking-wide">
            Envíe su consulta para recibir asesoría especializada vía WhatsApp.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 border-t-2 border-l-2 border-primary/20"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-2 border-r-2 border-primary/20"></div>

          <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-14 backdrop-blur-md shadow-2xl space-y-10 relative z-10 border border-white/5">
            {isSent ? (
              <div className="text-center py-16 animate-pulse">
                <i className="fa-brands fa-whatsapp text-[#25D366] text-5xl mb-6"></i>
                <h4 className="text-white text-2xl font-black uppercase italic mb-2">Abriendo WhatsApp</h4>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest opacity-50">Por favor espere...</p>
              </div>
            ) : (
              <>
                <div className="space-y-8">
                  <div className="relative">
                    <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3 ml-1">Nombre</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-5 bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-all font-bold text-base"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3 ml-1">Consulta</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-6 py-5 bg-black/40 border border-white/10 text-white focus:outline-none focus:border-primary transition-all font-bold text-base resize-none"
                      placeholder="Escriba aquí su requerimiento..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-6 bg-primary hover:bg-white text-secondary font-black uppercase tracking-[0.3em] text-[12px] shadow-2xl transition-all duration-500 transform hover:scale-[1.01]"
                  >
                    Enviar consulta <i className="fa-brands fa-whatsapp ml-3 text-lg"></i>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickAppointment;
