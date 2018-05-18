importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/index.html",
    "revision": "8a108cafe209cbd9ff645636538a1b46"
  },
  {
    "url": "/static/css/app.4ed3e888fd8efe4f4f3d3de5a039b3be.css",
    "revision": "bfca9504b992609f357f5a5f309ba566"
  },
  {
    "url": "/static/js/app.32b4ffbd2e98aefa2710.js",
    "revision": "06f0d6714e5172cef456c612c3c760f4"
  },
  {
    "url": "/static/js/manifest.14a76fad9b304f57d579.js",
    "revision": "6878a8fbe72bde4a3f8ecf5b16523972"
  },
  {
    "url": "/static/js/vendor.c051f04258726d760b9c.js",
    "revision": "46c568a95ffc33095cd0800b7b742e4f"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/");workboxSW.router.registerRoute(/^https:\/\/i.imgur.com\/..*/, workboxSW.strategies.cacheFirst({
  "cacheName": "imgurfiles"
}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/fonts.gstatic.com\/..*/, workboxSW.strategies.cacheFirst({
  "cacheName": "fonts"
}), 'GET');
