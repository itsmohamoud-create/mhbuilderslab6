import type { Metadata } from "next"
import Portfolio from "@/components/sections/Portfolio"

export const metadata: Metadata = {
  title: "Portfolio — MH Builders Lab",
  description: "Real businesses. Real results. Explore our case studies.",
}

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <div className="text-center py-20 px-6">
        <h1 className="font-syne font-bold text-5xl text-white">Our Work</h1>
        <p className="text-[var(--text-muted)] mt-4 font-dm">Systems we've built for clients worldwide.</p>
      </div>
      <Portfolio />
    </main>
  )
}
