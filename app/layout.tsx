import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "WisenAI - We Turn Lifetime Expertise into Better AI",
  description: "Seniors train smarter AI. Companies get better data. Join our community of experienced individuals shaping ethical, human-centered artificial intelligence.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  generator: 'v0.app',
  openGraph: {
    title: "WisenAI - We Turn Lifetime Expertise into Better AI",
    description: "Seniors train smarter AI. Companies get better data. Join our community shaping ethical AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-50`}>
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  )
}
