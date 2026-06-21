import Link from "next/link"
import { WA_LINK, EMAIL, PHONE } from "@/lib/constants"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[var(--bg2)] relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 px-8 py-16">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-[var(--text-muted)] font-dm max-w-xs">
            Premium digital systems for serious business growth. Built for the future.
          </p>
        </div>
        
        <div>
          <h4 className="font-syne font-bold text-white mb-4 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] font-dm">
            <li><Link href="/#services" className="hover:text-violet-light">Websites</Link></li>
            <li><Link href="/#services" className="hover:text-violet-light">AI Automation</Link></li>
            <li><Link href="/#services" className="hover:text-violet-light">Marketing</Link></li>
            <li><Link href="/#services" className="hover:text-violet-light">Branding</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4 text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] font-dm">
            <li><Link href="/products" className="hover:text-violet-light">Digital Products</Link></li>
            <li><Link href="/courses" className="hover:text-violet-light">Courses</Link></li>
            <li><Link href="/blog" className="hover:text-violet-light">Blog</Link></li>
            <li><Link href="/#portfolio" className="hover:text-violet-light">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] font-dm">
            <li><Link href="/about" className="hover:text-violet-light">About Us</Link></li>
            <li><Link href="/#roi" className="hover:text-violet-light">ROI Calculator</Link></li>
            <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="hover:text-violet-light">Book Free Demo</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-syne font-bold text-white mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)] font-dm">
            <li><a href={`mailto:${EMAIL}`} className="hover:text-violet-light">{EMAIL}</a></li>
            <li><a href={`tel:${PHONE}`} className="hover:text-violet-light">{PHONE}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.05] py-6 px-8 text-center text-xs text-[var(--text-faint)] font-dm">
        © 2026 MH Builders Lab. All rights reserved. Built to build builders.
      </div>
    </footer>
  )
}
