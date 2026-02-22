import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://ceylonparadisetravels.com",
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    travelers,
    tour,
    orderNumber,
    total,
    bookingDate,
    travelDate,
    countryuser,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    let senderEmail = "ceylonparadisetou@gmail.com";
    let adminEmails = [process.env.EMAIL_USER];
    const userCountryCode = (countryuser || "").toUpperCase();

    if (userCountryCode === "IT") {
      senderEmail = "ceylonparadisetou.it@gmail.com";
      adminEmails = [process.env.EMAIL_USER, "ceylonparadisetou.it@gmail.com"];
    }

    let locale = "en-US";
    let currency = "USD";
    let timeZone = "UTC";

    if (userCountryCode === "IT") {
      locale = "it-IT";
      currency = "EUR";
      timeZone = "Europe/Rome";
    }

    const formattedBookingDate = new Date(bookingDate).toLocaleString(locale, {
      timeZone: timeZone,
      dateStyle: "medium",
      timeStyle: "short",
    });

    const formattedTravelDate = new Date(travelDate).toLocaleString(locale, {
      timeZone: timeZone,
      dateStyle: "medium",
    });

    const formattedTotal = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(total);

    const mailOptions = {
      from: `"Tour Booking" <${senderEmail}>`,
      to: adminEmails,
      subject: `New Booking Received - ${orderNumber}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h1 style="color: #4CAF50;">🎉 New Booking Received!</h1>
      <p><strong>Order Number:</strong> ${orderNumber}</p>
      <p><strong>Date:</strong> ${formattedBookingDate}</p>

      <hr style="border: 1px solid #eee; margin: 20px 0;" />

      <h2 style="color: #2196F3;">Customer Information</h2>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Travelers:</strong> ${travelers}</li>
      </ul>

      <hr style="border: 1px solid #eee; margin: 20px 0;" />

      <h2 style="color: #FF5722;">Tour Details</h2>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Tour:</strong> ${tour.title}</li>
        <li><strong>Duration:</strong> ${tour.duration}</li>
        <li><strong>Travel Date:</strong> ${formattedTravelDate}</li>
        <li><strong>Total (${currency}):</strong> ${formattedTotal}</li>
      </ul>

      <p style="color: #555;">Please make sure to confirm and prepare for the tour!</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    const customerMailOptions = {
      from: '"Ceylon Paradise Tours"',
      to: email,
      subject: `Thank you for your booking! - ${tour.title}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; background: #f9f9f9; padding: 20px; border-radius: 10px;">
      <h1 style="color: #4CAF50;">Thank you for your booking, ${firstName}!</h1>
      <p>We are thrilled to have you join us on the tour. Here are your booking details:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Order Number</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${orderNumber}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Tour</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tour.title}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Date</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formattedBookingDate}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formattedTotal}</td>
        </tr>
      </table>

      <p style="color: #555;">We look forward to seeing you and making your tour an unforgettable experience!</p>

      <p style="margin-top: 30px; font-weight: bold; color: #FF5722;">
        Best regards,<br/>
        Ceylon Paradise Tours Team
      </p>
    </div>
  `,
    };

    await transporter.sendMail(customerMailOptions);

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error sending email", error });
  }
}
