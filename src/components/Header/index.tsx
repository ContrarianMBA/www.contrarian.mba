'use client'
import { NAVIGATION_LINKS, SITE_NAME } from '@/constants'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { ThemeToggleButton } from './ThemeToggleButton'

type Props = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export function Header({ theme, toggleTheme }: Props) {
  const [isFixed, setFixed] = React.useState(false)

  const handleScroll = () => {
    setFixed((state) => {
      if (!state && window.scrollY > 350) {
        return true
      } else if (state && window.scrollY <= 350) {
        return false
      } else {
        return state
      }
    })
  }

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header>
      <Navbar
        expand="lg"
        fixed={isFixed ? 'top' : undefined}
        className="main-navbar bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand className="fs-1 fw-bold mb-2" href="/">
            {SITE_NAME}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Offcanvas id="main-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="d-flex align-items-center ">
                {SITE_NAME}
                <ThemeToggleButton
                  theme={theme}
                  themeToggle={toggleTheme}
                  mobileNav
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {NAVIGATION_LINKS.map((nav_link) => (
                  <Nav.Link
                    className="mx-4"
                    href={nav_link.link}
                    key={nav_link.name}
                  >
                    {nav_link.name}
                  </Nav.Link>
                ))}
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
