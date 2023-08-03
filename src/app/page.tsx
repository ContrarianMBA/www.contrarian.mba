'use client'
import { Container } from 'react-bootstrap'

import data from '@data/contrarianmba.json'

export default function Home() {
  const bookIds = Object.keys(data.lookups.book_id)

  return (
    <Container>
      <ul>
        {data.categories.map((c) => (
          <li>
            {c}
            <ul>
              {bookIds.map((bookId) => (
                <li>
                  <Book bookId={bookId} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
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

function Book({ bookId }) {
  const book = data.lookups.book_id[bookId]
  return (
    <>
      <a href={book.amazonProductURL}>
        <img src={book.amazonImageURL} />
        <br />
        {book.title}
      </a>
      <br />
      {book.summary}
    </>
  )
}
