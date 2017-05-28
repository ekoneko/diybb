import {USER_STATUS} from 'consts/User'
import ActionTypes from 'store/ActionTypes'

const initedState = {
  state: USER_STATUS.UN_LOGIN,
  id: '',
  name: '',
  lastError: null,
}

export default function userAccount(state = initedState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {...initedState, state: USER_STATUS.IN_LOGIN}
    case ActionTypes.LOGIN_RECEIVE: {
      const {id, name, email, role} = action.payload
      return {
        state: USER_STATUS.LOGINED,
        id,
        name,
        email,
        role,
      }
    }
    case ActionTypes.LOGIN_FAILED:
      return {
        ...initedState,
        lastError: {
          status: action.status,
          error: action.error,
        }
      }
    case ActionTypes.USER_ACCOUNT_RECEIVE:
      if (action.payload && action.payload.id) {
        const {id, name} = action.payload
        return {
          state: USER_STATUS.LOGINED,
          id,
          name,
        }
      }
      return state
    case ActionTypes.USER_LOGOUT_RECEIVE:
      return initedState
    default:
      return state
  }
}
