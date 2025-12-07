import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial state based on class presence
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.remove('dark');
            setIsDark(false);
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            setIsDark(true);
            localStorage.setItem('theme', 'dark');
        }
    };

    // Optional: Sync with localStorage on mount to persist across reloads
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const html = document.documentElement;
        if (savedTheme === 'light') {
            html.classList.remove('dark');
            setIsDark(false);
        } else if (savedTheme === 'dark') {
            html.classList.add('dark');
            setIsDark(true);
        }
        // If no saved theme, we stick to default (which is dark in index.html)
    }, []);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-premium-gray border border-border-primary text-premium-gold hover:bg-premium-gold/10 transition-all duration-300"
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;
