import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import SubjectPage from './components/SubjectPage';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subjects" element={<HomePage />} />
        <Route path="/economia" element={<SubjectPage />} />
        <Route path="/:slug" element={<SubjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
