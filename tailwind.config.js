/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        terminal: {
          "0%": { background: "transparent" },
          "100%": { background: "#ffe754" },
        },
      },
      animation: {
        terminal: "terminal 0.5s ease-in-out infinite alternate",
      },
      colors: {
        azul: '#0099ff',
        verde: '#01DFA2',
        'shamrock': {
          '50': '#eafff6',
          '100': '#cdfee8',
          '200': '#a0fad6',
          '300': '#63f2c1',
          '400': '#26e1a8',
          '500': '#01dfa2', //primary
          '600': '#00a377',
          '700': '#008262',
          '800': '#00674f',
          '900': '#005443',
          '950': '#003027',
        },
        'dodger-blue': {
          '50': '#edfcff',
          '100': '#d6f7ff',
          '200': '#b5f3ff',
          '300': '#83eeff',
          '400': '#48e1ff',
          '500': '#1ec7ff',
          '600': '#06acff',
          '700': '#0099ff', // primary
          '800': '#0874c5',
          '900': '#0d629b',
          '950': '#0e3b5d',
        },
        'shark': {
          '50': '#f6f7f9',
          '100': '#eceff2',
          '200': '#d4dbe3',
          '300': '#aebccb',
          '400': '#8297ae',
          '500': '#637b94',
          '600': '#4e637b',
          '700': '#405064',
          '800': '#384454',
          '900': '#323c48',
          '950': '#222831', // primary
        },
        'bright-gray': {
          '50': '#f4f6f7',
          '100': '#e2e7eb',
          '200': '#c8d1d9',
          '300': '#a2b2be',
          '400': '#74899c',
          '500': '#596e81',
          '600': '#4d5d6d',
          '700': '#434e5b',
          '800': '#3c444e',
          '900': '#363c45', //primary
          '950': '#20242c',
        },
      },
      backgroundImage: {
        'gray-logo': "url('/src/assets/svg/gris.svg')",
        'black-logo': "url('/src/assets/svg/black.svg')",
        ayudaConcho: "url('/src/assets/img/ayudaConcho.gif')",
        wave: "url('/src/assets/svg/wave.svg')",
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: []
}
