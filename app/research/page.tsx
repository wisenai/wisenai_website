import { SiteHeader } from "@/components/site-header"
import Link from 'next/link'

type Paper = {
  title: string
  authors: string
  venue: string
  year: string
  url?: string
}

const papers: Paper[] = [
  {
    title: "Human-Centered AI: Leveraging Senior Expertise for Better Models",
    authors: "A. Researcher, B. Scientist",
    venue: "WisenAI Technical Report",
    year: "2024",
    url: "https://example.com/paper1"
  },
  {
    title: "Ethical Data Labeling with Multigenerational Cohorts",
    authors: "C. Ethicist, D. Engineer",
    venue: "Workshop on Responsible AI",
    year: "2024",
    url: "https://example.com/paper2"
  }
]

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-sky-300">Research Papers</h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300">
                Explore our research on human-centered AI, responsible data practices, and the impact of senior expertise in model development.
              </p>
            </div>
            <ul className="space-y-6">
              {papers.map((paper, index) => (
                <li key={index} className="rounded-lg border border-slate-700 bg-slate-900/50 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {paper.url ? (
                      <Link href={paper.url} className="hover:underline text-sky-300">
                        {paper.title}
                      </Link>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p className="text-slate-300 mt-1">{paper.authors}</p>
                  <p className="text-slate-400 text-sm">{paper.venue} • {paper.year}</p>
                </li>
              ))}
            </ul>
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

