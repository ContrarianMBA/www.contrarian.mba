import { Category } from '@data/contrarianmba.json';
import { Container } from 'react-bootstrap';

type Props = {
    category: Category;
};

export function CategoryTitle({ category }: Props) {
    return (
        <section className="bg-contrarian-dark-green py-5 mb-5 shadow-lg">
            <Container>
                <h1 className="text-white">{category}</h1>
            </Container>
        </section>
    );
}
