import nodemailer from "nodemailer";

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Vérification si la clé secrète est bien définie
  if (!secretKey) {
    console.error(
      "❌ RECAPTCHA_SECRET_KEY est manquant dans les variables d'environnement."
    );
    return false;
  }

  const params = new URLSearchParams();
  params.append("secret", secretKey);
  params.append("response", token);

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      }
    );

    const data = await response.json();
    console.log("🔍 Réponse de Google reCAPTCHA:", data);

    return data.success;
  } catch (error) {
    console.error("❌ Erreur lors de la vérification reCAPTCHA:", error);
    return false;
  }
}

// Fonction d'exportation pour la route API
export async function POST(req) {
  try {
    const { name, email, phone, message, recaptchaToken } = await req.json();

    console.log("📩 Données reçues:", {
      name,
      email,
      phone,
      message,
      recaptchaToken,
    });

    // Vérifie si le token reCAPTCHA est présent
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ message: "Token reCAPTCHA manquant." }),
        { status: 400 }
      );
    }

    // Validation du reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA non valide." }),
        { status: 400 }
      );
    }

    console.log("✅ reCAPTCHA validé avec succès");

    // Configuration du transporteur d'e-mails
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé avec succès");

    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur interne:", error);
    return new Response(
      JSON.stringify({ message: "Erreur interne du serveur." }),
      { status: 500 }
    );
  }
}
