'use client'
import Link from "next/link"
import { Brain, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-sky-300">WisenAI</span>
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Contact
          </Link>
          <Link
            href="https://forms.gle/rAsvHSJAD2fQQrBv6"
            className="text-sm font-medium transition-colors hover:text-sky-300"
          >
            Sign Up
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 space-y-4">
          <Link
            href="/about"
            className="block text-sm font-medium transition-colors hover:text-sky-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-sm font-medium transition-colors hover:text-sky-300"
          >
            Contact
          </Link>
          <Link
            href="https://forms.gle/rAsvHSJAD2fQQrBv6"
            className="block text-sm font-medium transition-colors hover:text-sky-300"
          >
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  )
}

