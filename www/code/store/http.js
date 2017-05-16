export function get({url, query = {}, onError, head}) {
  if (query && Object.keys(query).length) {
    /* eslint no-param-reassign: 0 */
    url += url.includes('?') ? '&' : '?'
    url += Object.keys(query).map(k => {
      const val = query[k]
      if (typeof val === 'object' && val instanceof Array) {
        return val.map(v => `${k}[]=${v}`).join('&')
      }
      return `${k}=${val}`
    }).join('&')
  }
  return request({
    method: 'GET',
    url,
    body: null,
    onError,
    head,
  })
}

export function post({url, body, onError, head}) {
  return request({
    method: 'POST',
    url,
    body,
    onError,
    head,
  })
}

export function put({url, body, onError, head}) {
  return request({
    method: 'PUT',
    url,
    body,
    onError,
    head,
  })
}

export function patch({url, body, onError, head}) {
  return request({
    method: 'PATCH',
    url,
    body,
    onError,
    head,
  })
}

export function del({url, body, onError, head}) {
  return request({
    method: 'DEL',
    url,
    body,
    onError,
    head,
  })
}

function request({method, url, body, onError = handleGlobalError, head = false}) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const options = {
    method,
    credentials: 'include',
    headers,
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  let response = null
  let errFlag = false
  return fetch(`/api${url}`, options)
    .then(_response => {
      response = _response

      // TODO: support hash history and browser history
      if (response.status === 401 && !window.location.hash.includes('/login')) {
        location.hash = '#/login'
        return null
      } else if (response.status < 200 && response.status >= 300) {
        errFlag = true
        return response.json()
      } else if (head) {
        return response
      }
      return response.json()
    })
    .then(data => {
      if (errFlag) {
        if (_.get(data, 'err_no')) {
          onError(response.status, data)
        } else {
          alert('unknown error')
        }
      }
      return data
    })
}

function handleGlobalError(status, error) {
  alert(status, _.get(error, 'error_message', 'unknown error'))
}
