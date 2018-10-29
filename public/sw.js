const cachesName = 'mws-bayusyaits-v3';
const files = [
  './index.html',
  './calculator/index.html',
  './calculator/app.css',
  './calculator/app.js',
  './mapbox/index.html',
  './mapbox/app.css',
  './mapbox/app.js',
  './grid/index.html',
  './grid/app.css',
  './grid/app.js',
  './src/app.css'
  ];



// Install SW
self.addEventListener('activate', function(event) {
});

self.addEventListener('fetch', (event) => {
event.respondWith(
  caches.match(event.request)
    .then(response => {
      if(response) {
        return response;
      }
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request.url, response.clone());
          return response;
        });
      });
    })
    .catch(error => {
      console.log(error)
    })
)
})