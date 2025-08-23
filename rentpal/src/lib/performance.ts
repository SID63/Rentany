/**
 * Performance monitoring utilities for Rent Any application
 * Helps track and optimize application performance on Vercel
 */

/**
 * Web Vitals tracking for performance monitoring
 */
export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env['NODE_ENV'] === 'development') {
    console.log('Web Vital:', metric);
  }

  // Send to analytics in production
  if (process.env['NODE_ENV'] === 'production') {
    // Example: Send to Vercel Analytics
    if (process.env['NEXT_PUBLIC_VERCEL_ANALYTICS_ID']) {
      // Vercel Analytics will automatically collect these
      // No additional code needed if using @vercel/analytics
    }

    // Example: Send to Google Analytics
    if (process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'] && typeof window !== 'undefined') {
      (window as any).gtag?.('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
}

/**
 * Performance timing utility
 */
export class PerformanceTimer {
  private startTime: number;
  private label: string;

  constructor(label: string) {
    this.label = label;
    this.startTime = performance.now();
  }

  end(): number {
    const endTime = performance.now();
    const duration = endTime - this.startTime;
    
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`${this.label}: ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  }
}

/**
 * Memory usage monitoring (Node.js only)
 */
export function logMemoryUsage(label: string = 'Memory Usage') {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const usage = process.memoryUsage();
    const formatBytes = (bytes: number) => (bytes / 1024 / 1024).toFixed(2) + ' MB';
    
    console.log(`${label}:`, {
      rss: formatBytes(usage.rss),
      heapTotal: formatBytes(usage.heapTotal),
      heapUsed: formatBytes(usage.heapUsed),
      external: formatBytes(usage.external),
    });
  }
}

/**
 * Bundle size tracking for build optimization
 */
export function trackBundleSize() {
  if (process.env['NODE_ENV'] === 'production' && typeof window !== 'undefined') {
    // Track initial bundle load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
    });
  }
}