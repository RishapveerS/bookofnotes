import { MainSection } from '../types';

// In-memory cache to store loaded content
const contentCache: Record<string, MainSection[]> = {};

// Map of slugs to dynamic import functions
const CONTENT_IMPORTERS: Record<string, () => Promise<{ default?: any, courseContent?: any, informaticaContent?: any, analisi1CourseContent?: any, geometriaCourseContent?: any }>> = {
    'economia': () => import('../data/courseContent'),
    'fondamenti-informatica': () => import('../data/courseContent-informatica'),
    'analisi-1': () => import('../data/courseContent-analisi1'),
    'geometria-algebra': () => import('../data/courseContent-geometria')
};

export const loadContent = async (slug: string): Promise<MainSection[] | null> => {
    // Return cached content if available
    if (contentCache[slug]) return contentCache[slug];

    const importer = CONTENT_IMPORTERS[slug];
    if (!importer) return null;

    try {
        const module = await importer();

        // Handle different export names from different files
        // We prioritize explicit names over default
        const content = module.courseContent ||
            module.informaticaContent ||
            module.analisi1CourseContent ||
            module.geometriaCourseContent ||
            module.default;

        const result = content as MainSection[] || null;
        if (result) {
            contentCache[slug] = result;
        }
        return result;
    } catch (error) {
        console.error(`Failed to load content for ${slug}:`, error);
        return null;
    }
};

export const prefetchContent = (slug: string) => {
    if (contentCache[slug]) return; // Already loaded

    const importer = CONTENT_IMPORTERS[slug];
    if (importer) {
        // Just trigger the import to prime the cache
        // We call loadContent to ensure it gets cached in our memory cache too
        loadContent(slug).catch(() => { });
    }
};

export const prefetchAllContent = () => {
    Object.keys(CONTENT_IMPORTERS).forEach(slug => {
        prefetchContent(slug);
    });
};
