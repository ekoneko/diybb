import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

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

export default function detail(id) {
  return dispatch => {
    request(dispatch)()
    return http.get({
      url: `/channel/${id}`
    }).then(response(dispatch))
  }
}
