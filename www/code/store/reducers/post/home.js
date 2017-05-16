import ActionTypes from 'store/ActionTypes'

const initedState = {
  loaded: false,
  list: [],
}

export default function postHome(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.POST_HOME_REQUEST:
      return {...initedState}
    case ActionTypes.POST_HOME_RECEIVE: {
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
