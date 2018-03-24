self.addEventListener('fetch', (ev) => {
  const url = ev.request.url
  if (url.indexOf('/api/') === -1) {
    return
  }
  if (url.match(/\.html$/)) {
    ev.respondWith(
      caches.open('resource').then(cache => {
        return fetch(ev.request).then((response) => {
          if (response.status >= 200 && response.status < 300) {
            cache.put(event.request, response.clone())
          }
          return response
        }).catch(() => {
          return cache.match(ev.request)
        })
      })
    )
  } else {
    ev.respondWith(
      caches.open('resource').then(cache => {
        return cache.match(ev.request)
          .catch(() => {
            return fetch(ev.request).then((response) => {
              if (response.status >= 200 && response.status < 300) {
                cache.put(event.request, response.clone())
              }
              return response
            })
          })
      })
    )
  }
})
