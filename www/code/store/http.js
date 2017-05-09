export function get(url, query, onError) {
  return request('GET', url, null, onError)
}

export function post(url, body, onError) {
  return request('POST', url, body, onError)
}

export function put(url, body, onError) {
  return request('PUT', url, body, onError)
}

export function patch(url, body, onError) {
  return request('PATCH', url, body, onError)
}

export function del(url, body, onError) {
  return request('DEL', url, body, onError)
}

function request(method, url, body, onError = handleGlobalError) {
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
  return fetch(`/api${url}`, options)
    .then(_response => {
      response = _response
      return response.json()
    })
    .then(data => {
      // TODO: support hash history and browser history
      if (response.status === 401 && !window.location.hash.includes('/login')) {
        location.hash = '#/login'
      }
      if (response.status >= 200 && response.status < 300 && !_.get(data, 'err_no')) {
        return data
      } else if (_.get(data, 'err_no')) {
        onError(response.status, data)
      } else {
        alert('unknown error')
      }
    })
}

function handleGlobalError(status, error) {
  alert(status, _.get(error, 'error_message', 'unknown error'))
}
