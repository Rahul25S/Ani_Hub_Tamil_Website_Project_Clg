/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "nsans-light":["Nsans Regular"],
        "nsans-medium":["Nsans Title"],
        "nsans-bold":["Nsans Head"],

      }
    },
  },
  plugins: [],
}