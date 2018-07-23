import configureMockStore from 'redux-mock-store'
import deepFreeze from 'deep-freeze-strict'
import thunk from 'redux-thunk'
import { bindActionCreators } from 'redux'
import { MY_ACTION_TYPE } from 'constants/myActionGroup/myActionTypeFile'
import <%= camelEntityName %> from 'actions/<%= camelEntityName %>'
// import <%= camelEntityName %>Thunk from 'actions/<%= camelEntityName %>'

describe(`(Action Creators)`, () => {
  describe(`<%= camelEntityName %>`, () => {
    let middlewares, mockStore, store
    let spies = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        // lob: {
        //   pick: `residence`
        // },
      })
    })

    it(`Should be exported as a function.`, () => {
      expect(<%= camelEntityName %>).to.be.a('function')
    })

    it(`Should return an action with type "SOME_ACTION_GOES_HERE".`, () => {
      const data = store.getState()
      expect(
        <%= camelEntityName %>(data)
      ).to.have.property('type', MY_ACTION_TYPE)
    })

    it(`Should return an action with a payload that is defined`, () => {
      const data = store.getState()
      expect(
        <%= camelEntityName %>(data).payload
      ).to.not.be.undefined
    })
  })

  // describe(`<%= camelEntityName %>Thunk`, () => {
  //   let middlewares, mockStore, store
  //   let _spies = {}
  //
  //   beforeEach(() => {
  //     middlewares = [ thunk ]
  //     mockStore = configureMockStore(middlewares)
  //     store = mockStore({
  //       lob: {
  //         pick: `business`
  //       },
  //     })
  //   })
  //
  //   it(`Should dispatch <%= camelEntityName %>Thunk()`, () => {
  //     const action = <%= camelEntityName %>Thunk()
  //     const expectedActions = [
  //       { type: `SOME_ACTION_GOES_HERE` }
  //     ]
  //     store.dispatch(action)
  //     expect(
  //       store.getActions()[0].type
  //     ).to.eql(expectedActions[0].type)
  //   })
  // })

})
