import { LinksNavbarProps } from "@/types/navbar.types";
import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LinksNavbar = ({
  navbarClass,
  setMenuOpen,
  isOpen,
}: LinksNavbarProps) => {
  const router = useRouter();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId, router);
    setMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={() => handleScrollToSection("home")}
        className={navbarClass}
      >
        Inicio
      </button>
      <button
        onClick={() => handleScrollToSection("about-bipolar")}
        className={navbarClass}
      >
        Sobre el Trastorno Bipolar
      </button>
      <button
        onClick={() => handleScrollToSection("mood-influence")}
        className={navbarClass}
      >
        Influencia del Ánimo
      </button>
      <button
        onClick={() => handleScrollToSection("testimonials")}
        className={navbarClass}
      >
        Testimonios
      </button>
      <button
        onClick={() => handleScrollToSection("contact")}
        className={navbarClass}
      >
        Contacto
      </button>
      <Link href="/blog" className={navbarClass}>
        Blog
      </Link>
    </>
  );
};
