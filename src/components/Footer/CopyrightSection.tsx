import Link from 'next/link';

import { SITE_NAME } from '@/constants';

export function CopyrightSection() {
    const copyrightYear = new Date().getFullYear();

    return (
        <div className="text-center">
            Copyright &copy; {copyrightYear} {SITE_NAME}
            <br />
            <Link href="/credits">Credits</Link>
        </div>
    );
}
