// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"], // ✅ fallback added
      },
      colors: {
        primary: "#0AB5A9",
        secondary: "#77F1FF",
        tertiary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
