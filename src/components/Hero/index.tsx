import { Col, Container, Row } from 'react-bootstrap';
import { SITE_NAME } from '@/constants';

export function Hero() {
    return (
        <section className="hero py-5 mb-5">
            <Container className="my-5 py-5">
                <Row>
                    <Col lg={6}>
                        <p className="hero-text text-sm me-lg-5 pe-lg-5 mb-5 mb-lg-0">
                            An MBA is predominately a networking or career
                            change exercise. The curriculum is weak and
                            outdated, which follows from most of academia
                            (except cutting-edge criticism). The following
                            contrarian MBA curriculum introduces business
                            principles, the economy, finance, political
                            ramifications, and more through books by or about
                            practitioners.
                        </p>
                    </Col>
                    <Col
                        lg={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <h1 className="hero-brand display-4 text-center">
                            {SITE_NAME}
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
