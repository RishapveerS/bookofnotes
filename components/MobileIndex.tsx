import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { courseContent } from '../data/courseContent';
import { useScrollSpy } from '../hooks/useScrollSpy';

const MobileIndex: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);

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

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isPortrait) return null;

    return (
        <div className="md:hidden">
            {/* Trigger Ball */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-9 h-9 rounded-full bg-premium-black/40 backdrop-blur-md border border-border-primary flex items-center justify-center text-content-primary hover:text-premium-gold hover:border-premium-gold/50 transition-all duration-300 active:scale-95 shadow-lg"
                aria-label="Indice"
            >
                <Menu size={18} />
            </button>

            {/* Modal Overlay */}
            {isOpen && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-premium-black/60 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Content Card */}
                    <div className="relative w-full max-w-sm bg-premium-black border border-border-primary rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[80vh] flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border-primary bg-premium-gray/20">
                            <h2 className="font-serif text-lg text-premium-gold tracking-wide">Indice Contenuti</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-full hover:bg-premium-gray text-content-muted hover:text-content-primary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable List */}
                        <div className="overflow-y-auto custom-scrollbar p-2">
                            {courseContent.map((section, sIdx) => (
                                <div key={section.id} className="mb-2 last:mb-0">
                                    <div
                                        className="px-4 py-2 text-[10px] font-mono text-premium-gold/50 uppercase tracking-widest cursor-pointer hover:text-premium-gold transition-colors"
                                        onClick={() => handleClick(`${section.id}-0`)}
                                    >
                                        {section.title.split(':')[0]}
                                    </div>

                                    <div className="space-y-1">
                                        {section.subsections.map((sub, subIdx) => {
                                            const anchorId = `${section.id}-${subIdx}`;
                                            const isActive = activeId === anchorId;

                                            return (
                                                <button
                                                    key={anchorId}
                                                    onClick={() => handleClick(anchorId)}
                                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group ${isActive
                                                        ? 'bg-premium-gold/10 text-premium-gold font-medium'
                                                        : 'text-content-muted hover:text-content-primary hover:bg-premium-gray/50'
                                                        }`}
                                                >
                                                    <span className="line-clamp-1">{sub.title}</span>
                                                    {isActive && <ChevronRight size={14} className="opacity-100" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border-primary);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
};

export default MobileIndex;
