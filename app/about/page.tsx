import { SiteHeader } from "@/components/site-header"
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">About WisenAI</h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300">
                WisenAI bridges the gap between senior experience and artificial intelligence innovation. We believe that the wisdom accumulated over decades of life experience is invaluable in training AI systems to be more human-centered and ethical.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
              <p className="text-slate-300">
                We are committed to creating meaningful opportunities for seniors to contribute their knowledge and experience to the development of artificial intelligence, while ensuring fair compensation and flexible working conditions.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold">Why Join Us?</h2>
              <ul className="list-disc space-y-2 sm:space-y-4 pl-6 text-slate-300">
                <li>Share your valuable life experience and wisdom</li>
                <li>Work flexibly from home on your own schedule</li>
                <li>Receive fair compensation for your contributions</li>
                <li>Be part of shaping the future of AI technology</li>
                <li>Join a supportive community of like-minded individuals</li>
              </ul>
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

