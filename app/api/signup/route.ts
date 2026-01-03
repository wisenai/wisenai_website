import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const expertise = formData.get("expertise") as string
    const otherExpertise = formData.get("otherExpertise") as string
    const expectedRate = formData.get("expectedRate") as string
    const comments = formData.get("comments") as string
    const resume = formData.get("resume") as File | null

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !expectedRate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Prepare email content
    const expertiseDisplay = expertise === "Other" && otherExpertise 
      ? `Other: ${otherExpertise}` 
      : expertise || "Not specified"

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Senior Signup</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0369a1 0%, #1e40af 100%); padding: 30px; border-radius: 12px 12px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Senior Application</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">A new applicant has submitted their information through the WisenAI website.</p>
  </div>
  
  <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <h2 style="color: #0369a1; margin-top: 0; font-size: 18px; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">Contact Information</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; width: 140px;">Name:</td>
        <td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0369a1;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Phone:</td>
        <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #0369a1;">${phone}</a></td>
      </tr>
    </table>

    <h2 style="color: #0369a1; margin-top: 30px; font-size: 18px; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">Professional Details</h2>
    
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #64748b; width: 140px;">Area of Expertise:</td>
        <td style="padding: 8px 0; font-weight: 600;">${expertiseDisplay}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Expected Rate:</td>
        <td style="padding: 8px 0; font-weight: 600;">${expectedRate}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #64748b;">Resume:</td>
        <td style="padding: 8px 0;">${resume ? "✅ Attached" : "❌ Not provided"}</td>
      </tr>
    </table>

    ${comments ? `
    <h2 style="color: #0369a1; margin-top: 30px; font-size: 18px; border-bottom: 2px solid #0369a1; padding-bottom: 10px;">Additional Comments</h2>
    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <p style="margin: 0; white-space: pre-wrap;">${comments}</p>
    </div>
    ` : ""}

    <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 8px; border: 1px solid #6ee7b7;">
      <p style="margin: 0; color: #065f46; font-size: 14px;">
        <strong>Next Steps:</strong> Review this application and reach out to the candidate at your earliest convenience.
      </p>
    </div>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
    <p>This email was sent from the WisenAI website signup form.</p>
    <p>© ${new Date().getFullYear()} WisenAI. All rights reserved.</p>
  </div>
</body>
</html>
`

    const emailText = `
New Senior Application - WisenAI

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}

Professional Details:
- Area of Expertise: ${expertiseDisplay}
- Expected Rate: ${expectedRate}
- Resume: ${resume ? "Attached" : "Not provided"}

${comments ? `Additional Comments:\n${comments}` : ""}

---
This email was sent from the WisenAI website signup form.
`

    // Prepare attachments if resume exists
    const attachments = []
    if (resume) {
      const bytes = await resume.arrayBuffer()
      const buffer = Buffer.from(bytes)
      attachments.push({
        filename: resume.name,
        content: buffer,
      })
    }

    // Send email using Resend
    const { error: emailError } = await resend.emails.send({
      from: "WisenAI Signups <signups@wisenai.com>",
      to: ["sathvik@wisenai.com"],
      subject: `New Senior Application: ${firstName} ${lastName} - ${expertiseDisplay}`,
      html: emailHtml,
      text: emailText,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (emailError) {
      console.error("Email send error:", emailError)
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      )
    }

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "WisenAI <hello@wisenai.com>",
      to: [email],
      subject: "Thank you for applying to WisenAI!",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #0369a1 0%, #1e40af 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to WisenAI!</h1>
  </div>
  
  <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
    <p style="font-size: 18px;">Hi ${firstName},</p>
    
    <p>Thank you for your interest in joining WisenAI! We've received your application and are excited to learn more about your experience.</p>
    
    <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border: 1px solid #6ee7b7; margin: 20px 0;">
      <h3 style="color: #065f46; margin-top: 0;">What happens next?</h3>
      <ul style="color: #065f46; margin-bottom: 0;">
        <li>Our team will review your application within 2-3 business days</li>
        <li>If you're a good fit, we'll reach out to schedule a brief introductory call</li>
        <li>We'll guide you through the onboarding process</li>
      </ul>
    </div>
    
    <p>In the meantime, feel free to learn more about <a href="https://wisenai.com/#for-seniors" style="color: #0369a1;">how WisenAI works</a>.</p>
    
    <p>If you have any questions, don't hesitate to reach out to us at <a href="mailto:sathvik@wisenai.com" style="color: #0369a1;">sathvik@wisenai.com</a>.</p>
    
    <p>Best regards,<br><strong>The WisenAI Team</strong></p>
  </div>
  
  <div style="text-align: center; padding: 20px; color: #64748b; font-size: 12px;">
    <p>© ${new Date().getFullYear()} WisenAI. All rights reserved.</p>
    <p><a href="https://wisenai.com" style="color: #0369a1;">wisenai.com</a></p>
  </div>
</body>
</html>
`,
      text: `
Hi ${firstName},

Thank you for your interest in joining WisenAI! We've received your application and are excited to learn more about your experience.

What happens next?
- Our team will review your application within 2-3 business days
- If you're a good fit, we'll reach out to schedule a brief introductory call
- We'll guide you through the onboarding process

In the meantime, feel free to learn more about how WisenAI works at https://wisenai.com/#for-seniors

If you have any questions, don't hesitate to reach out to us at sathvik@wisenai.com.

Best regards,
The WisenAI Team

---
© ${new Date().getFullYear()} WisenAI. All rights reserved.
https://wisenai.com
`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Signup form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}

