'use client'

import { Quote } from 'lucide-react'

interface TestimonialProps {
  name: string
  age: number
  location: string
  quote: string
  role: string
  image?: string
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Margaret Chen',
    age: 68,
    location: 'San Francisco, CA',
    role: 'Former Teacher (35 years)',
    quote: "After retiring, I felt like my knowledge was going to waste. WisenAI gave me purpose again. I love helping shape AI to be more understanding and ethical. Plus, the extra income is wonderful!",
  },
  {
    name: 'Robert Williams',
    age: 72,
    location: 'Austin, TX',
    role: 'Retired Engineer',
    quote: "I was skeptical at first - I'm not great with computers. But the tasks are simple and meaningful. It feels good knowing my 40 years of experience is making AI better for everyone.",
  },
  {
    name: 'Patricia Johnson',
    age: 65,
    location: 'Chicago, IL',
    role: 'Former Nurse',
    quote: "The flexibility is perfect for me. I work when my grandkids are at school, and I've met wonderful people in the community. It's like having a purpose-driven part-time job from my couch.",
  },
]

function TestimonialCard({ name, age, location, quote, role }: TestimonialProps) {
  // Generate initials for avatar placeholder
  const initials = name.split(' ').map(n => n[0]).join('')

  return (
    <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 hover:border-sky-600/30 transition-colors flex flex-col h-full">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="h-8 w-8 text-sky-400/50" />
      </div>

      {/* Quote Text */}
      <blockquote className="text-slate-300 text-lg leading-relaxed flex-grow mb-6">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-600/50">
        {/* Avatar Placeholder */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-600 to-sky-800 flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>
        
        <div>
          <h4 className="font-semibold text-white">{name}, {age}</h4>
          <p className="text-sm text-slate-400">{role}</p>
          <p className="text-xs text-slate-500">{location}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
            Real Stories from Our Community
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Hear from seniors who are already making an impact while earning from home.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            Join our growing community
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

