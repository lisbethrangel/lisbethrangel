const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/images/favicon.png",
  "/images/logoweb-1-70x70.png",
  "/images/logoweb-2-84x84.png",
  "/css/libs.min.css",
  "/css/main.css",
  "/js/libs.min.js",
  "/js/main.js",
  "/fonts/fontawesome-webfont.eot",
  "/fonts/fontawesome-webfont.svg",
  "/fonts/fontawesome-webfont.ttf",
  "/fonts/fontawesome-webfont.woff",
  "/fonts/fontawesome-webfont.woff2",
  "/fonts/FontAwesome.otf",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
