
import React, { useEffect, useRef, useState } from 'react';
import { Search, X, Menu } from 'lucide-react';
import { courseContent } from '../data/courseContent';
import MobileIndex from './MobileIndex';
import ThemeToggle from './ThemeToggle';

interface SearchResult {
  title: string;
  subtitle?: string;
  anchorId: string;
  matchContext?: string;
}

const Header: React.FC = () => {
  const [progress, setProgress] = useState(0);
  // ... existing state hooks ...
  const [hidden, setHidden] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const lastScrollY = useRef(0);

  const handleSearch = (query: string) => {
    // ... logic remains same ...
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    courseContent.forEach((section) => {
      // Search in main section title
      if (section.title.toLowerCase().includes(lowerQuery)) {
        results.push({
          title: section.title,
          anchorId: section.id,
          matchContext: 'Titolo Sezione'
        });
      }

      section.subsections.forEach((sub, subIndex) => {
        // Search in subsection title
        if (sub.title.toLowerCase().includes(lowerQuery)) {
          results.push({
            title: sub.title,
            subtitle: section.title,
            anchorId: `${section.id}-${subIndex}`,
            matchContext: 'Titolo Sottosezione'
          });
        } else {
          // Search in content only if title didn't match (to avoid too many results for same section)
          // or we can search both but prioritize title.
          // Let's search content too.
          let contentMatchFound = false;
          sub.content.forEach((item) => {
            if (typeof item === 'string' && !contentMatchFound) {
              const matchIndex = item.toLowerCase().indexOf(lowerQuery);
              if (matchIndex !== -1) {
                const start = Math.max(0, matchIndex - 30);
                const end = Math.min(item.length, matchIndex + 50);
                const context = item.substring(start, end);

                results.push({
                  title: sub.title,
                  subtitle: section.title,
                  anchorId: `${section.id}-${subIndex}`,
                  matchContext: context
                });
                contentMatchFound = true; // Only one match per subsection to keep it clean
              }
            }
          });
        }
      });
    });

    setSearchResults(results);
    setShowResults(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;

      if (total <= 0) {
        setProgress(0);
        return;
      }

      const next = (scrollTop / total) * 100;
      setProgress(Math.min(100, Math.max(0, next)));

      const current = window.scrollY || window.pageYOffset;
      if (current > lastScrollY.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border-primary bg-premium-black/80 backdrop-blur-xl transition-all duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Index Trigger (Ball) */}
          <MobileIndex />

          <h1 className="font-serif text-base sm:text-lg tracking-wider text-content-primary truncate">
            ECONOMIA <span className="text-premium-gold font-italic">AZIENDALE</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="relative group">
            <div className={`flex items-center bg-premium-gray/50 border border-border-primary rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 transition-all duration-300 focus-within:w-48 sm:focus-within:w-64 focus-within:bg-premium-black focus-within:border-premium-gold/50 w-24 sm:w-48`}>
              <Search size={14} className="text-content-muted mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Cerca..."
                className="bg-transparent border-none outline-none text-sm text-content-primary w-full placeholder-content-muted min-w-0"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => {
                  if (searchQuery.length > 1) setShowResults(true);
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchResults([]);
                    setShowResults(false);
                  }}
                  className="text-content-muted hover:text-content-primary flex-shrink-0"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-[85vw] sm:w-96 bg-premium-black/90 backdrop-blur-xl border border-border-primary rounded-xl shadow-2xl overflow-hidden max-h-[60vh] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2">
                <div className="sticky top-0 bg-premium-black/95 backdrop-blur-md p-2 border-b border-border-primary flex justify-between items-center">
                  <span className="text-xs font-mono text-premium-gold uppercase tracking-widest px-2">
                    {searchResults.length} Risultati
                  </span>
                  <button
                    onClick={() => setShowResults(false)}
                    className="p-1 hover:bg-premium-glass rounded-full transition-colors"
                  >
                    <X size={14} className="text-content-muted" />
                  </button>
                </div>
                <div className="divide-y divide-border-primary">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 hover:bg-premium-glass transition-colors group"
                      onClick={() => {
                        const element = document.getElementById(result.anchorId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          // Add a highlight effect
                          element.classList.add('bg-premium-gold/10');
                          setTimeout(() => element.classList.remove('bg-premium-gold/10'), 2000);
                        }
                        setShowResults(false);
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 min-w-[4px] h-4 rounded-full bg-premium-gold/30 group-hover:bg-premium-gold transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-content-primary group-hover:text-white transition-colors line-clamp-1">
                            {result.title}
                          </p>
                          {result.subtitle && (
                            <p className="text-xs text-content-muted mt-0.5 line-clamp-1">
                              {result.subtitle}
                            </p>
                          )}
                          {result.matchContext && (
                            <p className="text-xs text-content-muted mt-2 font-mono bg-premium-glass p-1.5 rounded border border-border-primary line-clamp-2">
                              "...{result.matchContext}..."
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showResults && searchQuery.length > 1 && searchResults.length === 0 && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-premium-black/90 backdrop-blur-xl border border-border-primary rounded-xl shadow-xl p-4 text-center z-50">
                <p className="text-sm text-content-muted">Nessun risultato trovato</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-premium-glass">
        <div
          className="h-full bg-gradient-to-r from-premium-gold/50 via-premium-gold to-white transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-premium-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-premium-black border-r border-border-primary shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-left duration-300 overscroll-contain">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-serif text-xl text-premium-gold">Indice</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-content-muted hover:text-content-primary"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {courseContent.map((section, sectionIndex) => (
                <div key={section.id}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border-primary text-[10px] font-mono text-content-muted">
                      {sectionIndex + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-content-primary">
                      {section.title.split(':')[0]}
                    </span>
                  </div>
                  <div className="ml-3 border-l border-border-primary pl-4 flex flex-col gap-3">
                    {section.subsections.map((subsection, subIndex) => (
                      <button
                        key={`${section.id}-${subIndex}`}
                        className="text-left text-sm text-content-muted hover:text-premium-gold transition-colors"
                        onClick={() => {
                          const element = document.getElementById(`${section.id}-${subIndex}`);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                          setMobileMenuOpen(false);
                        }}
                      >
                        {subsection.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
