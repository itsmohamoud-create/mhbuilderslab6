import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { WA_LINK } from "@/lib/constants"

export default function ZeroRiskCTA() {
  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <GlassCard className="rounded-[28px] p-16 md:p-10 bg-gradient-to-br from-violet/15 via-cyan/10 to-blue/12 shadow-[0_0_80px_rgba(124,58,237,0.15)]">
          <SectionLabel>Start With Zero Risk</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white mb-6">
            Every Qualified Business Gets a <GradientText>Free Strategy Demo</GradientText>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["No commitment required", "Personalised strategy", "Expert consultation", "Live within 10 days"].map(chip => (
              <span key={chip} className="inline-flex items-center gap-1.5 bg-emerald/10 border border-emerald/30 rounded-full px-4 py-2 text-sm text-emerald-300 font-dm">
                ✓ {chip}
              </span>
            ))}
          </div>

          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet to-cyan text-white rounded-full px-10 py-4 font-dm font-medium text-lg shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Free Demo on WhatsApp →
          </a>
          <p className="mt-6 text-xs text-[var(--text-faint)] font-dm">
            Opens WhatsApp instantly · No forms · No waiting
          </p>
        </GlassCard>
      </div>
    </section>
  )
}
