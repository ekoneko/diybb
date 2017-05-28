import ActionTypes from 'store/ActionTypes'

const initedState = {}

export default function forumDetail(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.FORUM_DETAIL_REQUEST:
      return {}
    case ActionTypes.FORUM_DETAIL_RECEIVE:
      return action.payload
    default:
      return state
  }
}
