"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

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
        <Button variant="ghost" className="pl-1 pr-3 flex items-center ml-1 h-auto py-0.5 hover:bg-transparent" onClick={onHomeClick}>
          <img 
            src="/wisenai-logo.png" 
            alt="WisenAI Logo" 
            className="h-14 w-auto max-w-[180px] object-contain mix-blend-lighten brightness-125"
          />
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
          <SignedOut>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/apply"
                className="text-sm font-medium transition-colors hover:text-sky-300"
              >
                Apply
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/sign-in"
                className="text-sm font-medium transition-colors hover:text-sky-300"
              >
                Sign In
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-sky-300"
              >
                Dashboard
              </Link>
            </Button>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
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
          <SignedOut>
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/apply">
                Apply
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/sign-in">
                Sign In
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/dashboard">
                Dashboard
              </Link>
            </Button>
            <div className="px-3 py-2">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </div>
          </SignedIn>
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
