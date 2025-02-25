import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, message, service } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Service Order: ${service}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Service: ${service}
    Message: ${message}
  `,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Service Order</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }
        .order-details {
          background-color: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          padding: 15px;
          margin-top: 20px;
        }
        .order-details p {
          margin: 10px 0;
        }
        .highlight {
          font-weight: bold;
          color: #2980b9;
        }
      </style>
    </head>
    <body>
      <h1>New Service Order</h1>
      <div class="order-details">
        <p><span class="highlight">Service:</span> ${service}</p>
        <p><span class="highlight">Name:</span> ${name}</p>
        <p><span class="highlight">Email:</span> ${email}</p>
        <p><span class="highlight">Phone:</span> ${phone}</p>
        <p><span class="highlight">Message:</span> ${message}</p>
      </div>
    </body>
    </html>
  `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Order submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to submit order" }, { status: 500 })
  }
}

