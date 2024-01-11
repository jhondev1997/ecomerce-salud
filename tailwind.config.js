import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      animation: {
        'pulse-1s': 'pulse 1s linear',
        'bounce-2s': 'bounce 1s linear',
        'appear-1s': 'appear 1s ease-in-out',
        'disappear-1s': 'disappear 1s ease-in-out',
        'appear1-.4s': 'appear1 .4s ease-in-out'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'translateX(20rem)' },
          '50%': { opacity: '.5' },
          '100%': { opacity: '1', transform: 'translateX(0rem)' },
        },
        disappear: {
          '0%': { opacity: '1', transform: 'translateX(0rem)' },
          '50%': { opacity: '.5' },
          '100%': { opacity: '0', transform: 'translateX(20rem)' },
        },
        appear1: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        'abel': ['Abel', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'lobster': ['Lobster', 'cursive']
      },
      backgroundColor: {
        'blue-imm': "#007cc3",
        'blue-imm-2': "#389eda",
        'green-imm-1': '#a6ce39',
        'green-imm-2': '#62bb46',
        'green-imm-3': '#009f46',
        'pink-imm-1:': '#f4c6de',
        'pink-imm-2:': '#f5a4c7',
        'pink-imm-3:': '#f173ac',
      },
      colors: {
        'blue-imm-1': "#007cc3",
        'blue-imm-2': "#389eda",
        'green-imm-1': '#a6ce39',
        'green-imm-2': '#62bb46',
        'green-imm-3': '#009f46',
        'pink-imm-1:': '#f4c6de',
        'pink-imm-2:': '#f5a4c7',
        'pink-imm-3:': '#f173ac',
      },
      maxWidth: {
        'xs-1': '300px',
        'xs-2': '280px',
        'xs-3': '240px',
        'xs-4': '200px',
      },
      scrollbarColor: {
        'blue-imm-1': "#007cc3",
      }
    },
  },

  plugins: [
    forms,
    // plugin(function ({ addBase }) {
    //   addBase({
    //     '@font-face': {
    //       fontFamily: 'Red Hat Display',
    //       fontWeight: '300',
    //       src: 'url(/fonts/lobster/Lobster-Regular.ttf)'
    //     }
    //   })
    // }),
  ],
};
