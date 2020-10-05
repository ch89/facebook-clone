module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "fb-blue": "#2e81f4",
        "fb-gray": "gray",
        "fb-light-gray": "#f1f2f5"
      }
    },
  },
  variants: {
    borderRadius: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
