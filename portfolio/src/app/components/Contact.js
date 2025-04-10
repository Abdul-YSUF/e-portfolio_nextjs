"use client";
import React, { useState } from "react";
import ReCAPTCHA from "./GoogleReCaptchaProvider";
import Calendly from "./Calendly";
import Script from "next/script";

export default function ContactForm() {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const handleLoadRecaptcha = () => {
    setIsRecaptchaLoaded(true);
  };

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

  // Ajout de la fonction pour gérer la vérification du reCAPTCHA
  const handleRecaptchaVerify = (token) => {
    setRecaptchaToken(token);
  };

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

  const handleBlur = (e) => {
    const { name } = e.target;
    validateForm(name);
  };

  const validateForm = (fieldToValidate = null) => {
    let valid = true;
    let formErrors = { ...errors };

    if (!fieldToValidate || fieldToValidate === "name") {
      if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
        formErrors.name = "⚠️ Veuillez entrer un nom et prénom valide.";
        valid = false;
      } else {
        formErrors.name = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "email") {
      if (
        !/^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]*)?\.[a-zA-Z]{2,}$/.test(
          formData.email
        )
      ) {
        formErrors.email = "⚠️ Veuillez entrer une adresse email valide.";
        valid = false;
      } else {
        formErrors.email = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "phone") {
      if (!/^(?:\+33|0033|0)[1-9](\d{2}){4}$/.test(formData.phone)) {
        formErrors.phone =
          "⚠️ Veuillez entrer un numéro de téléphone valide (formats acceptés : +33, 0033 ou 0).";
        valid = false;
      } else {
        formErrors.phone = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "message") {
      if (formData.message.trim().length < 10) {
        formErrors.message = "⚠️ Veuillez entrer au moins 10 caractères.";
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

    const isValid = validateForm();
    if (!isValid) {
      setStatus("Veuillez corriger les erreurs dans le formulaire.");
      setTimeout(() => {
        setStatus("");
      }, 3000);
      return;
    }

    if (!recaptchaToken) {
      setStatus("reCAPTCHA non vérifié. Veuillez réessayer.");
      setTimeout(() => {
        setStatus("");
      }, 3000);
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
          recaptchaToken, // Inclusion du token reCAPTCHA ici
        }),
      });

      const result = await response.json();
      if (response.ok) {
        handleSuccess();
      } else {
        setStatus(`Erreur : ${result.message}`);
        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } catch (error) {
      setStatus("Échec de la soumission. Veuillez réessayer.");
      console.error("Erreur de soumission :", error);
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }

    setIsSubmitting(false);
  };

  const handleSuccess = () => {
    setStatus("Votre formulaire a été soumis avec succès !");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setRecaptchaToken(null);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div className="formulaire_contact" id="formulaire">
      <h2 className="stitre">Formulaire de contact</h2>
      <Calendly />
      <div className="div_titre">
        <p className="titre_form">
          Sinon n'hésitez pas à me contacter pour toute question ou proposition
          via le formulaire de contact ci-dessous
        </p>
      </div>
      <div className="form_contact" id="contact">
        <div className="divers">
          <img
            className="contact_img"
            alt="contact"
            src="https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742851654/call-center-7040784_1280_ijs3rb.png"
          />
        </div>
        <p className="titre_form-mobile">
          Sinon n'hésitez pas à me contacter pour toute question ou proposition
          par le formulaire de contact ci-dessous
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label_form" htmlFor="name">
            Nom et Prénom
          </label>
          <input
            id="name"
            className={`nom_de_contact input_nuit ${
              errors.name ? "input-error" : ""
            }`}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Votre nom et prénom"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && (
            <p className="error error-msg" role="alert">
              {errors.name}
            </p>
          )}

          <label className="label_form" htmlFor="email">
            Adresse email
          </label>
          <input
            id="email"
            className={`email input_nuit ${errors.email ? "input-error" : ""}`}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && (
            <p className="error error-msg" role="alert">
              {errors.email}
            </p>
          )}

          <label className="label_form" htmlFor="phone">
            Numéro de Téléphone
          </label>
          <input
            id="phone"
            className={`telephone input_nuit ${
              errors.phone ? "input-error" : ""
            }`}
            type="text"
            name="phone"
            autoComplete="tel"
            placeholder="Votre numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.phone && (
            <p className="error error-msg" role="alert">
              {errors.phone}
            </p>
          )}

          <label className="label_form" htmlFor="message">
            Ecrivez-moi vos messages
          </label>
          <textarea
            id="message"
            className={`message input_nuit ${
              errors.message ? "input-error" : ""
            }`}
            name="message"
            placeholder="Vos messages"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength="10"
          ></textarea>
          {errors.message && (
            <p className="error error-msg" role="alert">
              {errors.message}
            </p>
          )}

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
        {!isRecaptchaLoaded && (
          <Script
            src="https://www.google.com/recaptcha/api.js"
            onLoad={handleLoadRecaptcha}
            strategy="lazyOnload"
          />
        )}
      </div>
      {status && (
        <div className={`popup-status ${status ? "show" : ""}`}>
          <div className="popup-status-content">
            <p>{status}</p>
          </div>
        </div>
      )}
      <p className="recaptcha-message">
        Ce site est protégé par reCAPTCHA et les{" "}
        <a href="https://policies.google.com/privacy">
          règles de confidentialité
        </a>{" "}
        et les{" "}
        <a href="https://policies.google.com/terms">conditions d’utilisation</a>{" "}
        de Google s'appliquent.
      </p>
    </div>
  );
}
