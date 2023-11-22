const NombreCache = 'ALEXORBE'
const ArchivosCache = [
    '/',
    '/index.html',
    '/Assets/cv/Jose_Alejandro_Orbe_Chavarria.pdf',
    '/Assets/projects/coming-soon.webp',
    '/Assets/projects/primerproyecto.webp',
    '/Assets/svg/huskypc.svg',
    '/Assets/svg/moon.svg',
    '/Assets/svg/sun.svg',
    '/css/lightmode.css',
    '/css/style.css',
    '/js/script.js',
    '/js/mail.js'
]

self.addEventListener("install", e => {
    // console.log("el service worker installed successfully " + e)
    e.waitUntil(
        caches.open(NombreCache).then(cache => {
            // console.log("cache successfully loaded " + cache)
            cache.addAll(ArchivosCache)
        })
    )
})

self.addEventListener('activate', e => {
    // console.log("el service worker activado " + e)
})

self.addEventListener('fetch', e => {
    // console.log("fetch " + e)
    e.respondWith(
        caches.match(e.request)
        .then(response => {
            return response || fetch(e.request)
        })
    )
})