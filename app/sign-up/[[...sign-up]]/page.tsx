import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/wisenai-logo.png" 
            alt="WisenAI Logo" 
            className="h-16 w-auto mx-auto mb-4 mix-blend-lighten brightness-125"
          />
          <h1 className="text-2xl font-bold text-white mb-2">Join WisenAI</h1>
          <p className="text-slate-400">Create your account to start contributing</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mb-6">
          <p className="text-sm text-amber-400 text-center">
            ⚠️ Sign up is by invitation only. If you haven&apos;t been approved yet, 
            please <a href="/apply" className="text-sky-400 hover:text-sky-300 underline">apply here</a> first.
          </p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-slate-800 border border-slate-700 shadow-xl",
              headerTitle: "text-white",
              headerSubtitle: "text-slate-400",
              socialButtonsBlockButton: "bg-slate-700 border-slate-600 text-white hover:bg-slate-600",
              socialButtonsBlockButtonText: "text-white",
              dividerLine: "bg-slate-600",
              dividerText: "text-slate-400",
              formFieldLabel: "text-slate-300",
              formFieldInput: "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400",
              formButtonPrimary: "bg-sky-600 hover:bg-sky-500 text-white",
              footerActionLink: "text-sky-400 hover:text-sky-300",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-sky-400",
            },
          }}
        />
      </div>
    </div>
  )
}

