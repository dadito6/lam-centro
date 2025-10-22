// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 🚨 Sección para agregar fuentes personalizadas 🚨
      fontFamily: {
        // 'robotoC' será tu nueva clase CSS (ej: class="font-robotoC")
        robotoC: ['Roboto Condensed', 'sans-serif'],
      },
      // Puedes agregar el color gris exacto si lo necesitas a menudo
      colors: {
        'forza-gray': '#9c9c9c', 
      }
    },
  },
  plugins: [],
}