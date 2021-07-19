module.exports = {
  mode: 'jit',
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
        light: {
          font: '#495057',
          'font-title': '#424445',
          background: '#fafbff'
        },
        dm: {
          dark: '#000729',
          darker: '#0a112e',
          darkest: '#e5e7eb',
          background: '#000729',
          'dark-accent': '#15204c',
          'dark-accordion': '#0a112e'
        },
        dark: {
          font: '#7b7d82',
          'font-title': '#e5e7eb',
          'font-subtitle': '#rgb(192, 193, 195)'
        }
      },
      fontFamily: {
        sans: ['Montserrat'],
        serif: ['Montserrat'],
        mono: ['Montserrat'],
        display: ['Montserrat'],
        body: ['Montserrat']
      },
      maxHeight: {
        '1rem': 'calc(100vh - 1rem)'
      },
      width: {
        'full-1rem': 'calc(100% - 1rem)'
      },
      saturate: {
        65: '.65',
        85: '.85'
      }
    },
    screens: {
      'sm': '576px',
      'sm-md': '665px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
    scrollbar: ['rounded', 'dark']
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
