"use client"

import { SiteHeader } from "@/components/site-header"
import { SeniorSignupForm } from "@/components/senior-signup-form"
import { CheckCircle2, Clock, DollarSign, Home as HomeIcon, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <SiteHeader
        onHomeClick={() => window.location.href = "/"}
        onAboutClick={() => window.location.href = "/#about"}
        onLeadershipClick={() => window.location.href = "/#leadership"}
        onBlogClick={() => window.location.href = "/#blog"}
        onLearnMoreClick={() => window.location.href = "/#for-seniors"}
        onContactClick={() => window.location.href = "/#contact"}
        onForAICompaniesClick={() => window.location.href = "/#for-ai-companies"}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-900/50 via-slate-900 to-indigo-900/30 py-12 sm:py-16 border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4 leading-tight">
              Join WisenAI
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Share your lifetime of expertise to help train ethical AI systems. Apply in just a few minutes.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <HomeIcon className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Work from home</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <Clock className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Flexible schedule</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <DollarSign className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">$15-50/hour</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">No minimums</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Application</h2>
                  <SeniorSignupForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Why Join */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-sky-300 mb-4">Why Join WisenAI?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">Your expertise is valued — decades of experience matters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">Make a difference — help AI systems become more ethical and human-centered</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">No technical skills required — if you can email, you can do this</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">Work on your terms — no minimums, no commitments</span>
                    </li>
                  </ul>
                </div>

                {/* Who We're Looking For */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-sky-300 mb-4">Who We're Looking For</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Age 55 or older</li>
                    <li>• 15+ years of professional experience</li>
                    <li>• OR retired from any profession</li>
                    <li>• Computer/tablet with internet access</li>
                  </ul>
                </div>

                {/* Privacy Notice */}
                <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold text-emerald-300 mb-1">Your Privacy Matters</h3>
                      <p className="text-emerald-200/80 text-xs">
                        Your information is kept strictly confidential. We never share your data with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Questions */}
                <div className="text-center text-sm text-slate-400">
                  <p>Have questions?</p>
                  <a 
                    href="mailto:sathvik@wisenai.com" 
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    sathvik@wisenai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-6">
        <div className="container px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm leading-loose text-slate-300 sm:text-left">
            © 2025 WisenAI. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-slate-300 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-300 hover:underline">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

