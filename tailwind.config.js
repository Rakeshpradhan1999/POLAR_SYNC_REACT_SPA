module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {},
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          // "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        cursive: ["Big Shoulders Display", "cursive"],
      },
      textColor: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
