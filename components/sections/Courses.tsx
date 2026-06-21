"use client"
import { motion, useReducedMotion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { COURSES, WA_LINK } from "@/lib/constants"

export default function Courses() {
  const reduced = useReducedMotion()

  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Learn</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Learn What We Do. <GradientText>Build It Yourself.</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map(course => (
            <GlassCard key={course.title} accentColor="amber" className="p-8 flex flex-col">
              <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/30 rounded-full px-3 py-1 mb-4 self-start">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-amber"
                  animate={reduced ? {} : { opacity: [1, 0.6, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-dm text-amber-300">Waitlist Open</span>
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{course.title}</h3>
              <p className="text-[var(--text-muted)] font-dm mb-4">{course.desc}</p>
              <div className="flex gap-4 text-xs text-[var(--text-faint)] font-dm mb-6">
                <span>⏱ {course.duration}</span>
                <span>👥 {course.audience}</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                {course.outcomes.map(o => (
                  <li key={o} className="flex items-center gap-2 text-sm font-dm text-white">
                    <span className="text-emerald-400">✓</span> {o}
                  </li>
                ))}
              </ul>
              <a 
                href={`${WA_LINK}?text=${encodeURIComponent(course.waMsg)}`} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex justify-center items-center bg-amber/10 border border-amber/30 text-amber-300 rounded-full px-6 py-3 font-dm font-medium hover:bg-amber/20 transition-all"
              >
                Join Waitlist →
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
