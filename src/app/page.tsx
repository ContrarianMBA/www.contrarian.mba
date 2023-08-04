'use client';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import data from '@data/contrarianmba.json';
import { buildCategoryUrl } from '@/utils';
import { Hero } from '@/components/Hero';

export default function Home() {
    return (
        <>
            <Navbar expand="lg" className="main-navbar">
                <Container className="d-flex d-flex-end">
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Offcanvas id="main-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-flex align-items-center">
                                Categories
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {data.categories.map((category) => (
                                    <Nav.Link
                                        className="category-labels link-body-emphasis"
                                        key={category}
                                        href={buildCategoryUrl(category)}
                                    >
                                        {category}
                                    </Nav.Link>
                                ))}
                            </Nav>
                            <Nav className="d-none d-md-flex align-items-center"></Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Hero />
        </>
    );
}
