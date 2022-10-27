import Logo from '@/components/UI/icons/Logo';

export default function Layout({ children }) {
    return (
        <>
            <header>
                <Logo />
            </header>
            <main>
                {children}
            </main>
        </>
    );
}