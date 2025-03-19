module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      colors: {
        customColor: "#7A73D1", // Add your custom color here
      },
    },
  },
  plugins: [],
};
