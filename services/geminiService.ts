
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export interface ConsultationResponse {
  recommendation: string;
  benefits: string[];
  suggestedMaterials: string[];
}

export const getSmartConsultation = async (
  projectType: string,
  priority: string,
  budgetRange: string,
  extraDetails: string
): Promise<ConsultationResponse | null> => {
  if (!API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Como experto consultor técnico de Vidrios Gabandy (18 años de experiencia), asesora al cliente sobre la mejor solución de ventanería.
      Tipo de proyecto: ${projectType}
      Prioridad del cliente: ${priority}
      Rango de presupuesto aproximado: ${budgetRange}
      Detalles adicionales: ${extraDetails}`,
      config: {
        systemInstruction: "Eres un asesor técnico senior de Vidrios Gabandy. Tu tono es profesional, sobrio y experto. No uses exageraciones. Enfócate en la durabilidad, seguridad y eficiencia energética.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: {
              type: Type.STRING,
              description: "Una recomendación profesional y detallada sobre el tipo de ventanería ideal.",
            },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de 3 beneficios técnicos específicos.",
            },
            suggestedMaterials: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista de materiales o tecnologías sugeridas (ej. Vidrio laminado, marcos de PVC, perfilería de aluminio de alta gama).",
            },
          },
          required: ["recommendation", "benefits", "suggestedMaterials"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error in Gemini consultation:", error);
    return null;
  }
};
