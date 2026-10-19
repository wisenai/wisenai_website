import { ArrowRight, ArrowUpRight, Play } from "lucide-react"

const PRODUCTS = [
  {
    name: "LegacyLoop",
    who: "For organizations",
    text: "Keep your experts' knowledge when they retire: an AI interview captures their judgment and turns it into practice for everyone else.",
    href: "https://legacyloop.wisenai.com/demo",
    cta: "Try the demo",
    accent: "text-sky-300",
  },
  {
    name: "WisenBench",
    who: "For AI companies",
    text: "How well do AI models handle the judgment calls senior professionals make? A public leaderboard, graded against an expert's approach.",
    href: "https://bench.wisenai.com",
    cta: "See the leaderboard",
    accent: "text-emerald-300",
  },
]

const PAPERS = [
  {
    title: "You Can't Simulate Grandma",
    venue: "UserSim Workshop, NeurIPS 2026",
    href: "https://openreview.net/forum?id=PsT5RQkczL",
  },
  {
    title: "Effect of Retirement on Retention of Knowledge Gained Through Experiential Learning",
    venue: "The Curieux Review, 2026",
    href: "https://www.curieuxreview.com/_files/ugd/60ed3c_0bbd3f32f10e44a48d59078b8480fbce.pdf#page=482",
  },
  {
    title: "Formalize Once, Solve Many",
    venue: "Efficient Reasoning Workshop, COLM 2026",
    href: "https://openreview.net/forum?id=pIlEpFjw9u",
  },
]

const EPISODES = [
  { id: "WDhbDGhIKiE", guest: "Dr. Tracey Tokuhama-Espinosa, Harvard", title: "The first generation not to get smarter: learning vs AI" },
  { id: "VuP7zWzxa5Y", guest: "Dr. Sumitra Ganesh, J.P. Morgan AI Research", title: "AI agents: hype vs real research" },
  { id: "4-UHRs5ZC7U", guest: "Anish Mahishi, NVIDIA NeMo-RL", title: "The AI you use was built twice" },
]

const PLAYLIST = "https://www.youtube.com/playlist?list=PLGWVjFh0xuoI"

/** Homepage section: what WisenAI builds (Wisen Labs), its research and its podcast. */
export function HomeHighlights() {
  return (
    <section className="container mx-auto px-4 pb-12 sm:pb-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Products */}
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">From Wisen Labs</h2>
            <a href="/labs" className="text-sky-400 hover:text-sky-300 text-sm font-medium shrink-0">All products →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRODUCTS.map((p) => (
              <a key={p.name} href={p.href} className="group rounded-2xl border border-slate-700 bg-slate-800/60 p-6 hover:border-sky-700 transition-colors">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">{p.who}</p>
                <h3 className={`text-2xl font-bold ${p.accent} mb-2`}>{p.name}</h3>
                <p className="text-slate-300 mb-4">{p.text}</p>
                <span className="inline-flex items-center gap-1 text-white font-semibold group-hover:gap-2 transition-all">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Podcast */}
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">AI Innovators podcast</h2>
              <p className="text-slate-400 mt-1">Conversations with the people building and studying AI.</p>
            </div>
            <a href={PLAYLIST} className="text-sky-400 hover:text-sky-300 text-sm font-medium shrink-0">All episodes →</a>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {EPISODES.map((e) => (
              <a key={e.id} href={`https://www.youtube.com/watch?v=${e.id}&list=PLGWVjFh0xuoI`} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                  <img
                    src={`https://i.ytimg.com/vi/${e.id}/hqdefault.jpg`}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center h-12 w-12 rounded-full bg-black/70 group-hover:bg-red-600 transition-colors">
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    </span>
                  </span>
                </div>
                <p className="text-xs text-sky-400 font-medium mt-3">{e.guest}</p>
                <p className="text-white font-semibold leading-snug group-hover:text-sky-300 transition-colors">{e.title}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Research */}
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Research</h2>
            <a href="/research" className="text-sky-400 hover:text-sky-300 text-sm font-medium shrink-0">All research →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PAPERS.map((p) => (
              <a key={p.href} href={p.href} className="group rounded-xl border border-slate-700 bg-slate-800/50 p-5 hover:border-sky-700 transition-colors">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">{p.venue}</p>
                <p className="text-white font-semibold leading-snug group-hover:text-sky-300 transition-colors">
                  {p.title}
                  <ArrowUpRight className="inline h-4 w-4 ml-1 -mt-0.5" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
