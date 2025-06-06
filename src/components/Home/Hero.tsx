"use client";
import { scrollToSection } from "@/utils";

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title">
            Explorando el Trastorno Bipolar a través de Estados del Ánimo
          </h1>
          <p className="hero-subtitle">
            Comprendiendo los cambios de humor, los desencadenantes y el
            bienestar emocional.
          </p>
          <button
            onClick={() => scrollToSection("about-bipolar")}
            className="cta-button group"
          >
            Aprender Más
            <i
              className="icon-[whh--chevrondown] ml-4 w-3 h-3 group-hover:translate-y-0.5 transition-transform"
              role="img"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
