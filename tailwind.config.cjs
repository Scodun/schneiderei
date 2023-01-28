/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cli: {
          primary: {
            DEFAULT: '#A8DADC',
            dark: '#1B1725',
            lighter: '#534B62',
            light: '#FFFDFD',
            header: '#0E1C36',
            text: {
              DEFAULT: '#080813',
              light: '#E6E3DA'
            },
          },
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'sm-max': {'max': '1024px'},
      },
      fontSize: {
        sm: ['0.8rem',1],
        base: ['1rem',1],
        xl: ['1.25rem',1],
        '2xl': ['1.563rem',1],
        '3xl': ['1.953rem',1],
        '4xl': ['2.441rem',1],
        '5xl': ['4rem',1],
        '6xl': ['5rem',1],
      },
    },
  },
  plugins: [],
}
