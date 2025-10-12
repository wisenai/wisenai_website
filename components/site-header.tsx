"use client"
import Link from "next/link"
import { Brain, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SiteHeaderProps {
  onHomeClick: () => void
  onAboutClick: () => void
  onLearnMoreClick: () => void
  onContactClick: () => void
  onForAICompaniesClick: () => void
  onLeadershipClick: () => void
  onBlogClick: () => void
}

export function SiteHeader({
  onHomeClick,
  onAboutClick,
  onLearnMoreClick,
  onContactClick,
  onForAICompaniesClick,
  onLeadershipClick,
  onBlogClick,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (handler: () => void) => {
    setIsMenuOpen(false)
    handler()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center">
        <Button variant="ghost" className="pl-2 pr-4 flex items-center space-x-2 ml-2" onClick={onHomeClick}>
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-sky-300">WisenAI</span>
        </Button>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onHomeClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onAboutClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            About
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLeadershipClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Leadership
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBlogClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Blog
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLearnMoreClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Learn More
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onContactClick}
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Contact Us
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://forms.gle/rAsvHSJAD2fQQrBv6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-sky-300"
            >
              Sign Up
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-sky-300 border-sky-600 hover:bg-sky-900"
            onClick={onForAICompaniesClick}
          >
            For AI Companies
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onHomeClick)}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onAboutClick)}
          >
            About
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onLeadershipClick)}
          >
            Leadership
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onBlogClick)}
          >
            Blog
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onLearnMoreClick)}
          >
            Learn More
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleNavigation(onContactClick)}
          >
            Contact Us
          </Button>
          <Button variant="ghost" size="sm" asChild className="w-full justify-start">
            <a href="https://forms.gle/rAsvHSJAD2fQQrBv6" target="_blank" rel="noopener noreferrer">
              Sign Up
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full text-sky-300 border-sky-600 hover:bg-sky-900"
            onClick={() => handleNavigation(onForAICompaniesClick)}
          >
            For AI Companies
          </Button>
        </nav>
      )}
    </header>
  )
}
