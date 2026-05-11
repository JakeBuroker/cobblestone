const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let analyticsInitialized = false;

// Analytics is intentionally tiny: no cookies or customer data are managed here.
// Vite injects VITE_GA_MEASUREMENT_ID from .env.development locally and from the
// Cloudflare Pages environment variable in production.
export function initAnalytics() {
  if (analyticsInitialized || !measurementId || typeof window === 'undefined') {
    return;
  }

  if (window.__cobblestoneAnalyticsInitialized) {
    analyticsInitialized = true;
    return;
  }

  analyticsInitialized = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
  });
}

export function trackPageView(path) {
  if (!measurementId || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(eventName, params = {}) {
  if (!measurementId || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}
