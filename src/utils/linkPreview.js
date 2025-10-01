// Utility to fetch link preview data from external URLs
export const fetchLinkPreview = async (url) => {
  try {
    // Use a CORS proxy to fetch the external URL
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    // Add timeout to the fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(proxyUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.contents) {
      throw new Error('No content received');
    }

    // Parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    // Extract Open Graph meta tags
    const getMetaContent = (property) => {
      const meta =
        doc.querySelector(`meta[property="${property}"]`) ||
        doc.querySelector(`meta[name="${property}"]`);
      return meta ? meta.getAttribute('content') : null;
    };

    // Extract fallback content
    const getFallbackContent = (selector) => {
      const element = doc.querySelector(selector);
      return element ? element.textContent.trim() : null;
    };

    // Extract favicon/logo from various meta tags
    const getFavicon = () => {
      // Try different favicon sources in order of preference
      const faviconSelectors = [
        'link[rel="icon"][sizes="32x32"]',
        'link[rel="icon"][sizes="16x16"]',
        'link[rel="icon"]',
        'link[rel="shortcut icon"]',
        'link[rel="apple-touch-icon"]',
        'link[rel="apple-touch-icon-precomposed"]',
      ];

      for (const selector of faviconSelectors) {
        const link = doc.querySelector(selector);
        if (link && link.href) {
          // Convert relative URLs to absolute
          try {
            return new URL(link.href, url).href;
          } catch {
            return link.href;
          }
        }
      }

      // Fallback to default favicon location
      try {
        return new URL('/favicon.ico', url).href;
      } catch {
        return null;
      }
    };

    const preview = {
      title: getMetaContent('og:title') || getFallbackContent('title'),
      description:
        getMetaContent('og:description') || getMetaContent('description'),
      image: getMetaContent('og:image'),
      url: getMetaContent('og:url') || url,
      siteName: getMetaContent('og:site_name'),
      favicon: getFavicon(),
    };

    return preview;
  } catch {
    return null;
  }
};

// Cache for link previews to avoid repeated requests
const previewCache = new Map();

export const getCachedLinkPreview = async (url) => {
  if (previewCache.has(url)) {
    return previewCache.get(url);
  }

  const preview = await fetchLinkPreview(url);
  if (preview) {
    previewCache.set(url, preview);
  }

  return preview;
};
