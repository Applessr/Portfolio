'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DarkTheme } from './DarkTheme';

const NormalNav = () => {


    return (
        <div className='pt-4'>
            <div className='fixed left-1/2 transform -translate-x-1/2 transition-all duration-700 z-50'>
                <Link href='/' className="font-bold font-Bodoni text-2xl">APPLE</Link>
            </div>

            <div className="fixed top-0 left-0 w-full z-40">
                <div className="flex  gap-10 space-x-4 text-lg px-4 h-[50px] items-center justify-end">
                    <DarkTheme/>
                    <Link href="/about" className="text-sm font-medium hover:scale-110">
                        ABOUT
                    </Link>
                    <Link href="/project" className="text-sm font-medium hover:scale-110">
                        PORTFOLIO
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:scale-110">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NormalNav;
