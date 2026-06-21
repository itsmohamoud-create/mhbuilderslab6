export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-violet-light via-cyan-light to-blue-300 bg-clip-text text-transparent ${className ?? ""}`}>
      {children}
    </span>
  )
}
