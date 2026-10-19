"use client"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, Calendar, Clock, Download, FileText, ExternalLink, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { PDFViewerModal } from "@/components/pdf-viewer-modal"

export default function AIJobDisplacementPolicy() {
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <SiteHeader
        onHomeClick={() => window.location.href = "/"}
        onAboutClick={() => window.location.href = "/#about"}
        onLeadershipClick={() => window.location.href = "/#leadership"}
        onBlogClick={() => window.location.href = "/#blog"}
        onLearnMoreClick={() => window.location.href = "/#for-seniors"}
        onContactClick={() => window.location.href = "/#contact"}
        onForAICompaniesClick={() => window.location.href = "/#for-ai-companies"}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-900/50 via-slate-900 to-indigo-900/30 py-12 sm:py-16 border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <Link 
              href="/#blog" 
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>May 10, 2025</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4 leading-tight">
              AI & Job Displacement: Actions the U.S. Can Take to Navigate the Turbulent Times Ahead
            </h1>
            
            <p className="text-xl text-slate-300 mb-6">
              A policy paper exploring how the U.S. government should respond to AI-driven automation, with recommendations for workforce retraining, regulation, and social safety nets.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-600/30 flex items-center justify-center">
                  <User className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Sathvik Subramanian</p>
                  <p className="text-sm text-slate-400">Founder, WisenAI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 sm:py-16">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* TLDR Box */}
              <div className="bg-sky-900/20 border border-sky-700/50 rounded-xl p-6 mb-10 not-prose">
                <h2 className="text-lg font-bold text-sky-300 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  TL;DR — Key Takeaways
                </h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <span><strong className="text-white">40% of global jobs</strong> are exposed to AI disruption, with advanced economies facing 60% exposure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <span>History shows government intervention during technological disruption is <strong className="text-white">necessary but often insufficient</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <span>Recommended actions: <strong className="text-white">workforce retraining programs, AI impact assessments, extended layoff notices, and UBI pilots</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <span>Education reform is critical: <strong className="text-white">AI literacy should be as fundamental as math and reading</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">•</span>
                    <span>The goal: treat AI as an <strong className="text-white">opportunity to be managed</strong>, not a threat to be feared.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-sky-300 mt-10 mb-4">The Challenge We Face</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Artificial intelligence is referred to as the fourth industrial revolution, ranking alongside revolutionary changes caused by manufacturing automation, the invention of electricity, and the computer and software revolution. According to an International Monetary Fund (IMF) report, almost <strong className="text-white">40% of global employment is exposed to AI</strong>, with advanced economies having 60% exposure due to the prevalence of knowledge-oriented jobs.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                This truly has the potential to produce massive gains and losses at the same time. The American government must analyze what must be done, given the range of impact this technology can have—not only to livelihood, but also to social order and peace, as an increase in inequalities might mean a further widening gap between the rich and poor.
              </p>

              <h2 className="text-2xl font-bold text-sky-300 mt-10 mb-4">Lessons from History</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                This is not the first time the United States has confronted fears of job displacement due to technology. Since the post-World War II automation boom, to the IT revolution of the 1980s, to the 2000s, there have been numerous occasions where the federal government has intervened during mass job disruption.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                In 1964, President Lyndon B. Johnson established the National Commission on Technology, Automation, and Economic Progress. The commission's 1966 report recommended creating government jobs, guaranteeing a basic income for families, and improving education—recommendations that remain relevant today.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Despite such initiatives, the federal government has historically failed to match the speed of technological change. Many workers, especially those without specialized skills, struggled to find stable employment. The government's inability to maintain these initiatives highlighted the need for better, more sustainable strategies.
              </p>

              <h2 className="text-2xl font-bold text-sky-300 mt-10 mb-4">Recommended Policy Actions</h2>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Trade Adjustment Assistance for AI (TAAAAI)</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The government should implement a job adjustment support initiative modeled after the TAA for Automation Act. This program would cover expenses for retraining and compensation for job loss for a reasonable amount of time. The funds needed would be paid for by a small fee imposed on companies that heavily leverage AI to save costs and make profits.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Incentivize Retraining Over Layoffs</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Companies could get tax credits for employment training of impacted employees, just like bankruptcy loss allows companies to negotiate loan repayments. Labor laws should allow employers to declare their intent to restructure their workforce and negotiate lower salaries for impacted employees on the promise that they will be retrained in newer occupations—such as creating training data for AI systems, maintaining AI systems, and higher-skill work that uses AI.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. AI Impact Assessments</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The government should implement regulations requiring companies to assess the impact of mass automation, similar to environmental impact assessments today. A modification could be made to the WARN Act—which mandates a 60-day notice to the Department of Labor on mass layoffs—to extend the notice period to <strong className="text-white">120 days or longer</strong> for AI-automation-driven layoffs, giving all parties time to consider retraining options.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Education System Reform</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                AI and technical literacy should be introduced at all levels of education on an urgent basis. At K-12 level, education should include two major components:
              </p>
              <ul className="text-slate-300 mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">Uniquely human abilities:</strong> creativity, critical thinking, teamwork, communication, conflict resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400">•</span>
                  <span><strong className="text-white">AI systems knowledge:</strong> training, managing, and utilizing AI systems efficiently so that AI knowledge becomes as basic as math and reading</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Universal Basic Income (UBI) Pilots</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                A bolder, longer-term approach is ensuring a universal basic income where citizens derive an income to live their lives without having to work a job. This idea might be costly and hard to implement, but it has been recommended by various leaders as a way to ensure no one is left behind. This could be tried out in small pilots at the city and county levels before being rolled out more robustly.
              </p>

              <h2 className="text-2xl font-bold text-sky-300 mt-10 mb-4">The Path Forward</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                The above recommendations point to a simple fact: we, the American people, need to treat the Artificial Intelligence Revolution not as a threat, but as an <strong className="text-white">opportunity and a change that needs to be managed well</strong>. This requires government intervention where market forces alone would produce unjust outcomes for a large portion of the population.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                If this change is managed well, the United States economy will evolve to an advanced state where artificial intelligence handles routine work, allowing humans to focus on using AI in creative, high-level, groundbreaking work.
              </p>
              <p className="text-slate-300 leading-relaxed mb-10">
                The United States faces intense competition in the AI race from China and other nations. Having the measures and programs in place to manage the disruption is precisely the safety net required to allow the United States to move faster in this race, both in the short term and long term.
              </p>

              {/* CTA Box */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 not-prose">
                <h3 className="text-xl font-bold text-white mb-3">Read the Full Policy Paper</h3>
                <p className="text-slate-300 mb-4">
                  This article is a summary of the full 14-page policy paper. For complete analysis, historical context, and detailed recommendations with citations, read the original document.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="bg-sky-600 hover:bg-sky-700 text-white"
                    onClick={() => setIsPDFViewerOpen(true)}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Full Paper
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    asChild
                  >
                    <a href="/sathvik-subramanian-policy-paper.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              {/* Related Section */}
              <div className="mt-12 pt-8 border-t border-slate-700 not-prose">
                <h3 className="text-lg font-bold text-white mb-4">How This Connects to WisenAI</h3>
                <p className="text-slate-300 mb-4">
                  At WisenAI, we're putting these principles into practice. By creating meaningful employment opportunities for seniors in AI training, we're demonstrating that the AI revolution can be managed in a way that benefits everyone—especially those who might otherwise be left behind.
                </p>
                <Link 
                  href="/#for-seniors"
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
                >
                  Learn how seniors can contribute to AI development →
                </Link>
              </div>

            </div>
          </div>
        </article>
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

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
        pdfUrl="/sathvik-subramanian-policy-paper.pdf"
        title="Artificial Intelligence Is Here To Stay: Actions the U.S. Can Take To Navigate the Turbulent Times Ahead"
      />
    </div>
  )
}

