import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f5fb",
          100: "#dde7f3",
          200: "#b9cce4",
          300: "#8eaccf",
          400: "#5582b2",
          500: "#2c5e98",
          600: "#0f3a82",
          700: "#0c3171",
          800: "#0a2a60",
          900: "#081f48",
          dark: "#0a2a60",
          DEFAULT: "#0f3a82",
        },
        ink: {
          DEFAULT: "#0b1220",
          soft: "#3b4658",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoom: {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .9s cubic-bezier(.22,.7,.27,1) both",
        zoom: "zoom 9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
