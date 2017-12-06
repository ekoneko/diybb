import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.USER_ACCOUNT_RECEIVE,
    payload,
  })
}

export default function userAccount() {
  return dispatch => {
    return http.get({
      url: '/user',
    }).then(response(dispatch))
  }
}
