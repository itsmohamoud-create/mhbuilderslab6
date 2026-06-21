import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-base":      "var(--bg)",
        "bg2":          "var(--bg2)",
        "bg3":          "var(--bg3)",
        "text-base":    "var(--text)",
        "text-muted":   "var(--text-muted)",
        "text-faint":   "var(--text-faint)",
        "violet":       "var(--violet)",
        "violet-light": "var(--violet-light)",
        "cyan":         "var(--cyan)",
        "cyan-light":   "var(--cyan-light)",
        "blue":         "var(--blue)",
        "emerald":      "var(--emerald)",
        "amber":        "var(--amber)",
        "rose":         "var(--rose)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm:   ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grad-text": "var(--grad-text)",
        "grad-btn":  "var(--grad-btn)",
      },
    },
  },
  plugins: [],
}

export default config
