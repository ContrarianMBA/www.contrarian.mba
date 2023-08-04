'use client';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { buildCategoryUrl } from '@/utils';
import data from '@data/contrarianmba.json';
import Link from 'next/link';

export default function Home() {
    return (
        <Container>
            <Navbar expand="lg" className="main-navbar mobile-navbar">
                <Container>
                    <Navbar.Toggle aria-controls="main-navbar-nav" />
                    <Navbar.Offcanvas id="main-navbar-nav" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-flex align-items-center"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {data.categories.map((category) => (
                                    <Link
                                        className="category-labels"
                                        key={category}
                                        href={buildCategoryUrl(category)}
                                    >
                                        <Nav.Link href="/">{category}</Nav.Link>
                                    </Link>
                                ))}
                            </Nav>
                            <Nav className="d-none d-md-flex align-items-center"></Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    );
}
