import React from 'react';

import classNames from 'classnames';

import { Book } from '@/types';

type Props = {
    book: Book;
};
export function BookCategoryView({ book }: Props) {
    const bestClass = book.bestInCategory ? ' best' : '';
    const [active, setActive] = React.useState(false);

    const booksClassName = classNames({
        book: true,
        best: book.bestInCategory,
        'mb-3': true,
    });

    const bookCoverClassName = classNames('book-cover', active && 'active');

    const prefaceClassName = classNames(
        'preface bg-body-tertiary',
        active && 'active'
    );

    const toogleBook = () => {
        setActive(!active);
    };

    return (
        <div onClick={toogleBook} className={booksClassName}>
            <div className={bookCoverClassName}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={book.amazonImageURL}
                    alt={book.title}
                    className="book-top"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/book-side.svg" className="book-side" alt="" />
            </div>
            <div className={prefaceClassName}>
                <h6>{book.title}</h6>
                <p>{book.summary}</p>
                <a
                    href={book.amazonProductURL}
                    className="btn btn-primary"
                    target="_blank"
                >
                    BUY
                </a>
            </div>
        </div>
    );
}
