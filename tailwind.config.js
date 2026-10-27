module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { beige: {50:'#fdfbf7',100:'#f7f1e6',200:'#ece0c8',300:'#e0ccad',400:'#d2b48c',500:'#c2a07a'}, ink: '#2b2b2b' },
      fontFamily: { serif: ['Playfair Display','serif'], sans: ['Inter','sans-serif'] }
    }
  },
  plugins: []
}