import Link from 'next/link';

import { FOOTER_LINK_PATHS } from '@/constants';
import { titleCase } from '@/utils';

export function FooterLinks() {
    return (
        <>
            {FOOTER_LINK_PATHS.map((path, i) => {
                const sep = i > 0 ? <> &middot; </> : '';
                return (
                    <>
                        {sep}
                        <Link href={`/${path}`}>{titleCase(path)}</Link>
                    </>
                );
            })}
        </>
    );
}
