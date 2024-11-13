importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { clientsClaim, skipWaiting } = workbox.core;
const { StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;

clientsClaim();
skipWaiting();

registerRoute(
    ({url}) => url.pathname.endsWith('.css'),
    new StaleWhileRevalidate({
        cacheName: 'css-cache',
    })
);

registerRoute(
    ({url}) => url.pathname.endsWith('.js') && !url.pathname.includes('single-spa'),
    new StaleWhileRevalidate({
        cacheName: 'js-cache'
    })
)

registerRoute(
    ({ url }) => {
        const allowedExtensions = ['png', 'jpg', 'jpeg', 'svg', 'gif'];
        const pathname = url.pathname.toLowerCase();
        return allowedExtensions.some(ext => pathname.endsWith(`.${ext}`));
    },
    new StaleWhileRevalidate({
        cacheName: 'image-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
)