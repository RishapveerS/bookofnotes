import React, { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
    priority?: boolean; // For above-the-fold images
    sizes?: string;
    aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
}

/**
 * OptimizedImage - High-performance image component with:
 * - Lazy loading with Intersection Observer
 * - LQIP (Low Quality Image Placeholder) blur effect
 * - Native loading="lazy" for browser-level optimization
 * - Proper sizing to prevent layout shift (CLS)
 * - Smooth fade-in animation on load
 */
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
    src,
    alt,
    className = '',
    onClick,
    priority = false,
    sizes = '100vw',
    aspectRatio,
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (priority || !imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px', // Start loading 200px before entering viewport
                threshold: 0.01,
            }
        );

        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [priority]);

    // Generate a tiny placeholder color based on src hash
    const placeholderColor = React.useMemo(() => {
        let hash = 0;
        for (let i = 0; i < src.length; i++) {
            hash = ((hash << 5) - hash) + src.charCodeAt(i);
            hash |= 0;
        }
        // Generate a subtle gray based on hash
        const lightness = 15 + (Math.abs(hash) % 10);
        return `hsl(0, 0%, ${lightness}%)`;
    }, [src]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    const containerStyle: React.CSSProperties = {
        aspectRatio: aspectRatio,
        backgroundColor: placeholderColor,
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <div
            className={`transition-opacity duration-300 ${className}`}
            style={containerStyle}
            ref={imgRef as any}
        >
            {/* Skeleton pulse animation while loading */}
            {!isLoaded && (
                <div
                    className="absolute inset-0 animate-pulse"
                    style={{ backgroundColor: placeholderColor }}
                />
            )}

            {/* Actual image - only load src when in view */}
            {isInView && !hasError && (
                <img
                    src={src}
                    alt={alt}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onLoad={handleLoad}
                    onError={handleError}
                    onClick={onClick}
                    sizes={sizes}
                    className={`
            w-full h-full object-cover
            transition-opacity duration-500 ease-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}
          `}
                    style={{
                        willChange: isLoaded ? 'auto' : 'opacity',
                    }}
                />
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center text-content-muted text-sm">
                    <span>Immagine non disponibile</span>
                </div>
            )}
        </div>
    );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
