"use server";

import nodemailer from "nodemailer";
import axios from "axios";

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Define the server action
export async function sendContactEmailAction(formData: FormData) {
  try {
    const files = formData.getAll("files") as File[];
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Convert file attachments to buffers
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    // Define the email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      to: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="margin-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong style="color: #555;">Name:</strong> ${name}</p>
          <p><strong style="color: #555;">Email:</strong> ${email}</p>
          ${phone ? `<p><strong style="color: #555;">Phone:</strong> ${phone}</p>` : ""}
          <p><strong style="color: #555;">Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      attachments,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result);

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export async function verifyCaptchaAction(token: string) {
  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    throw new Error("Token not found");
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    if (response.data.success) {
      return { success: true, message: "Captcha verified successfully" };
    } else {
      return { success: false, message: "Failed to verify captcha" };
    }
  } catch (error) {
    console.error("Error verifying captcha:", error);
    throw new Error("Internal Server Error");
  }
}
