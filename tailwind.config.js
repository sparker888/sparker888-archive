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
      
        fogra: {
          DEFAULT: "#001524",
          light: "#003052",
          lightest: "#0077CC",
        },
        ming: {
          DEFAULT: "#15616D",
          light: "#43C7DB",
          lightest: "#A9E5EF",
        },
        almond: {
          DEFAULT: "#FFECD1",
          light: "#FFF4EB",
          dark: "#663C00",
        },
        amber: {
          DEFAULT: "#FF7D00",
          dark: "#FFC370",
          darkest: "#8F4500",
        },
        kobe: {
          DEFAULT: "#78290F",
          light: "#E45525",
          lightest: "#ffe9d6",
        },
        productbg: {
          DEFAULT: "#EBF7FF",
        },
      },
      spacing: {
        "128": "32rem",
        "144": "36 rem"
      },
      zIndex: {

        '-10': '-10',
        '-20': '-20',
       },
       animation: {
         bounce: 'bounce 2s infinite'
       },
       keyframes: {
         bounce: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
         },
       },
    },  
    fontFamily: {
      sans: ["Montserrat", "system-ui", "sans-serif"],
      serif: ["Inria Serif", "ui-serif", "Georgia"],
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
// See a supported list of Tailwind plugins compatible with twin.macro here: https://twin-docs.netlify.app/plugin-support
