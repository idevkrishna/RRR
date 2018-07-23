/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>/<%= pascalEntityName %>'

describe('(Component) <%= pascalEntityName %>', () => {
  describe(`<%= pascalEntityName %> with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <<%= pascalEntityName %> />
      )
    })

    it(`Contains the '<%= pascalEntityName %>' class.`, () => {
      const el = wrapper.find('div.<%= pascalEntityName %>')
      expect(el).to.exist
    })
  })

  describe(`<%= pascalEntityName %> with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let <%= camelEntityName %>Props = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        lob: {
          pick: '123'
        },
        userWants: {
          need: 'XXX'
        },
        lobDependantList: 'lobDependantList',
        geosuggestLocation: 'geosuggestLocation',
        wmUsNav: 'wmUsNav',
        masData: 'masData',
        mapLocationDetails: {
          userAddress: '123'
        },
        smartySuggestion: {
          suggestions: [{
            city: 'city',
            state: 'state',
            street: 'street'
          }]
        },
      })
      <%= camelEntityName %>Props = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <<%= pascalEntityName %> {...<%= camelEntityName %>Props}/>
      )
    })

    it(`????`, () => {

    })
  })
})
