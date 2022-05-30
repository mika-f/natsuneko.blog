module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          primary: "#f8bacf",
          secondary: "#efcedb",
          bg: "rgba(255, 141, 172, .75)",
          "text-dark": "#322126",
          "text-white": "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
