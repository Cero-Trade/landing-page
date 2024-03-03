/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        other: { min: '640px' },
        md: { min: '640px', max: '970px' },
      },
      colors: {
        background: {
          black: '#181E23',
          gray: '#F5F7FA',
        },
        greens: {
          1: '#C1E833',
          2: '#90B214',
          3: '#B1D824',
          4: '#103E13',
        },
        grays: {
          1: '#4D4D4D',
          2: '#717171',
          3: '#F5F7FA',
          4: '#D9DBE1',
          5: '#464B4F',
          6: '#909AA4',
        },
        blacks: {
          1: '#181E23',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        inria: ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
