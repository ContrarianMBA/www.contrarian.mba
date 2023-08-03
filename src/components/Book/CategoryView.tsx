import { Book } from '@data/contrarianmba.json';
import { Button, Card } from 'react-bootstrap';

type Props = {
    book: Book;
};
export function BookCategoryView({ book }: Props) {
    return (
        <Card>
            <Card.Img src={book.amazonImageURL} />
            <Card.Body>
                <Card.Title>
                    {book.title}{' '}
                    {book.bestInCategory && (
                        <span className="badge bg-primary">Best</span>
                    )}
                </Card.Title>
                <Card.Text>{book.summary}</Card.Text>
                <a href={book.amazonProductURL} className="btn btn-success">
                    Buy
                </a>
            </Card.Body>
        </Card>
    );
}
