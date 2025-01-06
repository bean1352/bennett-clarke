import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    console.log('Form data received:', Object.fromEntries(formData.entries()));
    console.log('Environment variables:', {
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      hasPassword: !!process.env.GMAIL_APP_PASSWORD
    });

    const files = formData.getAll("files") as File[];
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return {
          filename: file.name,
          content: buffer
        };
      })
    );

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
        attachments
      };

    console.log('Sending email with options:', {
      ...mailOptions,
      attachments: attachments.map(a => a.filename)
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}