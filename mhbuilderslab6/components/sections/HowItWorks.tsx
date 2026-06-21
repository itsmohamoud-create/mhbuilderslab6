import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"

const steps = [
  { num: "01", title: "Book Free Demo", desc: "Share your goals. Get a free 30-min strategy session with a custom system blueprint — before you spend a penny." },
  { num: "02", title: "We Build the System", desc: "Custom execution, delivered fast. We configure, integrate, and test everything. You focus on your business, we handle the tech." },
  { num: "03", title: "You Grow", desc: "Launch, automate, and scale with confidence. We monitor performance and optimise monthly." }
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Up & Running <GradientText>in 10 Days</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-violet via-cyan to-transparent" />
          
          {steps.map((step) => (
            <GlassCard key={step.num} className="p-8 text-center relative z-10">
              <p className="font-syne font-bold text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-light to-cyan-light">
                {step.num}
              </p>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{step.title}</h3>
              <p className="text-[var(--text-muted)] font-dm">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
