/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */
import { bindActionCreators } from 'redux'

/*  Action Creators.  */
// import actionName from 'actions/actionName'

export const mapDispatchToProps = dispatch => ({
  reduxActions: bindActionCreators({
    // actionName,
  }, dispatch),
})

export const mapStateToProps = (state, ownProps) => {
/*  Just add the pieces of state that you need here. This will keep your
    component from re-rendering with every change in the global state.  */
  // const {
  //   stateName,
  // } = state

  return {
    reduxState: {
      // stateName,
    },
  }
}
