/**
 * 🚀 Web Vitals - Core Web Vitals Monitoring
 * 
 * Tracks and reports performance metrics:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - FID (First Input Delay) - Interactivity
 * - CLS (Cumulative Layout Shift) - Visual stability
 * - TTFB (Time to First Byte) - Server response time
 * - FCP (First Contentful Paint) - First render
 * - INP (Interaction to Next Paint) - Responsiveness
 * 
 * Reports to analytics endpoint if configured.
 */

type MetricName = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';

interface Metric {
    name: MetricName;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    id: string;
    navigationType: string;
}

// Performance thresholds based on Google's Core Web Vitals
const THRESHOLDS: Record<MetricName, [number, number]> = {
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    FID: [100, 300],
    INP: [200, 500],
    LCP: [2500, 4000],
    TTFB: [800, 1800],
};

function getRating(name: MetricName, value: number): 'good' | 'needs-improvement' | 'poor' {
    const [good, poor] = THRESHOLDS[name];
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
}

// Console logger with color coding
function logMetric(metric: Metric) {
    const colors = {
        good: 'color: #0cce6b; font-weight: bold',
        'needs-improvement': 'color: #ffa400; font-weight: bold',
        poor: 'color: #ff4e42; font-weight: bold',
    };

    const unit = metric.name === 'CLS' ? '' : 'ms';
    const value = metric.name === 'CLS'
        ? metric.value.toFixed(3)
        : Math.round(metric.value);

    console.log(
        `%c[Web Vitals] ${metric.name}: ${value}${unit} (${metric.rating})`,
        colors[metric.rating]
    );
}

// Send to analytics (optional)
function sendToAnalytics(metric: Metric) {
    // Uncomment and configure if you have an analytics endpoint
    // const body = JSON.stringify({
    //   name: metric.name,
    //   value: metric.value,
    //   rating: metric.rating,
    //   page: window.location.pathname,
    //   timestamp: Date.now(),
    // });

    // if (navigator.sendBeacon) {
    //   navigator.sendBeacon('/api/vitals', body);
    // }
}

// Observer for CLS
function observeCLS(callback: (metric: Metric) => void) {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Only count layout shifts without recent user input
            if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
                clsEntries.push(entry);
            }
        }

        callback({
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
            delta: clsValue,
            id: 'cls',
            navigationType: 'navigate',
        });
    });

    observer.observe({ type: 'layout-shift', buffered: true });
}

// Observer for LCP
function observeLCP(callback: (metric: Metric) => void) {
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformancePaintTiming;

        callback({
            name: 'LCP',
            value: lastEntry.startTime,
            rating: getRating('LCP', lastEntry.startTime),
            delta: lastEntry.startTime,
            id: 'lcp',
            navigationType: 'navigate',
        });
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
}

// Observer for FCP
function observeFCP(callback: (metric: Metric) => void) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntriesByName('first-contentful-paint')) {
            callback({
                name: 'FCP',
                value: entry.startTime,
                rating: getRating('FCP', entry.startTime),
                delta: entry.startTime,
                id: 'fcp',
                navigationType: 'navigate',
            });
        }
    });

    observer.observe({ type: 'paint', buffered: true });
}

// Get TTFB
function observeTTFB(callback: (metric: Metric) => void) {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (nav) {
        const ttfb = nav.responseStart - nav.requestStart;
        callback({
            name: 'TTFB',
            value: ttfb,
            rating: getRating('TTFB', ttfb),
            delta: ttfb,
            id: 'ttfb',
            navigationType: nav.type,
        });
    }
}

// Main init function
export function initWebVitals(options?: {
    debug?: boolean;
    reportTo?: (metric: Metric) => void;
}) {
    const { debug = process.env.NODE_ENV === 'development', reportTo } = options || {};

    const handleMetric = (metric: Metric) => {
        if (debug) logMetric(metric);
        if (reportTo) reportTo(metric);
        sendToAnalytics(metric);
    };

    // Only run in browser
    if (typeof window === 'undefined') return;

    // Wait for load to get accurate metrics
    if (document.readyState === 'complete') {
        observeCLS(handleMetric);
        observeLCP(handleMetric);
        observeFCP(handleMetric);
        observeTTFB(handleMetric);
    } else {
        window.addEventListener('load', () => {
            observeCLS(handleMetric);
            observeLCP(handleMetric);
            observeFCP(handleMetric);
            observeTTFB(handleMetric);
        });
    }
}

export default initWebVitals;
