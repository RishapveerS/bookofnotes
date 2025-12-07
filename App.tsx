
import React from 'react';
import Header from './components/Header';
import LessonRail from './components/LessonRail';
import SectionDisplay from './components/SectionDisplay';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { courseContent } from './data/courseContent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-premium-black text-content-primary leading-relaxed selection:bg-premium-gold/30 selection:text-white">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-premium-gray/40 via-premium-black to-[var(--bg-body)] pointer-events-none" />
      <Header />
      <LessonRail />

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:pl-80 py-32 sm:py-40 transition-all duration-300">
        <div className="flex flex-col gap-10 md:gap-12">
          {courseContent.map((section) => (
            <SectionDisplay key={section.id} section={section} />
          ))}
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
