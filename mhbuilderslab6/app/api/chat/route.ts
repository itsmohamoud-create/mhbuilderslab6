import { NextRequest, NextResponse } from "next/server"
import type { ChatMessage } from "@/lib/types"

const SYSTEM_PROMPT = `You are MH Assistant, the AI assistant for MH Builders Lab — a premium digital agency founded by Mohamud Hassan that builds websites, apps, AI automation systems, and digital marketing solutions for small businesses worldwide. Be warm, confident, helpful. Keep responses to 2–4 sentences. Always encourage booking a free demo. Mention WhatsApp naturally when relevant.`

function getFallbackReply(lastMessage: string): string {
  const msg = lastMessage.toLowerCase()
  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much"))
    return "Every project is custom-scoped, so pricing depends on what you need. The quickest way to get an accurate figure is a free 30-min strategy call — no commitment, just clarity. Want me to send you the WhatsApp link?"
  if (msg.includes("timeline") || msg.includes("how long") || msg.includes("fast"))
    return "Most systems go live within 10 days from kick-off. We move fast because we've built the same pieces dozens of times. Want to map out your specific timeline on a free call?"
  if (msg.includes("service") || msg.includes("website") || msg.includes("app") || msg.includes("automat"))
    return "We build websites, mobile apps, AI automation, and digital marketing systems for small businesses. The best starting point is a free strategy call where we map out exactly what you need. Shall I send you the WhatsApp link to book it?"
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return "Hey! Welcome to MH Builders Lab 👋 I'm here to help you figure out what digital system your business needs. What's the biggest bottleneck you're dealing with right now?"
  return "Great question! To give you the most accurate answer, a quick free call with Mohamud would be perfect — he can tailor advice to your specific situation. Want me to send you the WhatsApp link to book it?"
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json()
    if (!messages || !Array.isArray(messages))
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })

    const apiKey = process.env.ANTHROPIC_API_KEY

    if (!apiKey) {
      const lastMsg = messages[messages.length - 1]?.content ?? ""
      return NextResponse.json({ content: getFallbackReply(lastMsg) })
    }

    const Anthropic = (await import("@anthropic-ai/sdk")).default
    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    })

    const block = response.content[0]
    if (block.type === "text") {
      return NextResponse.json({ content: block.text })
    }
    throw new Error("Unexpected response type")

  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { content: "Something went wrong on my end. Please reach us directly on WhatsApp at +254 723 783 337!" },
      { status: 500 }
    )
  }
}
