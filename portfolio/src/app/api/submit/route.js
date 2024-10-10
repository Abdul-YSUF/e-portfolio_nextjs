import nodemailer from 'nodemailer';

export async function POST(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, message, recaptchaToken } = await req.json();

        // Validez le reCAPTCHA ici
        const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
        if (!isValidRecaptcha) {
            return res.status(400).json({ message: 'reCAPTCHA non valide.' });
        }

        // Configuration du transporteur d'e-mails
        const transporter = nodemailer.createTransport({
            service: 'gmail', // ou un autre service
            auth: {
                user: process.env.EMAIL_USER, // Utilisateur du mail
                pass: process.env.EMAIL_PASS  // Mot de passe du mail
            }
        });

        const mailOptions = {
            from: email, // L'adresse de l'utilisateur soumettant le formulaire
            to: process.env.EMAIL_TO, // Où vous souhaitez recevoir l'email
            subject: `Nouveau message de ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage:\n${message}`
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email envoyé avec succès.' });
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email :", error);
            return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email.' });
        }
    } else {
        return res.status(405).json({ message: 'Méthode non autorisée.' });
    }
}

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
  const secretKey = "6Lfu8V0qAAAAAPyjMksfDbrmX3vl9AZxw6bk4bLP"; // Utilisez votre clé secrète
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
      method: 'POST',
  });
  
  const data = await response.json();
  
  console.log("Vérification du reCAPTCHA :", data); // Ajoutez un log pour déboguer
  
  return data.success;
}
