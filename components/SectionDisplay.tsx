
import React, { useState, useEffect } from 'react';
import katex from 'katex';
import { MainSection, SubSection, TableData } from '../types';

// Images are in public folder, use direct paths
const image1 = '/image1.jpg';
const image2 = '/image2.jpg';
const valueChainImg = '/value_chain.png';
const orgChartImg = '/org_chart.png';
import { Search, X, ZoomIn, Info } from 'lucide-react';
import { createPortal } from 'react-dom';

const RiskRewardChart = React.lazy(() => import('./RiskRewardChart'));
const MathRenderer = React.lazy(() => import('./MathRenderer'));

interface SectionDisplayProps {
  section: MainSection;
}

const highlightPattern = /(\*\*)/g;

const ImageThumbnail: React.FC<{ src: string; alt: string; onImageClick: (src: string, alt: string) => void }> = ({ src, alt, onImageClick }) => {
  return (
    <div
      className="relative overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-zoom-in group"
      onClick={() => onImageClick(src, alt)}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-end justify-center pb-4">
        <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white bg-black/50 backdrop-blur-md px-3 py-1">
          <ZoomIn size={12} /> Ingrandisci
        </span>
      </div>
    </div>
  );
};

const isTableData = (item: string | TableData): item is TableData => {
  return (item as TableData).headers !== undefined;
};

// Regex matches:
// 1. **bold** (group 1)
// 2. $inline math$ (group 2), handling escaped dollars if we wanted, but simple $...$ for now
const contentPattern = /(\*\*[^*]+\*\*)|(\$[^$]+\$)/g;

