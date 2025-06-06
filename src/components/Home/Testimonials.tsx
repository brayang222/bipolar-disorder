import React from "react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Testimonios de Nuestros Clientes</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-card">
            <div className="testimonial-icon">
              <i
                className="icon-[lucide--message-square-quote] w-8 h-8 text-blue-600"
                role="img"
                aria-hidden="true"
              />
            </div>
            <blockquote className="text-gray-700 italic mb-4">
              "Encontré esperanza y herramientas prácticas que me ayudaron
              durante mis episodios más difíciles. No estoy solo en esto."
            </blockquote>
            <cite className="text-gray-900 font-semibold">
              — María González
            </cite>
            <p className="text-sm text-gray-500">Cliente desde 2023</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-icon">
              <i
                className="icon-[lucide--message-square-quote] w-8 h-8 text-blue-600"
                role="img"
                aria-hidden="true"
              />
            </div>
            <blockquote className="text-gray-700 italic mb-4">
              "Las técnicas de manejo del ánimo que aprendí aquí cambiaron mi
              vida. Ahora tengo más control sobre mis estados emocionales."
            </blockquote>
            <cite className="text-gray-900 font-semibold">
              — Carlos Mendoza
            </cite>
            <p className="text-sm text-gray-500">Cliente desde 2022</p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-icon">
              <i
                className="icon-[lucide--message-square-quote] w-8 h-8 text-blue-600"
                role="img"
                aria-hidden="true"
              />
            </div>
            <blockquote className="text-gray-700 italic mb-4">
              "El apoyo y la comprensión que encontré me dieron la fuerza para
              seguir adelante. Recomiendo este recurso a cualquiera que lo
              necesite."
            </blockquote>
            <cite className="text-gray-900 font-semibold">— Ana Rodríguez</cite>
            <p className="text-sm text-gray-500">Cliente desde 2024</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="testimonial-box">
            <blockquote className="text-xl text-gray-800 italic mb-4">
              "Gracias a las estrategias aprendidas, pude recuperar mi
              estabilidad emocional y mejorar mi calidad de vida
              significativamente."
            </blockquote>
            <cite className="text-gray-600 font-medium">
              —Jordan A., Defensor Bipolar
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
