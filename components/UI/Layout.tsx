import Header from '@/components/UI/Header';

function Layout({ children }) {
    return (
        <div id='wrapper'>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;