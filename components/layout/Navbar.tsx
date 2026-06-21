"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { WA_LINK, CALENDLY } from "@/lib/constants"
import Logo from "./Logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Industries", href: "/#industries" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[90] bg-[var(--bg)]/75 backdrop-blur-2xl border-b border-white/[0.08] h-[72px] flex items-center px-6 md:px-10">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-dm transition-colors hover:text-violet-light ${pathname === link.href ? "text-violet-light" : "text-[var(--text-muted)]"}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="text-sm font-dm text-[var(--text-muted)] hover:text-violet-light transition-colors">
            Schedule a Call
          </a>
        </div>

        <div className="hidden lg:block">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-2.5 font-dm font-medium shadow-[0_8px_32px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200 text-sm">
            Book Free Demo
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 w-full bg-[var(--bg2)] border-b border-white/[0.08] lg:hidden py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-lg font-dm text-[var(--text-muted)] hover:text-white">
                {link.name}
              </Link>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-4 inline-flex justify-center items-center bg-gradient-to-r from-violet to-cyan text-white rounded-full px-6 py-3 font-dm font-medium">
              Book Free Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
