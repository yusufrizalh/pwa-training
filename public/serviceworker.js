const cacheName = "pwa-cache-v1";

self.addEventListener("install", (event) => {
  console.log("Service worker is installing...");
  // daftarkan semua file yg ingin disimpan dalam cache
  let filesToCache = [
    "/",
    "index.html",
    "css/custom.css",
    "css/map.css",
    "images/pexels-image-1.jpg",
    "images/pexels-image-2.jpg",
    "js/map.js",
    "menu2/mapbox.html",
    "menu3/mapboxcoffee.html",
    "menu4/tempatngopi.html",
    "css/leaflet.css",
    "js/leaflet.js",
  ];

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(filesToCache);
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker is activating...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName1) => {
            return cacheName1.startsWith("pwa-") && cacheName1 != cacheName;
          })
          .map((cacheName1) => {
            return caches.delete(cacheName1);
          })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service worker is fetching something...");
});
