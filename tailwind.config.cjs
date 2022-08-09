/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bright-blue' : 'hsl(220, 98%, 61%)',
      'cyan' : 'hsl(192, 100%, 67%)',
      'purple' : 'hsl(280, 87%, 65%)',


      'light-gray-100' : 'hsl(0, 0%, 98%)',
      'light-gray-200' : 'hsl(256, 33%, 92%)',
      'light-gray-300' : 'hsl(233, 11%, 84%)',
      'light-gray-400' : 'hsl(236, 9%, 61%)',
      'light-gray-500' : 'hsl(235, 19%, 35%)',

      'dark-blue-100' : 'hsl(234, 39%, 85%)',
      'dark-gray-100-hover' : 'hsl(236, 33%, 92%)',
      'dark-gray-200' : 'hsl(234, 11%, 52%)',
      'dark-gray-300' : 'hsl(233, 14%, 35%)',
      'dark-gray-400' : 'hsl(237, 14%, 26%)',
      'dark-gray-500' : 'hsl(235, 21%, 11%)',
      'dark-gray-500-desat' : 'hsl(235, 24%, 19%)',
    },
    extend: {
      backgroundImage: {
        'wave-header-light': "url('src/assets/images/wave-header-light.svg')",
        'wave-header-dark': "url('src/assets/images/wave-header-dark.svg')",
      },
    },
  },
  plugins: [],
}
