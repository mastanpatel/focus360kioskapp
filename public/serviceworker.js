const CACHE_NAME = "version-1";
const urlsToCache = ['/','index.hmtl', 'offline.html','./images/Properties/Buildings/property-1.jpg'
,'./images/Properties/Buildings/property-2.jpg', './images/Properties/Buildings/property-3.jpg', './images/Properties/Buildings/property-4.jpg',
'./images/Properties/Buildings/property-5.jpg', './images/Properties/Buildings/property-6.jpg];','./images/Properties/Buildings/property-7.jpg', './images/Properties/Buildings/property-8.jpg']

//install SW
self.addEventListener('install', (event) => {
    console.log('installed')
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// //Listen for requests
// self.addEventListener('fetch', (event) => {
//     console.log('fetched')
//     event.respondWith(
//         caches.match(event.request)
//             .then((response) => {
//                 if(response){
//                     return response;
//                 }
//                 return fetch(event.request)
//                     .catch((err) => caches.match('offline.html'))
//             })
//     )
// });

self.addEventListener('fetch', function(event) {
    console.log('fetched')
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });


//Activate the SW
self.addEventListener('activate', (event) => {
    console.log('activated')
    const cacheWhitelist = [];

    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
        ))
    )
});