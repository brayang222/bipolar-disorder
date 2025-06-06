"use client";
import { scrollToSection } from "@/utils";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-300 leading-relaxed">
              Ánimo Bipolar está dedicado a crear conciencia sobre el trastorno
              bipolar y proporcionar herramientas para el bienestar mental y
              emocional.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about-bipolar")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Acerca de
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mood-influence")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Influencia del Ánimo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <i
                  className="icon-[proicons--mail] w-4 h-4 mr-2"
                  role="img"
                  aria-hidden="true"
                />
                <span className="text-gray-300">info@animobipolar.com</span>
              </div>
              <div className="flex items-center">
                <i
                  className="icon-[line-md--phone] w-4 h-4 mr-2"
                  role="img"
                  aria-hidden="true"
                />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-300">
                  Twitter | Instagram | YouTube
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ánimo Bipolar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
