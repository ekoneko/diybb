import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

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
