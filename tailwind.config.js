/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens:{
      'sm':'320px',
      'lg':'1024px',
    },
    // colors:{
    //   'primary': '#CC2D4A',
    //   'secondary': '#8FA206',
    //   'terciary': '#61AEC9'
    // },
    fontFamily:{
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../public/img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../public/img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../public/img/yosemite.jpg')",
			  'LA': "url('../public/img/LA.jpg')",
			  'seattle': "url('../public/img/seattle.jpg')",
			  'new_york': "url('../public/img/new_york.jpg')",
			  'norway': "url('../public/img/norway.jpg')",
			  'sydney': "url('../public/img/sydney.jpg')",
			  'miami': "url('../public/img/miami.jpg')",
			  'switzerland': "url('../public/img/switzerland.jpg')",
			  'bali': "url('../public/img/bali.jpg')",
			  'norway': "url('../public/img/norway.jpg')",
			  'chicago': "url('../public/img/chicago.jpg')",
			  'europe': "url('../public/img/europe.jpg')",
			  'iceland': "url('../public/img/iceland.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}

