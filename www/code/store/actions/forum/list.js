import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const request = dispatch => {
  dispatch({
    type: ActionTypes.FORUM_LIST_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.FORUM_LIST_RECEIVE,
    payload,
  })
}

export default function forumList(page, limit, hasLoading = false) {
  const offset = (page - 1) * limit
  return dispatch => {
    if (hasLoading) {
      request(dispatch)()
    }
    http.get({
      url: '/channels',
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
