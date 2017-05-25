import ActionTypes from 'store/ActionTypes'

const initedState = {
  loaded: false,
  list: [],
  offset: 0,
  limit: 0,
  total: 0,
}

export default function commentList(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.COMMENT_LIST_RECEIVE: {
      const {list, offset, limit, total} = action.payload
      return {
        loaded: true,
        list,
        offset,
        limit,
        total,
      }
    }
    case ActionTypes.COMMENT_ADD_RECEIVE:
      if (!state.loaded) {
        return state
      }
      return {
        ...state,
        list: [action.payload, ...state.list],
        total: state.total + 1
      }
    default:
      return state
  }
}
