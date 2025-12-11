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
          // Use object-based chunks to ensure proper loading order
          manualChunks: {
            // React core + recharts together to avoid forwardRef issue
            'vendor-react': ['react', 'react-dom', 'recharts'],
            // React Router - separate chunk
            'vendor-router': ['react-router-dom'],
            // Math rendering (KaTeX)
            'vendor-math': ['katex'],
            // Lucide icons
            'vendor-icons': ['lucide-react'],
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
      include: ['react', 'react-dom', 'react-router-dom', 'recharts'],
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
