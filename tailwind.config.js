/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                premium: {
                    black: 'var(--premium-black)',
                    dark: 'var(--premium-dark)',
                    gray: 'var(--premium-gray)',
                    gold: 'var(--premium-gold)',
                    glass: 'var(--bg-glass)',
                    accent: '#3b82f6',
                },
                content: {
                    primary: 'var(--content-primary)',
                    secondary: 'var(--content-secondary)',
                    muted: 'var(--content-muted)',
                },
                border: {
                    primary: 'var(--border-primary)',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
