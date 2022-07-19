module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        '17': '17deg',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tw-elements/dist/plugin')
  ],
}