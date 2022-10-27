import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/app.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
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