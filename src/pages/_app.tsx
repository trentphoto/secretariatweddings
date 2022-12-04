import { AppProps } from 'next/app';
import Script from 'next/script';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src='https://umami-production-2417.up.railway.app/umami.js'
            data-website-id='04d5b531-82ba-4019-b6fb-74424aec66d0'
            data-domains='secretariat.video'
            strategy='lazyOnload'
          />
        )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
