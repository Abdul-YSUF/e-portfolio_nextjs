"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Gérer l'affichage du bouton en fonction de la position de défilement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Fonction pour faire défiler vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop}>
          <img src="/assets/scroll-top.svg" alt="Scroll to Top" className="scroll-top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
