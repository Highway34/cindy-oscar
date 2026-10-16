/* SW mínimo para permitir Instalar / Añadir a inicio ♥ */
const CACHE = 'rincon-v19'; // v19: Glassmorphism innovador + GSAP animations + cajas organizadas ♥
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
