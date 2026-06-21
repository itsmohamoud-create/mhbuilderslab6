"use client"
import { cn } from "@/lib/utils"
import type { GlassCardProps } from "@/lib/types"

const accentMap: Record<string, string> = {
  violet:  "hover:border-violet/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]",
  cyan:    "hover:border-cyan/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]",
  blue:    "hover:border-blue/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]",
  emerald: "hover:border-emerald/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]",
  amber:   "hover:border-amber/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]",
  rose:    "hover:border-rose/30 hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]",
}

export function GlassCard({ children, className, accentColor = "violet" }: GlassCardProps) {
  return (
    <div className={cn(
      "rounded-2xl border backdrop-blur-xl",
      "bg-white/[0.04] border-white/[0.08]",
      "transition-all duration-300 hover:-translate-y-1",
      accentMap[accentColor],
      className
    )}>
      {children}
    </div>
  )
}
