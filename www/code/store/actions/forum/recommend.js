import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

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
