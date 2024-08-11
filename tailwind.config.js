/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2F3F93',
        secondaryBlue: "#ECEEF9",

        primaryLight: '#F8F4F1',
        secondaryLight: "#F9F9F9",
        tertiaryLight: "#DFDFDF",
        quaternaryLight: "#D7D7D7",

        primaryOrange: "#F8931F",

        primaryPurple: "#140342"
      },
    },
  },
  plugins: []
}