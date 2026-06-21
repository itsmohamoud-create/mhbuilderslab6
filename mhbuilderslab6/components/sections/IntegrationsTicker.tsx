"use client"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { INTEGRATIONS_ROW1, INTEGRATIONS_ROW2 } from "@/lib/constants"

const colorMap: Record<string, string> = {
  violet: "bg-violet/20 text-violet-light border-violet/30",
  blue: "bg-blue/20 text-blue-300 border-blue/30",
  emerald: "bg-emerald/20 text-emerald-300 border-emerald/30",
  amber: "bg-amber/20 text-amber-300 border-amber/30",
  rose: "bg-rose/20 text-rose-300 border-rose/30",
  cyan: "bg-cyan/20 text-cyan-light border-cyan/30",
}

export default function IntegrationsTicker() {
  return (
    <section id="integrations" className="py-20 overflow-hidden">
      <div className="text-center mb-10">
        <SectionLabel>Powered by & Integrates With 50+ Platforms</SectionLabel>
      </div>
      
      <div className="relative space-y-4">
        <div className="flex gap-6" style={{ animation: "ticker 35s linear infinite" }}>
          {[...INTEGRATIONS_ROW1, ...INTEGRATIONS_ROW1].map((tool, i) => (
            <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorMap[tool.color]} font-dm text-sm whitespace-nowrap`}>
              <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold">
                {tool.abbr}
              </span>
              {tool.name}
            </div>
          ))}
        </div>

        <div className="flex gap-6" style={{ animation: "ticker 40s linear infinite reverse" }}>
          {[...INTEGRATIONS_ROW2, ...INTEGRATIONS_ROW2].map((tool, i) => (
            <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${colorMap[tool.color]} font-dm text-sm whitespace-nowrap`}>
              <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold">
                {tool.abbr}
              </span>
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
