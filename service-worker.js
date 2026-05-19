const VERAXA_CACHE_NAME = "veraxa-cache-v1000";

const VERAXA_CORE_ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/assets/css/style.css",
  "/assets/js/config.js",
  "/assets/js/products.js",
  "/assets/js/app.js",
  "/assets/js/auth.js",
  "/assets/js/cart.js",
  "/assets/js/analytics.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(VERAXA_CACHE_NAME).then(function(cache) {
      return cache.addAll(VERAXA_CORE_ASSETS).catch(function() {
        return Promise.resolve();
      });
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== VERAXA_CACHE_NAME) {
            return caches.delete(key);
          }

          return null;
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        const copy = response.clone();

        caches.open(VERAXA_CACHE_NAME).then(function(cache) {
          cache.put(event.request, copy);
        });

        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(cached) {
          return cached || caches.match("/offline.html");
        });
      })
  );
});
