import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { CheckCircle, Clock, BookOpen, Mail, ArrowLeft } from 'lucide-react'

export default async function DashboardPage() {
  const user = await currentUser()

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/wisenai-logo.png" 
              alt="WisenAI Logo" 
              className="h-10 w-auto mix-blend-lighten brightness-125"
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm hidden sm:inline">
              {user?.emailAddresses[0]?.emailAddress}
            </span>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to WisenAI, {user?.firstName || 'Expert'}!
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Thank you for joining our community of experienced professionals helping to shape ethical AI.
          </p>
        </div>

        {/* Status Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-sky-900/50 to-emerald-900/50 border border-sky-700/50 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-emerald-500/20 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Account Verified</h2>
                <p className="text-slate-400">You&apos;re approved and ready to contribute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What&apos;s Next?</h2>
          
          <div className="grid gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex gap-4">
              <div className="bg-sky-500/20 p-3 rounded-lg h-fit">
                <Clock className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Await Onboarding Email</h3>
                <p className="text-slate-400">
                  Our team will reach out to you shortly with next steps for onboarding. 
                  This typically happens within 1-2 business days.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex gap-4">
              <div className="bg-sky-500/20 p-3 rounded-lg h-fit">
                <BookOpen className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Complete Training</h3>
                <p className="text-slate-400">
                  You&apos;ll receive training materials to help you understand how to contribute 
                  your expertise to AI training tasks effectively.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex gap-4">
              <div className="bg-sky-500/20 p-3 rounded-lg h-fit">
                <Mail className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Start Contributing</h3>
                <p className="text-slate-400">
                  Once onboarded, you&apos;ll begin receiving AI training tasks matched to your 
                  expertise. Work from home on your own schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">
              Questions? Reach out to us at{' '}
              <a href="mailto:sathvik@wisenai.com" className="text-sky-400 hover:text-sky-300">
                sathvik@wisenai.com
              </a>
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

