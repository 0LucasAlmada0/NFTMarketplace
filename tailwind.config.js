/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'mainBackground': '#2B2B2B'
      },
      fontFamily:{
        'secondaryFont': 'Space Mono'
      }
    },
  },
  plugins: [],
}

