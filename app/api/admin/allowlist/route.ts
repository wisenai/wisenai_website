import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { clerkClient } from '@clerk/nextjs/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// GET - List all allowlisted emails
export async function GET() {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 401 })
  }

  try {
    const client = await clerkClient()
    const allowlistIdentifiers = await client.allowlistIdentifiers.getAllowlistIdentifierList()
    
    return NextResponse.json({
      allowlist: allowlistIdentifiers.data.map(item => ({
        id: item.id,
        identifier: item.identifier,
        createdAt: item.createdAt,
      }))
    })
  } catch (error) {
    console.error('Error fetching allowlist:', error)
    return NextResponse.json({ error: 'Failed to fetch allowlist' }, { status: 500 })
  }
}

// Generate branded invitation email HTML
function generateInvitationEmail(email: string): string {
  const signupUrl = process.env.NEXT_PUBLIC_SITE_URL 
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/sign-up`
    : 'https://wisenai.com/sign-up'
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to WisenAI</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <img src="https://wisenai.com/wisenai-logo.png" alt="WisenAI" width="180" style="display: block; max-width: 180px; height: auto;">
            </td>
          </tr>
          
          <!-- Main Content Card -->
          <tr>
            <td style="background-color: #1e293b; border-radius: 16px; padding: 40px; border: 1px solid #334155;">
              
              <!-- Success Badge -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <div style="background-color: rgba(16, 185, 129, 0.2); border-radius: 50%; width: 64px; height: 64px; display: inline-block; text-align: center; line-height: 64px;">
                      <span style="font-size: 32px;">✓</span>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Headline -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold; color: #ffffff;">
                      You're Approved!
                    </h1>
                  </td>
                </tr>
              </table>
              
              <!-- Subheadline -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 32px;">
                    <p style="margin: 0; font-size: 16px; color: #94a3b8; line-height: 1.6;">
                      Welcome to WisenAI! Your application has been reviewed and approved. 
                      You can now create your account and start contributing your expertise to train ethical AI.
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 32px;">
                    <a href="${signupUrl}" style="display: inline-block; background-color: #0ea5e9; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 16px 32px; border-radius: 8px;">
                      Create Your Account →
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- What's Next Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; border-radius: 12px; padding: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #ffffff;">
                      What happens next?
                    </h2>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">
                          <span style="color: #0ea5e9; font-weight: bold;">1.</span> Create your account using the button above
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">
                          <span style="color: #0ea5e9; font-weight: bold;">2.</span> Complete your profile with your expertise
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">
                          <span style="color: #0ea5e9; font-weight: bold;">3.</span> Our team will reach out with onboarding details
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #94a3b8; font-size: 14px;">
                          <span style="color: #0ea5e9; font-weight: bold;">4.</span> Start contributing and earning from home!
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 30px 0;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;">
                Questions? Contact us at 
                <a href="mailto:sathvik@wisenai.com" style="color: #0ea5e9; text-decoration: none;">sathvik@wisenai.com</a>
              </p>
              <p style="margin: 0; font-size: 12px; color: #475569;">
                © ${new Date().getFullYear()} WisenAI. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// POST - Add email to allowlist and send custom invitation
export async function POST(request: Request) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 401 })
  }

  try {
    const { email } = await request.json()
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Add to Clerk allowlist WITHOUT sending Clerk's default email
    const client = await clerkClient()
    const result = await client.allowlistIdentifiers.createAllowlistIdentifier({
      identifier: normalizedEmail,
      notify: false, // Don't send Clerk's email - we'll send our own
    })

    // Send custom branded invitation email via Resend
    await resend.emails.send({
      from: 'WisenAI <noreply@wisenai.com>',
      to: [normalizedEmail],
      subject: '🎉 You\'re Approved! Welcome to WisenAI',
      html: generateInvitationEmail(normalizedEmail),
    })

    return NextResponse.json({
      success: true,
      allowlistEntry: {
        id: result.id,
        identifier: result.identifier,
        createdAt: result.createdAt,
      }
    })
  } catch (error: any) {
    console.error('Error adding to allowlist:', error)
    
    // Handle duplicate entry
    if (error?.errors?.[0]?.code === 'form_identifier_exists') {
      return NextResponse.json({ error: 'Email is already on the allowlist' }, { status: 409 })
    }
    
    return NextResponse.json({ error: 'Failed to add to allowlist' }, { status: 500 })
  }
}

// DELETE - Remove email from allowlist
export async function DELETE(request: Request) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Allowlist ID is required' }, { status: 400 })
    }

    const client = await clerkClient()
    await client.allowlistIdentifiers.deleteAllowlistIdentifier(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing from allowlist:', error)
    return NextResponse.json({ error: 'Failed to remove from allowlist' }, { status: 500 })
  }
}

