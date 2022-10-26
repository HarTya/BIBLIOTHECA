import styles from '@/styles/Header.module.scss';
import Logo from '@/components/UI/icons/Logo';
import ActiveLink from './UI/ActiveLink';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.header_links}>
                <ActiveLink exact className={styles.header_links_link} href={'/'}>Головна</ActiveLink>
                <ActiveLink exact className={styles.header_links_link} href={'/discounts'}>Знижки</ActiveLink>
            </div>
        </header>
    );
}