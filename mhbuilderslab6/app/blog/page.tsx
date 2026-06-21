import type { Metadata } from "next"
import Link from "next/link"
import { GradientText } from "@/components/ui/GradientText"

export const metadata: Metadata = {
  title: "Blog — MH Builders Lab",
  description: "Insights, strategies, and case studies on digital growth.",
}

const posts = [
  { slug: "ai-automation-guide", title: "The Complete Guide to AI Automation for Small Business", date: "2026-01-15" },
  { slug: "local-seo-secrets", title: "Local SEO Secrets: Rank #1 in Your City", date: "2026-01-10" },
  { slug: "funnel-mathematics", title: "Funnel Mathematics: How to Calculate ROAS", date: "2026-01-05" },
]

export default function BlogPage() {
  return (
    <main className="pt-20 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-syne font-bold text-5xl text-white mb-4">
          The <GradientText>Lab Notes</GradientText>
        </h1>
        <p className="text-[var(--text-muted)] font-dm">Insights from the cutting edge of digital growth.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:border-violet/30 transition-colors">
            <p className="text-xs text-[var(--text-faint)] font-dm mb-2">{post.date}</p>
            <h2 className="font-syne font-bold text-xl text-white hover:text-violet-light transition-colors">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  )
}
