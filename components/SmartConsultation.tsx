
import React, { useState } from 'react';
import { getSmartConsultation, ConsultationResponse } from '../services/geminiService';

const SmartConsultation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);
  const [form, setForm] = useState({
    projectType: 'Hogar / Residencial',
    priority: 'Seguridad y Aislamiento de Ruido',
    budgetRange: 'Medio',
    details: ''
  });

  const handleConsult = async () => {
    setLoading(true);
    const data = await getSmartConsultation(
      form.projectType,
      form.priority,
      form.budgetRange,
      form.details
    );
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-secondary p-8 md:p-10 shadow-lg border border-white/5">
        <div className="text-center mb-8">
          <span className="text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-2 block italic opacity-80">IA Technical Advisor</span>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase italic mb-3">Asesoría Inteligente</h3>
          <p className="text-gray-400 max-w-lg mx-auto text-xs font-medium">
            Reciba una recomendación técnica inmediata basada en nuestra trayectoria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-1">
            <label className="block text-[8px] font-black text-primary uppercase tracking-widest">Tipo de Proyecto</label>
            <select
              value={form.projectType}
              onChange={(e) => setForm({...form, projectType: e.target.value})}
              className="w-full p-2.5 bg-white/5 border-b border-primary/30 text-white outline-none focus:border-primary transition-all font-bold text-xs"
            >
              <option className="bg-secondary text-white">Hogar / Residencial</option>
              <option className="bg-secondary text-white">Comercial</option>
              <option className="bg-secondary text-white">Industrial</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block text-[8px] font-black text-primary uppercase tracking-widest">Prioridad Técnica</label>
            <select
              value={form.priority}
              onChange={(e) => setForm({...form, priority: e.target.value})}
              className="w-full p-2.5 bg-white/5 border-b border-primary/30 text-white outline-none focus:border-primary transition-all font-bold text-xs"
            >
              <option className="bg-secondary text-white">Seguridad y Aislamiento</option>
              <option className="bg-secondary text-white">Diseño Minimalista</option>
              <option className="bg-secondary text-white">Eficiencia Térmica</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="block text-[8px] font-black text-primary uppercase tracking-widest">Detalles del Requerimiento</label>
            <textarea
              rows={2}
              placeholder="Describa brevemente su visión..."
              value={form.details}
              onChange={(e) => setForm({...form, details: e.target.value})}
              className="w-full p-2.5 bg-white/5 border-b border-primary/30 text-white outline-none focus:border-primary transition-all font-bold text-xs placeholder:text-white/10"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleConsult}
            disabled={loading}
            className={`px-6 py-3 bg-primary text-secondary font-black uppercase tracking-widest text-[9px] shadow-lg transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
          >
            {loading ? 'Consultando IA...' : 'Obtener Informe Técnico'}
          </button>
        </div>

        {result && (
          <div className="mt-8 p-6 bg-white border-l-2 border-primary animate-fadeIn shadow-lg">
            <h4 className="text-sm font-black text-secondary uppercase mb-3 italic">Recomendación Gabandy Glass</h4>
            <p className="text-textMain text-[13px] leading-relaxed mb-4 font-bold pb-3 border-b border-gray-100">
              "{result.recommendation}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[8px] font-black text-primary uppercase mb-2">Ventajas:</p>
                <ul className="space-y-1">
                  {result.benefits.map((b, i) => (
                    <li key={i} className="flex items-start text-[11px] font-bold text-secondary">
                      <i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[8px] font-black text-primary uppercase mb-2">Tecnología:</p>
                <div className="flex flex-wrap gap-1">
                  {result.suggestedMaterials.map((m, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary text-white text-[8px] font-black uppercase tracking-tighter">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartConsultation;
