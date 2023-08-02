'use client'
import { MENU, SITE_NAME } from '@/app/constants'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'

export function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h1>{SITE_NAME}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Offcanvas id="main-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{SITE_NAME}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {MENU.map(function (menu) {
                  return (
                    <Nav.Link className="mx-5" href="/">
                      {menu.name}
                    </Nav.Link>
                  )
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}
