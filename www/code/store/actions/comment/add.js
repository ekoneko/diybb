import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.COMMENT_ADD_RECEIVE,
    payload,
  })
}

export default function add(postId, content) {
  return dispatch => http.post({
    url: `/post/${postId}/comment`,
    body: {content},
  }).then(response(dispatch))
}
