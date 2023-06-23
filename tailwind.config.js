/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: "#FF6846",
        LightOrange: "#FFDEA7",
        LightBlue: "#C0EEF5",
      },
      lineHeight: {
        loose: "1.2",
      },
    },
  },
  plugins: [],
};
