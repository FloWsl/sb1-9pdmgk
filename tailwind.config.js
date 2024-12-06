/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        galaxy: {
          50: '#E2D7FF',
          100: '#A575FF',
          200: '#8758D1',
          300: '#6E3AC7',
          400: '#ded7ef',
          500: '#8758D1',
          600: '#6E3AC7',
          700: 'rgba(110, 58, 199, 0.3)',
          800: '#1a0940',
          900: '#15012D',
          950: '#0A0015',
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(165, 117, 255, 0.2)',
        button: '0 4px 12px rgba(110, 58, 199, 0.3)',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(180deg, #8758D1 0%, #6E3AC7 100%)',
        'container-gradient':
          'linear-gradient(180deg, rgba(110, 58, 199, 0.15) 0%, rgba(135, 88, 209, 0.05) 100%)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};