import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { clerkClient } from '@clerk/nextjs/server'

// GET - List all users
export async function GET() {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 401 })
  }

  try {
    const client = await clerkClient()
    const usersResponse = await client.users.getUserList({
      limit: 100,
      orderBy: '-created_at',
    })

    const users = usersResponse.data.map(user => {
      const primaryEmail = user.emailAddresses.find(
        e => e.id === user.primaryEmailAddressId
      )?.emailAddress

      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: primaryEmail,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        lastSignInAt: user.lastSignInAt,
        banned: user.banned,
      }
    })

    return NextResponse.json({ users })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

