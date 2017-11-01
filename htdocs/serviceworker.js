/* eslint require-jsdoc: "off" */
/**
 * This service worker responds from cache to deliver fast responses while also
 * updating the cache entry from the network.
 * @see https://serviceworke.rs/strategy-cache-and-update.html
 */

const CACHE = "cache-and-update";

function fillCache() {
	return caches.open(CACHE).then(cache => {
		cache.addAll([
			// PWA start URL and ...
			"/?utm_source=homescreen",
			// ... assets that won't block the installation during chaching
			"/css/look.css",
			"/js/feel.js",
			"/assets/img/kickstart.svg"
		]);
		return cache.addAll([
			"/"
		]);
	});
}

function fromCache(request) {
	return caches.open(CACHE).then(cache =>
		cache.match(request).then(matching =>
			matching || Promise.reject("no-match")
		)
	);
}

function update(request) {
	return caches.open(CACHE).then(cache =>
		fetch(request).then(response =>
			cache.put(request, response)
		)
	);
}

self.addEventListener("fetch", evt => {
	// first get it from the cache ...
	evt.respondWith(fromCache(evt.request));
	// ... then update the cache
	evt.waitUntil(update(evt.request));
});

self.addEventListener("install", evt => {
	evt.waitUntil(fillCache());
});
