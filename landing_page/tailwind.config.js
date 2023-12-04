/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkorchid: "#9807bc",
      },
      spacing: {},
      fontFamily: {
        "asap-condensed": "'Asap Condensed'",
        "architects-daughter": "'Architects Daughter'",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
