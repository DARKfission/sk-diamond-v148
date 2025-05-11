import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    env: process.env.RESEND_API_KEY || "Not found in environment",
  })
}
