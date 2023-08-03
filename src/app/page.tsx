'use client'
import { Col, Container, Row } from 'react-bootstrap'

import { buildCategoryUrl } from '@/utils'
import data from '@data/contrarianmba.json'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Row>
        {data.categories.map((category) => (
          <Col key={category}>
            <Link href={buildCategoryUrl(category)}>{category}</Link>
          </Col>
        ))}
      </Row>
      <h1>Hello, World!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        minima ea atque quas sunt laudantium, nihil suscipit reprehenderit non
        doloremque dolorem totam hic sapiente rem culpa aut autem quibusdam.
        Atque!
      </p>
      <div style={{ height: '2000px' }}></div>
    </Container>
  )
}
