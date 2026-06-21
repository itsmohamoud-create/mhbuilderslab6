"use client"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { RevealWrapper } from "@/components/ui/RevealWrapper"
import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    icon: "🌐",
    title: "Digital Presence",
    desc: "Websites, web apps, and brand identities that build instant trust and convert traffic into leads.",
    tags: ["Websites", "Mobile Apps", "Web Apps", "Brand Identity", "Content Design"],
    color: "violet" as const
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "AI voice agents, CRM integrations, and custom workflows that save you 20+ hours per week.",
    tags: ["AI Voice Agents", "Lead Gen", "CRM Integration", "Workflows", "Google Reviews"],
    color: "cyan" as const
  },
  {
    icon: "📈",
    title: "Growth & Marketing",
    desc: "Paid ads, SEO, and email funnels engineered to lower acquisition costs and scale revenue.",
    tags: ["Paid Ads", "SEO", "Funnels", "Email Marketing", "Analytics"],
    color: "amber" as const
  },
  {
    icon: "🛠️",
    title: "Build Your Own",
    desc: "Courses, digital products, and business systems designed to give you total financial freedom.",
    tags: ["Online Courses", "Digital Products", "Business Systems", "SOPs"],
    color: "emerald" as const
  }
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Four Systems. <GradientText>Scale Beyond Limits.</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <RevealWrapper key={service.title} delay={i * 0.1}>
              <GlassCard 
                accentColor={service.color}
                className="p-8 h-full"
              >
                <div onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-syne font-bold text-2xl text-white mb-3">{service.title}</h3>
                  <p className="text-[var(--text-muted)] font-dm mb-6">{service.desc}</p>
                  
                  <motion.div 
                    animate={{ height: hovered === i ? "auto" : 0, opacity: hovered === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-xs font-dm bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
