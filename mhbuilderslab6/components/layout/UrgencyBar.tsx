"use client"
import { motion, useReducedMotion } from "framer-motion"
import { WA_LINK } from "@/lib/constants"

export function UrgencyBar() {
  const reduced = useReducedMotion()
  return (
    <div className="sticky top-0 z-[100] bg-gradient-to-r from-violet/90 to-cyan/90 text-white py-2 px-4 text-center font-dm text-[0.82rem] tracking-wide flex items-center justify-center gap-3">
      <motion.span 
        className="w-2 h-2 rounded-full bg-emerald-300"
        animate={reduced ? {} : { opacity: [1, 0.6, 1], scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="hidden sm:inline">10 client slots remaining this month — We only take on select projects to guarantee quality.</span>
      <span className="sm:hidden">10 slots left this month.</span>
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-semibold text-white">
        Secure your spot →
      </a>
    </div>
  )
}
