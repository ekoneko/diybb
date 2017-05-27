import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const request = dispatch => () => {
  dispatch({
    type: ActionTypes.FORUM_DETAIL_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.FORUM_DETAIL_RECEIVE,
    payload,
  })
}

export default function detail() {
  return dispatch => {
    request(dispatch)()
    return http.get({
      url: '/channel/detail'
    }).then(response(dispatch))
  }
}
