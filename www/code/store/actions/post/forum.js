import * as http from 'utils/http'
import ActionTypes from 'store/ActionTypes'

const request = dispatch => {
  dispatch({
    type: ActionTypes.POST_FORUM_REQUEST,
  })
}

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.POST_FORUM_RECEIVE,
    payload,
  })
}

export default function postForum(forumId, page, limit, hasLoading = false) {
  const offset = (page - 1) * limit
  return dispatch => {
    if (hasLoading) {
      request(dispatch)()
    }
    http.get({
      url: '/posts',
      query: {
        channel: forumId,
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
