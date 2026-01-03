import { currentUser } from '@clerk/nextjs/server'

// Admin emails - can be extended via environment variable
const DEFAULT_ADMIN_EMAILS = ['sathvik@wisenai.com']

export function getAdminEmails(): string[] {
  const envEmails = process.env.ADMIN_EMAILS
  if (envEmails) {
    return envEmails.split(',').map(email => email.trim().toLowerCase())
  }
  // Always return lowercase emails
  return DEFAULT_ADMIN_EMAILS.map(email => email.toLowerCase())
}

export function isAdminEmail(email: string): boolean {
  const adminEmails = getAdminEmails()
  return adminEmails.includes(email.toLowerCase())
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  const user = await currentUser()
  if (!user) return false
  
  const primaryEmail = user.emailAddresses.find(
    e => e.id === user.primaryEmailAddressId
  )?.emailAddress
  
  if (!primaryEmail) return false
  
  return isAdminEmail(primaryEmail)
}

export async function requireAdmin(): Promise<{ isAdmin: true; email: string } | { isAdmin: false; error: string }> {
  const user = await currentUser()
  
  if (!user) {
    return { isAdmin: false, error: 'Not authenticated' }
  }
  
  const primaryEmail = user.emailAddresses.find(
    e => e.id === user.primaryEmailAddressId
  )?.emailAddress
  
  if (!primaryEmail) {
    return { isAdmin: false, error: 'No email address found' }
  }
  
  if (!isAdminEmail(primaryEmail)) {
    return { isAdmin: false, error: 'Not authorized as admin' }
  }
  
  return { isAdmin: true, email: primaryEmail }
}

