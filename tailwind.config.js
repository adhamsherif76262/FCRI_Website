// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['var(--font-arabic)'],
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      
      // animation: {
      //   glow: 'glow 3s ease-in-out infinite alternate'
      // },
      // keyframes: {
      //   glow: {
      //     '0%': {
      //       textShadow: '0 0 5px #0ff, 0 0 5px #0ff, 0 0 5px #0ff',
      //     },
      //     '100%': {
      //       textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff',
      //     }
      //   }
      // },
  //       animation: {
  //   glow: 'hue 6s ease-in-out infinite'
  // },
  // keyframes: {
  //   hue: {
  //     '0%': { filter: 'hue-rotate(0deg)' },
  //     '100%': { filter: 'hue-rotate(360deg)' }
  //   }
  // },
  animation: {
  glow: 'hue 6s ease-in-out infinite, pulseGlow 3s ease-in-out infinite',
},
keyframes: {
  hue: {
    '0%': { filter: 'hue-rotate(0deg)' },
    '100%': { filter: 'hue-rotate(360deg)' }
  },
  pulseGlow: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.85 }
  }
},
      screens: {
        xxxs: '300px',
        xxs: '400px',
        xs: '500px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
