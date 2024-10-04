// api/submit-form.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { recaptchaToken } = req.body;

    // Verify reCAPTCHA token with Google
    const secretKey = "6LcJGVEqAAAAAAyQz4X7Nfv2qe8DGLuRg5b1hur7"; // Replace with your secret key
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();

    if (data.success) {
      // Handle form data, e.g., save to database, send email, etc.
      return res.status(200).json({ message: "Form submitted successfully." });
    } else {
      return res
        .status(400)
        .json({ message: "Invalid reCAPTCHA. Please try again." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
