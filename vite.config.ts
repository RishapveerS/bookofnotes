import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react({
        // Use automatic JSX runtime for smaller bundle
        jsxRuntime: 'automatic',
      }),
      // 🚀 Precompress assets for instant serving on Cloudflare/Vercel
      isProd && compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024, // Only compress files > 1KB
      }),
      isProd && compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
      }),
    ].filter(Boolean),
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      // Remove dev-only code in production
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // 🚀 2025 Performance Optimizations
    build: {
      // Target modern browsers for smaller bundles
      target: 'esnext',
      // Enable minification with terser for best compression
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd,
          pure_funcs: isProd ? ['console.log', 'console.info'] : [],
          passes: 3,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
        },
      },
      // CSS code splitting for better caching
      cssCodeSplit: true,
      // Generate source maps only in dev
      sourcemap: !isProd,
      // Aggressive chunk size warnings
      chunkSizeWarningLimit: 200,
      // Rollup optimizations
      rollupOptions: {
        output: {
          // Optimize chunk naming for better caching
          chunkFileNames: isProd
            ? 'assets/[name]-[hash:8].js'
            : 'assets/[name].js',
          entryFileNames: isProd
            ? 'assets/[name]-[hash:8].js'
            : 'assets/[name].js',
          assetFileNames: isProd
            ? 'assets/[name]-[hash:8].[ext]'
            : 'assets/[name].[ext]',
          // Advanced manual chunking strategy
          manualChunks: (id) => {
            // React core - rarely changes
            if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/')) {
              return 'vendor-react';
            }
            // React Router - separate chunk
            if (id.includes('node_modules/react-router')) {
              return 'vendor-router';
            }
            // Charts library (heavy, rarely used on initial load)
            if (id.includes('node_modules/recharts') ||
              id.includes('node_modules/d3')) {
              return 'vendor-charts';
            }
            // Math rendering (KaTeX)
            if (id.includes('node_modules/katex')) {
              return 'vendor-math';
            }
            // Lucide icons
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
            // Course content files - each gets own chunk (already dynamic)
            if (id.includes('/data/courseContent')) {
              return undefined; // Let Vite handle dynamic imports
            }
          },
        },
        // Tree shake aggressively
        treeshake: {
          moduleSideEffects: 'no-external',
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false,
        },
      },
      // Report compressed size
      reportCompressedSize: true,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['recharts'], // Lazy load this
    },
    // Enable experimental features for better performance
    esbuild: {
      // Remove legal comments
      legalComments: 'none',
      // Use modern syntax
      target: 'esnext',
    },
  };
});
