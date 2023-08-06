import { SITE_NAME } from '@/constants';
import { ColorMode } from '@/types';
import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';
import { ThemeToggleButton } from './ThemeToggleButton';

type Props = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

export function PrimaryNav({ colorMode, toggleColorMode }: Props) {
    return (
        <div className="d-flex justify-content-between w-100">
            <Navbar.Brand as={Link} href="/">
                {SITE_NAME}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Nav className="d-none d-lg-flex align-items-center">
                <ThemeToggleButton
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />
            </Nav>
        </div>
    );
}
