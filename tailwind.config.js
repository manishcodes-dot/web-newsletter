/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F4D068',
          strong: '#E2BD55',
          cyan: '#E0FAFF',
          purple: '#E6D8FF',
          peach: '#FFDCDC',
          pink: '#FFB2D1',
          green: '#C1FFB2',
          orange: '#FFB288'
        }
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Lexend', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
