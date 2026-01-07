
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residencial',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por su interés. Nos pondremos en contacto con usted en breve.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'residencial',
      message: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Contacto</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-primary font-bold mb-8">
            Agendar Asesoría
          </h3>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Programe una asesoría personalizada para evaluar su proyecto y recibir una cotización sin compromiso. Nuestro equipo técnico visitará su obra o domicilio para tomar medidas precisas.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm text-primary">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="font-bold text-primary">Teléfono</p>
                <p className="text-gray-600">+57 (300) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm text-primary">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="font-bold text-primary">Correo electrónico</p>
                <p className="text-gray-600">contacto@vidriosgabandy.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-accent">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                  placeholder="300 000 0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Correo electrónico</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                placeholder="juan@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Tipo de proyecto</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
              >
                <option value="residencial">Residencial (Hogar)</option>
                <option value="comercial">Comercial (Oficinas/Locales)</option>
                <option value="industrial">Industrial / Grandes Proyectos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Mensaje</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                placeholder="Cuéntenos un poco más sobre lo que necesita..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest transition-all rounded-sm"
            >
              Agendar Ahora
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
