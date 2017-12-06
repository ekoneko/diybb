import md5 from 'md5'
import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => () => {
  dispatch({
    type: ActionTypes.USER_PASSWORD_UPDATE
  })
}


export default function userUpdatePassword(oldPassword, newPassword, repeatPassword) {
  return dispatch => {
    return http.put({
      url: '/password',
      body: {
        oldPassword: md5(oldPassword),
        newPassword: md5(newPassword),
        repeatPassword: md5(repeatPassword)
      },
      onError: err => { throw err },
    })
      .then(response(dispatch))
  }
}
