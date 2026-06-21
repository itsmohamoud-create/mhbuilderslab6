import type { Metadata } from "next"
import DigitalProducts from "@/components/sections/DigitalProducts"

export const metadata: Metadata = {
  title: "Products — MH Builders Lab",
  description: "Buy once. Use forever. Premium digital products and templates.",
}

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <div className="text-center py-20 px-6">
        <h1 className="font-syne font-bold text-5xl text-white">Digital Products</h1>
        <p className="text-[var(--text-muted)] mt-4 font-dm">Tools to scale your business instantly.</p>
      </div>
      <DigitalProducts />
    </main>
  )
}
