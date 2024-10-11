import nodemailer from 'nodemailer';
import fetch from 'node-fetch'; // Utilisé pour les versions antérieures à Node 18

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (!data.success) {
        console.error('Erreur reCAPTCHA:', data['error-codes']); // Log des erreurs
    }

    return data.success;
}

// Fonction d'exportation pour la route API
export async function POST(req) {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Méthode non autorisée.' }), { status: 405 });
    }

    const { name, email, phone, message, recaptchaToken } = await req.json();

    // Validez le reCAPTCHA ici
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
        return new Response(JSON.stringify({ message: 'reCAPTCHA non valide.' }), { status: 400 });
    }

    // Configuration du transporteur d'e-mails
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Email envoyé avec succès.' }), { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return new Response(JSON.stringify({ message: 'Erreur lors de l\'envoi de l\'email.' }), { status: 500 });
    }
}
