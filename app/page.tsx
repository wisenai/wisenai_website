"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { DecorativeImage } from "@/components/decorative-image"
import { BioAnimation } from "@/components/bio-animation"
import { Mail, Phone, Calendar, User, Building2, Home as HomeIcon, Clock, DollarSign, Shield, Brain, Heart, Scale, CheckCircle2, Lightbulb, Users, Target, Award, ChevronDown, FileText, Star } from "lucide-react"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { BlogSummitImage } from "@/components/blog-summit-image"
import { TrustBadges } from "@/components/trust-badges"

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const leadershipRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const forAICompaniesRef = useRef<HTMLElement>(null)
  const forSeniorsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)

  // Handle direct URL navigation and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        const refMap: { [key: string]: React.RefObject<HTMLElement | null> } = {
          about: aboutRef,
          blog: blogRef,
          leadership: leadershipRef,
          "learn-more": forSeniorsRef,
          contact: contactRef,
          "for-ai-companies": forAICompaniesRef,
          "for-seniors": forSeniorsRef,
        }

        const ref = refMap[hash]
        if (ref && ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Handle initial load with delay to ensure refs are mounted
    const timer = setTimeout(handleHashChange, 100)

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timer)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement>, hash: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    // Update URL without triggering navigation
    window.history.pushState({}, "", `#${hash}`)
  }

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
    // Remove hash when scrolling to top
    window.history.pushState({}, "", window.location.pathname)
  }

  return (
    <div className="flex min-h-screen flex-col" ref={topRef}>
      <SiteHeader
        onHomeClick={scrollToTop}
        onAboutClick={() => scrollToSection(aboutRef, "about")}
        onLeadershipClick={() => scrollToSection(leadershipRef, "leadership")}
        onBlogClick={() => scrollToSection(blogRef, "blog")}
        onLearnMoreClick={() => scrollToSection(forSeniorsRef, "for-seniors")}
        onContactClick={() => scrollToSection(contactRef, "contact")}
        onForAICompaniesClick={() => scrollToSection(forAICompaniesRef, "for-ai-companies")}
      />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sky-300 opacity-0-initial animate-fade-in-up">
              We Turn Lifetime Expertise into Better AI
              </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mt-6 opacity-0-initial animate-fade-in-up animate-delay-200">
              Seniors train smarter AI. Companies get better data.
            </p>
            <p className="text-lg text-slate-400 mt-4 opacity-0-initial animate-fade-in-up animate-delay-300">
              Join our community of experienced individuals helping to shape ethical, human-centered artificial intelligence.
            </p>
          </div>

          {/* Two-Sided CTA Split */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto opacity-0-initial animate-fade-in-up animate-delay-400">
            {/* For Seniors */}
            <div className="bg-gradient-to-br from-sky-900/50 to-slate-800 border border-sky-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-sky-600/20 rounded-xl">
                  <User className="h-8 w-8 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-sky-300">For Seniors</h2>
              </div>
              <p className="text-slate-300 mb-6">
                Share your lifetime of wisdom to help train ethical AI systems.
              </p>
              
              {/* How It Works Steps */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600/30 text-sky-300 text-sm flex items-center justify-center font-semibold">1</span>
                  <p className="text-slate-400 text-sm">Sign up and tell us about your expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600/30 text-sky-300 text-sm flex items-center justify-center font-semibold">2</span>
                  <p className="text-slate-400 text-sm">Review AI responses and share your feedback</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600/30 text-sky-300 text-sm flex items-center justify-center font-semibold">3</span>
                  <p className="text-slate-400 text-sm">Get paid for your valuable contributions</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="/apply" 
                  className="group inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Start Contributing Today
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <button 
                  onClick={() => scrollToSection(forSeniorsRef, "for-seniors")}
                  className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                >
                  Learn more about the opportunity →
                </button>
              </div>
            </div>

            {/* For Companies */}
            <div className="bg-gradient-to-br from-emerald-900/50 to-slate-800 border border-emerald-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-600/20 rounded-xl">
                  <Building2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-300">For AI Companies</h2>
              </div>
              <p className="text-slate-300 mb-6">
                Access premium, ethically-sourced training data from seasoned experts.
              </p>
              
              {/* How It Works Steps */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 text-sm flex items-center justify-center font-semibold">1</span>
                  <p className="text-slate-400 text-sm">Tell us your data needs and quality standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 text-sm flex items-center justify-center font-semibold">2</span>
                  <p className="text-slate-400 text-sm">We match you with qualified senior experts</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-300 text-sm flex items-center justify-center font-semibold">3</span>
                  <p className="text-slate-400 text-sm">Receive quality-reviewed data on schedule</p>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection(forAICompaniesRef, "for-ai-companies")}
                className="group inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
              >
                Partner With Us
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* From Wisen Labs */}
          <a
            href="/labs"
            className="group mt-6 max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-2xl border border-slate-700 bg-slate-800/60 px-6 py-4 hover:border-sky-700 transition-colors opacity-0-initial animate-fade-in-up animate-delay-400"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 shrink-0">New from Wisen Labs</span>
            <span className="text-slate-300">
              <span className="text-white font-semibold">For organizations:</span> keep your experts&apos; knowledge when they retire with LegacyLoop — and see how AI models handle expert judgment on WisenBench.
            </span>
            <span className="text-sky-400 font-medium sm:ml-auto shrink-0 group-hover:translate-x-1 transition-transform">Explore →</span>
          </a>

          <div className="flex justify-center mt-12 opacity-0-initial animate-fade-in animate-delay-500">
            <button 
              onClick={() => scrollToSection(forSeniorsRef, "for-seniors")}
              className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span className="text-sm mb-2">Learn more</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </section>

        {/* For Seniors Journey Section */}
        <section ref={forSeniorsRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* What Is This? */}
              <div className="text-center mb-16">
                <p className="text-lg font-semibold text-sky-400 mb-2">The Opportunity</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                  What Is This?
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-4">
                  AI companies need real people to teach their systems what good, helpful, and accurate responses look like. 
                  <strong className="text-white"> Your decades of experience make you perfect for this.</strong>
                </p>
                <p className="text-slate-400">
                  Think of it like being a teacher or mentor — but for AI. No technical skills needed.
                </p>
              </div>

              {/* What Will I Do? */}
              <div className="mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 text-center mb-8">
                  What Will I Do?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="font-bold text-white mb-2">Compare Responses</h4>
                    <p className="text-slate-400 text-sm">
                      Read two AI answers and pick which one is better, more helpful, or more accurate.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="font-bold text-white mb-2">Rate Quality</h4>
                    <p className="text-slate-400 text-sm">
                      Give star ratings to AI outputs based on how helpful or accurate they are.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="font-bold text-white mb-2">Share Your Expertise</h4>
                    <p className="text-slate-400 text-sm">
                      Explain why a response is good or suggest how it could be improved.
                    </p>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                    <h4 className="font-bold text-white mb-2">Flag Problems</h4>
                    <p className="text-slate-400 text-sm">
                      Identify when AI responses are inaccurate, inappropriate, or misleading.
                    </p>
                  </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">
                  Tasks typically take 5-15 minutes each. Work at your own pace.
                </p>
              </div>

              {/* What You'll Get */}
              <div className="mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 text-center mb-8">
                  What You'll Get
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                    <HomeIcon className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-1">Work From Home</h4>
                    <p className="text-slate-500 text-sm">No commute, no office</p>
                  </div>
                  <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                    <Clock className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-1">Your Schedule</h4>
                    <p className="text-slate-500 text-sm">Work when it suits you</p>
                  </div>
                  <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                    <CheckCircle2 className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-1">No Commitments</h4>
                    <p className="text-slate-500 text-sm">No minimums required</p>
                  </div>
                  <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                    <DollarSign className="h-8 w-8 text-sky-400 mx-auto mb-3" />
                    <h4 className="font-bold text-white mb-1">$15-50/hr</h4>
                    <p className="text-slate-500 text-sm">Tiered by expertise</p>
                  </div>
                </div>
              </div>

              {/* Who Can Join? */}
              <div className="mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 text-center mb-8">
                  Who Can Join?
                </h3>
                <div className="bg-slate-900/50 rounded-2xl p-8 max-w-xl mx-auto">
              <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-sky-400 flex-shrink-0" />
                      <span className="text-white">Age 55 or older</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-sky-400 flex-shrink-0" />
                      <span className="text-white">15+ years of professional experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-sky-400 flex-shrink-0" />
                      <span className="text-white">OR retired from any profession</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-sky-400 flex-shrink-0" />
                      <span className="text-white">Computer/tablet with internet access</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mt-6 text-center">
                    No technical skills needed. If you can send an email, you can do this.
                  </p>
                </div>
              </div>

              {/* Pay Tiers */}
              <div className="mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 text-center mb-8">
                  Compensation Tiers
                </h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {/* Basic Tier */}
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-sky-600/50 transition-colors">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-900/50 rounded-full mb-4">
                        <DollarSign className="h-6 w-6 text-sky-400" />
                      </div>
                      <h4 className="text-lg font-bold text-sky-400 mb-2">Basic Tasks</h4>
                      <p className="text-3xl font-bold text-white mb-2">$15-20<span className="text-lg text-slate-400">/hr</span></p>
                      <p className="text-slate-400 text-sm">
                        Simple reviews, ratings, and feedback tasks
                      </p>
                    </div>
                  </div>
                  {/* Expert Tier */}
                  <div className="bg-slate-900/50 rounded-2xl p-6 border-2 border-emerald-600/50 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                      MOST COMMON
                    </div>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-900/50 rounded-full mb-4">
                        <Award className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-bold text-emerald-400 mb-2">Expert Tasks</h4>
                      <p className="text-3xl font-bold text-white mb-2">$25-35<span className="text-lg text-slate-400">/hr</span></p>
                      <p className="text-slate-400 text-sm">
                        Domain-specific reviews requiring professional expertise
                      </p>
                    </div>
                  </div>
                  {/* Specialist Tier */}
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-amber-600/30 hover:border-amber-600/50 transition-colors">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-900/50 rounded-full mb-4">
                        <Star className="h-6 w-6 text-amber-400" />
                      </div>
                      <h4 className="text-lg font-bold text-amber-400 mb-2">Specialist Tasks</h4>
                      <p className="text-3xl font-bold text-white mb-2">$35-50<span className="text-lg text-slate-400">/hr</span></p>
                      <p className="text-slate-400 text-sm">
                        Complex technical or specialized domain expertise
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm text-center mt-6">
                  Your rate is determined by your expertise level and the complexity of tasks you qualify for.
                </p>
              </div>

              {/* Ready to Start? */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 mb-4">
                  Ready to Start?
                </h3>
                <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                  Share your wisdom, help shape better AI, and earn from home.
                </p>
                <a 
                  href="/apply" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg rounded-xl transition-colors"
                >
                  Apply Now — It's Free
                  <span>→</span>
                </a>
                <p className="text-slate-500 text-sm mt-4">
                  Takes 5 minutes. No obligation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join WisenAI - Combined Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4">
                Why Your Experience Matters
                </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Your decades of wisdom bring irreplaceable value to AI training. No technical skills required.
              </p>
            </div>

            {/* What You Bring */}
            <div className="grid gap-6 md:grid-cols-3 mb-16">
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="p-3 bg-sky-600/20 rounded-xl w-fit mb-4">
                  <Lightbulb className="h-7 w-7 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-sky-300">Context Awareness</h3>
                <p className="text-slate-400 text-sm">
                  Your life experience helps AI understand nuance that younger trainers miss.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="p-3 bg-sky-600/20 rounded-xl w-fit mb-4">
                  <Brain className="h-7 w-7 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-sky-300">Nuanced Judgment</h3>
                <p className="text-slate-400 text-sm">
                  Decades of experience mean you spot subtle differences in meaning and tone.
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                <div className="p-3 bg-sky-600/20 rounded-xl w-fit mb-4">
                  <Scale className="h-7 w-7 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-sky-300">Ethical Perspective</h3>
                <p className="text-slate-400 text-sm">
                  Your diverse viewpoints help create more balanced, fair AI systems.
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl">
                <HomeIcon className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">Work from home</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl">
                <Clock className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">Choose your hours</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">No commitments</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl">
                <DollarSign className="h-6 w-6 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">$15-50/hr tiered pay</span>
              </div>
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300 mb-2">
                About WisenAI
              </h2>
              <p className="text-sm text-slate-500 mb-6">Founded in 2024</p>
              <p className="text-lg md:text-xl text-slate-300 mb-4">
                We bridge the gap between senior experience and AI innovation. The wisdom accumulated over decades of life is invaluable in training AI systems to be more human-centered and ethical.
              </p>
              <p className="text-slate-400 mb-12">
                Our mission: create meaningful opportunities for seniors to contribute their knowledge while ensuring fair compensation and flexible working conditions.
              </p>

              {/* Logo Symbolism */}
              <div className="border-t border-slate-700 pt-10">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/wisenai-logo.png" 
                    alt="WisenAI Logo" 
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4">Our Symbol</h3>
                <p className="text-slate-300 mb-4">
                  Our logo tells the story of WisenAI. On the left, organic brush strokes and tree rings represent the human touch—the beauty of handcrafted effort and the wisdom accumulated over many years that seniors possess. On the right, structured neural networks represent the world of artificial intelligence.
                </p>
                <p className="text-slate-400">
                  Where they meet, something powerful emerges: better human input leads to better AI, and better AI creates better experiences for everyone—especially the seniors who helped build it. This virtuous cycle is at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={leadershipRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-sky-300">Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sathvik.jpg-eDA1XHXkDG1ZT7Mm1R8WymSrs9eqYz.jpeg"
                  alt="Sathvik Subramanian wearing a suit and medal"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">Sathvik Subramanian</h3>
                <p className="text-slate-300">
                  Sathvik Subramanian is a student at Newark Academy, NJ. He has been passionate about issues concerning
                  seniors and disabled from a young age. He sees the wisdom in his grandparents and other older adults
                  that can be of immense value but is being ignored because of technology barriers and disabilities due
                  to age and other factors.
                </p>
                <p className="text-slate-300">
                  He believes AI will level the playing field and create opportunities for everyone to contribute and
                  wants to create conditions that lead us there - leading to the founding of Wisen AI. He is passionate
                  about Mathematics and Music, and is a self-taught AI engineer who wants to employ his skills towards
                  helping society.
                </p>
                <p className="text-slate-300">
                  Sathvik is primarily a Python developer but dabbles in C++/Java and JavaScript. He is a founding
                  member of the Newark Academy AI Committee which advises the academy on AI policy and use. He is also
                  the host of the "AI Innovators - High school edition" Podcast.
                </p>
                <p className="text-slate-300">
                  He has won numerous math competitions from a young age - Mathcounts and Math League. Sathvik is a
                  virtuoso pianist who has performed solo and as part of a chamber music quintet in Carnegie Hall,
                  Lincoln Center in the US, and overseas (Euro Arts, Poland). He is also a Jazz pianist in the
                  nationally renowned Newark Academy Jazz Program.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <BioAnimation />
            </div>
          </div>
        </section>

        <section ref={blogRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-sky-300">Blog</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group">
                <a
                  href="https://www.newarka.edu/life-at-na/news/default-board-post-page/~board/school-news/post/newark-academy-students-lead-first-ever-student-artificial-intelligence-summit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StudentAISummit.jpg-dyflI3uG0h6HePcAItNYhgcNdSUlNQ.webp"
                    alt="Newark Academy students at the AI Summit standing in front of The David Teeger Studio Arts wall"
                    layout="fill"
                    objectFit="cover"
                      className="object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">January 17, 2025</time>
                  </div>
                  <a
                    href="https://www.newarka.edu/life-at-na/news/default-board-post-page/~board/school-news/post/newark-academy-students-lead-first-ever-student-artificial-intelligence-summit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-bold mb-2 text-sky-300 hover:text-sky-200 transition-colors">
                    Newark Academy Students Lead First-Ever Student Artificial Intelligence Summit
                  </h3>
                  </a>
                  <p className="text-slate-300 mb-4">
                    Students at Newark Academy organized and led a groundbreaking AI Summit, demonstrating leadership in
                    addressing the impact of artificial intelligence in education.
                  </p>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0" asChild>
                    <a
                      href="https://www.newarka.edu/life-at-na/news/default-board-post-page/~board/school-news/post/newark-academy-students-lead-first-ever-student-artificial-intelligence-summit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </Button>
                </div>
              </article>

              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group">
                <a
                  href="https://www.tapinto.net/towns/millburn-slash-short-hills/sections/education/articles/3-short-hills-residents-present-at-student-artificial-intelligence-summit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="group-hover:scale-105 transition-transform duration-300 h-full">
                  <BlogSummitImage />
                </div>
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">January 19, 2025</time>
                  </div>
                  <a
                    href="https://www.tapinto.net/towns/millburn-slash-short-hills/sections/education/articles/3-short-hills-residents-present-at-student-artificial-intelligence-summit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-xl font-bold mb-2 text-sky-300 hover:text-sky-200 transition-colors">
                    Three Short Hills Residents Present at Student Artificial Intelligence Summit
                  </h3>
                  </a>
                  <p className="text-slate-300 mb-4">
                    Local students showcase leadership and innovation in artificial intelligence at a groundbreaking
                    summit, discussing the future of AI in education.
                  </p>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0" asChild>
                    <a
                      href="https://www.tapinto.net/towns/millburn-slash-short-hills/sections/education/articles/3-short-hills-residents-present-at-student-artificial-intelligence-summit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </Button>
                </div>
              </article>

              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/1151127223?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="WisenAI3"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">March 13, 2025</time>
                  </div>
                  <a href="#for-seniors" className="block">
                    <h3 className="text-xl font-bold mb-2 text-sky-300 hover:text-sky-200 transition-colors">
                      WisenAI Explained
                    </h3>
                  </a>
                  <p className="text-slate-300 mb-4">
                    Watch the short video to understand more about the purpose of WisenAI and what we do.
                  </p>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0">
                    <a href="#for-seniors">How It Works →</a>
                  </Button>
                </div>
              </article>

              {/* Policy Paper Blog Post */}
              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group">
                <a href="/blog/ai-job-displacement-policy" className="block">
                  <div className="relative aspect-video bg-gradient-to-br from-sky-900 via-slate-800 to-indigo-900 flex items-center justify-center group-hover:from-sky-800 group-hover:to-indigo-800 transition-colors duration-300">
                    <div className="text-center p-6">
                      <FileText className="h-16 w-16 text-sky-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-sky-300 font-semibold">Policy Paper</p>
              </div>
            </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">May 10, 2025</time>
          </div>
                  <a href="/blog/ai-job-displacement-policy" className="block">
                    <h3 className="text-xl font-bold mb-2 text-sky-300 hover:text-sky-200 transition-colors">
                      AI & Job Displacement: Actions the U.S. Can Take
                </h3>
                  </a>
                  <p className="text-slate-300 mb-4">
                    A policy paper exploring how the U.S. government should respond to AI-driven automation, with recommendations for workforce retraining, regulation, and social safety nets.
                  </p>
                  <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0" asChild>
                    <a href="/blog/ai-job-displacement-policy">
                      Read Article →
                    </a>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* For AI Companies - Consolidated Section */}
        <section ref={forAICompaniesRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="text-lg font-semibold text-emerald-400 mb-2">For AI Companies</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-4">Wisen Your AI</h2>
              <p className="text-xl text-slate-300">
                Elevate your AI models with ethically sourced, high-quality data from seasoned experts.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                <h3 className="text-lg font-bold mb-2 text-emerald-300">Ethical Sourcing</h3>
                <p className="text-slate-400 text-sm">
                  All data ethically sourced from well-compensated senior experts.
                </p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                <h3 className="text-lg font-bold mb-2 text-emerald-300">Deep Expertise</h3>
                <p className="text-slate-400 text-sm">
                  Decades of real-world experience you won't find elsewhere.
                </p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                <h3 className="text-lg font-bold mb-2 text-emerald-300">Premium Data</h3>
                <p className="text-slate-400 text-sm">
                  Top-tier data for RLHF, SFT, DPO, and fine-tuning.
                </p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                <h3 className="text-lg font-bold mb-2 text-emerald-300">Fast Delivery</h3>
                <p className="text-slate-400 text-sm">
                  Reduce time sourcing data. Focus on building models.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => scrollToSection(contactRef, "contact")}
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <TrustBadges />


        <section ref={contactRef} id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">Contact Us</h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300">
                  We'd love to hear from you. Whether you have a question about our services or want to join our
                  program, don't hesitate to reach out.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:sathvik@wisenai.com" className="text-primary hover:underline">
                      sathvik@wisenai.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:9089877117" className="text-primary hover:underline">
                      (908) 955-3139
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Join Our Program</h3>
                <p className="text-slate-300">
                  Ready to contribute your experience to AI innovation? Join our program and be part of shaping the
                  future of technology.
                </p>
                <a href="/apply">
                  <Button size="lg" className="mt-4 w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white">
                    Join Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm leading-loose text-slate-300 sm:text-left">
            © 2026 WisenAI. All rights reserved.
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

