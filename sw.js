/* SW mínimo para permitir Instalar / Añadir a inicio ♥ */
const CACHE = 'rincon-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  clients.claim();
});
self.addEventListener('fetch', e => {
  // solo para cumplir requisito instalable, pasa todo a red
  return;
});
