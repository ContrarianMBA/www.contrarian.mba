'use client';
import { Container } from 'react-bootstrap';

type Props = {
    title: string;
};

export function PageTitle({ title }: Props) {
    return (
        <section className="bg-contrarian-dark-green py-5 mb-5 shadow-lg">
            <Container>
                <h1 className="text-white">{title}</h1>
            </Container>
        </section>
    );
}
