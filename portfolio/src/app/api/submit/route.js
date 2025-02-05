import nodemailer from "nodemailer";

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: secretKey, response: token }),
      }
    );
    const data = await response.json();
    return data.success;
  } catch {
    return false;
  }
}

// Fonction d'exportation pour la route API
export async function POST(req) {
  try {
    const { name, email, phone, message, recaptchaToken } = await req.json();
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ message: "Token reCAPTCHA manquant." }),
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA non valide." }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
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
    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès." }),
      { status: 200 }
    );
  } catch {
    return new Response(
      JSON.stringify({ message: "Erreur interne du serveur." }),
      { status: 500 }
    );
  }
}
