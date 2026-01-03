'use client'

import { FileCheck, Award, CheckCircle2, Server } from 'lucide-react'

const securityFeatures = [
  {
    icon: FileCheck,
    title: 'NDA Protection',
    description: 'All experts sign comprehensive NDAs before starting',
  },
  {
    icon: Server,
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data in transit and at rest',
  },
]

const qualityGuarantees = [
  'Multi-layer quality review process',
  'Expert matching based on domain expertise',
  'Real-time progress tracking and reporting',
  'Dedicated account manager for enterprise clients',
  'Custom workflow integration available',
  'Flexible delivery formats (JSON, CSV, API)',
]

export function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold mb-2">For AI Companies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-4">
            Enterprise-Grade Trust & Security
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We take data security and quality seriously. Your AI training data is protected by industry-leading practices.
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto mb-16">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl border border-emerald-900/50 hover:border-emerald-600/50 transition-colors"
              >
                <div className="p-4 bg-emerald-600/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-emerald-300">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Quality Guarantees */}
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl border border-slate-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-emerald-400" />
            <h3 className="text-2xl font-bold text-emerald-300">Quality Guarantees</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {qualityGuarantees.map((guarantee) => (
              <div key={guarantee} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
          >
            Request a Demo
            <span>→</span>
          </button>
          <p className="text-slate-500 text-sm mt-4">
            Or download our <a href="#" className="text-emerald-400 hover:underline">Data Quality Report (PDF)</a>
          </p>
        </div>
      </div>
    </section>
  )
}

