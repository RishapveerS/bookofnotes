# 🚀 Performance Optimization Guide

This document outlines all performance optimizations implemented for Book of Notes, following **2025 best practices** for maximum speed on Cloudflare and Vercel.

## Performance Score Targets

| Metric | Target | Description |
|--------|--------|-------------|
| **LCP** | < 2.5s | Largest Contentful Paint |
| **FID** | < 100ms | First Input Delay |
| **CLS** | < 0.1 | Cumulative Layout Shift |
| **TTFB** | < 800ms | Time to First Byte |
| **FCP** | < 1.8s | First Contentful Paint |

---

## ✅ Implemented Optimizations

### 1. **Code Splitting & Lazy Loading**

```typescript
// Routes are lazy-loaded
const HomePage = lazy(() => import('./components/HomePage'));
const SubjectPage = lazy(() => import('./components/SubjectPage'));

// Course content is dynamically imported
const CONTENT_IMPORTERS = {
  'economia': () => import('../data/courseContent'),
  // ...
};
```

**Impact**: Reduces initial bundle from ~700KB to ~15KB (gzipped)

### 2. **Advanced Build Optimizations**

- **Terser minification** with 3-pass compression
- **Console/debugger removal** in production
- **Tree shaking** with aggressive settings
- **Separate vendor chunks** for optimal caching:
  - `vendor-react` (~50KB gzip)
  - `vendor-router` (~10KB gzip)
  - `vendor-math` (~75KB gzip)
  - `vendor-charts` (lazy loaded, ~90KB gzip)
  - `vendor-icons` (~1KB gzip)

### 3. **Pre-compression**

Build generates `.gz` and `.br` files for all assets:
```
assets/index.js       → assets/index.js.gz + assets/index.js.br
assets/index.css      → assets/index.css.gz + assets/index.css.br
```

Cloudflare and Vercel serve these pre-compressed files directly.

### 4. **HTML Optimizations**

- **DNS prefetch** for external origins
- **Preconnect** to critical origins (fonts, CDN)
- **Font preloading** with `display=swap`
- **CSS preloading** for critical path
- **Module preload** for critical JS
- **Inline critical CSS** for instant LCP (loading spinner)

### 5. **Image Optimizations**

- **Lazy loading** with Intersection Observer
- **Content-visibility: auto** for off-screen images
- **Native loading="lazy"** as fallback
- **Priority loading** for above-the-fold images

### 6. **CSS Optimizations**

- **Reduced motion** support (`prefers-reduced-motion`)
- **GPU-accelerated animations** where needed
- **Content-visibility** for virtualization
- **Optimized font rendering** (`text-rendering: optimizeSpeed`)
- **Smooth scrolling** with GPU hints

### 7. **Caching Strategy**

| Asset Type | Cache Duration | Strategy |
|------------|----------------|----------|
| HTML | 0s (always fresh) | `must-revalidate` |
| JS/CSS (hashed) | 1 year | `immutable` |
| Images | 30 days | `stale-while-revalidate` |
| Fonts | 1 year | `immutable` |

---

## ⚠️ CRITICAL: Image Optimization Required

Your images are **extremely large** (6-8MB each). This is the #1 performance blocker.

### Option 1: Enable Cloudflare Polish (Recommended)

1. Go to Cloudflare Dashboard → Speed → Optimization
2. Enable **Polish** (lossless or lossy)
3. Enable **WebP conversion**
4. Enable **Mirage** for mobile images

### Option 2: Manual Optimization

Run the optimization script:
```bash
npm install -D sharp
node scripts/optimize-images.cjs
```

Or use online tools:
- [Squoosh](https://squoosh.app) - Best for manual optimization
- [TinyPNG](https://tinypng.com) - Batch processing

**Target sizes:**
- Hero images: < 200KB
- Thumbnails: < 50KB
- Content images: < 100KB

---

## 🔧 Cloudflare Settings Checklist

Enable these in Cloudflare Dashboard:

### Speed → Optimization

- [ ] **Auto Minify**: HTML, CSS, JavaScript ✓
- [ ] **Brotli**: ON ✓
- [ ] **Early Hints**: ON ✓
- [ ] **Rocket Loader**: ON (JavaScript optimization)
- [ ] **Mirage**: ON (image optimization for mobile)
- [ ] **Polish**: Lossy or Lossless ✓
- [ ] **WebP**: ON ✓

### Speed → Browser Insights

- [ ] Enable Core Web Vitals monitoring

### Caching → Configuration

- [ ] **Caching Level**: Standard
- [ ] **Browser Cache TTL**: Respect Existing Headers
- [ ] Enable **Always Online**
- [ ] Enable **Development Mode** (disable for production)

### Rules → Page Rules (Optional)

```
*.js → Cache Level: Cache Everything, Edge TTL: 1 month
*.css → Cache Level: Cache Everything, Edge TTL: 1 month
/assets/* → Cache Level: Cache Everything, Edge TTL: 1 year
```

---

## 🔧 Vercel Settings Checklist

Most settings are automatic via `vercel.json`, but verify:

### Project Settings

- [ ] **Framework Preset**: Vite
- [ ] **Node.js Version**: 20.x
- [ ] **Build Command**: `npm run build`
- [ ] **Output Directory**: `dist`

### Edge Network

- [ ] Edge caching is automatic ✓
- [ ] Brotli compression is enabled by default ✓
- [ ] Image optimization via Vercel Images (if using next/image)

---

## 📊 Bundle Analysis

Current bundle sizes (gzipped with Brotli):

| Chunk | Size (Brotli) | Loads |
|-------|---------------|-------|
| **Landing Page** | ~0.6KB | Immediately |
| **Home Page** | ~1.6KB | On navigation |
| **Subject Page** | ~5.8KB | On navigation |
| **React Core** | ~50KB | Immediately |
| **Router** | ~10KB | Immediately |
| **KaTeX (Math)** | ~60KB | On math content |
| **Charts** | ~76KB | Lazy (rarely) |
| **Course Content** | 12-36KB each | On demand |

**Initial Load (Landing)**: ~52KB (excellent)
**Full App (with math)**: ~130KB (good)

---

## 🔍 Monitoring

### Development

Web Vitals are logged to console in dev mode:
```
[Web Vitals] LCP: 1234ms (good)
[Web Vitals] FCP: 456ms (good)
[Web Vitals] CLS: 0.05 (good)
```

### Production

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://webpagetest.org/)
- Cloudflare Web Analytics (free)
- Vercel Analytics ($)

---

## 🎯 Next Steps for Maximum Performance

1. **Optimize images** - This is the biggest win (potential 150MB reduction)
2. **Enable Cloudflare Polish** - Automatic image optimization
3. **Consider Vercel Analytics** - Real user monitoring
4. **Add Service Worker** - Offline support (optional)
5. **Consider HTTP/3** - Faster connections (Cloudflare auto-enables)

---

## File Reference

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build optimizations, chunking, compression |
| `vercel.json` | Vercel headers, caching, routing |
| `public/_headers` | Cloudflare caching headers |
| `public/_redirects` | Cloudflare SPA routing |
| `wrangler.toml` | Cloudflare Pages config |
| `utils/webVitals.ts` | Performance monitoring |
| `components/OptimizedImage.tsx` | Lazy loading images |
| `scripts/optimize-images.cjs` | Image analysis/optimization |
