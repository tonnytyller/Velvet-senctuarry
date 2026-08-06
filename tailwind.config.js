/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#faf6f1',
        warm: {
          50: '#fdf8f3',
          100: '#f5e6d3',
          200: '#e8d5bc',
          300: '#d4b896',
          400: '#c9b8a8',
          500: '#8b5e3c',
          600: '#6b4530',
          700: '#4a2f20',
          800: '#2c1f14',
          900: '#0d0a0a',
        },
      },
    },
  },
  plugins: [],
}
