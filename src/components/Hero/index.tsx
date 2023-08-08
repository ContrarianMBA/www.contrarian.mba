import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import { HERO_BLURB } from '@/constants';
import { HeroShareButtons } from '@/components/HeroShareButtons';

export function Hero() {
    return (
        <section className="hero py-5 mb-5">
            <Container className="my-5 py-5">
                <Row>
                    <Col lg={6} className="mx-auto">
                        <p
                            className="hero-text me-lg-5 pe-lg-5 mb-5 mb-lg-0"
                            dangerouslySetInnerHTML={{ __html: HERO_BLURB }}
                        ></p>

                        <HeroShareButtons />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
