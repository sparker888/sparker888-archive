module.exports = {
  // twin. macro does not need anything more than darkMode, prefix, theme and plugins in this config. See https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      
        violet: {
          light: "#bcacc3",
          DEFAULT: "#5d4a66",
          dark: "#413347",
        },
        powder: {
          DEFAULT: "#C2DFE3",
          dark: "#57A7B2",
          darkest: "#1A3438",
        },
        burnt: {
          light: "#EFB9A9",
          DEFAULT: "#DE6B48",
          dark: "#672713",
        },
        bleu: {
          light: "#A8CBF0",
          DEFAULT: "#3083DC",
          dark: "#123C69",
        },
        gunmetal: {
          lightest: "#C2D0D6",
          light: "#6C8F9D",
          DEFAULT: "#253237",
        },
      },
    },  
    fontFamily: {
      sans: ["Montserrat", "system-ui", "sans-serif"],
      serif: ["Libre Caslon Text", "ui-serif", "Georgia"],
    },
  },
  plugins: [],
}

// See a supported list of Tailwind plugins compatible with twin.macro here: https://twin-docs.netlify.app/plugin-support
