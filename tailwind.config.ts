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
        canvas: "#0A0E13",
        surface: "#10161D",
        raised: "#161E27",
        line: "#232D38",
        ink: {
          DEFAULT: "#E6EDF3",
          muted: "#9BA8B3",
          faint: "#7A8794",
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
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        blink: "blink 1.6s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
