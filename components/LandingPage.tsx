import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white relative overflow-hidden">

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6">

                {/* Signature Title */}
                <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl text-white/90 mb-8 tracking-wide select-none">
                    College Notes
                </h1>

                {/* Tagline */}
                <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed mb-12">
                    A curated collection of university notes.
                </p>

                {/* Enter Button */}
                <button
                    onClick={() => navigate('/subjects')}
                    className="group relative"
                >
                    <span className="text-white/70 text-sm tracking-widest uppercase underline underline-offset-4 decoration-white/30 group-hover:text-white group-hover:decoration-white transition-all duration-300">
                        Enter
                    </span>
                </button>
            </div>

            {/* Theme Toggle (Bottom Right) */}
            <div className="absolute bottom-6 right-6 opacity-30 hover:opacity-100 transition-opacity">
                <button
                    onClick={() => document.documentElement.classList.toggle('dark')}
                    className="text-white/50 hover:text-white text-xs uppercase tracking-widest"
                >
                    ◐
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
