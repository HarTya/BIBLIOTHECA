import styles from '@/styles/Header.module.scss';
import Logo from '@/components/UI/icons/Logo';
import NavLink from './UI/NavLink';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.header_links}>
                <NavLink exact className={styles.header_links_link} href={'/'}>Головна</NavLink>
                <NavLink exact className={styles.header_links_link} href={'/news'}>Новини</NavLink>
            </nav>
        </header>
    );
}