import { useEffect, useState } from "react";

const Calendly = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Charger les styles Calendly
    const loadCalendlyStyles = () => {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };

    // Charger le script Calendly et vérifier son chargement
    const loadCalendlyScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        setCalendlyLoaded(true); // Script chargé
      };
      document.body.appendChild(script);
    };

    loadCalendlyStyles();
    loadCalendlyScript();

    // Cleanup pour supprimer les éléments injectés lors du démontage
    return () => {
      const script = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      const link = document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]'
      );
      if (script) script.remove();
      if (link) link.remove();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (calendlyLoaded && window.Calendly) {
      // Appelle Calendly seulement si le script est bien chargé
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/abdulledev/entretien-appointment",
      });
    } else {
      console.error("Calendly script not loaded yet.");
    }
    return false;
  };

  return (
    <div className="calendly_div">
      <h3 className="calendly_titre">Réservez un appel gratuit avec moi</h3>
      <h4 className="calendly_sous-titre">Pour discuter d'une opportunité professionnelle ou d'un projet digital</h4>
      <a className="calendly_link btn btn-primary" href="#" onClick={handleClick}>
        Réserver dès maintenant <span className="font_emoji">📆</span>
      </a>
    </div>
  );
};

export default Calendly;
