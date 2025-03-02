import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, company, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Company: ${company || "N/A"}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f8f9fa;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              background: linear-gradient(135deg, #6a11cb, #2575fc);
              color: #ffffff;
              padding: 30px 20px;
              text-align: center;
            }
            .email-header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .email-body {
              padding: 30px 20px;
              color: #333333;
            }
            .email-body p {
              font-size: 16px;
              line-height: 1.6;
              margin: 0 0 20px;
            }
            .email-body strong {
              color: #2575fc;
            }
            .message-box {
              background-color: #f8f9fa;
              border-left: 4px solid #2575fc;
              padding: 15px;
              margin-top: 20px;
              border-radius: 4px;
            }
            .email-footer {
              background-color: #f1f3f5;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #666666;
            }
            .email-footer a {
              color: #2575fc;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Header -->
            <div class="email-header">
              <h1>New Contact Form Submission</h1>
            </div>

            <!-- Body -->
            <div class="email-body">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "N/A"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Message:</strong></p>
              <div class="message-box">
                <p>${message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div class="email-footer">
              <p>This email was sent from the contact form on your website. <a href="https://rachidelismaiyly.me">Visit Website</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
