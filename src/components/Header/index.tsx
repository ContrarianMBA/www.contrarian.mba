'use client';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { useColorMode } from '@/hooks';

import { CategoryNav } from './CategoryNav';
import { MobileNav } from './MobileNav';
import { PrimaryNav } from './PrimaryNav';

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
