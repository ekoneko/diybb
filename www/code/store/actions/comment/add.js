import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

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
  })
    .then(response(dispatch))
    .catch(err => {
      // console.log(err)
    })
}
