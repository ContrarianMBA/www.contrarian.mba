import { Book } from '@data/contrarianmba.json';
import styles from './book.module.scss';

type Props = {
    book: Book;
};
export function BookCategoryView({ book }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.mobile_layout}>
                <div className={styles.notification_header}>
                    {book.bestInCategory && (
                        <span className="badge bg-primary p-1">
                            Best in category
                        </span>
                    )}
                </div>
                <div className={styles.actions}>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-bookmark"></i>
                </div>
                <div className={styles.book_cover}>
                    <img
                        className={styles.book_top}
                        src={book.amazonImageURL}
                        alt="book-top"
                    />
                    <img
                        className={styles.book_side}
                        src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
                        alt="book-side"
                    />
                </div>
                <div className={styles.preface}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <div className={styles.title}>{book.title}</div>
                            <div className={styles.icon}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        {/* <div className={styles.author}>author name</div> */}
                        <div className={styles.body}>
                            {book.summary}
                            <hr />
                            <a
                                className="text-decoration-none"
                                href={book.amazonProductURL}
                            >
                                Get this book
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
