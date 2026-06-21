import type { Metadata } from "next"
import Image from "next/image"
import { GradientText } from "@/components/ui/GradientText"

export const metadata: Metadata = {
  title: "About — MH Builders Lab",
  description: "Built by builders, for builders. Meet the founder.",
}

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-syne font-bold text-5xl text-white mb-6">
          Built by <GradientText>Builders</GradientText>
        </h1>
        <div className="mt-10 flex flex-col items-center gap-8">
          <Image 
            src="/mo.png" 
            alt="Mohamud Hassan — Founder & CEO of MH Builders Lab" 
            width={200} 
            height={200}
            className="rounded-full border-2 border-violet/30 shadow-[0_0_40px_rgba(124,58,237,0.2)]"
          />
          <div className="text-left max-w-2xl space-y-4 font-dm text-[var(--text-muted)] text-lg leading-relaxed">
            <p>
              I'm Mohamud Hassan, founder of MH Builders Lab. I started this agency with one mission: to give small businesses the same technological advantage as the giants.
            </p>
            <p>
              We don't just build websites. We build revenue-generating machines. From AI automation that saves 30+ hours a week to high-converting funnels, every project is treated like our own.
            </p>
            <p>
              This is the foundation of a family legacy. Built to build builders.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
