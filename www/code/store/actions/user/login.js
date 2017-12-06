import md5 from 'md5'
import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const beforeRequest = dispatch => () => {
  dispatch({
    type: ActionTypes.LOGIN_REQUEST,
  })
}

const response = dispatch => payload => {
  if (!payload) {
    return
  }
  dispatch({
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
    return http.post({
      url: '/login',
      body: {
        name,
        password: md5Password,
      },
      onError: responseError(dispatch),
    })
      .then(response(dispatch))
  }
}
