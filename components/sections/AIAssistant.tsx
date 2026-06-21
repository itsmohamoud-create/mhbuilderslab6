"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { GradientText } from "@/components/ui/GradientText"
import type { ChatMessage } from "@/lib/types"

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hey! I'm MH Assistant 👋 How can I help you grow your business today?" }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || loading) return
    setLoading(true)
    setShowQuick(false)
    const updated: ChatMessage[] = [...messages, { role: "user", content }]
    setMessages(updated)
    setInput("")

    try {
      const res = await fetch("/api/chat", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ messages: updated }) 
      })
      if (!res.ok) throw new Error("Network error")
      const data = await res.json()
      setMessages(prev => [...prev, { role: "assistant", content: data.content }])
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please reach us directly on WhatsApp at +254 723 783 337!" }])
    } finally {
      setLoading(false)
    }
  }, [messages, loading])

  const quickReplies = ["What services?", "Pricing?", "Timeline?", "Small businesses?"]

  return (
    <section id="ask" className="py-24 px-6">
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Ask AI</SectionLabel>
          <h2 className="font-syne font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight text-white">
            Talk to <GradientText>MH Assistant</GradientText>
          </h2>
        </div>

        <GlassCard className="p-0 overflow-hidden">
          <div className="bg-gradient-to-r from-violet/20 to-cyan/20 p-4 flex items-center gap-3 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet to-cyan flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <p className="font-syne font-bold text-white">MH Assistant</p>
              <p className="text-xs text-[var(--text-muted)] font-dm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Powered by Claude AI · Always online
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="overflow-y-auto max-h-[280px] p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl font-dm text-sm ${msg.role === "user" ? "bg-gradient-to-r from-violet to-cyan text-white rounded-tr-sm" : "bg-violet/10 border border-violet/15 text-white rounded-tl-sm"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-1.5 items-center p-3">
                {[0, 1, 2].map(i => (
                  <motion.span 
                    key={i}
                    className="w-2 h-2 rounded-full bg-violet-light"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            )}
          </div>

          {showQuick && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map(q => (
                <button 
                  key={q} 
                  onClick={() => sendMessage(q)}
                  className="text-xs font-dm bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-violet-light hover:bg-white/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type your message..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white font-dm text-sm focus:outline-none focus:border-violet"
            />
            <button 
              onClick={() => sendMessage(input)}
              disabled={loading}
              className="bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-2.5 font-dm text-sm font-medium disabled:opacity-50"
            >
              Send →
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
