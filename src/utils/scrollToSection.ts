export const scrollToSection = (sectionId: string, router?: any) => {
  if (window.location.pathname !== "/" && router) {
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
