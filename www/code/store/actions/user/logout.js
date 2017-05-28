import md5 from 'md5'
import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const response = dispatch => payload => {
  if (!payload) {
    return
  }
  dispatch({
    type: ActionTypes.USER_LOGOUT_RECEIVE,
    payload,
  })
}

export default function logout() {
  return dispatch => {
    return http.post({
      url: '/logout',
    })
      .then(response(dispatch))
  }
}
