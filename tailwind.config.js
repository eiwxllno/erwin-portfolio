module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        customColor: "#578FCA", // Your custom color
      },
      // Add keyframes for the wave animation
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
      },
      // Add the wave animation utility
      animation: {
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
