import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_CONTENT_RECEIVE,
    payload,
  })
}

export default function postContent(id) {
  return dispatch => {
    return http.get({
      url: `/post/${id}`,
    }).then(response(dispatch))
  }
}
