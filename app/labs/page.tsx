"use client"

import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { PageFooter } from "@/components/page-footer"

const LEGACYLOOP = "https://legacyloop.wisenai.com"
const WISENBENCH = "https://bench.wisenai.com"

export default function LabsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <SiteHeader
        onHomeClick={() => (window.location.href = "/")}
        onAboutClick={() => (window.location.href = "/#about")}
        onLeadershipClick={() => (window.location.href = "/#leadership")}
        onBlogClick={() => (window.location.href = "/blog")}
        onLearnMoreClick={() => (window.location.href = "/#for-seniors")}
        onContactClick={() => (window.location.href = "/#contact")}
        onForAICompaniesClick={() => (window.location.href = "/#for-ai-companies")}
      />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-sky-900/50 via-slate-900 to-indigo-900/30 py-16 sm:py-20 border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Wisen Labs</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The products we build on what senior professionals know.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-10">
            {/* LegacyLoop */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-2">For organizations</p>
                <h2 className="text-3xl font-bold text-sky-300 mb-4">LegacyLoop</h2>
                <p className="text-slate-300 mb-4">
                  Keep your experts&apos; knowledge when they retire. An AI interviewer asks your senior people about
                  the moments where their judgment mattered, turns their stories into lessons they confirm, and
                  replays them as realistic practice for everyone else.
                </p>
                <p className="text-slate-400 text-sm mb-6">Try all three roles on your own work in about ten minutes.</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${LEGACYLOOP}/demo`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    Try the demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={LEGACYLOOP} className="inline-flex items-center gap-2 px-6 py-3 text-sky-300 hover:text-sky-200 font-semibold">
                    Learn more
                  </a>
                </div>
              </div>
              <video
                src={`${LEGACYLOOP}/demo/legacyloop-demo.mp4`}
                poster={`${LEGACYLOOP}/demo/legacyloop-demo-poster.jpg`}
                controls
                playsInline
                preload="metadata"
                className="w-full rounded-xl border border-slate-700 bg-black aspect-[16/10]"
              />
            </div>

            {/* WisenBench */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2">For AI companies</p>
              <h2 className="text-3xl font-bold text-emerald-300 mb-4">WisenBench</h2>
              <p className="text-slate-300 mb-6 max-w-3xl">
                How well do AI models handle the judgment calls senior professionals make? WisenBench scores models
                on real-world tasks in law, finance and insurance against how a seasoned expert would handle them,
                with three independent judges and the uncertainty shown. Read every model&apos;s answer on the public
                tasks, or have your own answer graded.
              </p>
              <a
                href={WISENBENCH}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
              >
                See the leaderboard <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* WisenCares */}
            <div className="border border-dashed border-slate-700 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-amber-300 mb-3">WisenCares</h2>
              <p className="text-slate-300 max-w-3xl">
                Our non-profit side builds free tools for older adults. First up is Akshi, an indoor guide for blind
                and low-vision people that speaks the landmarks of your own home and warns of steps ahead — coming
                soon to the App Store.
              </p>
              <a
                href="https://wisenai.github.io/akshi-site/"
                className="inline-flex items-center gap-2 mt-5 text-amber-300 hover:text-amber-200 font-semibold"
              >
                About Akshi <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  )
}
