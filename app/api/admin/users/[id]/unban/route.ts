import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { clerkClient } from '@clerk/nextjs/server'

// POST - Unban/unsuspend a user
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 401 })
  }

  try {
    const { id } = await params
    const client = await clerkClient()
    await client.users.unbanUser(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error unbanning user:', error)
    return NextResponse.json({ error: 'Failed to unban user' }, { status: 500 })
  }
}

