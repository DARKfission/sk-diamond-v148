import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Extract form data
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the current date
    const currentDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Create HTML email template that matches website design
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background: linear-gradient(135deg, #154978, #3386cc);
            color: white;
            padding: 20px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .field-label {
            font-weight: 600;
            color: #154978;
            margin-bottom: 5px;
          }
          .field-value {
            margin-bottom: 20px;
            padding: 10px;
            background-color: #f5f7fa;
            border-radius: 4px;
            border-left: 3px solid #f78846;
          }
          .message-box {
            background-color: #f5f7fa;
            border-radius: 4px;
            padding: 15px;
            margin-top: 10px;
            border-left: 3px solid #f78846;
            white-space: pre-line;
          }
          .highlight {
            color: #f78846;
          }
          .timestamp {
            font-style: italic;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            margin-top: 5px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          }
          .logo-container {
            margin-bottom: 15px;
          }
          .logo {
            width: 60px;
            height: 60px;
            background-color: white;
            border-radius: 50%;
            padding: 5px;
            margin: 0 auto;
            display: block;
          }
          .divider {
            height: 1px;
            background-color: #eaeaea;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <div class="logo-container">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-L4KGQFmGxuA78kk0eIessao9LyPfPy.png" alt="SK Diamond Logo" class="logo">
            </div>
            <h1>New Contact Form Submission</h1>
            <div class="timestamp">Received on ${currentDate}</div>
          </div>
          
          <div class="email-body">
            <div class="field-label">Name:</div>
            <div class="field-value">${name}</div>
            
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
            
            <div class="field-label">Phone:</div>
            <div class="field-value">${phone || "Not provided"}</div>
            
            <div class="field-label">Subject:</div>
            <div class="field-value">${subject}</div>
            
            <div class="field-label">Message:</div>
            <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            
            <div class="divider"></div>
            
            <p><strong>Note:</strong> You can reply directly to this email to respond to the sender.</p>
          </div>
          
          <div class="email-footer">
            <p>&copy; ${new Date().getFullYear()} SK Diamond. All rights reserved.</p>
            <p>This is an automated message from your website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "vik@sk-diamond.com",
      to: "shree.kesari.diamond@gmail.com",
      subject: `New Inquiry from Website: ${subject}`,
      html: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("Email sent successfully:", data)

    // Return success response
    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)

    // Return error response
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
