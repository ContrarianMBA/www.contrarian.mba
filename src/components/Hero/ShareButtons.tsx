import classNames from 'classnames';
import { SITE_NAME, SITE_URL } from '@/constants';
import {
    SHARE_QUOTE,
    FACEBOOK_HANDLE,
    TWITTER_HANDLE,
} from '@/constants/social';

import {
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

export function ShareButtons() {
    const className = classNames('text-primary fs-5 ms-2');

    return (
        <div className="hero-share-buttons">
            <TwitterShareButton
                className={className}
                title={SHARE_QUOTE}
                related={[TWITTER_HANDLE]}
                url={SITE_URL}
                via={`${TWITTER_HANDLE}`}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
                className={className}
                title={SITE_NAME}
                summary={SHARE_QUOTE}
                source={SITE_NAME}
                url={SITE_URL}
            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton
                className={className}
                quote={SHARE_QUOTE}
                hashtag={`#${FACEBOOK_HANDLE}`}
                url={SITE_URL}
            >
                <FacebookIcon size={32} round></FacebookIcon>
            </FacebookShareButton>
            <FacebookShareCount url={SITE_URL} />
        </div>
    );
}
