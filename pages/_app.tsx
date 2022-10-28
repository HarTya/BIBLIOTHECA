import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/app.scss';
import Head from 'next/head';
import { wrapper } from 'store/store';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>BIBLIOTHECA Café</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default wrapper.withRedux(App);