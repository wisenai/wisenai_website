import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { clerkClient } from '@clerk/nextjs/server'

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

// POST - Add email to allowlist
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

    const client = await clerkClient()
    const result = await client.allowlistIdentifiers.createAllowlistIdentifier({
      identifier: email.toLowerCase().trim(),
      notify: true, // Send invitation email
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

