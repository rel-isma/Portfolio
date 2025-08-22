import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    EMAIL_HOST: process.env.EMAIL_HOST ? 'SET' : 'NOT SET',
    EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
    EMAIL_PORT: process.env.EMAIL_PORT ? 'SET' : 'NOT SET',
    EMAIL_SECURE: process.env.EMAIL_SECURE ? 'SET' : 'NOT SET',
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL ? 'SET' : 'NOT SET',
  })
}
