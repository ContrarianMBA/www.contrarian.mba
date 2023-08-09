import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from '@/constants/social';
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export function SocialLinks() {
    return (
        <div className="d-flex align-items-start">
            <a
                className="text-body ms-3 fs-5"
                href={FACEBOOK_URL}
                target="_blank"
            >
                <FontAwesomeIcon icon={faFacebook as IconProp} />
            </a>
            <a
                className="text-body ms-3 fs-5"
                href={TWITTER_URL}
                target="_blank"
            >
                <FontAwesomeIcon icon={faTwitter as IconProp} />
            </a>
            <a
                className="text-primary ms-3 fs-5"
                href={INSTAGRAM_URL}
                target="_blank"
            >
                <FontAwesomeIcon icon={faInstagram as IconProp} />
            </a>
        </div>
    );
}
