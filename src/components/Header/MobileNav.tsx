import { ColorMode } from '@/types';
import { Navbar, Offcanvas } from 'react-bootstrap';
import { CategoryNav } from './CategoryNav';
import { ThemeToggleButton } from './ThemeToggleButton';

type Props = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
};

export function MobileNav({ colorMode, toggleColorMode }: Props) {
    return (
        <Navbar.Offcanvas id="main-navbar-nav" placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="d-flex flex-column">
                    <ThemeToggleButton
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                        mobileNav
                    />
                    <span className="d-lg-none fs-4 fw-bold mt-4">Books</span>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                <CategoryNav
                    navClassName="d-block d-lg-none"
                    linkClassName=""
                />
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    );
}
