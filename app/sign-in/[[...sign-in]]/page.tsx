import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/wisenai-logo.png" 
            alt="WisenAI Logo" 
            className="h-16 w-auto mx-auto mb-4 mix-blend-lighten brightness-125"
          />
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to access your dashboard</p>
        </div>
        <SignIn 
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

