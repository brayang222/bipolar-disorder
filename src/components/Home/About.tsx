export const About = () => {
  return (
    <section id="about-bipolar" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">¿Qué es el Trastorno Bipolar?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              El trastorno bipolar es una condición de salud mental
              caracterizada por cambios extremos de humor que incluyen altibajos
              emocionales (manía o hipomanía) y bajos (depresión). Estos no son
              solo altibajos normales—son episodios intensos que pueden impactar
              significativamente la vida diaria, las relaciones y el bienestar
              general.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Durante los episodios maníacos, las personas pueden experimentar
              estado de ánimo elevado, aumento de energía, menor necesidad de
              dormir, y a veces comportamiento impulsivo. Los episodios
              depresivos traen sentimientos de tristeza, desesperanza, fatiga, y
              dificultad para concentrarse. Es importante entender que el
              trastorno bipolar es una condición médica legítima que afecta a
              millones de personas en todo el mundo.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Si tú o alguien que conoces está experimentando síntomas del
              trastorno bipolar, es crucial buscar ayuda profesional. Con el
              tratamiento adecuado, apoyo y comprensión, las personas con
              trastorno bipolar pueden vivir vidas plenas. Recuerda, buscar
              ayuda es una señal de fortaleza, no de debilidad.
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Signos y Síntomas
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Cambios extremos de humor
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Cambios en los patrones de sueño
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Dificultad para concentrarse
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Comportamiento impulsivo
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Fatiga o alta energía
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
