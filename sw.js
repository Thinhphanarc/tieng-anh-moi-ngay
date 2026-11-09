/* Service worker: lưu toàn bộ app để chạy offline */
const VERSION = 'tamn-v1.6.3';
const FILES = ['./', 'index.html', 'styles.css', 'fonts.css', 'app.js', 'content/stage1.js', 'content/stage1b.js', 'content/stage1c.js', 'content/stage1d.js', 'content/stage2.js', 'content/stage2b.js', 'content/stage2c.js', 'content/stage2d.js', 'content/stage3.js', 'content/stage3b.js', 'content/stage3c.js', 'content/stage3d.js', 'content/stage4.js', 'content/stage4b.js', 'content/stage4c.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  /* Mạng trước (luôn lấy bản mới nhất khi có mạng), mất mạng thì dùng bản đã lưu */
  const net = new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), 4000);
    fetch(req, { cache: 'no-cache' }).then((res) => { clearTimeout(t); if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } resolve(res); }, (err) => { clearTimeout(t); reject(err); });
  });
  e.respondWith(net.catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('index.html'))));
});
