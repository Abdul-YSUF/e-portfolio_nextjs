import nodemailer from "nodemailer";

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const data = await response.json();
    console.log("reCAPTCHA Response:", data);

    return data.success;
  } catch (error) {
    console.error("Erreur reCAPTCHA:", error);
    return false;
  }
}

// Fonction d'exportation pour la route API
export async function POST(req) {
  const { name, email, phone, message, recaptchaToken } = await req.json();

  // Validez le reCAPTCHA ici
  const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
  if (!isValidRecaptcha) {
    return new Response(JSON.stringify({ message: "reCAPTCHA non valide." }), {
      status: 400,
    });
  }

  // Configuration du transporteur d'e-mails
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
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

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email envoyé avec succès." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return new Response(
      JSON.stringify({ message: "Erreur lors de l'envoi de l'email." }),
      { status: 500 }
    );
  }
}
