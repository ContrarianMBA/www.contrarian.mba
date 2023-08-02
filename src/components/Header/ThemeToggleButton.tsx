import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styles from './ThemeToggleButton.module.scss'

type Props = {
  theme: 'light' | 'dark'
  themeToggle: () => void
  mobileNav?: boolean
}
function Component({ theme, themeToggle, mobileNav = false }: Props) {
  const icon = theme === 'light' ? faMoon : faSun
  const mobileNavClass = mobileNav ? styles['mobile-nav'] : ''
  return (
    <button
      type="button"
      onClick={themeToggle}
      className={`${styles.button} ${mobileNavClass}`}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export const ThemeToggleButton = React.memo(Component)
