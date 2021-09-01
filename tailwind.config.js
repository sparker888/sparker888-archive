module.exports = {
  // twin. macro does not need anything more than darkMode, prefix, theme and plugins in this config. See https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md
  darkMode: "class", // Dark mode enabled! `dark` class must be present atop the HTML tree.
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1500px',
      '3xl': '2000px',
    },
  },
  plugins: [],
};

// See a supported list of Tailwind plugins compatible with twin.macro here: https://twin-docs.netlify.app/plugin-support
