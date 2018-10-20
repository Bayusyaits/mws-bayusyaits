const cachesName = 'static-v8';
const files = [
    '/index.html',
    'calculator/index.html',
    'calculator/app.css',
    'calculator/app.js',
    'mapbox/index.html',
    'mapbox/app.css',
    'mapbox/app.js',
    'src/app.css',
    'mapbox/app.js',
  ];

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(cachesName).then(function(cache) {
     return cache.addAll(files);
   })
 );
});

self.addEventListener('activate', () => {
    console.log('Active')
})