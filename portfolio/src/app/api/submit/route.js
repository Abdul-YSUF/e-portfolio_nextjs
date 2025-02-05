import nodemailer from "nodemailer";

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Assurez-vous que le token existe
    if (!token) {
      console.error("❌ Aucun token reCAPTCHA reçu.");
      return false;
    }

    // Envoi de la requête correctement formatée
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      }
    );

    const data = await response.json();
    console.log("✅ Réponse reCAPTCHA:", data);

    return data.success;
  } catch (error) {
    console.error("❌ Erreur lors de la validation reCAPTCHA:", error);
    return false;
  }
}

// Fonction d'exportation pour la route API
export async function POST(req) {
  try {
    // Vérification si les données sont bien reçues
    const body = await req.json();
    console.log("📌 Données reçues:", body);

    const { name, email, phone, message, recaptchaToken } = body;

    if (!name || !email || !message || !recaptchaToken) {
      return new Response(JSON.stringify({ message: "Données invalides." }), {
        status: 400,
      });
    }

    // Validation du reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA non valide." }),
        { status: 400 }
      );
    }

    // Configuration du transporteur d'e-mails
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
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
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${
        phone || "Non fourni"
      }\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur API:", error);
    return new Response(JSON.stringify({ message: "Erreur serveur." }), {
      status: 500,
    });
  }
}
