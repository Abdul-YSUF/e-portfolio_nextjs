"use client"; // This indicates that it's a client-side component
import React, { useState } from "react"; // Import React and hooks
import ReCAPTCHA from "./GoogleReCaptchaProvider"; // Import the reCAPTCHA component

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleRecaptchaVerify = (token) => {
        setRecaptchaToken(token); // Store the token from reCAPTCHA
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    // Handle validation on blur
    const handleBlur = (e) => {
        const { name } = e.target; // Get the name of the input field
        validateForm(name); // Validate only the field that lost focus
    };

    // Validate the entire form or a specific field
    const validateForm = (fieldToValidate = null) => {
        let valid = true;
        let formErrors = { ...errors }; // Keep current errors

        // Name validation
        if (!fieldToValidate || fieldToValidate === "name") {
            if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
                formErrors.name = "⚠️ Veuillez entrer un nom valide.";
                valid = false;
            } else {
                formErrors.name = "";
            }
        }

        // Email validation
        if (!fieldToValidate || fieldToValidate === "email") {
            if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                formErrors.email = "⚠️ Veuillez entrer une adresse email valide.";
                valid = false;
            } else {
                formErrors.email = "";
            }
        }

        // Phone validation
        if (!fieldToValidate || fieldToValidate === "phone") {
            if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone)) {
                formErrors.phone = "⚠️ Veuillez entrer un numéro de téléphone valide.";
                valid = false;
            } else {
                formErrors.phone = "";
            }
        }

        // Message validation
        if (!fieldToValidate || fieldToValidate === "message") {
            if (formData.message.trim().length < 25) {
                formErrors.message = "⚠️ Veuillez entrer au moins 25 caractères.";
                valid = false;
            } else {
                formErrors.message = "";
            }
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validez tous les champs avant d'envoyer
        const isValid = validateForm();
        if (!isValid) {
            setStatus("Veuillez corriger les erreurs dans le formulaire.");
            return;
        }

        if (!recaptchaToken) {
            setStatus("reCAPTCHA non vérifié. Veuillez réessayer.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                handleSuccess(); // Appeler la fonction pour gérer le succès
            } else {
                setStatus(`Erreur : ${result.message}`);
            }
        } catch (error) {
            setStatus("Échec de la soumission. Veuillez réessayer.");
            console.error("Erreur de soumission :", error); // Pour déboguer
        }

        setIsSubmitting(false);
    };    

    // Handle success of submission
    const handleSuccess = () => {
        setStatus("Votre formulaire a été soumis avec succès !");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setRecaptchaToken(null); // Clear the token after submission

        setTimeout(() => {
            setStatus("");
        }, 4000);
    };

    return (
        <div className="section_5" id="formulaire">
            <strong className="stitre">Formulaire de contact</strong>
            <div className="div_titre">
                <p className="titre_form">
                    Contactez-moi pour toute question ou proposition via le formulaire de contact ci-dessous
                </p>
            </div>

            <div className="form_contact" id="contact">
                <video className="contact_img" autoPlay loop muted playsInline>
                    <source src="./assets/contact-image.webm" type="video/webm" />
                </video>

                <form className="form" onSubmit={handleSubmit}>
                    <label className="label_form" htmlFor="name">Nom et Prénom</label>
                    <input
                        id="name"
                        className="nom_de_contact input_nuit"
                        type="text"
                        name="name"
                        placeholder="Votre nom et prénom"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur} // Validation on blur
                        required
                    />
                    {errors.name && <p className="error error-msg" role="alert">{errors.name}</p>}

                    <label className="label_form" htmlFor="email">Adresse email</label>
                    <input
                        id="email"
                        className="email input_nuit"
                        type="email"
                        name="email"
                        placeholder="Votre adresse email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur} // Validation on blur
                        required
                    />
                    {errors.email && <p className="error error-msg" role="alert">{errors.email}</p>}

                    <label className="label_form" htmlFor="phone">Numéro de Téléphone</label>
                    <input
                        id="phone"
                        className="telephone input_nuit"
                        type="text"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur} // Validation on blur
                        required
                    />
                    {errors.phone && <p className="error error-msg" role="alert">{errors.phone}</p>}

                    <label className="label_form" htmlFor="message">Ecrivez-moi vos messages</label>
                    <textarea
                        id="message"
                        className="message input_nuit"
                        name="message"
                        placeholder="Vos messages"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur} // Validation on blur
                        required
                        minLength="25"
                    ></textarea>
                    {errors.message && <p className="error error-msg" role="alert">{errors.message}</p>}

                    <ReCAPTCHA onVerify={handleRecaptchaVerify} />

                    <button
                        id="buttonEnvoi"
                        className="button_denvoi input_nuit"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Envoi en cours..." : "Envoyez"}
                    </button>
                </form>
            </div>

            <p>{status}</p>
        </div>
    );
}
