/* Service worker: lưu toàn bộ app để chạy offline */
const VERSION = 'tamn-v1.6.0';
const FILES = ['./', 'index.html', 'styles.css', 'fonts.css', 'app.js', 'content/stage1.js', 'content/stage1b.js', 'content/stage1c.js', 'content/stage1d.js', 'content/stage2.js', 'content/stage2b.js', 'content/stage2c.js', 'content/stage2d.js', 'content/stage3.js', 'content/stage3b.js', 'content/stage3c.js', 'content/stage3d.js', 'content/stage4.js', 'content/stage4b.js', 'content/stage4c.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
    if (res && res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }
    return res;
  }).catch(() => caches.match('index.html'))));
});
