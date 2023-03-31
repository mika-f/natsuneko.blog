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
          bg: "rgb(255, 174, 189)",
          "text-dark": "#322126",
          "text-white": "#ffffff",
        },
        season: {
          primary: "#fbd2d2",
          background: "#FFF2F4",
          text: "#333",
          link: "#D41C59",
        },
      },
    },
  },
  plugins: [],
};
