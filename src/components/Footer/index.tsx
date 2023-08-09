'use client';

import React from 'react';

import { CopyrightSection } from './CopyrightSection';
import { SocialLinks } from './SocialLinks';

function Component() {
    return (
        <footer className="d-flex justify-content-between mx-5 py-4 border-top">
            <div>
                {/* empty element to push copyright to center due to justify-content-between */}
            </div>
            <CopyrightSection />
            <SocialLinks />
        </footer>
    );
}

export const Footer = React.memo(Component);
