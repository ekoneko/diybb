/**
 * request list
 */
import * as http from 'utils/http'

export default (requestFn, requestCb, responseCb) =>
(page, limit, hasLoading = false) => {
  const offset = (page - 1) * limit
  return dispatch => {
    if (hasLoading) {
      requestCb(dispatch)()
    }
    requestFn(offset, limit)
    .then(res => {
      return Promise.all([
        res.json(),
        {
          offset: +res.headers.get('x-offset'),
          limit: +res.headers.get('x-limit'),
          total: +res.headers.get('x-total')
        }
      ])
    }).then(([list, options]) => {
      responseCb(dispatch)({
        list,
        ...options
      })
    })
  }
}

export const requestFn = (url) => (offset, limit) => {
  return http.get({
    url,
    query: {offset, limit},
    head: true
  })
}
