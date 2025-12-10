import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects, Subject } from '../data/subjects';
import ThemeToggle from './ThemeToggle';
import { prefetchContent, prefetchAllContent } from '../utils/contentLoader';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    // Removed search input ref as we don't need it anymore for search
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Group subjects by year
    const groupedSubjects = {
        'Year 1': subjects.filter(s => s.year === 'Year 1'),
        'Year 2': subjects.filter(s => s.year === 'Year 2'),
        'Year 3': subjects.filter(s => s.year === 'Year 3'),
    };

    useEffect(() => {
        // Prefetch ALL content immediately in background
        prefetchAllContent();
    }, []);

    const handleSubjectClick = (subject: Subject) => {
        setSelectedSubject(subject);
        prefetchContent(subject.slug);
    };

    const handleEnterSubject = () => {
        if (selectedSubject) {
            navigate(selectedSubject.slug === 'economia' ? '/economia' : `/${selectedSubject.slug}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedSubject && e.key === 'Enter') {
            handleEnterSubject();
        }
        if (e.key === 'Escape') {
            if (selectedSubject) {
                setSelectedSubject(null);
            }
        }
    };

    const getYearLabel = (year: string) => {
        const labels = { 'Year 1': 'Primo Anno', 'Year 2': 'Secondo Anno', 'Year 3': 'Terzo Anno' };
        return labels[year as keyof typeof labels] || year;
    };

    return (
        <div
            className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-4 lg:p-12 transition-colors duration-500 overflow-hidden"
            onKeyDown={handleKeyDown}
            tabIndex={0} // Make div focusable to catch key events if needed
        >
            {/* Theme Toggle */}
            <div className="fixed right-6 top-6 z-50">
                <ThemeToggle />
            </div>

            {selectedSubject ? (
                /* Podium View */
                <div className="flex flex-col items-center animate-fadeIn z-50">
                    {/* Image with loading state */}
                    <div className="relative">
                        {!imageLoaded && (
                            <div className="h-[55vh] aspect-[2/3] rounded-2xl bg-black/5 dark:bg-white/5 
                                            flex items-center justify-center">
                                {/* Spinner */}
                                <div className="w-8 h-8 border-2 border-black/10 dark:border-white/10 
                                                border-t-black/40 dark:border-t-white/40 rounded-full animate-spin" />
                            </div>
                        )}
                        <img
                            src={selectedSubject.image}
                            alt={selectedSubject.title}
                            onLoad={() => setImageLoaded(true)}
                            className={`h-[55vh] w-auto rounded-2xl shadow-2xl cursor-pointer 
                                       hover:scale-[1.01] transition-all duration-300
                                       ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                            onClick={handleEnterSubject}
                        />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-black dark:text-white mt-6 text-center">
                        {selectedSubject.title}
                    </h2>
                    <span className="text-sm text-black/50 dark:text-white/50 mt-1">
                        {getYearLabel(selectedSubject.year)}
                    </span>

                    {imageLoaded ? (
                        <button
                            onClick={handleEnterSubject}
                            className="mt-6 px-8 py-3 bg-black dark:bg-white text-white dark:text-black 
                                       font-medium rounded-full hover:opacity-90 transition-opacity transform active:scale-95 duration-75"
                        >
                            Apri Appunti
                        </button>
                    ) : (
                        <div className="mt-6 px-8 py-3 text-black/30 dark:text-white/30 text-sm">
                            Caricamento...
                        </div>
                    )}

                    <button
                        onClick={() => { setSelectedSubject(null); setImageLoaded(false); }}
                        className="mt-4 text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                    >
                        ← Torna alla lista
                    </button>
                </div>
            ) : (
                /* 3-Column Dashboard View */
                <div className="w-full max-w-7xl h-full flex flex-col md:flex-row gap-6 lg:gap-12 items-start justify-center">

                    {/* Header Logo/Title - Optional within layout, or keep above? 
                        User wants "3 bars divided", implies equal importance.
                    */}

                    {(['Year 1', 'Year 2', 'Year 3'] as const).map((year) => (
                        <div key={year} className="flex-1 w-full flex flex-col h-full max-h-[85vh]">
                            {/* Year Header Banner */}
                            <div className="mb-4 py-3 px-4 bg-black/[0.03] dark:bg-white/[0.03] 
                                            rounded-xl border border-black/5 dark:border-white/5 
                                            text-center backdrop-blur-sm">
                                <span className="text-sm font-bold text-black/60 dark:text-white/60 uppercase tracking-[0.2em]">
                                    {getYearLabel(year)}
                                </span>
                            </div>

                            {/* Subjects List */}
                            <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
                                {groupedSubjects[year].map((subject) => (
                                    <button
                                        key={subject.slug}
                                        onClick={() => { setImageLoaded(false); handleSubjectClick(subject); }}
                                        className="group w-full p-3 bg-white dark:bg-[#161616] 
                                                   border border-black/5 dark:border-white/5 rounded-xl
                                                   hover:bg-black/[0.02] dark:hover:bg-white/[0.05]
                                                   hover:border-black/10 dark:hover:border-white/10
                                                   hover:shadow-lg dark:hover:shadow-white/[0.02]
                                                   transition-all duration-200 text-left flex items-center gap-3"
                                    >
                                        <div className="flex-1">
                                            <span className="block text-[15px] font-medium text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
                                                {subject.title}
                                            </span>
                                        </div>

                                        <svg className="w-4 h-4 text-black/10 dark:text-white/10 group-hover:text-black/30 dark:group-hover:text-white/30 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn { animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
                
                /* Custom Scrollbar for independent columns */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 4px;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255,255,255,0.1);
                }
            `}</style>
        </div>
    );
};

export default HomePage;
