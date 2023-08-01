import type { Metadata } from 'next'
import '@/app/scss/style.scss'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contrarian.mba',
  description: '',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
