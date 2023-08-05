import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { Book } from '@/types';

type Props = {
    book: Book;
};
export function BookCategoryView({ book }: Props) {
    const bestClass = book.bestInCategory ? ' best' : '';

    const className = classNames({
        book: true,
        best: book.bestInCategory,
        'mb-3': true,
    });

    return (
        <div className={className}>
            <div className="book-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={book.amazonImageURL}
                    alt={book.title}
                    className="book-top"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
