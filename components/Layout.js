
import Footer from './Footer';
import Head from 'next/head';


const Layout = ({ children }) => {
    return (
        <>
                <Head>
                    <title>Coming Soon</title>
                    <meta name="description" content="We'll be here soon" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavBar />
                    <main>{children}</main>
                <Footer />
            
        </>
    );
};

export default Layout;