import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <link rel="icon" href="/favicon.png" />
            <title>Coming Soon</title>
            <meta name="description" content="We'll be here soon" />
          </Head>
          <Component {...pageProps} />
        </>
      );
}

export default MyApp