import ActionTypes from 'store/ActionTypes'

const initedState = {}

export default function postContent(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.POST_CONTENT_RECEIVE:
      return action.payload
    default:
      return state
  }
}
