# MH Builders Lab

Premium digital agency website. Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion.

## Quick Start in VS Code

1. **Unzip this folder** and open it in VS Code:
   `File → Open Folder...` → select the unzipped `mhbuilderslab` folder

2. **Open a terminal in VS Code** (`Terminal → New Terminal`) and run:

   ```bash
   npm install
   ```

   (or `pnpm install` if you prefer pnpm — both work)

3. **Run the dev server:**

   ```bash
   npm run dev
   ```

4. Open **http://localhost:3000** in your browser. The full site loads immediately —
   no API keys, no environment setup required.

## Add Your Founder Photo

Drop a photo named `mo.png` into the `public/` folder. It's used on the
`/about` page. The logo is a built-in SVG component (`components/layout/Logo.tsx`)
so you don't need a logo file at all.

## Enabling Live AI Chat (Optional)

The AI Assistant widget works out of the box using smart built-in replies — no
setup needed. To switch it to live Claude responses:

1. Copy `.env.local.example` to `.env.local`
2. Add your key: `ANTHROPIC_API_KEY=sk-ant-...`
3. Restart the dev server

## Deploying to Vercel

1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Click **Deploy** — zero environment variables required for a working site
4. (Optional) Add `ANTHROPIC_API_KEY` in Vercel → Settings → Environment Variables
   to enable live AI chat, then redeploy

## Project Structure

```
app/              → Pages and routes (App Router)
components/ui/    → Reusable design primitives (GlassCard, GradientText, etc.)
components/layout/→ Navbar, Footer, Logo, UrgencyBar
components/sections/ → All homepage sections
lib/              → Types, constants (all site content), animations, utils
public/           → Static assets (add mo.png here)
```

All site copy, projects, testimonials, products, and courses live in
`lib/constants.ts` — edit that one file to update content across the whole site.

---
Built to build builders. 👑
