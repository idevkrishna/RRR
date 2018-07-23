module.exports = {
  description() {
    return 'generates a route'
  },

  fileMapTokens() {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      },
    }
  },
}
