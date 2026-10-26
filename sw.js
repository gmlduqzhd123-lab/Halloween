const VERSION = '2abde95d6a6fe466';
const SCOPE = new URL(self.registration.scope);
const CACHE = `halloween-edu:${SCOPE.pathname}:${VERSION}`;
const FILES = ['index.html', 'halloween_edu_app.html', 'app.js', 'styles.css', 'manifest.json', 'icon.svg', '404.html', 'ys-install.js', 'ys-qr.js', 'qr.svg', 'icons/icon-192.png'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll(FILES.map(file => new Request(new URL(file, SCOPE).href, { cache: 'reload' })))
    )
  );
});

self.addEventListener('activate', event => {
  const prefix = `halloween-edu:${SCOPE.pathname}:`;
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(prefix) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
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
    if (relative === 'index.html' || request.mode === 'navigate') {
      try {
        const fresh = await fetch(new Request(key, { cache: 'no-cache' }));
        if (fresh && fresh.ok) {
          await cache.put(key, fresh.clone());
          return fresh;
        }
      } catch (_) {}
    }
    return await cache.match(key) || fetch(request);
  })());
});
