import { SITE_NAME, FOOTER_LINK_PATHS } from '@/constants';
import { FooterLinks } from './FooterLinks';

export function CopyrightSection() {
    const copyrightYear = new Date().getFullYear();

    return (
        <div className="text-center">
            Copyright &copy; {copyrightYear} {SITE_NAME}
            <br />
            <FooterLinks />
        </div>
    );
}
