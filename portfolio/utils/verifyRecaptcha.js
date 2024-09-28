import fetch from 'node-fetch';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function verifyRecaptcha(recaptchaToken) {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    }),
  });

  const data = await response.json();
  return data.success; // Returns true if the token is valid
}
