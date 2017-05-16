import ActionTypes from 'store/ActionTypes'

const initedState = {}

export default function setting(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.SETTING_GETTER:
      return {
        ...initedState,
        ...action.payload,
      }
    default:
      return state
  }
}
