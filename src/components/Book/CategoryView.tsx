import { Book } from '@data/contrarianmba.json';
import { Card } from 'react-bootstrap';

type Props = {
    book: Book;
};
export function BookCategoryView({ book }: Props) {
    const bestClass = book.bestInCategory ? ' best' : '';

    return (
        <div className={`book${bestClass}`}>
            <div className="book-cover">
                <img
                    src={book.amazonImageURL}
                    alt={book.title}
                    className="book-top"
                />
                <img src="/images/book-side.svg" className="book-side" alt="" />
            </div>
            <div className="preface bg-body-tertiary">
                <h6>{book.title}</h6>
                <p>{book.summary}</p>
                <a
                    href={book.amazonProductURL}
                    className="btn btn-primary stretched-link"
                    target="_blank"
                >
                    BUY
                </a>
            </div>
        </div>
    );
}
