import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { WA_LINK } from "@/lib/constants"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-violet/12 border border-violet/25 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-dm text-violet-light">Done-for-you digital systems</span>
        </div>

        <h1 className="font-syne font-bold text-[clamp(2.8rem,6vw,5.2rem)] leading-[1.05] tracking-tight text-white">
          Build. Automate. <GradientText>Scale Beyond Limits.</GradientText>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-muted)] font-dm leading-relaxed">
          We build the digital systems that grow your business — websites, AI automations, apps, and marketing that turn traffic into revenue.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-3.5 font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200">
            Book Free Demo →
          </a>
          <a href="#services" className="inline-flex justify-center items-center gap-2 border border-white/[0.08] text-white rounded-full px-8 py-3.5 font-dm font-medium hover:bg-white/[0.07] transition-all duration-200">
            Explore Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: "10", label: "Days to go live" },
            { stat: "20h+", label: "Saved per week" },
            { stat: "3×", label: "Revenue growth" },
            { stat: "50+", label: "Integrations" }
          ].map((item) => (
            <GlassCard key={item.label} className="p-6 text-center">
              <p className="font-syne font-bold text-4xl text-white">{item.stat}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)] font-dm">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
