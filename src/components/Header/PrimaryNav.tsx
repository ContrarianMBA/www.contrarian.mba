import Link from 'next/link';

import { Nav, Navbar } from 'react-bootstrap';

import { SITE_NAME } from '@/constants';
import { useColorMode } from '@/hooks';
import { CategoryNav } from './CategoryNav';
import { ThemeToggleButton } from './ThemeToggleButton';

export function PrimaryNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
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
            <CategoryNav
                navClassName="category-nav d-none d-lg-flex align-items-center justify-content-center flex-wrap"
                linkClassName="link-body-emphasis text-sm"
            />
        </>
    );
}
