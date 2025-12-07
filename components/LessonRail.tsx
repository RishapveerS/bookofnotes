import React, { useState } from 'react';
import { courseContent } from '../data/courseContent';
import { useScrollSpy } from '../hooks/useScrollSpy';

const LessonRail: React.FC = () => {
  const subsectionAnchors = courseContent.flatMap((section) =>
    section.subsections.map((_, index) => `${section.id}-${index}`)
  );

  const activeId = useScrollSpy(subsectionAnchors, {
    rootMargin: '0% 0% -70% 0%',
  });

  const [hidden, setHidden] = useState(false);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleHidden = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Toggle (if needed later, but currently hidden on mobile in original code too) */}

      <aside
        className="hidden lg:block fixed left-8 top-32 bottom-10 z-40 w-64 overflow-y-auto pr-2 custom-scrollbar"
      >
        <div className="flex flex-col gap-8">
          <div className="text-xs font-mono text-premium-gold/70 uppercase tracking-widest border-b border-border-primary pb-2">
            Indice dei contenuti
          </div>

          {courseContent.map((section, sectionIndex) => {
            const shortTitle = section.title.split(':')[0];

            return (
              <div key={section.id} className="group">
                <div
                  className="flex items-center gap-3 mb-3 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleClick(`${section.id}-0`)}
                >
                  {!['glossario', 'formulario-esempi'].includes(section.id) ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border-primary text-[10px] font-mono text-content-muted group-hover:border-premium-gold group-hover:text-premium-gold transition-colors">
                      {sectionIndex + 1}
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center text-content-muted">
                      •
                    </span>
                  )}
                  <span className="text-xs font-medium uppercase tracking-wide text-content-muted group-hover:text-content-primary transition-colors">
                    {shortTitle}
                  </span>
                </div>

                <div className="ml-3 border-l border-border-primary pl-4 flex flex-col gap-2">
                  {section.subsections.map((subsection, subsectionIndex) => {
                    const anchorId = `${section.id}-${subsectionIndex}`;
                    const isActive = activeId === anchorId;

                    return (
                      <button
                        key={anchorId}
                        type="button"
                        onClick={() => handleClick(anchorId)}
                        className={`text-left text-sm transition-all duration-300 ${isActive
                          ? 'text-premium-gold font-medium translate-x-1'
                          : 'text-content-muted hover:text-content-secondary'
                          }`}
                      >
                        {subsection.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--content-muted);
        }
      `}</style>
    </>
  );
};

export default LessonRail;
