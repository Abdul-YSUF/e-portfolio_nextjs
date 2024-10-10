import React, { useEffect, useState } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        const loadReCAPTCHA = () => {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY`; // Remplacez par votre clé de site
            script.onload = () => {
                setRecaptchaLoaded(true);
                console.log("Script reCAPTCHA chargé");
            };
            document.body.appendChild(script);
        };

        loadReCAPTCHA();
    }, []);

    const handleVerify = async () => {
        if (recaptchaLoaded && window.grecaptcha) {
            window.grecaptcha.ready(async () => {
                try {
                    console.log("Exécution de reCAPTCHA en cours");
                    const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: "submit" });
                    onVerify(token);
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

    return null; // Aucun bouton, tout se fait automatiquement
};

export default GoogleReCaptchaProvider;
