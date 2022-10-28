import Logo from '@/components/UI/icons/Logo';

export default function Layout({ children }) {
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