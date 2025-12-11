import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects, Subject } from '../data/subjects';
import ThemeToggle from './ThemeToggle';

// Subjects with completed notes
const completedSubjects = ['analisi-1', 'fondamenti-informatica', 'economia'];

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    // Check if subject notes are completed
    const isCompleted = (slug: string) => completedSubjects.includes(slug);

    // Group by year
    const groupedSubjects = {
        'Year 1': subjects.filter(s => s.year === 'Year 1'),
        'Year 2': subjects.filter(s => s.year === 'Year 2'),
        'Year 3': subjects.filter(s => s.year === 'Year 3'),
    };

    const handleSubjectClick = (subject: Subject) => {
        setSelectedSubject(subject);
    };

    const handleEnterSubject = () => {
        if (selectedSubject) {
            setIsNavigating(true);
            setTimeout(() => {
                navigate(selectedSubject.slug === 'economia' ? '/economia' : `/${selectedSubject.slug}`);
            }, 10);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedSubject && e.key === 'Enter') {
            handleEnterSubject();
        }
        if (e.key === 'Escape' && selectedSubject) {
            setSelectedSubject(null);
            setImageLoaded(false);
        }
    };

    const getYearLabel = (year: string) => {
        const labels = { 'Year 1': 'Primo Anno', 'Year 2': 'Secondo Anno', 'Year 3': 'Terzo Anno' };
        return labels[year as keyof typeof labels] || year;
    };

    return (
        <div
            className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* Theme Toggle */}
            <div className="fixed right-6 top-6 z-50">
                <ThemeToggle />
            </div>

            {selectedSubject ? (
                /* Podium View - When a subject is selected */
                <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fadeIn">
                    {/* Image with loading state */}
                    <div className="relative">
                        {!imageLoaded && (
                            <div className="h-[55vh] aspect-[2/3] rounded-2xl bg-black/5 dark:bg-white/5 
                                            flex items-center justify-center">
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
                            disabled={isNavigating}
                            className="mt-6 px-8 py-3 bg-black dark:bg-white text-white dark:text-black 
                                       font-medium rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            {isNavigating ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 
                                                  border-t-white dark:border-t-black rounded-full animate-spin" />
                                    <span>Apertura...</span>
                                </>
                            ) : (
                                'Apri Appunti'
                            )}
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
                        ← Torna indietro
                    </button>
                </div>
            ) : (
                /* Three Column Layout with Title */
                <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8">
                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-5xl text-black dark:text-white mb-8 md:mb-10 tracking-tight">
                        Book of Notes
                    </h1>

                    {/* Three Column Grid */}
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {(['Year 1', 'Year 2', 'Year 3'] as const).map((year) => {
                            const yearSubjects = groupedSubjects[year];

                            return (
                                <div
                                    key={year}
                                    className="bg-white/80 dark:bg-[#161616]/90 rounded-xl 
                                               border border-black/5 dark:border-white/10 
                                               shadow-lg dark:shadow-black/20 overflow-hidden"
                                >
                                    {/* Year Header */}
                                    <div className="px-5 py-3 border-b border-black/5 dark:border-white/5
                                                    bg-black/[0.02] dark:bg-white/[0.02]">
                                        <h2 className="text-xs font-bold text-black/50 dark:text-white/50 
                                                       uppercase tracking-[0.15em] text-center">
                                            {getYearLabel(year)}
                                        </h2>
                                    </div>

                                    {/* Subject List */}
                                    <div className="divide-y divide-black/[0.04] dark:divide-white/[0.04]">
                                        {yearSubjects.map((subject) => (
                                            <button
                                                key={subject.slug}
                                                onClick={() => { setImageLoaded(false); handleSubjectClick(subject); }}
                                                className="w-full px-5 py-3 flex items-center justify-between text-left
                                                           hover:bg-black/[0.03] dark:hover:bg-white/[0.03]
                                                           transition-colors duration-150 group"
                                            >
                                                {/* Subject Name & Status */}
                                                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                                    <span className="text-[15px] text-black/80 dark:text-white/80 
                                                                     group-hover:text-black dark:group-hover:text-white
                                                                     transition-colors truncate">
                                                        {subject.title}
                                                    </span>
                                                    {/* Status Badge */}
                                                    {isCompleted(subject.slug) ? (
                                                        <span className="shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full
                                                                         bg-emerald-500/10 text-emerald-600 dark:text-emerald-400
                                                                         border border-emerald-500/20">
                                                            Completati
                                                        </span>
                                                    ) : (
                                                        <span className="shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full
                                                                         bg-amber-500/10 text-amber-600 dark:text-amber-400
                                                                         border border-amber-500/20">
                                                            Da Fare
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Arrow */}
                                                <svg
                                                    className="w-4 h-4 text-black/15 dark:text-white/15 shrink-0 ml-2
                                                               group-hover:text-black/40 dark:group-hover:text-white/40
                                                               group-hover:translate-x-0.5 transition-all"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
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
