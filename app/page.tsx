"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { DecorativeImage } from "@/components/decorative-image"
import { BioAnimation } from "@/components/bio-animation"
import { Mail, Phone, Calendar } from "lucide-react"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { BlogSummitImage } from "@/components/blog-summit-image"

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const leadershipRef = useRef<HTMLElement>(null)
  const learnMoreRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const forAICompaniesRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)

  // Handle direct URL navigation and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        const refMap: { [key: string]: React.RefObject<HTMLElement> } = {
          about: aboutRef,
          blog: blogRef,
          leadership: leadershipRef,
          "learn-more": learnMoreRef,
          contact: contactRef,
          "for-ai-companies": forAICompaniesRef,
        }

        const ref = refMap[hash]
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Handle initial load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
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
        onLearnMoreClick={() => scrollToSection(learnMoreRef, "learn-more")}
        onContactClick={() => scrollToSection(contactRef, "contact")}
        onForAICompaniesClick={() => scrollToSection(forAICompaniesRef, "for-ai-companies")}
      />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sky-300">
                Bridging Experience of Seniors and AI Innovation
              </h1>
              <p className="text-lg sm:text-xl text-slate-300">
                Join our community of experienced individuals helping to shape the future of artificial intelligence.
                Your wisdom and expertise are invaluable in training AI models.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <a href="https://forms.gle/rAsvHSJAD2fQQrBv6" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto font-semibold bg-sky-600 hover:bg-sky-700 text-white">
                    Join Our Program
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-sky-600 text-sky-300 hover:bg-sky-900 bg-transparent"
                  onClick={() => scrollToSection(aboutRef, "about")}
                >
                  About Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-sky-600 text-sky-300 hover:bg-sky-900 bg-transparent"
                  onClick={() => scrollToSection(learnMoreRef, "learn-more")}
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold border-sky-600 text-sky-300 hover:bg-sky-900 bg-transparent"
                  onClick={() => scrollToSection(forAICompaniesRef, "for-ai-companies")}
                >
                  For AI Companies
                </Button>
              </div>
            </div>
            <div className="lg:order-last">
              <DecorativeImage />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Share Your Experience</h3>
                <p className="text-slate-300">
                  Your lifetime of experience and knowledge is invaluable in training AI systems to better understand
                  human context and wisdom.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Flexible Schedule</h3>
                <p className="text-slate-300">
                  Work at your own pace from the comfort of your home. Choose hours that suit your lifestyle.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Fair Compensation</h3>
                <p className="text-slate-300">
                  Receive competitive compensation for your contributions to AI development and training.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">
                  About WisenAI
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300">
                  WisenAI bridges the gap between senior experience and artificial intelligence innovation. We believe
                  that the wisdom accumulated over decades of life experience is invaluable in training AI systems to be
                  more human-centered and ethical.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
                <p className="text-slate-300">
                  We are committed to creating meaningful opportunities for seniors to contribute their knowledge and
                  experience to the development of artificial intelligence, while ensuring fair compensation and
                  flexible working conditions.
                </p>
                <h3 className="text-xl sm:text-2xl font-bold">Why Join Us?</h3>
                <ul className="list-disc space-y-2 sm:space-y-4 pl-6 text-slate-300">
                  <li>Share your valuable life experience and wisdom</li>
                  <li>Work flexibly from home on your own schedule</li>
                  <li>Receive fair compensation for your contributions</li>
                  <li>Be part of shaping the future of AI technology</li>
                  <li>Join a supportive community of like-minded individuals</li>
                </ul>
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
              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StudentAISummit.jpg-dyflI3uG0h6HePcAItNYhgcNdSUlNQ.webp"
                    alt="Newark Academy students at the AI Summit standing in front of The David Teeger Studio Arts wall"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">January 17, 2025</time>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sky-300">
                    Newark Academy Students Lead First-Ever Student Artificial Intelligence Summit
                  </h3>
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

              <article className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <BlogSummitImage />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-sky-400" />
                    <time className="text-sm text-slate-400">January 19, 2025</time>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sky-300">
                    Three Short Hills Residents Present at Student Artificial Intelligence Summit
                  </h3>
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

              {/* Placeholder for future blog post */}
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg opacity-50">
                <div className="aspect-video bg-slate-700" />
                <div className="p-6">
                  <div className="h-4 w-24 bg-slate-700 rounded mb-4" />
                  <div className="h-8 w-full bg-slate-700 rounded mb-2" />
                  <div className="h-20 w-full bg-slate-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={learnMoreRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">
                  How AI Learns from Human Wisdom
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-300">
                  At WisenAI, we're bridging the gap between senior experience and artificial intelligence. Your
                  lifetime of knowledge is the key to making AI more human-centered and ethical.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">Teaching AI to Be More Human</h3>
                <p className="text-slate-300">
                  Imagine you're teaching your grandchild about life. You share stories, give advice, and help them
                  understand right from wrong. That's similar to how we train AI, but on a much larger scale.
                </p>
                <p className="text-slate-300">
                  AI starts off like a very smart calculator - it can process lots of information quickly, but it
                  doesn't truly understand the world like we do. That's where you come in.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">
                  Your Experience Shapes AI's Understanding
                </h3>
                <p className="text-slate-300">
                  We use a method called "Reinforcement Learning from Human Feedback" or RLHF. Don't worry about the
                  fancy name - here's how it works:
                </p>
                <ol className="list-decimal space-y-4 pl-6 text-slate-300">
                  <li>The AI tries to complete a task, like writing a story or answering a question.</li>
                  <li>People like you read what the AI wrote and say if it's good or needs improvement.</li>
                  <li>The AI learns from your feedback and tries again, getting better each time.</li>
                </ol>
                <p className="text-slate-300">
                  It's like teaching a child to ride a bike. You give encouragement when they do well and gently correct
                  them when they make mistakes. Over time, they improve and learn to ride smoothly.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">Why Your Wisdom Matters</h3>
                <p className="text-slate-300">
                  You've lived through decades of changes, faced countless challenges, and gathered wisdom that can't be
                  found in books. This makes your input incredibly valuable:
                </p>
                <ul className="list-disc space-y-4 pl-6 text-slate-300">
                  <li>Your life experiences help AI understand complex human situations</li>
                  <li>Your moral compass guides AI to make ethical decisions</li>
                  <li>Your cultural knowledge helps AI respect and understand diverse perspectives</li>
                  <li>Your practical wisdom teaches AI common sense that younger generations might overlook</li>
                </ul>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-sky-300">Join Us in Shaping the Future</h3>
                <p className="text-slate-300">
                  By sharing your knowledge, you're not just helping a machine learn - you're passing on your wisdom to
                  future generations. You're ensuring that the AI systems of tomorrow are guided by the hard-earned
                  wisdom of today.
                </p>
                <p className="text-slate-300">
                  It's a chance to make a lasting impact, to ensure that the values and insights you hold dear continue
                  to influence the world long into the future.
                </p>
                <div className="pt-4">
                  <a href="https://forms.gle/rAsvHSJAD2fQQrBv6" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white">
                      Contribute Your Wisdom
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={forAICompaniesRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-sky-400">For LLM Providers</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300">Wisen your AI</h2>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Elevate your AI models with ethically sourced, high-quality data from seasoned experts.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ethical Sourcing</h3>
                <p className="text-slate-300">
                  Rest assured that all data and expertise are ethically sourced from well-compensated senior experts.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Unparalleled Expertise</h3>
                <p className="text-slate-300">
                  Tap into years of real-world experience that's hard to find elsewhere in the AI training landscape.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Social Responsibility</h3>
                <p className="text-slate-300">
                  Support a platform that honors seniors and older adults by providing meaningful work and dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-sky-400">For LLM Providers</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300">Technical Advantages</h2>
              </div>
              <p className="text-xl text-slate-300">
                Streamline your AI development process with our high-quality, expertly curated data.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Premium Training Data</h3>
                <p className="text-slate-300">
                  Access top-tier data for RLHF, SFT, DPO, or Reinforcement Fine Tuning. Our data is meticulously
                  curated by experts with decades of real-world experience.
                </p>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Accelerated Development</h3>
                <p className="text-slate-300">
                  Significantly reduce the time and resources spent on sourcing and producing high-quality training
                  data. With WisenAI, focus on what truly matters - building exceptional AI models.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="font-semibold bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => scrollToSection(contactRef, "contact")}
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-800">
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
                      (908) 987-7117
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
                <a href="https://forms.gle/rAsvHSJAD2fQQrBv6" target="_blank" rel="noopener noreferrer">
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
