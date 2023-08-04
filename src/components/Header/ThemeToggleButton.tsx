import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ColorMode } from '@/types';
import styles from './ThemeToggleButton.module.scss';

type Props = {
    colorMode: ColorMode;
    toggleColorMode: () => void;
    mobileNav?: boolean;
};
function Component({ colorMode, toggleColorMode, mobileNav = false }: Props) {
    const icon = colorMode === 'light' ? faMoon : faSun;
    const mobileNavClass = mobileNav ? styles['mobile-nav'] : '';
    return (
        <button
            type="button"
            onClick={toggleColorMode}
            className={`${styles.button} ${mobileNavClass}`}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export const ThemeToggleButton = React.memo(Component);
