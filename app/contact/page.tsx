import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">Contact Us</h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300">
                We'd love to hear from you. Whether you have a question about our services or want to join our program, don't hesitate to reach out.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:sathvik@wisenai.com" className="text-primary hover:underline">sathvik@wisenai.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:9089877117" className="text-primary hover:underline">(908) 987-7117</a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold">Join Our Program</h2>
              <p className="text-slate-300">
                Ready to contribute your experience to AI innovation? Join our program and be part of shaping the future of technology.
              </p>
              <Link href="https://forms.gle/rAsvHSJAD2fQQrBv6">
                <Button size="lg" className="mt-4 w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white">Join Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm leading-loose text-slate-300 sm:text-left">
            © 2024 WisenAI. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="text-sm text-slate-300 hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-slate-300 hover:underline">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

