import nodemailer from 'nodemailer';

// Fonction pour vérifier le reCAPTCHA
async function verifyRecaptcha(token) {
    const secretKey = "6Lfu8V0qAAAAAPyjMksfDbrmX3vl9AZxw6bk4bLP"; // Clé secrète reCAPTCHA
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
        method: 'POST',
    });

    const data = await response.json();
    console.log("Vérification du reCAPTCHA :", data); // Log pour déboguer
    return data.success;
}

export async function POST(req, res) {
    if (req.method === 'POST') {
        try {
            const body = await req.json();
            console.log("Corps de la requête :", body); // Log pour déboguer

            const { name, email, phone, message, recaptchaToken } = body;

            // Vérifiez le reCAPTCHA ici
            const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
            if (!isValidRecaptcha) {
                return res.status(400).json({ message: 'reCAPTCHA non valide.' });
            }

            // Configuration du transporteur d'e-mails
            const transporter = nodemailer.createTransport({
                service: 'gmail', // ou un autre service
                auth: {
                    user: "abdulledev@gmail.com", // Utilisateur du mail
                    pass: "iwozhwyjqabsygab",  // Mot de passe du mail
                },
            });

            const mailOptions = {
                from: email, // L'adresse de l'utilisateur soumettant le formulaire
                to: "abdulledev@gmail.com", // Où vous souhaitez recevoir l'email
                subject: `Nouveau message de ${name}`,
                text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage:\n${message}`,
            };

            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Email envoyé avec succès.' });

        } catch (error) {
            console.error("Erreur lors de la soumission :", error);
            return res.status(500).json({ message: 'Erreur lors de la soumission.' });
        }
    } else {
        return res.status(405).json({ message: 'Méthode non autorisée.' });
    }
}
