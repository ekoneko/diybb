import md5 from 'md5'
import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const response = dispatch => payload => {
  if (!payload) {
    return
  }
  dispatch({
    type: ActionTypes.SETTING_GETTER,
    payload,
  })
}

export default function getter(names = []) {
  return dispatch => {
    return http.get({
      url: '/system',
      query: {
        names,
      },
      onError: () => {},
    })
      .then(response(dispatch))
  }
}
