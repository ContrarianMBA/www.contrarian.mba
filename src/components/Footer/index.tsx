import React from 'react';

import { SITE_NAME } from '@/constants';

function Component() {
    const copyrightYear = new Date().getFullYear();
    return (
        <footer className="text-center py-4">
            Copyright &copy; {copyrightYear} {SITE_NAME}
        </footer>
    );
}

export const Footer = React.memo(Component);
