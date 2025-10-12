import type React from "react"
import { EB_Garamond, Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
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
      <body className={`${ebGaramond.variable} ${inter.variable} font-sans bg-slate-900 text-slate-50`}>
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  )
}
