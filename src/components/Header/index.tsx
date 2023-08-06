'use client';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import { MobileNav } from './MobileNav';
import { PrimaryNav } from './PrimaryNav';

export function Header() {
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
        <header className={`main-navbar ${isFixed ? 'fixed-top' : ''}`}>
            <Navbar expand="lg">
                <Container className="d-flex flex-column">
                    <PrimaryNav />
                    <MobileNav />
                </Container>
            </Navbar>
        </header>
    );
}
