module.exports = {
  description () {
    return 'generates async (container) component'
  },

  fileMapTokens () {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
