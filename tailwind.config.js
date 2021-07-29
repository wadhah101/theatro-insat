module.exports = {
  purge: ['./src/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '2rem',
        '2xl': '0rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
