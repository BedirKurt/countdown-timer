/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBox: 'hsl(236, 21%, 26%)',
        primaryText: 'hsl(345, 95%, 68%)',
      },
    },
  },
  plugins: [],
  
}

