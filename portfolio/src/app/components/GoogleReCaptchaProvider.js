import { useEffect, useState } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    const loadReCAPTCHA = () => {
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
    };

    loadReCAPTCHA();
  }, []);

  useEffect(() => {
    const executeReCAPTCHA = async () => {
      if (!recaptchaLoaded || !window.grecaptcha) return;

      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );
        onVerify(token);
      } catch (error) {
        console.error("Erreur lors de l'exécution de reCAPTCHA :", error);
        onVerify(null);
      }
    };

    if (recaptchaLoaded) {
      executeReCAPTCHA();
    }
  }, [recaptchaLoaded, onVerify]);

  return null;
};

export default GoogleReCaptchaProvider;
