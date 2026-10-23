/* SW mínimo para permitir Instalar / Añadir a inicio ♥ */
const CACHE = 'rincon-v25'; // v25: foto real auténtica de Cindy y Oscar en portada ♥
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.indexOf('rincon-')===0).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, {cache: 'no-cache'}).catch(() => fetch(e.request)));
    return;
  }
});
