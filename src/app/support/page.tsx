'use client';

import { Col, Container, Row } from 'react-bootstrap';

import { PageTitle } from '@/components/PageTitle';
import { CONTACT_EMAIL_USERNAME, SITE_DOMAIN } from '@/constants';

export default function Support() {
    return (
        <>
            <PageTitle title="Support This Site" />
            <Container>
                <ul>
                    <li>
                        As an Amazon Associate, this site earns from qualifying
                        purchases made through the Buy links.
                    </li>
                    <li>
                        For additional inquires, email {CONTACT_EMAIL_USERNAME}
                        [at]{SITE_DOMAIN}
                    </li>
                </ul>
            </Container>
        </>
    );
}
