/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1ea",
        bone: "#fffaf0",
        blue: "#0040ff",
        blueSoft: "#0d66ff",
        lime: "#b8ff12",
        ink: "#111414",
        moss: "#063d30",
        mist: "#e8e4dc"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "Space Grotesk", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        organic: "2.25rem"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 64, 255, 0.10)",
        glow: "0 0 80px rgba(184, 255, 18, 0.28)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};
