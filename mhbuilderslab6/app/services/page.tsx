import type { Metadata } from "next"
import Services from "@/components/sections/Services"
import HowItWorks from "@/components/sections/HowItWorks"

export const metadata: Metadata = {
  title: "Services — MH Builders Lab",
  description: "Premium digital systems: websites, apps, AI automation, and marketing.",
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="text-center py-20 px-6">
        <h1 className="font-syne font-bold text-5xl text-white">What We Build</h1>
        <p className="text-[var(--text-muted)] mt-4 font-dm">End-to-end digital systems for your business.</p>
      </div>
      <Services />
      <HowItWorks />
    </main>
  )
}
