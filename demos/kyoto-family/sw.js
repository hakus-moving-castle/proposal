/* 京都・家族の七日 — offline cache
   票券 QR は index.html の中に（暗号化した data URI で）入っている。
   index.html さえキャッシュされていれば、圏外でも改札や集合場所で出せる。 */
// __BUILD__ はデプロイ時に commit の短縮 SHA と時刻へ置換される。
var BUILD = '__BUILD__';
var CACHE = 'kyoto-family-' + BUILD;
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
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

  // 天気 API は絶対にキャッシュしない。古い予報を見せるくらいなら出さないほうがいい。
  if (req.url.indexOf('api.open-meteo.com') > -1) return;

  // ページ本体は network-first。
  // cache-first にすると、デプロイ後の一度目は必ず古い版が出てしまう。
  var isDoc = req.mode === 'navigate' ||
              (req.destination === 'document') ||
              (req.headers.get('accept') || '').indexOf('text/html') > -1;

  if (isDoc) {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match('./index.html');
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        var sameOrigin = false;
        try { sameOrigin = new URL(req.url).origin === self.location.origin; } catch (err) {}
        if (res && res.ok && sameOrigin) {
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
