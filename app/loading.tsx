export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="flex gap-2">
        {[0,1,2].map(i => (
          <span key={i} className="w-3 h-3 rounded-full bg-violet animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </main>
  )
}
