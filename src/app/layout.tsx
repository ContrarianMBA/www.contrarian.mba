'use client'
import React from 'react'
import { Montserrat, Merriweather } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Header } from '@/components/Header'
import '@/scss/style.scss'

config.autoAddCss = false

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable}`}
      data-bs-theme={theme}
    >
      <body className="d-flex flex-column">
        <Header theme={theme} toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  )
}
