/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#07111F",
        midnight: "#0B1A2E",
        ink: "#112641",
        panel: "#10233D",
        borderline: "rgba(130, 186, 255, 0.14)",
        teal: "#2DD4BF",
        azure: "#4DA8FF",
        ember: "#FF9A3E",
        alert: "#FF5D73",
        mist: "#9DB3CC",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Sora'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        panel: "0 18px 60px rgba(1, 10, 26, 0.45)",
        glow: "0 0 0 1px rgba(77, 168, 255, 0.18), 0 12px 36px rgba(11, 26, 46, 0.55)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(45, 212, 191, 0.16), transparent 28%), radial-gradient(circle at right, rgba(77, 168, 255, 0.14), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.02) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.02) 25%, transparent 25%)",
      },
      backgroundSize: {
        "hero-grid": "auto, auto, 26px 26px, 26px 26px",
      },
    },
  },
  plugins: [],
};