const renderWithHighlights = (value: string, boldClass = "font-bold text-content-primary") => {
  if (!value) return null;

  // Normalize invisible chars once here too, just in case
  const normalizedValue = value.replace(/[\u200B\u200C\u200D\u200E\u200F\uFEFF]/g, '');

  const parts = normalizedValue.split(contentPattern);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('**') && part.endsWith('**')) {
          const content = part.substring(2, part.length - 2);
          return <strong key={index} className={boldClass}>{content}</strong>;
        }

        if (part.startsWith('$') && part.endsWith('$')) {
          const latex = part.substring(1, part.length - 1);
          try {
            const html = katex.renderToString(latex, {
              throwOnError: false,
              displayMode: false,
            });
            return (
              <span
                key={index}
                className="inline-math text-premium-gold font-serif px-1"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            return <span key={index} className="text-red-400">{part}</span>;
          }
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const ContentRenderer: React.FC<{ item: string | TableData; onImageClick: (src: string, alt: string) => void }> = ({ item, onImageClick }) => {
  if (isTableData(item)) {
    // Check if this is the "Sintesi" table to render a chart
    const isSintesiTable = item.headers.includes("Soggetto") && item.headers.includes("Cosa apporta");

    if (isSintesiTable) {
      // Transform data for chart
      // We'll create a dummy "Risk/Reward" visualization based on the table data
      const chartData = [
        { name: 'Proprietari', risk: 90, reward: 90, type: 'Variabile' },
        { name: 'Manager', risk: 60, reward: 80, type: 'Mista' },
        { name: 'Lavoratori', risk: 20, reward: 40, type: 'Fissa' },
        { name: 'Fornitori', risk: 30, reward: 30, type: 'Fissa' },
        { name: 'Finanziatori', risk: 40, reward: 20, type: 'Fissa' },
      ];

      return (
        <div className="my-12 space-y-8">
          <div className="overflow-x-auto p-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {item.headers.map((header, index) => (
                    <th key={index} className="p-4 text-xs font-mono font-medium text-premium-gold uppercase tracking-widest">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-4 text-sm text-content-secondary font-light">{renderWithHighlights(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="risk-reward-chart-container p-6">
            <React.Suspense fallback={<div className="h-[300px] w-full animate-pulse"></div>}>
              <RiskRewardChart data={chartData} />
            </React.Suspense>
          </div>
        </div>
      );
    }

    return (
      <div className="my-8 overflow-x-auto p-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {item.headers.map((header, index) => (
                <th key={index} className="p-4 text-xs font-mono font-medium text-premium-gold uppercase tracking-widest">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="transition-colors">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-4 text-sm text-content-secondary font-light">{renderWithHighlights(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const text = (item as string).trim();
  const cleanText = text.replace(/\*\*/g, '');

  // Callout: warning / attenzione
  if (/^Attenzione\s*[:\-]/i.test(text)) {
    const content = text.replace(/^Attenzione\s*[:\-]\s*/i, '');

    return (
      <div className="my-8 px-6 py-4">
        <p className="text-xs font-mono font-bold tracking-widest uppercase text-amber-500 mb-2 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Attenzione
        </p>
        <p className="text-sm leading-relaxed text-content-secondary font-light">{renderWithHighlights(content)}</p>
      </div>
    );
  }

  // Callout: info / nota
  if (/^(Nota|Info)\s*[:\-]/i.test(text)) {
    const content = text.replace(/^(Nota|Info)\s*[:\-]\s*/i, '');

    return (
      <div className="my-8 px-6 py-4 gap-4">
        <p className="text-xs font-mono font-bold tracking-widest uppercase text-sky-500 mb-2 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          Nota
        </p>
        <p className="text-sm leading-relaxed text-content-secondary font-light">{renderWithHighlights(content)}</p>
      </div>
    );
  }

  // Check for math pattern
  const normalizedText = text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]+/, '');

  if (normalizedText.startsWith('$$')) {
    const latex = normalizedText.replace(/^\$\$|\$\$$/g, '');
    return (
      <React.Suspense fallback={<div className="my-8 h-12 animate-pulse bg-premium-glass rounded-sm"></div>}>
        <MathRenderer latex={latex} />
      </React.Suspense>
    );
  }

  // Check for code blocks
  // Simple check: starts with ```
  if (normalizedText.startsWith('```')) {
    const match = normalizedText.match(/```(\w+)?\n([\s\S]*?)```/);
    // Fallback if regex fails (e.g. valid markdown but slight variation) or just standard split
    const codeContent = match ? match[2] : normalizedText.replace(/```(\w+)?/, '').replace(/```$/, '');
    const lang = match ? match[1] : '';

    return (
      <div className="my-6">
        {lang && (
          <div className="px-4 py-2 text-xs font-mono font-bold uppercase text-premium-gold">
            {lang}
          </div>
        )}
        <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-content-secondary">
          <code>{codeContent}</code>
        </pre>
      </div>
    );
  }

  if (text.startsWith('●') || text.startsWith('○')) {
    const content = text.replace(/^[●○]\s*/, '').trim();

    // Check for "Term: Definition" pattern
    const colonIndex = content.indexOf(':');
    if (colonIndex !== -1 && colonIndex < 60) {
      const term = content.substring(0, colonIndex + 1);
      const definition = content.substring(colonIndex + 1);

      return (
        <p className="pl-8 relative text-content-secondary leading-relaxed font-light before:content-[''] before:absolute before:left-2 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-premium-gold/50">
          <strong className="text-content-primary font-semibold">{renderWithHighlights(term)}</strong>{renderWithHighlights(definition)}
        </p>
      );
    }

    return (
      <p className="pl-8 relative text-content-secondary leading-relaxed font-light before:content-[''] before:absolute before:left-2 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-premium-gold/50">
        {renderWithHighlights(content)}
      </p>
    );
  }

  if (cleanText.startsWith("L’impresa è un istituto economico")) {
    return (
      <div className="flex flex-col lg:flex-row items-start gap-8 group">
        <div className="flex-1">
          <p className="text-content-secondary leading-relaxed font-light text-lg group-hover:text-content-primary transition-colors duration-300">
            {renderWithHighlights(item as string)}
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex-shrink-0 mt-4 lg:mt-0">
          <ImageThumbnail src={image1} alt="Schema della definizione economica di impresa" onImageClick={onImageClick} />
          <p className="text-[10px] font-mono text-content-muted text-center mt-2 uppercase tracking-widest">Fig. 1: Il sistema impresa</p>
        </div>
      </div>
    );
  }

  if (cleanText.startsWith("I soggetti economici in relazione con l’impresa")) {
    return (
      <div className="flex flex-col lg:flex-row items-start gap-8 group mt-8">
        <div className="flex-1">
          <p className="font-serif text-xl text-premium-gold mb-4">{renderWithHighlights(item as string, "font-bold")}</p>
          <p className="text-content-secondary leading-relaxed font-light">
            Questa figura illustra le relazioni tra l'impresa e i vari soggetti economici che interagiscono con essa, evidenziando i flussi di beni, servizi e denaro.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <ImageThumbnail src={image2} alt="Schema dei soggetti economici in relazione con l’impresa" onImageClick={onImageClick} />
          <p className="text-[10px] font-mono text-content-muted text-center mt-2 uppercase tracking-widest">Fig. 2: Soggetti economici</p>
        </div>
      </div>
    );
  }

  if (cleanText.startsWith("1.2 Livelli di analisi: la catena del valore")) {
    return (
      <div className="flex flex-col lg:flex-row items-start gap-8 group mt-8 mb-8">
        <div className="flex-1">
          <p className="font-semibold text-content-primary mb-2">{renderWithHighlights(item as string)}</p>
          <p className="text-content-secondary leading-relaxed font-light">
            La catena del valore disaggrega l'impresa nelle sue attività strategicamente rilevanti allo scopo di comprendere l'andamento dei costi e le fonti esistenti e potenziali di differenziazione.
          </p>
        </div>
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <ImageThumbnail src={valueChainImg} alt="Catena del Valore di Porter" onImageClick={onImageClick} />
          <p className="text-[10px] font-mono text-content-muted text-center mt-2 uppercase tracking-widest">Fig. 3: Catena del Valore</p>
        </div>
      </div>
    );
  }

  if (cleanText.startsWith("1.4 Strutture funzionali vs divisionali")) {
    return (
      <div className="flex flex-col lg:flex-row items-start gap-8 group mt-8 mb-8">
        <div className="flex-1">
          <p className="font-semibold text-content-primary mb-2">{renderWithHighlights(item as string)}</p>
          <p className="text-content-secondary leading-relaxed font-light">
            Confronto visivo tra la struttura organizzativa funzionale (basata sulle competenze) e quella divisionale (basata su prodotti o mercati).
          </p>
        </div>
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <ImageThumbnail src={orgChartImg} alt="Struttura Funzionale vs Divisionale" onImageClick={onImageClick} />
          <p className="text-[10px] font-mono text-content-muted text-center mt-2 uppercase tracking-widest">Fig. 4: Organigrammi a confronto</p>
        </div>
      </div>
    );
  }





  // Bold titles that are not part of the main structure
  const boldableKeywords = [
    'Obiettivi dell’impresa', 'Tipologie di impresa', 'Definizioni giuridiche', 'Forme giuridiche',
    'Proprietà e controllo', 'Startup e spin‐off', 'I soggetti economici', 'Stakeholder e relazioni',
    'Prestatori di lavoro', 'Fornitori', 'Finanziatori', 'Comunità di riferimento', 'Stato e Pubblica Amministrazione',
    'Sintesi:', 'Classificazione delle imprese', 'Impresa individuale e impresa familiare', 'Imprese collettive e società',
    'Società di persone', 'Società di capitali', 'Società cooperative', 'Riepilogo a confronto', 'Come scegliere la forma giuridica',
    'Proprietari, manager e problema del controllo', 'Strumenti per allineare proprietà e management',
    'Ambiti regolati dalla corporate governance', 'Organi nel sistema tradizionale', 'Sistemi di governance',
    'Parole chiave per descrivere l’impresa', 'Valore economico dell’impresa', 'Attività d’impresa e processi aziendali', 'Processi aziendali',
    'Organigramma e unità organizzative', 'Cos’è il bilancio d’esercizio', 'Chi è interessato al bilancio',
    'Bilancio annuale e bilanci infrannuali', 'Bilancio dell’impresa vs bilancio consolidato',
    '1.1 Definizione economica di impresa'
  ];

  const isBoldTitle = boldableKeywords.some(keyword => cleanText.startsWith(keyword));

  if (isBoldTitle) {
    return <p className="font-serif text-lg text-premium-gold mt-8 mb-2">{renderWithHighlights(item as string, "font-bold")}</p>;
  }

  // Check for numbered sub-headings (e.g. 1.1.1, 2.1.3) OR single numbered lists (e.g. 1. Title)
  // The regex matches:
  // ^\d+(\.\d+)+\s  -> 1.1, 1.1.1 (multi-level)
  // OR
  // ^\d+\.\s        -> 1., 2. (single level)
  // We check cleanText to ignore potential ** at start
  if (/^(\d+(\.\d+)+|\d+\.)\s/.test(cleanText)) {
    return (
      <p className="font-bold text-lg text-content-primary mt-6 mb-2">
        {renderWithHighlights(item as string)}
      </p>
    );
  }

  return (
    <div className="group transition-all duration-300 hover:translate-x-1">
      <p className="text-content-secondary leading-relaxed font-light text-lg group-hover:text-content-primary transition-colors">
        {renderWithHighlights(item as string)}
      </p>
    </div>
  );
};

interface SubSectionDisplayProps {
  subsection: SubSection;
  anchorId: string;
  onImageClick: (src: string, alt: string) => void;
}

const SubSectionDisplay: React.FC<SubSectionDisplayProps> = ({ subsection, anchorId, onImageClick }) => (
  <div id={anchorId} className="mb-8 last:mb-0">
    <h3 className="text-2xl sm:text-3xl font-serif text-content-primary mb-6 pb-4">
      {subsection.title}
    </h3>
    <div className="space-y-4 text-content-secondary">
      {subsection.content.map((item, index) => (
        <ContentRenderer key={index} item={item} onImageClick={onImageClick} />
      ))}
    </div>
  </div>
);

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl shadow-black/50 scale-95 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-6 left-0 right-0 text-center text-gray-400 font-mono text-sm tracking-widest uppercase pointer-events-none">
        {alt}
      </p>
    </div>,
    document.body
  );
};

