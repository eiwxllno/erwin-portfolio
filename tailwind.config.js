module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        customColor: "#578FCA", // Add your custom color here
      },
    },
  },
  plugins: [],
};
