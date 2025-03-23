import { useEffect, useState, useCallback } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);
  }, []);

  const executeReCAPTCHA = useCallback(async () => {
    if (!recaptchaLoaded || !window.grecaptcha) return null;

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );
      onVerify(token); // Stocke le token dans le state parent
    } catch (error) {
      console.error("Erreur lors de l'exécution de reCAPTCHA :", error);
      onVerify(null);
    }
  }, [recaptchaLoaded, onVerify]);

  return (
    <button onClick={executeReCAPTCHA} className="hidden">
      Vérifier reCAPTCHA
    </button>
  );
};

export default GoogleReCaptchaProvider;
