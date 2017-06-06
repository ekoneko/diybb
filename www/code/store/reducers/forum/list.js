import ActionTypes from 'store/ActionTypes'

const initedState = {
  loaded: false,
  list: [],
}

export default function forumList(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.FORUM_LIST_REQUEST:
      return {...initedState}
    case ActionTypes.FORUM_LIST_RECEIVE: {
      const {list, offset, limit, total} = action.payload
      return {
        loaded: true,
        list,
        offset,
        limit,
        total,
      }
    }
    default:
      return state
  }
}
