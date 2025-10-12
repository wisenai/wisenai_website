import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // List of valid sections
  const sections = ["about", "blog", "leadership", "learn-more", "contact", "for-ai-companies"]

  // Check if the path matches any of our sections
  const section = sections.find((s) => url.pathname === `/${s}`)

  if (section) {
    // Redirect to homepage with section hash
    url.pathname = "/"
    url.hash = section
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/about", "/blog", "/leadership", "/learn-more", "/contact", "/for-ai-companies"],
}
