import nodemailer from "nodemailer";

export default async function handler(req, res) {
const allowedOrigins = [
  "https://ceylon-paradise-travels.vercel.app",
  "http://localhost:4200"
];

const origin = req.headers.origin;

if (allowedOrigins.includes(origin)) {
  res.setHeader("Access-Control-Allow-Origin", origin);
}

res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, contactPhone, message } = req.body;


  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial;">
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp or contact Number:</strong> ${contactPhone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: '"Ceylon Paradise Tours"',
      to: email,
      subject: `We received your message, ${name}`,
      html: `
        <div style="font-family: Arial; background: #f9f9f9; padding: 20px;">
          <h2>Thank you for contacting us, ${name}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your Message:</strong> ${message}</p>
          <p>Best regards,<br/>Ceylon Paradise Tours Team</p>
        </div>
      `,
    });

    res.json({ success: true, message: "Contact emails sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error sending contact email" });
  }
};