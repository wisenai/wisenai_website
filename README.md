# WisenAI

**We turn lifetime expertise into better AI.**

WisenAI works with senior professionals — people with decades of experience in law, finance, insurance, medicine, engineering and more — to make AI more accurate, more useful and more human-centered. Seniors are paid for their judgment; AI companies get ethically sourced data from people who have actually done the work.

🌐 **[wisenai.com](https://www.wisenai.com)**

## What we do

**For seniors.** Share your experience from home, on your own schedule: compare and rate AI answers, explain what a good answer looks like, and flag what's wrong. No technical skills needed. [Apply →](https://www.wisenai.com/apply)

**For AI companies.** Training and evaluation data from seasoned professionals, matched to your domain and reviewed for quality. [Get in touch →](https://www.wisenai.com/#contact)

## Wisen Labs

The products we build on what senior professionals know. [More →](https://www.wisenai.com/labs)

| | |
|---|---|
| **[LegacyLoop](https://legacyloop.wisenai.com)** | For organizations: keep your experts' knowledge when they retire. An AI interviewer captures the moments where their judgment mattered, turns them into lessons they confirm, and replays them as realistic practice. [Try the demo →](https://legacyloop.wisenai.com/demo) |
| **[WisenBench](https://bench.wisenai.com)** | For AI companies: how well do models handle the judgment calls senior professionals make? Tasks in law, finance and insurance, graded against an expert's approach by a panel of three judges. |
| **WisenCares** | Our non-profit side, building free tools for older adults — starting with [Akshi](https://wisenai.github.io/akshi-site/), an indoor guide for blind and low-vision people (coming soon). |

## Research

Published work by Sathvik Subramanian on AI evaluation, older adults and the knowledge professionals carry — including *You Can't Simulate Grandma* (UserSim @ NeurIPS 2026) and *Formalize Once, Solve Many* (COLM 2026 workshop). See [wisenai.com/research](https://www.wisenai.com/research) and [OpenReview](https://openreview.net/profile?id=~Sathvik_Subramanian1).

## Contact

**sathvik@wisenai.com**

---

## About this repository

The code for [wisenai.com](https://www.wisenai.com): a [Next.js](https://nextjs.org) site (App Router, Tailwind CSS, shadcn/ui) with [Clerk](https://clerk.com) sign-in and [Resend](https://resend.com) email, deployed on Vercel.

```bash
npm install
npm run dev   # http://localhost:3000
```

Configuration lives in environment variables, never in the repository (`.env*` files are git-ignored). The site reads `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, the `NEXT_PUBLIC_CLERK_*_URL` routes, `RESEND_API_KEY` and `ADMIN_EMAILS`; set them in `.env.local` locally and in the Vercel project for deployments.

© 2026 WisenAI. All rights reserved.
