"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Gérer les changements dans les champs du formulaire
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

  // Gérer la validation lors de la perte de focus (blur)
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  // Fonction pour valider les champs individuellement
  const validateField = (fieldName) => {
    let fieldErrors = { ...errors };

    if (fieldName === "name") {
      if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
        fieldErrors.name = "⚠️ Veuillez entrer un nom valide.";
      } else {
        fieldErrors.name = "";
      }
    }

    if (fieldName === "email") {
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        fieldErrors.email = "⚠️ Veuillez entrer une adresse email valide.";
      } else {
        fieldErrors.email = "";
      }
    }

    if (fieldName === "phone") {
      if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone)) {
        fieldErrors.phone = "⚠️ Veuillez entrer un numéro de téléphone valide.";
      } else {
        fieldErrors.phone = "";
      }
    }

    if (fieldName === "message") {
      if (formData.message.trim().length < 25) {
        fieldErrors.message = "⚠️ Veuillez entrer au moins 25 caractères.";
      } else {
        fieldErrors.message = "";
      }
    }

    setErrors(fieldErrors);
  };

  // Valider l'ensemble du formulaire avant soumission
  const validateForm = () => {
    let valid = true;
    let formErrors = {};

    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
      formErrors.name = "⚠️ Veuillez entrer un nom valide.";
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = "⚠️ Veuillez entrer une adresse email valide.";
      valid = false;
    }

    if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone)) {
      formErrors.phone = "⚠️ Veuillez entrer un numéro de téléphone valide.";
      valid = false;
    }

    if (formData.message.trim().length < 25) {
      formErrors.message = "⚠️ Veuillez entrer au moins 25 caractères.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields first
    if (Object.values(formData).some((value) => !value)) {
      setStatus("Tous les champs doivent être remplis.");
      return;
    }

    // Validation formulaire
    const isValid = validateForm();

    if (isValid && recaptchaToken) {
      setStatus("Envoi en cours...");
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            recaptchaToken, // Inclure le token reCAPTCHA dans la requête
          }),
        });

        if (response.ok) {
          handleSuccess();
        } else {
          const errorData = await response.json();
          console.error("Erreur de server:", response.status, errorData);
          handleError();
        }
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire :", error);
        handleError();
      } finally {
        setIsSubmitting(false);
      }
    } else if (!recaptchaToken) {
      setStatus("Veuillez valider le reCAPTCHA.");
    }
  };

  // Stocker le token reCAPTCHA lorsque l'utilisateur coche la case
  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  // Gérer le succès de la soumission
  const handleSuccess = () => {
    setStatus("Votre formulaire a été soumis avec succès !");
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  // Gérer l'erreur lors de la soumission
  const handleError = () => {
    setStatus("Erreur lors de la soumission du formulaire.");
  };

  return (
    <div className="section_5" id="formulaire">
      <strong className="stitre">Formulaire de contact</strong>
      <div className="div_titre">
        <p className="titre_form">
          Contactez-moi pour toute question ou proposition via le formulaire de
          contact ci-dessous
        </p>
      </div>

      <div className="form_contact" id="contact">
        <video className="contact_img" autoPlay loop muted playsInline>
          <source src="./assets/contact-image.webm" type="video/webm" />
        </video>

        <form className="form" onSubmit={handleSubmit}>
          <label className="label_form" htmlFor="name">
            Nom et Prénom
          </label>
          <input
            id="name"
            className="nom_de_contact input_nuit"
            type="text"
            name="name"
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
            className="email input_nuit"
            type="email"
            name="email"
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
            className="telephone input_nuit"
            type="number"
            name="phone"
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
            className="message input_nuit"
            name="message"
            placeholder="Vos messages"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength="25"
          ></textarea>
          {errors.message && (
            <p className="error error-msg" role="alert">
              {errors.message}
            </p>
          )}

          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            onChange={handleRecaptchaChange}
          />

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
