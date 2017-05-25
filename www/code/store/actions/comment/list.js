import * as http from '../../http'
import ActionTypes from '../../ActionTypes'

const response = dispatch => payload => {
  dispatch({
    type: ActionTypes.COMMENT_LIST_RECEIVE,
    payload,
  })
}

export default function list(id, {page, limit}) {
  const offset = (page - 1) * limit
  return dispatch => {
    return http.get({
      url: `/post/${id}/comments`,
      query: {offset, limit},
      head: true,
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
