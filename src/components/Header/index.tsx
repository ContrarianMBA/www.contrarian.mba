'use client'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { SITE_NAME } from '@/constants'
import { ThemeToggleButton } from './ThemeToggleButton'

type Props = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export function Header({ theme, toggleTheme }: Props) {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">{SITE_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Offcanvas id="main-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="d-flex align-items-center">
                {SITE_NAME}
                <ThemeToggleButton
                  theme={theme}
                  themeToggle={toggleTheme}
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
                <ThemeToggleButton theme={theme} themeToggle={toggleTheme} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}
