// utils/verifyRecaptcha.js
import fetch from 'node-fetch';

export async function verifyRecaptcha(recaptchaToken) {
  const secretKey = "6LcJGVEqAAAAAAyQz4X7Nfv2qe8DGLuRg5b1hur7";

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: recaptchaToken,
    }),
  });

  const data = await response.json();
  return data.success; // Returns true if reCAPTCHA is valid
}
