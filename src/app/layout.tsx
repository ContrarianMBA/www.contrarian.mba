import React from 'react'
import { Header } from '@/app/components/Header'
import '@/app/scss/style.scss'
import type { Metadata } from 'next'
import { Merriweather, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  // weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Contrarian.mba',
  description: '',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable}`}
    >
      <body className="d-flex flex-column">
        <Header />
        {children}
      </body>
    </html>
  )
}
