import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => commentId => {
  dispatch({
    type: ActionTypes.COMMENT_DEL_RECEIVE,
    commentId,
  })
}

export default function remove(postId, commentId) {
  return dispatch => http.del({
    url: `/post/${postId}/comment/${commentId}`,
  })
    .then(() => response(dispatch)(commentId))
}
