export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-dm font-medium tracking-widest uppercase text-violet-light mb-4">
      <span className="w-6 h-px bg-violet-light" />
      {children}
      <span className="w-6 h-px bg-violet-light" />
    </p>
  )
}
