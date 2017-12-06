import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_EDIT,
    payload,
  })
}

export default function postEdit(id, body) {
  return dispatch => {
    return http.put({
      url: `/post/${id}`,
      body,
    }).then(response(dispatch))
  }
}
