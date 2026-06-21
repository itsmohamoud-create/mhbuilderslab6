"use client"
import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientText } from "@/components/ui/GradientText"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { WA_LINK } from "@/lib/constants"
import type { ROIResults } from "@/lib/types"

export default function ROICalculator() {
  const [rev, setRev] = useState(10000)
  const [leads, setLeads] = useState(100)
  const [conv, setConv] = useState(10)
  const [acv, setAcv] = useState(500)
  const [results, setResults] = useState<ROIResults>({ monthlyGain: 0, annualGain: 0, extraClients: 0, roi: 0 })

  // Recalculates live on every input change
  useEffect(() => {
    const improvedLeads = leads * 1.45
    const improvedConv = Math.min(conv * 1.5, 75)
    const extraClients = (improvedLeads * improvedConv / 100) - (leads * conv / 100)
    const monthlyGain = Math.round(extraClients * acv)
    const annualGain = monthlyGain * 12
    const roi = rev > 0 ? Math.round((monthlyGain / (rev * 0.1)) * 100) : 0
    setResults({ monthlyGain, annualGain, extraClients: Math.round(extraClients), roi })
  }, [rev, leads, conv, acv])

  return (
    <section id="roi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>ROI Calculator</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            See Your <GradientText>Potential Growth</GradientText>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <GlassCard className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-dm text-[var(--text-muted)] mb-2">Monthly Revenue ($)</label>
              <input 
                type="number" 
                value={rev} 
                onChange={(e) => setRev(Number(e.target.value))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-dm focus:outline-none focus:border-violet"
              />
            </div>
            
            <div>
              <label className="block text-sm font-dm text-[var(--text-muted)] mb-2">Monthly Leads: {leads}</label>
              <input 
                type="range" 
                min="10" max="2000" 
                value={leads} 
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full accent-violet"
              />
            </div>

            <div>
              <label className="block text-sm font-dm text-[var(--text-muted)] mb-2">Conversion Rate: {conv}%</label>
              <input 
                type="range" 
                min="1" max="80" 
                value={conv} 
                onChange={(e) => setConv(Number(e.target.value))}
                className="w-full accent-violet"
              />
            </div>

            <div>
              <label className="block text-sm font-dm text-[var(--text-muted)] mb-2">Avg Customer Value: ${acv}</label>
              <input 
                type="range" 
                min="50" max="10000" step="50"
                value={acv} 
                onChange={(e) => setAcv(Number(e.target.value))}
                className="w-full accent-violet"
              />
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <p className="text-sm text-[var(--text-muted)] font-dm mb-2">Extra Monthly Revenue</p>
              <p className="font-syne font-bold text-4xl">
                <GradientText>${results.monthlyGain.toLocaleString()}</GradientText>
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-sm text-[var(--text-muted)] font-dm mb-2">Extra Annual Revenue</p>
              <p className="font-syne font-bold text-4xl">
                <GradientText>${results.annualGain.toLocaleString()}</GradientText>
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-sm text-[var(--text-muted)] font-dm mb-2">Extra Clients/Month</p>
              <p className="font-syne font-bold text-4xl">
                <GradientText>{results.extraClients}</GradientText>
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-sm text-[var(--text-muted)] font-dm mb-2">ROI %</p>
              <p className="font-syne font-bold text-4xl">
                <GradientText>{results.roi}%</GradientText>
              </p>
            </GlassCard>
            
            <div className="col-span-2 mt-4">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-4 font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)]">
                Book Free Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
