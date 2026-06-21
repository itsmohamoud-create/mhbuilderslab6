"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"
import { TESTIMONIALS } from "@/lib/constants"

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!paused) {
      const timer = setInterval(() => setIndex(prev => (prev + 1) % TESTIMONIALS.length), 4000)
      return () => clearInterval(timer)
    }
  }, [paused])

  return (
    <section id="testimonials" className="py-24 px-6 bg-[var(--bg2)]">
      <div className="max-w-4xl mx-auto text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <SectionLabel>Client Wins</SectionLabel>
        <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white mb-12">
          Trusted by <GradientText>Builders Worldwide</GradientText>
        </h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-10 relative"
            >
              <div className="text-amber-400 text-xl mb-4">★★★★★</div>
              <p className="text-xl font-dm text-white italic mb-8 leading-relaxed">"{TESTIMONIALS[index].quote}"</p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet to-cyan flex items-center justify-center font-syne font-bold text-white">
                  {TESTIMONIALS[index].initials}
                </div>
                <div className="text-left">
                  <p className="font-syne font-bold text-white">{TESTIMONIALS[index].name}</p>
                  <p className="text-sm text-[var(--text-muted)] font-dm">{TESTIMONIALS[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${index === i ? "w-8 bg-gradient-to-r from-violet to-cyan" : "w-2 bg-white/20"}`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
