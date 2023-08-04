import React from 'react';

import { SITE_NAME } from '@/constants';

function Component() {
    const copyrightYear = new Date().getFullYear();
    return (
        <footer className="text-center py-4">
            Copyright &copy; {copyrightYear} {SITE_NAME}<br/>
            <a href="https://www.flaticon.com/free-icons/business-and-finance" title="business and finance icons">Favicon by Canticons - Flaticon</a>
        </footer>
    );
}

export const Footer = React.memo(Component);
