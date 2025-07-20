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
        slideFadeLeft: 'slideFadeLeft 1s ease-out forwards',
        slideFadeRight: 'slideFadeRight 1s ease-out forwards',
  // marquee: 'marquee linear infinite',
  // marquee: 'marquee 25s linear infinite',
  // marquee2: 'marquee2 25s linear infinite',
},
keyframes: {
  hue: {
    '0%': { filter: 'hue-rotate(0deg)' },
    '100%': { filter: 'hue-rotate(360deg)' }
  },
  pulseGlow: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.85 }
  },
  slideFadeLeft: {
    '0%': { opacity: 0, transform: 'translateX(-60px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  slideFadeRight: {
    '0%': { opacity: 0, transform: 'translateX(60px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  // marquee: {
  //   '0%': { transform: 'translateX(0)' },
  //   '100%': { transform: 'translateX(-50%)' },
  // },
  // marquee: {
  //   '0%': { transform: 'translateX(0%)' },
  //   '100%': { transform: 'translateX(-100%)' },
  // },
  // marquee2: {
  //   '0%': { transform: 'translateX(100%)' },
  //   '100%': { transform: 'translateX(0%)' },
  // },
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
