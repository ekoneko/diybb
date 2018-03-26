self.addEventListener('fetch', (ev) => {
  const url = ev.request.url
  if (url.indexOf('/api/') > -1) {
    return
  }
  ev.respondWith(
    caches.open('resource').then(cache => {
      return cache.match(ev.request)
        .then((response) => {
          if (response) {
            return response
          }
          throw new Error('not match')
        })
        .catch(() => {
          return fetch(ev.request).then((response) => {
            if (response.status >= 200 && response.status < 300) {
              cache.put(ev.request, response.clone())
            }
            return response
          })
        })
    })
  )
})
