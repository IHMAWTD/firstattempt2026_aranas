const CACHE_NAME = 'addu-alumni-v3'; // Incremented version to force update

// Only pre-cache things that NEVER change names
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/knight.png',
  '/seal.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Return from cache if we have it
      if (cachedResponse) return cachedResponse;

      // 2. If not in cache, try the network
      return fetch(event.request).then((networkResponse) => {
        // Only cache successful responses (don't cache 404s or errors)
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // 3. OFFLINE FALLBACK
        // If they are offline and requesting a page, show the cached index.html
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});