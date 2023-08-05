import React from 'react';

import { Montserrat, Merriweather } from 'next/font/google';
import type { Metadata } from 'next';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/scss/style.scss';

import { DEFAULT_COLOR_MODE } from '@/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    icons: {
        icon: '/innovation.png',
        shortcut: '/innovation.png',
        apple: '/innovation.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/innovation.png',
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

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
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${merriweather.variable}`}
            data-bs-theme={DEFAULT_COLOR_MODE}
        >
            <body className="d-flex flex-column vh-100">
                <Header />
                <main className="flex-grow-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
