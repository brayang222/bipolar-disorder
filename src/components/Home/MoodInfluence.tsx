import React from "react";

export const MoodInfluence = () => {
  return (
    <section id="mood-influence" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">
          Cómo los Estados de Ánimo Impactan la Vida Diaria
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Los estados de ánimo en el trastorno bipolar pueden influir
              profundamente en cómo percibimos el mundo y cómo interactuamos con
              él. Durante los episodios maníacos, todo puede parecer posible y
              emocionante, mientras que durante los episodios depresivos, las
              actividades más simples pueden sentirse abrumadoras.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Estrategias de Manejo del Ánimo:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Consciencia y Meditación</strong> - Técnicas para
                    estar presente
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Rutinas Estables</strong> - Mantener horarios
                    regulares
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Ejercicio Regular</strong> - Actividad física para
                    el bienestar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Apoyo Social</strong> - Conexiones significativas
                    con otros
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="video-placeholder">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i
                    className="icon-[lucide--heart] w-8 h-8 text-blue-600"
                    role="img"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-gray-600 font-medium">
                  Video: Manejo del Estado de Ánimo
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Técnicas prácticas para el bienestar emocional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
