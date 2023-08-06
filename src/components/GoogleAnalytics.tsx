import GOOGLE_MEASUREMENT_ID from '@/constants';

import Script from 'next/script';

export function GoogleAnalytics() {
    const src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_MEASUREMENT_ID}`;
    return (
        <>
            <Script strategy="afterInteractive" src={src} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${GOOGLE_MEASUREMENT_ID}, {
page_path: window.location.pathname,
});
`,
                }}
            />
        </>
    );
}
