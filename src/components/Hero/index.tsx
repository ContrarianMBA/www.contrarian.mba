import { SHARE_QUOTE, SITE_NAME, SITE_URL } from '@/constants';
import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

export function Hero() {
    const className = classNames('text-primary fs-5 ms-2');

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
                        <div className="hero-share-buttons">
                            <TwitterShareButton
                                className={className}
                                title={SHARE_QUOTE}
                                url={SITE_URL}
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <FacebookShareButton
                                className={className}
                                title={SHARE_QUOTE}
                                url={SITE_URL}
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                className={className}
                                title={SHARE_QUOTE}
                                url={SITE_URL}
                            >
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
