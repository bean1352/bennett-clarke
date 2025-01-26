"use server";

import nodemailer from "nodemailer";
import axios from "axios";
import qs from 'qs';
import { contactEmailTemplate } from "@/utils/contact-form-email-template";

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_COMPANY_EMAIL_CONTACT,
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
      from: process.env.NEXT_PUBLIC_COMPANY_EMAIL_CONTACT,
      to: process.env.NEXT_PUBLIC_COMPANY_EMAIL_CONTACT,
      subject: `Contact Form: ${subject}`,
      html: contactEmailTemplate({ name, email, phone, message }),
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

export async function verifyCaptchaV2Action(token: string) {
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

export async function verifyCaptchaV3Action(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY_V3;

  if (!token) {
    throw new Error("Token not found");
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      qs.stringify({
        secret: secretKey,
        response: token
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (response.data.success && response.data.score > 0.5) {
      return {
        success: true,
        score: response.data.score,
        message: "Captcha verified successfully"
      };
    } else {
      return {
        success: false,
        score: response.data.score,
        message: "Failed to verify captcha or low score"
      };
    }
  } catch (error) {
    console.error("Error verifying captcha:", error);
    throw new Error("Internal Server Error");
  }
}