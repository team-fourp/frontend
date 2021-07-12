module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          'dark': '#2AB4FC'
        },
        dark: {
          header: '#000729'
        }
      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Montserrat'],
        mono: ['Montserrat'],
        display: ['Montserrat'],
        body: ['Montserrat']
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
