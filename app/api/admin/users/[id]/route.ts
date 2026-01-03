import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { clerkClient } from '@clerk/nextjs/server'

// DELETE - Delete a user
export async function DELETE(
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
    await client.users.deleteUser(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}

