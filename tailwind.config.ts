import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#12B5A5",
          hover: "#0E9486",
          dark: "#0B7A6E",
          light: "#E0F8F5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8FE8DC",
          light: "#E8FAF7",
          dark: "#57C4B6",
          foreground: "#0D5B52",
        },
        mint: {
          50: "#F0FDFB",
          100: "#E2F9F5",
          200: "#C6F4EC",
          300: "#8FE8DC",
          400: "#4FD1C5",
          500: "#12B5A5",
          600: "#0E9486",
          700: "#0B7A6E",
          800: "#0A6258",
          900: "#0B524A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#EDFBF8",
          foreground: "#0E7A6E",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        display: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(18, 181, 165, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(18, 181, 165, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)",
        pill: "0 2px 10px rgba(18, 181, 165, 0.25)",
        glass: "0 8px 32px 0 rgba(18, 181, 165, 0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
