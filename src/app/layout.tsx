'use client';
import React from 'react';

import { Merriweather, Montserrat } from 'next/font/google';

import '@/scss/style.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

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
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${merriweather.variable}`}
            data-bs-theme={theme}
        >
            <body className="d-flex flex-column vh-100">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main className="flex-grow-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
