'use client';
import { SITE_NAME } from '@/constants';
import { buildCategoryUrl } from '@/utils';
import data from '@data/contrarianmba.json';
import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { ThemeToggleButton } from './ThemeToggleButton';

type Props = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export function Header({ theme, toggleTheme }: Props) {
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
            <>
                <div className="d-flex justify-content-center align-items-center w-100 mb-2 mt-4">
                    <a
                        className="text-decoration-none fw-bolder link-body-emphasis"
                        href="/"
                    >
                        <h1>{SITE_NAME}</h1>
                    </a>
                </div>
                <div className="position-absolute top-0 end-0">
                    <ThemeToggleButton
                        theme={theme}
                        themeToggle={toggleTheme}
                        mobileNav
                    />
                </div>
            </>
            <Navbar
                expand="lg"
                fixed={isFixed ? 'top' : undefined}
                className="main-navbar bg-body-tertiary mb-4"
            >
                <Container>
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Offcanvas id="main-navbar-nav" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-flex align-items-center">
                                Categories
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1">
                                {data.categories.map((category) => (
                                    <Link
                                        href={buildCategoryUrl(category)}
                                        className="link-body-emphasis text-decoration-none ms-2 border-start px-2 d-flex justify-content-center align-items-center"
                                    >
                                        <small>{category}</small>
                                    </Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <hr className="border border-1" />
        </header>
    );
}
