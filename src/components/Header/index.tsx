'use client';
import React from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import data from '@data/contrarianmba.json';
import { SITE_NAME } from '@/constants';
import { buildCategoryUrl } from '@/utils';
import { ThemeToggleButton } from './ThemeToggleButton';
import { useColorMode } from '@/hooks';

export function Header() {
    const [isFixed, setFixed] = React.useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    const handleScroll = () => {
        setFixed((state) => {
            if (!state && window.scrollY > 350) {
                return true;
            } else if (state && window.scrollY <= 350) {
                return false;
            } else {
                return state;
            }
        });
    };

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`main-navbar ${isFixed ? 'fixed-top' : ''}`}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} href="/">
                        {SITE_NAME}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Offcanvas id="main-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-flex align-items-center">
                                Categories
                                <ThemeToggleButton
                                    colorMode={colorMode}
                                    toggleColorMode={toggleColorMode}
                                    mobileNav
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end d-none d-lg-flex flex-grow-1 pe-3">
                                <Nav.Link as={Link} href="/">
                                    Home
                                </Nav.Link>
                                {/* <Nav.Link href="/">Another Link</Nav.Link> */}
                            </Nav>
                            <Nav className="d-block d-md-none">
                                {data.categories.map((category) => (
                                    <Nav.Link
                                        key={category}
                                        as={Link}
                                        href={buildCategoryUrl(category)}
                                    >
                                        {category}
                                    </Nav.Link>
                                ))}
                            </Nav>
                            <Nav className="d-none d-md-flex align-items-center">
                                <ThemeToggleButton
                                    colorMode={colorMode}
                                    toggleColorMode={toggleColorMode}
                                />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Nav className="category-nav d-flex align-items-center justify-content-center">
                {data.categories.map((category) => (
                    <Nav.Link
                        key={category}
                        as={Link}
                        href={buildCategoryUrl(category)}
                        className="link-body-emphasis text-sm"
                    >
                        {category}
                    </Nav.Link>
                ))}
            </Nav>
        </header>
    );
}
