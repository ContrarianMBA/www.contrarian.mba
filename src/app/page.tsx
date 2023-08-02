'use client'
import { HomepageCarousel } from '@/components/Home/carousel'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <main>
      <Container>
        <HomepageCarousel />
      </Container>
    </main>
  )
}
