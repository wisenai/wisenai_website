import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata = {
  title: "WisenAI - Bridging Senior Experience and AI Innovation",
  description: "Join our community of experienced individuals helping to shape the future of artificial intelligence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-900 text-slate-50`}>
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  )
}
