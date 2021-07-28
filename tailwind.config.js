module.exports = {
  purge: ['./src/**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
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
