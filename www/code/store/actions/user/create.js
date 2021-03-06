import md5 from 'md5'
import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const beforeRequest = dispatch => () => {
  dispatch({
    type: ActionTypes.USER_CREATE_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.USER_CREATE_RECEIVE,
    payload,
  })
}

const responseError = dispatch => (status, error) => {
  dispatch({
    type: ActionTypes.USER_CREATE_FAILED,
    status,
    error,
  })
}

export default function create({email, name, password}) {
  return dispatch => {
    beforeRequest(dispatch)()
    const md5Password = md5(password)
    return http.post({
      url: '/user',
      body: {
        email,
        name,
        password: md5Password,
      },
      onError: responseError(dispatch),
    })
      .then(response(dispatch))
  }
}
