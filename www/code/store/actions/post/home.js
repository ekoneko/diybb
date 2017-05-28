import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const request = dispatch => {
  dispatch({
    type: ActionTypes.POST_HOME_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_HOME_RECEIVE,
    payload,
  })
}

export default function postHome(page, limit, hasLoading = false) {
  const offset = (page - 1) * limit
  return dispatch => {
    if (hasLoading) {
      request(dispatch)()
    }
    http.get({
      url: '/posts',
      query: {
        offset,
        limit,
      },
      head: true
    }).then(res => {
      return Promise.all([
        res.json(),
        {
          offset: +res.headers.get('x-offset'),
          limit: +res.headers.get('x-limit'),
          total: +res.headers.get('x-total')
        }
      ])
    }).then(([list, options]) => {
      response(dispatch)({
        list,
        ...options
      })
    })
  }
}
