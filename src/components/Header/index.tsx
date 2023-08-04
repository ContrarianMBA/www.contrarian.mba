'use client';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { SITE_NAME } from '@/constants';
import { ThemeToggleButton } from './ThemeToggleButton';
import React from 'react';
import { ColorMode } from '@/types';

type Props = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

export function Header({ colorMode, toggleColorMode }: Props) {
    const [isFixed, setFixed] = React.useState(false);

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
        <header>
            <Navbar
                expand="lg"
                fixed={isFixed ? 'top' : undefined}
                className="main-navbar bg-body-tertiary"
            >
                <Container>
                    <Navbar.Brand href="/">{SITE_NAME}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Offcanvas id="main-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-flex align-items-center">
                                {SITE_NAME}
                                <ThemeToggleButton
                                    colorMode={colorMode}
                                    toggleColorMode={toggleColorMode}
                                    mobileNav
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                {/* <Nav.Link href="/">Another Link</Nav.Link> */}
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
        </header>
    );
}
