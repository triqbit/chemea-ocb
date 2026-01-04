module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{md,html}",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#050608",
        teal: "#00A6B4",
        gold: "#F3B43A",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        orbit: "0 0 40px rgba(0, 166, 180, 0.35)",
        "orbit-sm": "0 0 20px rgba(0, 166, 180, 0.2)"
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
