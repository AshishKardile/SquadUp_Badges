/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-blue-dark': '#0F1D32',
        'pixel-blue-card': '#14243B',
        'pixel-blue-light': '#87CEEB',
        'pixel-gold': '#F4C430',
        'pixel-gold-text': '#FFDF6D',
        'pixel-parchment': '#FAF4E8',
        'pixel-cyan': '#00E5FF',
        'pixel-green': '#2ECC71',
        'pixel-orange': '#E67E22',
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
        body: ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '0 6px 0 #000',
        'pixel-sm': '0 4px 0 #000',
        'pixel-lg': '0 8px 0 #000',
        'pixel-inset': 'inset 0 0 12px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
