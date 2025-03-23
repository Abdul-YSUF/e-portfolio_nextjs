"use client";
import { useState } from "react";
import GoogleReCaptchaProvider from "./GoogleReCaptchaProvider";
import Calendly from "./Calendly";

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
    setRecaptchaToken(token);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "⚠️ Veuillez entrer un nom et prénom valide.";
      valid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      formErrors.email = "⚠️ Veuillez entrer une adresse email valide.";
      valid = false;
    }

    if (!formData.phone.match(/^(?:\+33|0033|0)[1-9](\d{2}){4}$/)) {
      formErrors.phone = "⚠️ Veuillez entrer un numéro de téléphone valide.";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      formErrors.message = "⚠️ Veuillez entrer au moins 10 caractères.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Veuillez corriger les erreurs dans le formulaire.");
      return;
    }

    if (!recaptchaToken) {
      setStatus("Validation reCAPTCHA en cours...");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Formulaire envoyé avec succès !");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setRecaptchaToken(null);
      } else {
        setStatus(`Erreur : ${result.message}`);
      }
    } catch (error) {
      setStatus("Échec de la soumission. Veuillez réessayer.");
      console.error("Erreur de soumission :", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="formulaire_contact">
      <h2 className="stitre">Formulaire de contact</h2>
      <Calendly />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom et prénom"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Téléphone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Vérification reCAPTCHA */}
        <GoogleReCaptchaProvider onVerify={handleRecaptchaVerify} />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyez"}
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}

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
