import { connect } from 'react-redux'

const promisesBundles =  {
  <%= pascalEntityName %>Container: new Promise((resolve, reject) => {
    require.ensure([], () => {

      const mapDispatchToProps = require('components/<%= pascalEntityName %>/<%= pascalEntityName %>Container').mapDispatchToProps
      const mapStateToProps = require('components/<%= pascalEntityName %>/<%= pascalEntityName %>Container').mapStateToProps

      resolve({
        mapDispatchToProps,
        mapStateToProps,
        connect,
      })

      /* Webpack named bundle   */
    }, '<%= pascalEntityName %>Container')
  }),
  <%= pascalEntityName %>: new Promise((resolve, reject) => {
    require.ensure([], () => {
      const <%= pascalEntityName %> = require('components/<%= pascalEntityName %>/<%= pascalEntityName %>').default

      resolve({
        <%= pascalEntityName %>
      })

      /* Webpack named bundle   */
    }, '<%= pascalEntityName %>')
  })
}

export default promisesBundles
