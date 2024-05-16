/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        AntiPasto:["anti-pasto","sans-serif"]
      }
    },
  },
  plugins: [],
}