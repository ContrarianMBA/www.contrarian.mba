'use client';
import React from 'react';

import { Montserrat, Merriweather } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/scss/style.scss';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useColorMode } from '@/hooks';

config.autoAddCss = false;

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    display: 'swap',
});
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-merriweather',
    display: 'swap',
});

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${merriweather.variable}`}
            data-bs-theme={colorMode}
        >
            <body className="d-flex flex-column vh-100">
                <Header
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />
                <main className="flex-grow-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
