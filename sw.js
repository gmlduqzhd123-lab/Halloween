const VERSION = '09668a8b5f0fca5d';
const SCOPE = new URL(self.registration.scope);
const CACHE = `halloween-edu:${SCOPE.pathname}:${VERSION}`;
const FILES = ['index.html', 'halloween_edu_app.html', 'app.js', 'styles.css', 'manifest.json', 'icon.svg', '404.html', 'ys-install.js', 'ys-qr.js', 'qr.svg', 'icons/icon-192.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(file => new URL(file, SCOPE).href))));
});
self.addEventListener('activate', event => {
  const prefix = `halloween-edu:${SCOPE.pathname}:`;
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(prefix) && key !== CACHE).map(key => caches.delete(key)))));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== SCOPE.origin || !url.pathname.startsWith(SCOPE.pathname)) return;
  const relative = url.pathname.slice(SCOPE.pathname.length) || 'index.html';
  if (!FILES.includes(relative) && request.mode !== 'navigate') return;
  if (request.mode === 'navigate' && !FILES.includes(relative)) {
    event.respondWith(Response.redirect(new URL('index.html', SCOPE).href, 302));
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const key = new URL(relative, SCOPE).href;
    return await cache.match(key) || fetch(request);
  })());
});
