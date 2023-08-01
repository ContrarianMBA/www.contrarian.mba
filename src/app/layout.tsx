import React from 'react'
import type { Metadata } from 'next'
import { Montserrat, Merriweather } from 'next/font/google'
import '@/app/scss/style.scss'

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
      <body>{children}</body>
    </html>
  )
}
