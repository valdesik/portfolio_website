/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      mont: ['var(--font-mont)', ...fontFamily.sans],
      keyframes: {
        slidein: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },


        }
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },

    colors: {
      dark: "#1b1b1b",
      light: "#efefef",
      primary: "#011e83", // 240,86,199
      primaryDark: "#58c5e6", // 80,230,217
    },
    animation : {
      'spin-slow': 'spin 16s linear infinite',
    },
    backgroundImage: {
      circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4), 2px,#efefef,5px,#efefef 100px);"
    }
  },
  plugins: [],
}

