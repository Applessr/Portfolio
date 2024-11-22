'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DarkTheme } from './DarkTheme';
import { useTheme } from 'next-themes';

const NavBar: React.FC = () => {
    const { theme } = useTheme();
    const [scrollStep, setScrollStep] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 600) {
                setScrollStep(2);
            } else if (scrollPosition > 300) {
                setScrollStep(1);
            } else {
                setScrollStep(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="pt-4 w-full h-56">
            <div
                className={`fixed pt-2 left-1/2 transform -translate-x-1/2 transition-all duration-700 z-50 ${
                    scrollStep === 0
                        ? 'top-1/2 text-8xl -translate-y-1/2'
                        : scrollStep === 1
                        ? 'top-[80px] text-6xl'
                        : 'top-[10px] text-2xl'
                }`}
            >
                <Link href="/" className="font-bold font-Bodoni">
                    APPLE
                </Link>
            </div>

            {/* NavBar */}
            <div
                className={`fixed top-0 left-0 w-full h-16 z-40 transition-all pt-2 duration-300 ${
                    theme === 'light' ? 'bg-white' : 'bg-[#09090b]'
                }`}
            >
                <div className="flex gap-10 space-x-4 text-lg px-4 h-[50px] items-center justify-end">
                    <DarkTheme />
                    <Link
                        href="/about"
                        className={`text-sm font-medium hover:scale-110 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/project"
                        className={`text-sm font-medium hover:scale-110 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}
                    >
                        PORTFOLIO
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-sm font-medium hover:scale-110 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
