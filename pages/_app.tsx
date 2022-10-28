import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/app.scss';
import Head from 'next/head';
import { wrapper } from 'store/store';
import { Provider } from 'react-redux';

function App({ Component, ...rest }: AppProps) {

    const { store, props } = wrapper.useWrappedStore(rest);

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