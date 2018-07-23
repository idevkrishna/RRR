module.exports = {
  description () {
    return 'generates an (action creator)'
  },
  
  fileMapTokens () {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
