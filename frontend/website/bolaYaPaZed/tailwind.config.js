/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textDarkGreenColor:"#2a452e",
        primaryBlue:"#0000FF",
      }
    },
  },
  plugins: [],
}

