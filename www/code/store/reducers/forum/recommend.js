import ActionTypes from 'store/ActionTypes'

const initedState = {
  loaded: false,
  data: [],
}

export default function forumRecommend(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.FORUM_RECOMMEND_RECEIVE:
      return {
        loaded: true,
        data: action.payload,
      }
    default:
      return state
  }
}
