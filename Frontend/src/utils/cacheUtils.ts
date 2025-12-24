export const clearAPICache = async (pattern?: string) => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();

    for (const cacheName of cacheNames) {
      if (cacheName.includes('api-cache')) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();

        for (const request of requests) {
          if (!pattern || request.url.includes(pattern)) {
            await cache.delete(request);
          }
        }
      }
    }
    console.log('Cache cleared:', pattern || 'all');
  }
};

export const clearSpecificCache = async (url: string) => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();

    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName);
      await cache.delete(url);
    }
    console.log('Cache cleared for:', url);
  }
};
