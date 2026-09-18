import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          subtle: "var(--bg-subtle)",
          card: "var(--card-bg)",
        },
        main: "var(--text-main)",
        muted: "var(--text-muted)",
        subtle: "var(--text-subtle)",
        border: "var(--border-color)",
        borderFocus: "var(--border-focus)",
        btn: {
          DEFAULT: "var(--btn-bg)",
          text: "var(--btn-text)",
          hover: "var(--btn-hover-bg)",
        },
        pill: {
          bg: "var(--pill-bg)",
          text: "var(--pill-text)",
        },
        statusDot: "var(--status-dot)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
