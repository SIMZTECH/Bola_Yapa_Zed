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
        greenColor:"#008000",
        lightGreenColor:"#c0dbc0",
        textGreenColor:"#1c471c",
        primaryBlue:"#0000FF",
        lightPrimaryText:"#2a4e30",
        // orange 
        primaryOrangeColor:"#FFA500",
        secondaryOrangeColor:"",
        textOrangeColor:"#9e6d14",
        lightOrangeColor:"#f5dfb6",
        foregroundTextColor:"#3ebb91",
        whiteSmokeColor:'#F5F5F5'
      },
      boxShadow:{
        navPanel:"7px 2px 6px -7px rgba(245,223,182,0.75)"
      }
    },
  },
  plugins: [],
}

