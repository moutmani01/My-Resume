import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E13",
          surface: "#10161D",
          raised: "#161E27",
          border: "#232D38",
        },
        ink: {
          DEFAULT: "#E6EDF3",
          muted: "#8896A0",
          faint: "#57626D",
        },
        signal: {
          green: "#3FB950",
          blue: "#4C9EEB",
          amber: "#D9A441",
          red: "#E5534B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #182029 1px, transparent 1px), linear-gradient(to bottom, #182029 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        blink: "blink 1.6s step-start infinite",
        scan: "scan 3s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        scan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 200%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
