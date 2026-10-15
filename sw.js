/* SW mínimo para permitir Instalar / Añadir a inicio ♥ */
const CACHE = 'rincon-v15'; // v15: efimero activo hoy jueves 15 oct ♥
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.indexOf('rincon-')===0).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  // solo para cumplir requisito instalable, pasa todo a red
  return;
});
