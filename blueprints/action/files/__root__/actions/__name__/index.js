import { MY_ACTION_TYPE } from 'constants/myActionGroup/myActionTypeFile'

export const <%= camelEntityName %> = data => {
  return {
    type: MY_ACTION_TYPE,
    payload: data
  }
}

// export const <%= camelEntityName %>Thunk = () => (dispatch, getState) => {
//   const {} = getState()
//   dispatch(
//     <%= camelEntityName %>({})
//   )
//   return null
// }
