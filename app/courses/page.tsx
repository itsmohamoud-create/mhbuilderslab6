import type { Metadata } from "next"
import Courses from "@/components/sections/Courses"

export const metadata: Metadata = {
  title: "Courses — MH Builders Lab",
  description: "Learn what we do. Build it yourself. Join the waitlist.",
}

export default function CoursesPage() {
  return (
    <main className="pt-20">
      <div className="text-center py-20 px-6">
        <h1 className="font-syne font-bold text-5xl text-white">Courses</h1>
        <p className="text-[var(--text-muted)] mt-4 font-dm">Master the systems that run modern businesses.</p>
      </div>
      <Courses />
    </main>
  )
}
