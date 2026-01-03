'use client'

import { useEffect, useState, useRef } from 'react'
import { Users, Building2, DollarSign } from 'lucide-react'

interface StatProps {
  icon: React.ElementType
  value: number
  suffix?: string
  prefix?: string
  label: string
  color: string
}

function AnimatedCounter({ value, prefix = '', suffix = '', inView }: { value: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

function StatCard({ icon: Icon, value, suffix = '', prefix = '', label, color, inView }: StatProps & { inView: boolean }) {
  const colorClasses = {
    sky: {
      bg: 'bg-sky-600/20',
      icon: 'text-sky-400',
      value: 'text-sky-300',
    },
    emerald: {
      bg: 'bg-emerald-600/20',
      icon: 'text-emerald-400',
      value: 'text-emerald-300',
    },
    amber: {
      bg: 'bg-amber-600/20',
      icon: 'text-amber-400',
      value: 'text-amber-300',
    },
  }[color] || { bg: 'bg-sky-600/20', icon: 'text-sky-400', value: 'text-sky-300' }

  return (
    <div className="flex flex-col items-center text-center p-8">
      <div className={`p-4 ${colorClasses.bg} rounded-full mb-4`}>
        <Icon className={`h-10 w-10 ${colorClasses.icon}`} />
      </div>
      <div className={`text-4xl sm:text-5xl font-bold ${colorClasses.value} mb-2`}>
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} inView={inView} />
      </div>
      <p className="text-slate-400 text-lg">{label}</p>
    </div>
  )
}

export function ImpactStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: '+',
      label: 'Seniors Contributing Expertise',
      color: 'sky',
    },
    {
      icon: Building2,
      value: 12,
      suffix: '',
      label: 'AI Companies Partnered',
      color: 'emerald',
    },
    {
      icon: DollarSign,
      value: 50000,
      prefix: '$',
      suffix: '+',
      label: 'Paid to Senior Experts',
      color: 'amber',
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Together, we're building a more ethical and human-centered AI future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-slate-800 rounded-2xl border border-slate-700">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          As of January 2026
        </p>
      </div>
    </section>
  )
}

