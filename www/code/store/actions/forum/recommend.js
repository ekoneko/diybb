import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.FORUM_RECOMMEND_RECEIVE,
    payload,
  })
}

export default function recommend() {
  return dispatch => {
    return http.get({
      url: '/channel/recommend'
    }).then(response(dispatch))
  }
}
