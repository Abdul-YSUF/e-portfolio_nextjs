import { verifyRecaptcha } from '../utils/verifyRecaptcha'; // Utility function for reCAPTCHA verification
import fetch from 'node-fetch';
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message, recaptchaToken } = req.body;

    // Validate the input fields
    if (!name || !email || !phone || !message || !recaptchaToken) {
      return res.status(400).json({ status: 'error', message: 'All fields are required.' });
    }

    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(name)) {
      return res.status(400).json({ status: 'error', message: 'Invalid name format.' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ status: 'error', message: 'Invalid email format.' });
    }

    if (!/^(\+33|0)[1-9](\d{2}){4}$/.test(phone)) {
      return res.status(400).json({ status: 'error', message: 'Invalid phone number format.' });
    }

    if (message.trim().length < 25) {
      return res.status(400).json({ status: 'error', message: 'Message must be at least 25 characters long.' });
    }

    // Verify reCAPTCHA token
    const isValidCaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidCaptcha) {
      return res.status(400).json({ status: 'error', message: 'Invalid reCAPTCHA token.' });
    }

    // If everything is valid, handle the form submission (e.g., send an email, store in a database)
    // For this example, we'll just return a success response
    return res.status(200).json({ status: 'success', message: 'Form submitted successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
