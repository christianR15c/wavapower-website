/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#F5F7FA',
        neutralDGrey: '#4D4D4D',
        brandPrimary: '#1F4E79',
        brandSecondary: '#9933ff',
        neutralGrey: '#717171',
        gray900: '#18191F',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slidein: 'slidein 1s ease 300ms',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
