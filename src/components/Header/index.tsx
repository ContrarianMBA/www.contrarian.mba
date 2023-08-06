'use client';
import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { SITE_NAME } from '@/constants';
import { useColorMode } from '@/hooks';

import { ColorMode } from '@/types';
import { CategoryNav } from './CategoryNav';
import { ThemeToggleButton } from './ThemeToggleButton';

type Props = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

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
                    <PrimaryNav
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                    />
                    <MobileNav
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                    />
                </Container>
            </Navbar>
            <CategoryNav
                navClassName="category-nav d-none d-lg-flex align-items-center justify-content-center"
                linkClassName="link-body-emphasis text-sm"
            />
        </header>
    );
}

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

export function MobileNav({ colorMode, toggleColorMode }: Props) {
    return (
        <Navbar.Offcanvas id="main-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="d-flex align-items-start">
                    <ThemeToggleButton
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                        mobileNav
                    />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <span className="d-lg-none d-lg-none d-xl-none fs-4 fw-bold">
                    Books
                    <hr />
                </span>
                <CategoryNav
                    navClassName="d-block d-lg-none"
                    linkClassName=""
                />
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    );
}
