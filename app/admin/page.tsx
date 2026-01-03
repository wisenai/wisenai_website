import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { isAdminEmail } from '@/lib/admin'
import Link from 'next/link'
import { ShieldX, LogIn } from 'lucide-react'

export default async function AdminPage() {
  const user = await currentUser()

  // Not logged in - show sign in prompt
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-md w-full text-center">
          <div className="bg-sky-500/20 p-4 rounded-full w-fit mx-auto mb-6">
            <LogIn className="w-12 h-12 text-sky-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Admin Access Required</h1>
          <p className="text-slate-400 mb-6">
            Please sign in with your admin account to access the dashboard.
          </p>
          <Link
            href="/sign-in?redirect_url=/admin"
            className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  // Get user email
  const primaryEmail = user.emailAddresses.find(
    e => e.id === user.primaryEmailAddressId
  )?.emailAddress

  // Check if admin
  if (primaryEmail && isAdminEmail(primaryEmail)) {
    redirect('/admin/dashboard')
  }

  // Not an admin - show access denied
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-red-900/50 rounded-xl p-8 max-w-md w-full text-center">
        <div className="bg-red-500/20 p-4 rounded-full w-fit mx-auto mb-6">
          <ShieldX className="w-12 h-12 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
        <p className="text-slate-400 mb-2">
          You don&apos;t have permission to access the admin dashboard.
        </p>
        <p className="text-slate-500 text-sm mb-6">
          Logged in as: {primaryEmail}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

