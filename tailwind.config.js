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
      // 🚨 Fuentes personalizadas
      fontFamily: {
        robotoC: ['Roboto Condensed', 'sans-serif'],
      },
      
      // 🎨 Colores personalizados
      colors: {
        'forza-gray': '#9c9c9c',
        'lam': '#00B8B0',        // Verde agua institucional (principal)
        'lam-dark': '#009A93',   // Versión más oscura para hover o contraste
      },
    },
  },
  plugins: [],
}
