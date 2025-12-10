import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// 🚀 Lazy load route components for code splitting
// This reduces initial bundle size dramatically
const LandingPage = lazy(() => import('./components/LandingPage'));
const HomePage = lazy(() => import('./components/HomePage'));
const SubjectPage = lazy(() => import('./components/SubjectPage'));

// Minimal loading fallback (CSS is inlined in index.html for instant display)
const RouteLoader = () => (
  <div className="min-h-screen bg-[var(--bg-body)] flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-content-primary/10 border-t-content-primary/40 rounded-full animate-spin" />
  </div>
);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subjects" element={<HomePage />} />
          <Route path="/economia" element={<SubjectPage />} />
          <Route path="/:slug" element={<SubjectPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// 🚀 Initialize Web Vitals monitoring (dev mode only)
if (process.env.NODE_ENV === 'development') {
  import('./utils/webVitals').then(({ initWebVitals }) => {
    initWebVitals({ debug: true });
  });
}
