'use client';

import React from 'react';
import Link from 'next/Link';

import { SITE_NAME } from '@/constants';

import { SocialLinks } from './SocialLinks';

function Component() {
    const copyrightYear = new Date().getFullYear();
    return (
        <footer className="d-flex justify-content-between mx-5 py-4 border-top">
            <div>
                Copyright &copy; {copyrightYear} {SITE_NAME}
                <br />
                <Link href="/credits">Credits</Link>
            </div>
            <SocialLinks />
        </footer>
    );
}

export const Footer = React.memo(Component);
