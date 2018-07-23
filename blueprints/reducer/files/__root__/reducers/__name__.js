import { MY_ACTION_TYPE } from 'constants/myActionGroup/myActionTypeFile'

// Must be a pure function that requires the state
// and the action being dispatched.
const initialState = undefined
export default (state = initialState, action) => {
  switch (action.type) {
    // NEVER mutate the state, always return a new state.
    case MY_ACTION_TYPE:
      // do something
      return initialState

    default:
      return state
  }
}
