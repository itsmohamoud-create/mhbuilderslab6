import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"

const industries = [
  "🏨 Hotels & Restaurants", "💆 Med Spas & Wellness", "🏠 Real Estate", "⚖️ Legal Services", 
  "🏥 Healthcare", "🛒 E-commerce", "🏗️ Contractors", "❤️ Charities & NGOs", 
  "🎯 Coaches", "🚗 Automotive", "🎓 Education", "🚌 Transport & Logistics"
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-5xl mx-auto text-center">
        <SectionLabel>Who We Serve</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white mb-12">
          Built For <GradientText>Your Industry</GradientText>
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((ind) => (
            <span key={ind} className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white font-dm text-sm hover:border-violet/30 transition-colors cursor-default">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
