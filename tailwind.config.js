/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        primary: '#FF3AC4'
      },
      keyframes: {
        pulseFully: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        pulseFully: "pulseFully 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
  plugins: [],
}

