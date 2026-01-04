'use client'

import { useState } from 'react'
import { CheckCircle2, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const eligibilityCriteria = [
  {
    text: 'Age 55 or older',
    note: 'We value the wisdom that comes with experience',
  },
  {
    text: '15+ years of professional experience',
    note: 'In any field - teaching, healthcare, engineering, business, etc.',
  },
  {
    text: 'OR Retired professional',
    note: 'Retirees from any background are welcome',
  },
]

const faqs = [
  {
    question: 'Do I need any technical skills?',
    answer: "Not at all! Our platform is designed to be simple and accessible. If you can send an email and browse the internet, you can contribute to WisenAI. We provide full training and support.",
  },
  {
    question: "What kind of tasks will I be doing?",
    answer: "You'll review AI-generated content and provide feedback based on your expertise. This might include rating responses for accuracy, helpfulness, or appropriateness, or choosing between different AI outputs. Tasks typically take 5-15 minutes each.",
  },
  {
    question: 'How much can I earn?',
    answer: "Compensation varies based on task complexity and your expertise level. We offer tiered pay: Basic Tasks ($15-20/hr), Expert Tasks ($25-35/hr), and Specialist Tasks ($35-50/hr). You're paid for completed tasks, so you have full control over your earnings.",
  },
  {
    question: "What equipment do I need?",
    answer: "Just a computer or tablet with internet access. A smartphone works for some tasks too. We recommend a quiet space where you can focus, but there's no special equipment required.",
  },
  {
    question: "I'm not 55 yet. Can I still apply?",
    answer: "Our program is specifically designed for seniors and experienced professionals. If you're under 55 but have extensive professional experience (15+ years), please reach out to us directly to discuss your situation.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-700 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-sky-300 transition-colors"
      >
        <span className="font-semibold pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-sky-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export function Eligibility() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
              Who Can Join?
            </h2>
            <p className="text-lg text-slate-300">
              Our program is designed for experienced individuals who want to make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Checklist */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-sky-300 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Eligibility Criteria
              </h3>
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-sky-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{criteria.text}</p>
                      <p className="text-sm text-slate-400">{criteria.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-sky-900/30 rounded-xl border border-sky-800/50">
                <p className="text-sm text-sky-300">
                  <strong>Not sure if you qualify?</strong> Don't worry! Apply anyway and our team will review your application. We value diverse experiences.
                </p>
              </div>

              <a
                href="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors"
              >
                Apply Now
                <span>→</span>
              </a>
            </div>

            {/* FAQ Section */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-sky-300 mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6" />
                Frequently Asked Questions
              </h3>
              <div>
                {faqs.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

