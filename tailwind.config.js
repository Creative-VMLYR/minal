/** Utility Classes path Based on gulpfile.js */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Oregon-LDO", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gray: {
          150: "#ececec",
        },
        neutral: {
          150: "#f2f2f2",
        },
        green: {
          450: "#38ef7d",
          950: "#133830",
        },
        teal: {
          650: "#11998e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("./tailwind-plugins/text-stroke"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
  ],
};
