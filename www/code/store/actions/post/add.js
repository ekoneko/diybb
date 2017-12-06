import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_ADD,
    payload,
  })
}

export default function postAdd(body) {
  return dispatch => {
    return http.post({
      url: '/post',
      body,
    }).then(response(dispatch))
  }
}
