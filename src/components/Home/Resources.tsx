import React from "react";

export const Resources = () => {
  return (
    <section id="resources" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Recursos Adicionales</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="resource-card">
            <div className="resource-icon">
              <i
                className="icon-[line-md--phone] w-8 h-8"
                role="img"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Líneas de Apoyo de Salud Mental
            </h3>
            <p className="text-gray-600 mb-4">
              Encuentra líneas directas 24/7 y centros de crisis para apoyo y
              orientación inmediata.
            </p>
            <button className="resource-button">Aprender Más →</button>
          </div>

          <div className="resource-card">
            <div className="resource-icon">
              <i
                className="icon-[lucide--book] w-8 h-8 text-blue-600"
                role="img"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Lecturas Recomendadas
            </h3>
            <p className="text-gray-600 mb-4">
              Libros y artículos sobre vivir con trastorno bipolar y bienestar
              mental.
            </p>
            <button className="resource-button">Aprender Más →</button>
          </div>

          <div className="resource-card">
            <div className="resource-icon">
              <i
                className="icon-[lucide--globe] w-8 h-8 text-blue-600"
                role="img"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Animo para el Bienestar
            </h3>
            <p className="text-gray-600 mb-4">
              Lista curada de animo que promueven la atención plena y el
              bienestar emocional.
            </p>
            <button className="resource-button">Aprender Más →</button>
          </div>
        </div>
      </div>
    </section>
  );
};
