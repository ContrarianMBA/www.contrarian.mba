'use client';

import React from 'react';

import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from '@/constants/social';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;
library.add(fas, fab);

import { SITE_NAME } from '@/constants';

function Component() {
    const copyrightYear = new Date().getFullYear();
    return (
        <footer className="d-flex justify-content-between mx-5 py-4 border-top">
            <a
                className="text-decoration-none"
                href="https://www.flaticon.com/free-icons/business-and-finance"
                title="business and finance icons"
            >
                {/* TODO: Credits lists with its own page */}
                {/* Credits */}
            </a>
            <p>
                Copyright &copy; {copyrightYear} {SITE_NAME}
            </p>
            <div className="d-flex align-items-center">
                <a
                    className="text-primary ms-3 fs-5"
                    href={FACEBOOK_URL}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a
                    className="text-primary ms-3 fs-5"
                    href={TWITTER_URL}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
                <a
                    className="text-primary ms-3 fs-5"
                    href={INSTAGRAM_URL}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            </div>
        </footer>
    );
}

export const Footer = React.memo(Component);
