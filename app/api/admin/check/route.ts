import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { isAdminEmail, getAdminEmails } from '@/lib/admin'

// GET - Check if current user is admin
export async function GET() {
  const user = await currentUser()
  
  if (!user) {
    return NextResponse.json({ isAdmin: false, reason: 'not_authenticated' })
  }
  
  const primaryEmail = user.emailAddresses.find(
    e => e.id === user.primaryEmailAddressId
  )?.emailAddress
  
  if (!primaryEmail) {
    return NextResponse.json({ isAdmin: false, reason: 'no_email', userId: user.id })
  }
  
  const adminEmails = getAdminEmails()
  const isAdmin = isAdminEmail(primaryEmail)
  
  // Return debug info to help troubleshoot
  return NextResponse.json({ 
    isAdmin,
    userEmail: primaryEmail,
    adminEmails: adminEmails,
    emailMatch: adminEmails.includes(primaryEmail.toLowerCase())
  })
}

