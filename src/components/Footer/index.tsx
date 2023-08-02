import React from 'react'

function Component() {
  const copyrightYear = new Date().getFullYear()
  return (
    <footer className="text-center py-4">
      Copyright &copy; {copyrightYear} Contrarian.mba
    </footer>
  )
}

export const Footer = React.memo(Component)