const SectionDisplay: React.FC<SectionDisplayProps> = ({ section }) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string, alt: string } | null>(null);

  // Calculate reading time (approx 200 words per minute)
  const wordCount = section.subsections.reduce((acc, sub) => {
    return acc + sub.content.reduce((c, item) => {
      if (typeof item === 'string') return c + item.split(' ').length;
      return c + 20; // Estimate for tables
    }, 0);
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <section id={section.id} className="pt-20 -mt-20">
      {lightboxImage && (
        <Lightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
      <div className="mb-12" id={section.id !== 'fondamenti-impresa' ? 'fondamenti-impresa' : undefined}>
        <div className="flex items-center gap-3 mb-4">
          {!['glossario', 'formulario-esempi'].includes(section.id) && (
            <span className="text-xs font-mono text-premium-gold uppercase tracking-widest px-2 py-1">
              Lezione {
                {
                  'fondamenti-impresa': '1',
                  'contabilita-esterna': '2',
                  'contabilita-interna': '3',
                  'sistemi-decisione': '4'
                }[section.id] || section.id
              }
            </span>
          )}
          <span className="text-xs font-mono text-content-muted uppercase tracking-widest flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            {readingTime} min read
          </span>
        </div>
        <h2
          className="text-4xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-content-primary via-content-secondary to-content-muted tracking-tight"
        >
          {section.title}
        </h2>
      </div>
      <div className="space-y-8">
        {section.subsections.map((subsection, index) => {
          const anchorId = `${section.id}-${index}`;
          return (
            <SubSectionDisplay
              key={anchorId}
              subsection={subsection}
              anchorId={anchorId}
              onImageClick={(src, alt) => setLightboxImage({ src, alt })}
            />
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(SectionDisplay);
