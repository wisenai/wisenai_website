"use client"

import { SiteHeader } from "@/components/site-header"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "ai-job-displacement-policy",
    title: "AI & Job Displacement: Actions the U.S. Can Take to Navigate the Turbulent Times Ahead",
    description: "A policy paper exploring how the U.S. government should respond to AI-driven automation, with recommendations for workforce retraining, regulation, and social safety nets.",
    author: "Sathvik Subramanian",
    authorRole: "Founder, WisenAI",
    date: "May 10, 2025",
    readTime: "8 min read",
    tags: ["Policy", "AI", "Workforce"],
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <SiteHeader
        onHomeClick={() => window.location.href = "/"}
        onAboutClick={() => window.location.href = "/#about"}
        onLeadershipClick={() => window.location.href = "/#leadership"}
        onBlogClick={() => {}}
        onLearnMoreClick={() => window.location.href = "/#for-seniors"}
        onContactClick={() => window.location.href = "/#contact"}
        onForAICompaniesClick={() => window.location.href = "/#for-ai-companies"}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-900/50 via-slate-900 to-indigo-900/30 py-16 sm:py-20 border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Insights on AI, workforce development, and building technology that benefits everyone.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-sky-700/50 transition-colors group"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-sky-900/50 text-sky-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-600/30 flex items-center justify-center">
                          <User className="h-5 w-5 text-sky-400" />
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm">{post.author}</p>
                          <p className="text-xs text-slate-400">{post.authorRole}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-sm text-slate-400 border-l border-slate-600 pl-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {blogPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
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
