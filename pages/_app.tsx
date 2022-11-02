import type { AppProps } from 'next/app';
import Layout from '@/components/UI/Layout';
import '@/styles/app.scss';
import Head from 'next/head';
import { wrapper } from 'store/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

function App({ Component, ...rest }: AppProps) {

    const { store, props } = wrapper.useWrappedStore(rest);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            document.body.className = 'scroll';
        }, 2000);

        return () => clearTimeout(Debounce)
    }, [])

    return (
        <Provider store={store}>
            <Head>
                <title>BIBLIOTHECA Café</title>
            </Head>
            <Layout>
                <Component {...props.pageProps} />
            </Layout>
        </Provider>
    );
}

export default App;