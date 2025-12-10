import { MainSection } from '../types';

// In-memory cache to store loaded content
const contentCache: Record<string, MainSection[]> = {};

// Track in-flight promises to avoid duplicate requests
const loadingPromises: Record<string, Promise<MainSection[] | null>> = {};

// Map of slugs to dynamic import functions
const CONTENT_IMPORTERS: Record<string, () => Promise<{ default?: any, courseContent?: any, informaticaContent?: any, analisi1CourseContent?: any, geometriaCourseContent?: any }>> = {
    'economia': () => import('../data/courseContent'),
    'fondamenti-informatica': () => import('../data/courseContent-informatica'),
    'analisi-1': () => import('../data/courseContent-analisi1'),
    'geometria-algebra': () => import('../data/courseContent-geometria')
};

/**
 * 🚀 INSTANT: Synchronously check if content is cached
 * Use this to skip loading states entirely
 */
export const getCachedContent = (slug: string): MainSection[] | null => {
    return contentCache[slug] || null;
};

/**
 * 🚀 INSTANT: Check if content is ready (cached or loading)
 */
export const isContentReady = (slug: string): boolean => {
    return slug in contentCache;
};

/**
 * 🚀 INSTANT: Check if content is currently loading
 */
export const isContentLoading = (slug: string): boolean => {
    return slug in loadingPromises && !(slug in contentCache);
};

/**
 * Load content with caching and deduplication
 */
export const loadContent = async (slug: string): Promise<MainSection[] | null> => {
    // Return cached content immediately
    if (contentCache[slug]) return contentCache[slug];

    // Return existing promise if already loading (deduplication)
    if (loadingPromises[slug]) return loadingPromises[slug];

    const importer = CONTENT_IMPORTERS[slug];
    if (!importer) return null;

    // Create and cache the promise
    loadingPromises[slug] = (async () => {
        try {
            const module = await importer();

            // Handle different export names from different files
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
        } finally {
            // Clean up the loading promise after completion
            delete loadingPromises[slug];
        }
    })();

    return loadingPromises[slug];
};

/**
 * 🚀 PREFETCH: Start loading content in background
 * Call on hover for instant navigation
 */
export const prefetchContent = (slug: string) => {
    if (contentCache[slug] || loadingPromises[slug]) return; // Already loaded or loading
    loadContent(slug).catch(() => { });
};

/**
 * 🚀 PREFETCH ALL: Load all content immediately
 */
export const prefetchAllContent = () => {
    Object.keys(CONTENT_IMPORTERS).forEach(slug => {
        prefetchContent(slug);
    });
};

/**
 * 🚀 PRELOAD IMAGE: Start loading an image in background
 */
export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};

// Image preload cache
const imagePreloadCache = new Set<string>();

/**
 * 🚀 PREFETCH IMAGE: Start loading image if not already loaded
 */
export const prefetchImage = (src: string) => {
    if (!src || imagePreloadCache.has(src)) return;
    imagePreloadCache.add(src);
    preloadImage(src).catch(() => {
        imagePreloadCache.delete(src); // Allow retry on failure
    });
};

/**
 * 🚀 Check if image is preloaded
 */
export const isImagePreloaded = (src: string): boolean => {
    return imagePreloadCache.has(src);
};
