import React, { useEffect, useState } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const loadReCAPTCHA = () => {
      if (typeof window !== "undefined" && !window.grecaptcha) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.onload = () => {
          setRecaptchaLoaded(true);
        };
        document.body.appendChild(script);
      }
    };

    loadReCAPTCHA();
  }, []);

  const handleVerify = async () => {
    if (recaptchaLoaded && window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            { action: "submit" }
          );
          if (onVerify && typeof onVerify === "function") {
            onVerify(token);
          } else {
            console.warn(
              "La fonction onVerify n'est pas définie ou n'est pas une fonction"
            );
          }
        } catch (error) {
          console.error("Erreur lors de l'exécution de reCAPTCHA :", error);
        }
      });
    } else {
      console.log("reCAPTCHA non chargé ou grecaptcha est indéfini");
    }
  };

  // Appel automatique de la vérification reCAPTCHA dès que le script est prêt
  useEffect(() => {
    if (recaptchaLoaded) {
      handleVerify();
    }
  }, [recaptchaLoaded]);

  return null;
};

// Exporter handleVerify pour qu'il soit accessible ailleurs
export { handleVerify };

export default GoogleReCaptchaProvider;
