"use client"
import { useState } from "react"
import { GlassCard } from "@/components/ui/GlassCard"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"
import { PROJECTS, WA_LINK } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { Project } from "@/lib/types"

const filters = ["All", "Websites", "Apps", "AI & Auto", "Marketing", "Branding"]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Real Businesses. <GradientText>Real Results.</GradientText>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-dm transition-all ${filter === f ? "bg-gradient-to-r from-violet to-cyan text-white" : "bg-white/[0.04] border border-white/[0.08] text-[var(--text-muted)] hover:text-white"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <GlassCard 
              key={project.id} 
              className="group cursor-pointer overflow-hidden"
            >
              <div onClick={() => setSelected(project)}>
                <div className="h-48 bg-gradient-to-br from-violet/20 via-cyan/10 to-transparent flex items-center justify-center text-6xl">
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-dm bg-white/5 border border-white/10 rounded-full px-2 py-0.5 text-violet-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">{project.name}</h3>
                  <p className="text-[var(--text-muted)] font-dm text-sm mb-4">{project.shortDesc}</p>
                  <span className="inline-block bg-emerald/10 text-emerald-300 border border-emerald/20 rounded-full px-3 py-1 text-xs font-dm">
                    {project.metric}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-[var(--bg2)] border border-white/10 rounded-2xl p-8 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white" onClick={() => setSelected(null)} aria-label="Close">
                <X />
              </button>
              <div className="text-5xl mb-4">{selected.icon}</div>
              <h3 className="font-syne font-bold text-2xl text-white mb-2">{selected.name}</h3>
              <p className="text-emerald-300 font-dm mb-4">{selected.metric}</p>
              <p className="text-[var(--text-muted)] font-dm mb-6">{selected.longDesc}</p>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-3 font-dm font-medium">
                Build Something Similar →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
