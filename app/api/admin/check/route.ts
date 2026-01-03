import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'

// GET - Check if current user is admin
export async function GET() {
  const adminCheck = await requireAdmin()
  
  if (adminCheck.isAdmin) {
    return NextResponse.json({ isAdmin: true, email: adminCheck.email })
  }
  
  return NextResponse.json({ isAdmin: false })
}

