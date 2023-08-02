'use client'
import { Container } from 'react-bootstrap'
import { HomepageCarousel } from './components/Home/carousel'

export default function Home() {
  return (
    <main>
      <Container>
        <HomepageCarousel />
      </Container>
    </main>
  )
}
