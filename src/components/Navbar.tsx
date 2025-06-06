"use client";
import { scrollToSection } from "@/utils";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-200 ${
        isScrolled ? "shadow-lg" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Ánimo Bipolar</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleScrollToSection("home")}
                className="nav-link"
              >
                Inicio
              </button>
              <button
                onClick={() => handleScrollToSection("about-bipolar")}
                className="nav-link"
              >
                Sobre el Trastorno Bipolar
              </button>
              <button
                onClick={() => handleScrollToSection("mood-influence")}
                className="nav-link"
              >
                Influencia del Ánimo
              </button>
              <button
                onClick={() => handleScrollToSection("testimonials")}
                className="nav-link"
              >
                Testimonios
              </button>
              <button
                onClick={() => handleScrollToSection("resources")}
                className="nav-link"
              >
                Recursos
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="nav-link"
              >
                Contacto
              </button>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors h-8 w-8"
            >
              {isMenuOpen ? (
                <i
                  className="icon-[tabler--x] text-xl"
                  role="img"
                  aria-hidden="true"
                />
              ) : (
                <i
                  className="icon-[line-md--menu] text-xl"
                  role="img"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleScrollToSection("home")}
                className="mobile-nav-link"
              >
                Inicio
              </button>
              <button
                onClick={() => handleScrollToSection("about-bipolar")}
                className="mobile-nav-link"
              >
                Sobre el Trastorno Bipolar
              </button>
              <button
                onClick={() => handleScrollToSection("mood-influence")}
                className="mobile-nav-link"
              >
                Influencia del Ánimo
              </button>
              <button
                onClick={() => handleScrollToSection("testimonials")}
                className="mobile-nav-link"
              >
                Testimonios
              </button>
              <button
                onClick={() => handleScrollToSection("resources")}
                className="mobile-nav-link"
              >
                Recursos
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="mobile-nav-link"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
