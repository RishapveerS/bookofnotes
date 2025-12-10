import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects, Subject } from '../data/subjects';
import ThemeToggle from './ThemeToggle';
import { prefetchContent, prefetchAllContent } from '../utils/contentLoader';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Filter subjects based on search query
    const filteredSubjects = searchQuery.trim()
        ? subjects.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
        : subjects;

    // Group by year
    const groupedSubjects = {
        'Year 1': filteredSubjects.filter(s => s.year === 'Year 1'),
        'Year 2': filteredSubjects.filter(s => s.year === 'Year 2'),
        'Year 3': filteredSubjects.filter(s => s.year === 'Year 3'),
    };

    useEffect(() => {
        inputRef.current?.focus();
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
                inputRef.current?.focus();
            } else {
                setSearchQuery('');
            }
        }
    };

    const getYearLabel = (year: string) => {
        const labels = { 'Year 1': 'Primo Anno', 'Year 2': 'Secondo Anno', 'Year 3': 'Terzo Anno' };
        return labels[year as keyof typeof labels] || year;
    };

    return (
        <div
            className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-4 transition-colors duration-500"
            onKeyDown={handleKeyDown}
        >
            {/* Theme Toggle */}
            <div className="fixed right-6 top-6 z-50">
                <ThemeToggle />
            </div>

            {selectedSubject ? (
                /* Podium View */
                <div className="flex flex-col items-center animate-fadeIn">
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

                    {/* Button only shows when image loaded */}
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
                        onClick={() => { setSelectedSubject(null); setImageLoaded(false); inputRef.current?.focus(); }}
                        className="mt-4 text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                    >
                        ← Torna alla ricerca
                    </button>
                </div>
            ) : (
                /* Spotlight Panel */
                <div className="w-full max-w-[600px] bg-white/95 dark:bg-[#161616] 
                                rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden">

                    {/* Search Header */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5 dark:border-white/5">
                        <svg className="w-5 h-5 text-black/30 dark:text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            ref={inputRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cerca appunti..."
                            className="flex-1 bg-transparent text-[17px] text-black dark:text-white
                                       placeholder:text-black/30 dark:placeholder:text-white/30
                                       focus:outline-none"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full">
                                <svg className="w-4 h-4 text-black/40 dark:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* List Content */}
                    <div className="max-h-[55vh] overflow-y-auto">
                        {(['Year 1', 'Year 2', 'Year 3'] as const).map((year) => {
                            const yearSubjects = groupedSubjects[year];
                            if (yearSubjects.length === 0) return null;

                            return (
                                <div key={year}>
                                    {/* Section Header */}
                                    <div className="px-5 py-2 bg-black/[0.02] dark:bg-white/[0.02] 
                                                    border-b border-black/5 dark:border-white/5 sticky top-0">
                                        <span className="text-[12px] font-semibold text-black/40 dark:text-white/40 uppercase tracking-wider">
                                            {getYearLabel(year)}
                                        </span>
                                    </div>

                                    {/* Subject List */}
                                    {yearSubjects.map((subject, index) => (
                                        <button
                                            key={subject.slug}
                                            onClick={() => { setImageLoaded(false); handleSubjectClick(subject); }}
                                            className={`w-full px-5 py-3 flex items-center justify-between text-left
                                                        hover:bg-black/[0.03] dark:hover:bg-white/[0.03]
                                                        transition-colors duration-100
                                                        ${index !== yearSubjects.length - 1 ? 'border-b border-black/[0.03] dark:border-white/[0.03]' : ''}`}
                                        >
                                            {/* Subject Name */}
                                            <span className="text-[15px] text-black dark:text-white">
                                                {subject.title}
                                            </span>

                                            {/* Arrow */}
                                            <svg className="w-4 h-4 text-black/20 dark:text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            );
                        })}

                        {/* No Results */}
                        {filteredSubjects.length === 0 && (
                            <div className="py-12 text-center text-black/40 dark:text-white/40">
                                Nessun risultato per "{searchQuery}"
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-black/5 dark:border-white/5 
                                    text-[11px] text-black/30 dark:text-white/30 text-center">
                        {filteredSubjects.length} materie
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
            `}</style>
        </div>
    );
};

export default HomePage;
