/* 京都一日プラン — offline cache
   チケットのQRは index.html に data URI で埋め込んであるので、
   index.html がキャッシュされていれば圏外でも改札で表示できる。 */
var CACHE = 'kyoto-plan-v1';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.jpg',
  './apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; })
                               .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) {
        // 表示はキャッシュから即返し、裏で静かに更新しておく
        fetch(req).then(function (res) {
          if (res && res.ok) {
            caches.open(CACHE).then(function (c) { c.put(req, res); });
          }
        }).catch(function () {});
        return hit;
      }
      return fetch(req).then(function (res) {
        var sameOrigin = false;
        try { sameOrigin = new URL(req.url).origin === self.location.origin; } catch (err) {}
        var isFont = req.url.indexOf('fonts.googleapis.com') > -1 ||
                     req.url.indexOf('fonts.gstatic.com') > -1;
        if (res && res.ok && (sameOrigin || isFont)) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'offline' });
      });
    })
  );
});
