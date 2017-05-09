import md5 from 'md5'
import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const beforeRequest = dispatch => () => {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST,
  })
}

const response = dispatch => payload => {
  payload && dispatch({
    type: ActionTypes.LOGIN_RECEIVE,
    payload,
  })
}

const responseError = dispatch => (status, error) => {
  dispatch({
    type: ActionTypes.LOGIN_FAILED,
    status,
    error,
  })
}

export default function login(name, password) {
  return dispatch => {
    beforeRequest(dispatch)()
    const md5Password = md5(password)
    return http.post('/login', {
      name,
      password: md5Password,
    }, responseError(dispatch))
      .then(response(dispatch))
  }
}
