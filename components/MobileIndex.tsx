import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { courseContent } from '../data/courseContent';
import { useScrollSpy } from '../hooks/useScrollSpy';

const MobileIndex: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);

    // Detect portrait mode programmatically to conditionally render if needed, 
    // though CSS media queries are often cleaner for display toggling.
    // The user specifically asked for "activate only in vertical (portrait) mode".
    useEffect(() => {
        const checkOrientation = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };

        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    const subsectionAnchors = courseContent.flatMap((section) =>
        section.subsections.map((_, index) => `${section.id}-${index}`)
    );

    const activeId = useScrollSpy(subsectionAnchors, {
        rootMargin: '0% 0% -70% 0%',
    });

    // Find active title
    let activeTitle = "Indice Contenuti";
    if (activeId) {
        for (const section of courseContent) {
            const subIndex = section.subsections.findIndex((_, idx) => `${section.id}-${idx}` === activeId);
            if (subIndex !== -1) {
                activeTitle = section.subsections[subIndex].title;
                break;
            }
        }
    }

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isOpen && !target.closest('#mobile-index-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    if (!isPortrait) return null;

    return (
        <div
            id="mobile-index-container"
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md md:hidden"
        >
            {/* Backdrop Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Pill Bar */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-40 w-full flex items-center justify-between px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg transition-all duration-300 active:scale-95"
            >
                <span className="text-sm font-medium text-gray-200 truncate pr-4">
                    {activeTitle}
                </span>
                <div className="flex-shrink-0 text-premium-gold">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </button>

            {/* Expanded Panel */}
            {isOpen && (
                <div className="relative z-40 mt-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div className="py-2">
                        {courseContent.map((section, sIdx) => (
                            <div key={section.id} className="mb-2 last:mb-0">
                                {/* Section Header (Optional, but good for context) */}
                                {!['glossario', 'formulario-esempi'].includes(section.id) && (
                                    <div className="px-5 py-2 text-[10px] font-mono text-premium-gold/70 uppercase tracking-widest border-b border-white/5 bg-white/5">
                                        {section.title.split(':')[0]}
                                    </div>
                                )}

                                <div className="py-1">
                                    {section.subsections.map((sub, subIdx) => {
                                        const anchorId = `${section.id}-${subIdx}`;
                                        const isActive = activeId === anchorId;

                                        return (
                                            <button
                                                key={anchorId}
                                                onClick={() => handleClick(anchorId)}
                                                className={`w-full text-left px-5 py-3 text-sm transition-colors ${isActive
                                                    ? 'text-premium-gold font-medium bg-premium-gold/10 border-l-2 border-premium-gold'
                                                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border-l-2 border-transparent'
                                                    }`}
                                            >
                                                {sub.title}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
};

export default MobileIndex;
