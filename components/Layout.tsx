import Logo from '@/components/UI/icons/Logo';

function Layout({ children }) {
    return (
        <div id='wrapper'>
            <header>
                <Logo />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;