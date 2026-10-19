"use client"

import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { PageFooter } from "@/components/page-footer"

type Paper = { title: string; venue: string; href: string; summary: string }

const PODCAST = "https://www.youtube.com/playlist?list=PLGWVjFh0xuoI"

// Published and accepted work only.
const PAPERS: Paper[] = [
  {
    title: "You Can't Simulate Grandma: Elder User Simulation Against a Record That Stops at 65",
    venue: "UserSim Workshop, NeurIPS 2026",
    href: "https://openreview.net/forum?id=PsT5RQkczL",
    summary:
      "AI systems are increasingly checked against simulated users, but the human data those simulations are validated on stops resolving age at 65. Older adults are missing from the record AI is measured against.",
  },
  {
    title: "Two Levers for Undermined Facts in Agent Memory: What the Store Records and What the Reader Is Told",
    venue: "PALM Workshop, NeurIPS 2026",
    href: "https://openreview.net/forum?id=WcPH1J9TL7",
    summary:
      "When a remembered fact quietly stops being safe to state because something it depended on changed — and why a short instruction to the model fixes far more than changing what the memory stores.",
  },
  {
    title: "Recovery Is a Decision — But Whose? Live Agents Overturn Replay Evaluations of Tool-Failure Triage",
    venue: "IAEval 2026",
    href: "https://openreview.net/forum?id=SxhEep1OHH",
    summary:
      "An evaluation's setup can reverse its conclusion: tool-failure recovery policies that win in scripted replay lose to the agents' own error handling in live runs.",
  },
  {
    title: "Formalize Once, Solve Many: When to Write Code Instead of Reasoning Per Case on Rule-Governed Tasks",
    venue: "Efficient Reasoning Workshop, COLM 2026",
    href: "https://openreview.net/forum?id=pIlEpFjw9u",
    summary:
      "For rule-governed tasks like baggage fees or tax returns, having a model write one program for the ruleset is 10–50× cheaper than reasoning case by case, and almost never less accurate.",
  },
  {
    title: "Effect of Retirement on Retention of Knowledge Gained Through Experiential Learning in Former Knowledge Professionals",
    venue: "The Curieux Review, May 2026",
    href: "https://www.curieuxreview.com/_files/ugd/60ed3c_0bbd3f32f10e44a48d59078b8480fbce.pdf#page=482",
    summary:
      "A literature review finding that knowledge gained through experience is retained better than other knowledge after retirement — and that staying mentally engaged helps retirees too.",
  },
  {
    title: "Artificial Intelligence Is Here To Stay: Actions the U.S. Can Take To Navigate the Turbulent Times Ahead",
    venue: "Policy paper, May 2025",
    href: "/blog/ai-job-displacement-policy",
    summary: "How the U.S. can respond to AI-driven automation through workforce retraining, regulation and social safety nets.",
  },
]

export default function ResearchPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Research</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Published work by Sathvik Subramanian on AI evaluation, older adults, and the knowledge professionals carry.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
              <a
                href="https://openreview.net/profile?id=~Sathvik_Subramanian1"
                className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
              >
                OpenReview profile <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={PODCAST} className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium">
                Podcast <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <ul className="space-y-5">
              {PAPERS.map((paper) => (
                <li key={paper.href}>
                  <a
                    href={paper.href}
                    className="group block rounded-xl border border-slate-700 bg-slate-800/50 p-5 sm:p-6 hover:border-sky-700 transition-colors"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">{paper.venue}</p>
                    <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {paper.title}
                      <ArrowUpRight className="inline h-4 w-4 ml-1 -mt-1" />
                    </h2>
                    <p className="text-slate-300 mt-2">{paper.summary}</p>
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-sky-300 mt-14 mb-4">Podcast</h2>
            <a
              href={PODCAST}
              className="group block rounded-xl border border-slate-700 bg-slate-800/50 p-5 sm:p-6 hover:border-sky-700 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">YouTube</p>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                AI Innovators: High School Edition
                <ArrowUpRight className="inline h-4 w-4 ml-1 -mt-1" />
              </h3>
              <p className="text-slate-300 mt-2">Conversations on AI, hosted by Sathvik Subramanian.</p>
            </a>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  )
}
