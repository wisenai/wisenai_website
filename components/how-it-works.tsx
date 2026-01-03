'use client'

import { useState } from 'react'
import { User, Building2, UserPlus, Users, ClipboardCheck, DollarSign, FileSearch, UserCheck, CheckCircle, Send } from 'lucide-react'

type TabType = 'seniors' | 'companies'

const seniorSteps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Complete a simple application form sharing your background and expertise.',
    time: '5 minutes',
  },
  {
    icon: UserCheck,
    title: 'Get Matched',
    description: 'We match you with AI training tasks that fit your knowledge and experience.',
    time: '1-2 days',
  },
  {
    icon: ClipboardCheck,
    title: 'Complete Tasks',
    description: 'Review AI responses, provide feedback, and share your wisdom at your own pace.',
    time: 'Flexible',
  },
  {
    icon: DollarSign,
    title: 'Get Paid',
    description: 'Receive fair compensation for your valuable contributions via your preferred method.',
    time: 'Weekly',
  },
]

const companySteps = [
  {
    icon: FileSearch,
    title: 'Request Data',
    description: 'Tell us about your AI training needs, data requirements, and quality standards.',
    time: 'Same day',
  },
  {
    icon: Users,
    title: 'Source Experts',
    description: 'We match your project with qualified senior experts from our verified community.',
    time: '1-3 days',
  },
  {
    icon: CheckCircle,
    title: 'Quality Review',
    description: 'All contributions go through our rigorous quality assurance process.',
    time: 'Ongoing',
  },
  {
    icon: Send,
    title: 'Deliver',
    description: 'Receive high-quality, ethically-sourced training data in your preferred format.',
    time: 'On schedule',
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabType>('seniors')

  const steps = activeTab === 'seniors' ? seniorSteps : companySteps

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            A simple process designed to respect your time and maximize your impact.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-slate-900 rounded-xl p-1.5">
            <button
              onClick={() => setActiveTab('seniors')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'seniors'
                  ? 'bg-sky-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="h-5 w-5" />
              For Seniors
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'companies'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="h-5 w-5" />
              For Companies
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const accentColor = activeTab === 'seniors' ? 'sky' : 'emerald'
            
            return (
              <div
                key={step.title}
                className="relative bg-slate-700/50 rounded-xl p-6 border border-slate-600/50"
              >
                {/* Step Number */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  activeTab === 'seniors' ? 'bg-sky-600' : 'bg-emerald-600'
                }`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`p-3 rounded-xl w-fit mb-4 ${
                  activeTab === 'seniors' ? 'bg-sky-600/20' : 'bg-emerald-600/20'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    activeTab === 'seniors' ? 'text-sky-400' : 'text-emerald-400'
                  }`} />
                </div>

                <h3 className={`text-lg font-bold mb-2 ${
                  activeTab === 'seniors' ? 'text-sky-300' : 'text-emerald-300'
                }`}>
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3">{step.description}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  activeTab === 'seniors' 
                    ? 'bg-sky-900/50 text-sky-300' 
                    : 'bg-emerald-900/50 text-emerald-300'
                }`}>
                  {step.time}
                </span>

                {/* Connector Line (except last) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-slate-600" />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {activeTab === 'seniors' ? (
            <a
              href="https://forms.gle/rAsvHSJAD2fQQrBv6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors"
            >
              Start Contributing Today
              <span>→</span>
            </a>
          ) : (
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
            >
              Partner With Us
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

