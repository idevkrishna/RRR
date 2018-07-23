module.exports = {
  description () {
    return 'generates a (reducer)'
  },

  fileMapTokens () {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
