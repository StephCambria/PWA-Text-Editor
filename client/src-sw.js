const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { StaleWhileRevalidate, CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

// precacheAndRoute() is a method that takes an array of URLs to precache.
// The self.__WB_MANIFEST is an array containing that list of URLs.
if (process.env.NODE_ENV === 'production') {
  precacheAndRoute(self.__WB_MANIFEST);
}

const pageCache = new CacheFirst({
  // Cache storage
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// "What is Cache Warming?
// Warming up cache is when websites artificially fill the cache to ensure that real visitors always have access to it when needed.
// Essentially, it warms up the cache for visits rather than serving the first visitor a cache miss (thus the word 'warming',
// as in warming up a car engine)."
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

// https://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbusage/perform-s-4988196.html
// "Cache warming is designed to help reduce the execution times of the initial queries executed against a database.
// This is done by preloading the database server's cache with database pages that were referenced the last time the database was started.
// Warming the cache can improve performance when the same query or similar queries are executed against a database each time it is started."

registerRoute(({ request }) => request.mode === "navigate", pageCache);

//=================================
//=================================
// TODO: Implement asset caching
//=================================
//=================================
// https://developer.chrome.com/docs/workbox/modules/workbox-strategies/
// "Offline web apps will rely heavily on the cache, but for assets that are non-critical and can be gradually cached, a cache first is the best option."
// "If there is a Response in the cache, the Request will be fulfilled using the cached response and the network will not be used at all.
// If there isn't a cached response, the Request will be fulfilled by a network request and the response will be cached so that the next request is served directly from the cache."

const cacheName = "staticResources";
const matchCallback = ({ request }) => {
  console.log(request);
  return request.destination === "style" || request.destination === "script";
};

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);
