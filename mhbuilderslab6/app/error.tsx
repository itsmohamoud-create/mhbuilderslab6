"use client"
import { useEffect } from "react"
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-center px-6">
      <div>
        <h2 className="font-syne text-2xl font-bold text-white mb-4">Something went wrong</h2>
        <p className="text-[var(--text-muted)] mb-8">An unexpected error occurred. Please try again.</p>
        <button onClick={reset} className="bg-gradient-to-r from-violet to-cyan text-white rounded-full px-8 py-3.5 font-dm font-medium">
          Try again
        </button>
      </div>
    </main>
  )
}
