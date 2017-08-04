self.addEventListener('install', function (event) {
    console.log("Service Worker Install.");
});

self.addEventListener('fetch', function (event) {
    console.log('Service Worker Fetch Event: ' + JSON.stringify(event));

    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker Activating.');
});