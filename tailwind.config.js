/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}",
    "./src/sections/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'border-glass': 'rgba(225, 225, 225, 0.1)',
        'border-card': 'rgba(225, 225, 225, 0.4)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

