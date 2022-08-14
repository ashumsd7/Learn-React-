/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Share Tech Mono']
      }
    },
        

  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}