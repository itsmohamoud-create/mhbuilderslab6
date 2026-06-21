import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { PRODUCTS, WA_LINK } from "@/lib/constants"

const badgeColorMap: Record<string, string> = {
  cyan:    "bg-cyan/10 border-cyan/30 text-cyan-light",
  violet:  "bg-violet/10 border-violet/30 text-violet-light",
  emerald: "bg-emerald/10 border-emerald/30 text-emerald-300",
  amber:   "bg-amber/10 border-amber/30 text-amber-300",
  rose:    "bg-rose/10 border-rose/30 text-rose-300",
}

export default function DigitalProducts() {
  return (
    <section id="products" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Digital Products</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Buy Once. <GradientText>Use Forever.</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(product => (
            <GlassCard key={product.name} accentColor={product.badgeColor as "violet" | "cyan" | "blue" | "emerald" | "amber" | "rose"} className="p-8 flex flex-col">
              <span className={`inline-block self-start text-xs font-dm rounded-full px-3 py-1 mb-4 border ${badgeColorMap[product.badgeColor] ?? badgeColorMap.violet}`}>
                {product.badge}
              </span>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{product.name}</h3>
              <p className="text-[var(--text-muted)] font-dm mb-4 flex-grow">{product.desc}</p>
              <p className="text-xs text-[var(--text-faint)] font-dm mb-6">Format: {product.format}</p>
              <a 
                href={`${WA_LINK}?text=${encodeURIComponent(product.waMsg)}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-violet-light font-dm font-medium hover:gap-3 transition-all"
              >
                Get this →
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
