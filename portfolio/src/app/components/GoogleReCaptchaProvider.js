// components/GoogleReCaptchaProvider.js
import React, { useEffect, useState } from "react";

const GoogleReCaptchaProvider = ({ onVerify }) => {
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        const loadReCAPTCHA = () => {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=6LcJGVEqAAAAAESM8_1zh3pHflzU-YqA-nSCC88U`; // Replace with your actual site key
            script.onload = () => setRecaptchaLoaded(true);
            document.body.appendChild(script);
        };

        loadReCAPTCHA();
    }, []);

    const handleVerify = async () => {
        if (recaptchaLoaded) {
            const token = await window.grecaptcha.execute("6LcJGVEqAAAAAESM8_1zh3pHflzU-YqA-nSCC88U", { action: "submit" });
            onVerify(token);
        }
    };

    return (
        <div onClick={handleVerify}>
            {/* You can add a loading spinner or some indication that reCAPTCHA is loading */}
        </div>
    );
};

export default GoogleReCaptchaProvider;
