import { Col, Container, Row } from 'react-bootstrap';
import { SITE_NAME } from '@/constants';

export function Hero() {
    return (
        <section className="hero py-5 mb-5">
            <Container className="my-5 py-5">
                <Row>
                    <Col lg={6} className="mx-auto">
                        <p className="hero-text me-lg-5 pe-lg-5 mb-5 mb-lg-0">
                            An MBA is predominately a networking or career
                            change exercise. Across the board, the curriculum is
                            weak and outdated, which follows from most of
                            academia (except cutting-edge criticism). The
                            following{' '}
                            <span className="fw-bold h4">{SITE_NAME}</span>{' '}
                            curriculum introduces business principles, the
                            economy, finance, political ramifications, and more
                            through books by or about practitioners.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
